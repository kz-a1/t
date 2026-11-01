/*
 * QABAT / sculpture 02
 * Actual WebGL geometry, studio reflections and depth-tested interaction.
 * No network, models, textures or third-party runtime are required.
 */
(() => {
  'use strict';

  const vertexSource = `
    precision highp float;
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    attribute vec2 aUv;
    attribute float aMaterial;
    uniform mat4 uModel;
    uniform mat4 uProjection;
    uniform vec3 uCamera;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying float vMaterial;
    void main() {
      vec4 world = uModel * vec4(aPosition, 1.0);
      vPosition = world.xyz;
      vNormal = mat3(uModel) * aNormal;
      vUv = aUv;
      vMaterial = aMaterial;
      gl_Position = uProjection * vec4(world.xyz - uCamera, 1.0);
    }
  `;

  const fragmentSource = `
    precision highp float;
    uniform vec3 uCamera;
    uniform float uLightMode;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying float vMaterial;

    // Analytic photographic softboxes reflected by the actual surface normal.
    vec3 studio(vec3 r) {
      vec3 dark = vec3(0.003, 0.004, 0.005);
      vec3 pale = vec3(0.065, 0.075, 0.085);
      vec3 env = mix(dark, pale, smoothstep(-0.55, 0.9, r.y));
      float top = pow(max(dot(r, normalize(vec3(-0.5, 1.4, 0.4))), 0.0), 22.0);
      float key = pow(max(dot(r, normalize(vec3(-1.4, 0.5, 1.1))), 0.0), 13.0);
      float rim = pow(max(dot(r, normalize(vec3(1.3, 0.7, -0.8))), 0.0), 26.0);
      float longbox = smoothstep(-0.065, -0.025, r.x) * (1.0 - smoothstep(0.18, 0.23, r.x));
      longbox *= smoothstep(-0.6, -0.28, r.y);
      float ceiling = smoothstep(0.32, 0.40, r.y) * (1.0 - smoothstep(0.62, 0.70, r.y));
      float floorStripe = smoothstep(-0.51, -0.47, r.y) * (1.0 - smoothstep(-0.27, -0.22, r.y));
      env += vec3(3.4, 3.6, 3.2) * top;
      env += vec3(2.8, 3.0, 2.7) * key;
      env += vec3(1.7, 2.1, 1.5) * rim;
      env += vec3(1.35, 1.45, 1.55) * longbox;
      env += vec3(0.75, 0.80, 0.87) * ceiling;
      env *= 1.0 - floorStripe * 0.97;
      float greenPanel = pow(max(dot(r, normalize(vec3(-0.8, -0.3, -0.7))), 0.0), 18.0);
      env += vec3(0.08, 0.14, 0.025) * greenPanel;
      return env;
    }

    vec3 toneMap(vec3 value) {
      value = (value * (2.51 * value + 0.03)) / (value * (2.43 * value + 0.59) + 0.14);
      return pow(clamp(value, 0.0, 1.0), vec3(0.454545));
    }

    void main() {
      vec3 n = normalize(vNormal);
      vec3 view = normalize(uCamera - vPosition);
      vec3 reflection = reflect(-view, n);
      vec3 reflected = studio(reflection);
      float facing = max(dot(view, n), 0.0);
      float fresnel = pow(1.0 - facing, 3.0);
      vec3 light = normalize(vec3(-0.6, 1.1, 1.5));
      float diffuse = max(dot(n, light), 0.0);
      vec3 halfLight = normalize(light + view);
      float gloss = pow(max(dot(n, halfLight), 0.0), 80.0);

      vec3 chrome = reflected * vec3(0.97, 0.985, 1.0);
      chrome += vec3(0.002, 0.003, 0.004) + fresnel * vec3(0.025, 0.035, 0.045);
      chrome += gloss * vec3(1.0, 1.04, 1.1);
      vec3 lime = vec3(0.52, 0.94, 0.075) * (0.15 + diffuse * 0.65);
      lime += reflected * (0.10 + fresnel * 0.32);
      lime += gloss * 0.9;
      vec3 color = mix(chrome, lime, smoothstep(0.1, 0.9, vMaterial));
      // Darken the back and inner bends slightly: studio-like depth, not a flat decal.
      color *= 0.81 + smoothstep(-0.8, 0.9, vPosition.z) * 0.19;
      color += uLightMode * vec3(0.025, 0.03, 0.02);
      gl_FragColor = vec4(toneMap(color), 1.0);
    }
  `;

  const TAU = Math.PI * 2;
  const defaultRotation = [-0.35, -0.65, 0.32];
  const normalize = v => {
    const length = Math.hypot(...v) || 1;
    return v.map(value => value / length);
  };
  const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

  function createMesh(mobile = false) {
    const positions = [], normals = [], uvs = [], materials = [], indices = [];

    function tube(center, derivative, longitudinal, radial, radius, material, closed, cap = false) {
      const base = positions.length / 3;
      for (let i = 0; i <= longitudinal; i += 1) {
        const u = i / longitudinal;
        const c = center(u);
        const d = derivative(u);
        const tangent = normalize(d);
        const reference = Math.abs(tangent[2]) > 0.95 ? [0, 1, 0] : [0, 0, 1];
        const normal = normalize(cross(tangent, reference));
        const binormal = normalize(cross(tangent, normal));
        const r = typeof radius === 'function' ? radius(u) : radius;
        const epsilon = 0.0001;
        const before = Math.max(0, u - epsilon), after = Math.min(1, u + epsilon);
        const radiusSlope = typeof radius === 'function'
          ? (radius(after) - radius(before)) / ((after - before) * Math.hypot(...d))
          : 0;
        for (let j = 0; j <= radial; j += 1) {
          const v = j / radial * TAU;
          const radialDirection = normal.map((value, k) => value * Math.cos(v) + binormal[k] * Math.sin(v));
          const n = normalize(radialDirection.map((value, k) => value - tangent[k] * radiusSlope));
          positions.push(c[0] + radialDirection[0] * r, c[1] + radialDirection[1] * r, c[2] + radialDirection[2] * r);
          normals.push(...n);
          uvs.push(u, j / radial);
          materials.push(material);
        }
      }
      for (let i = 0; i < longitudinal; i += 1) {
        for (let j = 0; j < radial; j += 1) {
          const a = base + i * (radial + 1) + j;
          const b = a + radial + 1;
          indices.push(a, a + 1, b, b, a + 1, b + 1);
        }
      }
      if (cap && !closed) {
        for (const end of [0, 1]) {
          const c = center(end), tangent = normalize(derivative(end));
          const n = tangent.map(value => value * (end === 0 ? -1 : 1));
          const centerIndex = positions.length / 3;
          positions.push(...c); normals.push(...n); uvs.push(end, 0.5); materials.push(material);
          // Duplicate cap vertices so end normals remain separate from tube normals.
          const capBase = positions.length / 3;
          const rowStart = base + end * longitudinal * (radial + 1);
          for (let j = 0; j <= radial; j += 1) {
            const offset = (rowStart + j) * 3;
            positions.push(...positions.slice(offset, offset + 3)); normals.push(...n);
            uvs.push(end, j / radial); materials.push(material);
          }
          for (let j = 0; j < radial; j += 1) {
            if (end === 0) indices.push(centerIndex, capBase + j + 1, capBase + j);
            else indices.push(centerIndex, capBase + j, capBase + j + 1);
          }
        }
      }
    }

    // A continuous inflated chrome loop. A slight saddle twist reveals its volume.
    tube(
      u => {
        const t = u * TAU;
        return [Math.cos(t) * 1.02, Math.sin(t) * 1.02, Math.sin(t * 2) * 0.13];
      },
      u => {
        const t = u * TAU;
        return [-Math.sin(t) * 1.02 * TAU, Math.cos(t) * 1.02 * TAU, Math.cos(t * 2) * 0.26 * TAU];
      },
      mobile ? 144 : 224, mobile ? 24 : 36,
      u => 0.385 + Math.cos(u * TAU * 2) * 0.018,
      0, true
    );

    // The diagonal lime stroke gives the abstract sculpture its q silhouette.
    tube(
      u => [0.61 + u * 0.72, -0.61 - u * 0.72, 0.13 + Math.sin(u * Math.PI * 0.5) * 0.11],
      u => [0.72, -0.72, Math.cos(u * Math.PI * 0.5) * 0.11 * Math.PI * 0.5],
      mobile ? 16 : 28, mobile ? 24 : 36,
      u => u < 0.64 ? 0.32 : 0.32 * Math.sqrt(Math.max(0.0002, 1 - Math.pow((u - 0.64) / 0.36, 2))),
      1, false, true
    );

    return {
      positions: new Float32Array(positions),
      normals: new Float32Array(normals),
      uvs: new Float32Array(uvs),
      materials: new Float32Array(materials),
      indices: new Uint16Array(indices)
    };
  }

  function multiply(a, b) {
    const out = new Float32Array(16);
    for (let column = 0; column < 4; column += 1) {
      for (let row = 0; row < 4; row += 1) {
        for (let k = 0; k < 4; k += 1) out[column * 4 + row] += a[k * 4 + row] * b[column * 4 + k];
      }
    }
    return out;
  }

  function matrices(width, height, rotation = defaultRotation, progress = 0) {
    const aspect = Math.max(0.2, width / Math.max(height, 1));
    const fov = 36 * Math.PI / 180;
    const f = 1 / Math.tan(fov * 0.5);
    const near = 0.1, far = 30;
    const projection = new Float32Array([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) / (near - far), -1, 0, 0, 2 * far * near / (near - far), 0]);
    const [x, y, z] = rotation;
    const cx = Math.cos(x), sx = Math.sin(x), cy = Math.cos(y), sy = Math.sin(y), cz = Math.cos(z), sz = Math.sin(z);
    const rx = new Float32Array([1, 0, 0, 0, 0, cx, sx, 0, 0, -sx, cx, 0, 0, 0, 0, 1]);
    const ry = new Float32Array([cy, 0, -sy, 0, 0, 1, 0, 0, sy, 0, cy, 0, 0, 0, 0, 1]);
    const rz = new Float32Array([cz, sz, 0, 0, -sz, cz, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    const model = multiply(rz, multiply(ry, rx));
    model[13] = 0.12 - Math.min(progress, 1) * 0.12;
    // A small portrait margin keeps the full capsule inside the frame as it turns.
    const camera = new Float32Array([0, 0, 5.6 / Math.min(1, aspect) * (aspect < 1 ? 1.035 : 1)]);
    return { model, projection, camera };
  }

  // The exact production shaders and geometry can be compiled/rendered by offline QA.
  if (typeof window !== 'undefined' && window.QABAT_SCENE_QA) {
    window.QabatSceneQA = { vertexSource, fragmentSource, createMesh, matrices, defaultRotation };
    return;
  }

  const canvas = document.getElementById('hero-canvas');
  const stage = document.getElementById('scene-stage');
  if (!canvas || !stage) return;
  let announcedInteractive = null;
  stage.dataset.interactive = 'false';
  function setInteractive(interactive) {
    stage.dataset.interactive = String(interactive);
    if (announcedInteractive === interactive) return;
    announcedInteractive = interactive;
    window.dispatchEvent(new CustomEvent('qabat:scene', { detail: { interactive } }));
  }

  const mobile = window.matchMedia('(max-width: 700px)').matches;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  let gl;
  try {
    gl = canvas.getContext('webgl', { alpha: true, antialias: true, depth: true, stencil: false, premultipliedAlpha: false, powerPreference: 'low-power', preserveDrawingBuffer: false });
  } catch { setInteractive(false); return; }
  if (!gl) { setInteractive(false); return; }

  const mesh = createMesh(mobile);
  const buffers = [];
  let program, attributes, uniforms;
  let lost = false, disposed = false, visible = true;
  let externalPause = document.body.classList.contains('motion-off');
  let frame = 0, lastFrame = 0, lastTime = 0, animationTime = 0;
  let scrollProgress = 0;
  let rotation = [...defaultRotation], targetRotation = [...defaultRotation];
  let drag = null, hover = [0, 0];
  let canvasWidth = 0, canvasHeight = 0;
  let lightMode = document.documentElement.dataset.theme === 'light' ? 1 : 0;
  const frameInterval = 1000 / (mobile ? 24 : 30);
  const pixelRatio = Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.6);

  function compile(type, source) {
    const shader = gl.createShader(type);
    if (!shader) throw new Error('No shader');
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      throw new Error('Shader failed');
    }
    return shader;
  }

  function initialize() {
    const precision = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
    const hasHighp = precision && precision.precision > 0;
    // Shared uniform/varying precision must match across both shader stages.
    const fragment = hasHighp ? fragmentSource : fragmentSource.replace('precision highp float;', 'precision mediump float;');
    const vertexCode = hasHighp ? vertexSource : vertexSource.replace('precision highp float;', 'precision mediump float;');
    const vertex = compile(gl.VERTEX_SHADER, vertexCode);
    const pixel = compile(gl.FRAGMENT_SHADER, fragment);
    program = gl.createProgram();
    if (!program) throw new Error('No program');
    gl.attachShader(program, vertex); gl.attachShader(program, pixel); gl.linkProgram(program);
    gl.deleteShader(vertex); gl.deleteShader(pixel);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Link failed');
    gl.useProgram(program);
    attributes = {};
    [['aPosition', mesh.positions, 3], ['aNormal', mesh.normals, 3], ['aUv', mesh.uvs, 2], ['aMaterial', mesh.materials, 1]].forEach(([name, data, size]) => {
      const location = gl.getAttribLocation(program, name);
      if (location < 0) return;
      const buffer = gl.createBuffer(); buffers.push(buffer);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      gl.enableVertexAttribArray(location); gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
      attributes[name] = location;
    });
    const indices = gl.createBuffer(); buffers.push(indices);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, mesh.indices, gl.STATIC_DRAW);
    uniforms = {};
    ['uModel', 'uProjection', 'uCamera', 'uLightMode'].forEach(name => { uniforms[name] = gl.getUniformLocation(program, name); });
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    gl.clearColor(0, 0, 0, 0);
    gl.clearDepth(1);
  }

  function resize() {
    const rect = stage.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return false;
    const width = Math.round(rect.width * pixelRatio), height = Math.round(rect.height * pixelRatio);
    if (width !== canvasWidth || height !== canvasHeight) {
      canvas.width = canvasWidth = width;
      canvas.height = canvasHeight = height;
      gl.viewport(0, 0, width, height);
    }
    return true;
  }

  function draw() {
    if (disposed || lost || !program || !resize()) return;
    const state = matrices(canvasWidth, canvasHeight, rotation, scrollProgress);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.useProgram(program);
    gl.uniformMatrix4fv(uniforms.uModel, false, state.model);
    gl.uniformMatrix4fv(uniforms.uProjection, false, state.projection);
    gl.uniform3fv(uniforms.uCamera, state.camera);
    gl.uniform1f(uniforms.uLightMode, lightMode);
    gl.drawElements(gl.TRIANGLES, mesh.indices.length, gl.UNSIGNED_SHORT, 0);
    // A missing GPU or invalid shader never hides the rendered-image fallback.
    if (stage.dataset.ready !== 'true') {
      const success = gl.getError() === gl.NO_ERROR;
      if (success) stage.dataset.ready = 'true';
      setInteractive(success);
    }
  }

  function canAnimate() { return !disposed && !lost && visible && !document.hidden && !reduce.matches && !externalPause; }
  function stop() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0; lastTime = 0;
  }
  function composedRotation() {
    return [
      targetRotation[0] + Math.sin(animationTime * 0.4) * 0.16 + hover[1] * 0.14 + scrollProgress * 0.18,
      targetRotation[1] + animationTime * 0.13 + hover[0] * 0.18 + scrollProgress * 0.7,
      targetRotation[2] - scrollProgress * 0.35
    ];
  }
  function tick(time) {
    frame = 0;
    if (!canAnimate()) return;
    if (time - lastFrame >= frameInterval - 1) {
      const elapsed = lastTime ? Math.min((time - lastTime) / 1000, 0.09) : 0;
      if (!drag) animationTime += elapsed;
      lastTime = time; lastFrame = time;
      // User pose is durable; automatic drift is a separate additive component.
      const target = composedRotation();
      rotation = rotation.map((value, index) => value + (target[index] - value) * 0.1);
      draw();
    }
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    stop();
    if (canAnimate()) frame = requestAnimationFrame(tick);
    else if (!document.hidden && visible) draw();
  }
  function pause(value) { externalPause = Boolean(value); sync(); }

  function renderOnce() { draw(); }
  function pointerDown(event) {
    if (event.button !== undefined && event.button !== 0) return;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, rotation: [...targetRotation] };
    hover = [0, 0];
    try { canvas.setPointerCapture(event.pointerId); } catch { /* Optional pointer capture. */ }
    canvas.classList.add('is-dragging');
    canvas.focus({ preventScroll: true });
  }
  function pointerMove(event) {
    if (drag && drag.id === event.pointerId) {
      const deltaX = event.clientX - drag.x, deltaY = event.clientY - drag.y;
      targetRotation[1] = drag.rotation[1] + deltaX * 0.008;
      targetRotation[0] = Math.max(-1.3, Math.min(1.3, drag.rotation[0] + deltaY * 0.008));
      if (!canAnimate()) { rotation = composedRotation(); draw(); }
    } else if (event.pointerType !== 'touch') {
      const rect = canvas.getBoundingClientRect();
      hover = [(event.clientX - rect.left) / rect.width - 0.5, (event.clientY - rect.top) / rect.height - 0.5];
    }
  }
  function pointerUp(event) {
    if (!drag || drag.id !== event.pointerId) return;
    drag = null; canvas.classList.remove('is-dragging');
    try { canvas.releasePointerCapture(event.pointerId); } catch { /* Capture may already be gone. */ }
  }
  function pointerLeave() { hover = [0, 0]; }
  function keyDown(event) {
    const step = 0.16;
    if (event.key === 'ArrowLeft') targetRotation[1] -= step;
    else if (event.key === 'ArrowRight') targetRotation[1] += step;
    else if (event.key === 'ArrowUp') targetRotation[0] -= step;
    else if (event.key === 'ArrowDown') targetRotation[0] += step;
    else if (event.key === 'Home') { targetRotation = [...defaultRotation]; animationTime = 0; hover = [0, 0]; }
    else return;
    event.preventDefault();
    if (!canAnimate()) { rotation = composedRotation(); draw(); }
  }

  let observer, resizeObserver;
  function onVisibility() { sync(); }
  function onMotion(event) {
    const detail = event.detail;
    pause(detail && typeof detail === 'object' ? detail.paused : detail);
  }
  function onTheme(event) {
    const theme = typeof event.detail === 'string' ? event.detail : event.detail && event.detail.theme;
    lightMode = (theme || document.documentElement.dataset.theme) === 'light' ? 1 : 0;
    draw();
  }
  function onReducedMotion() { if (reduce.matches) scrollProgress = 0; sync(); }
  function onResize() { draw(); }
  function contextLost(event) {
    event.preventDefault(); lost = true; stop(); stage.dataset.ready = 'false';
    setInteractive(false);
  }
  function contextRestored() {
    lost = false; buffers.length = 0;
    try { initialize(); canvasWidth = 0; canvasHeight = 0; draw(); sync(); } catch { stage.dataset.ready = 'false'; setInteractive(false); }
  }
  function dispose() {
    disposed = true; stop();
    stage.dataset.ready = 'false'; setInteractive(false);
    if (observer) observer.disconnect();
    if (resizeObserver) resizeObserver.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('qabat:motion', onMotion);
    window.removeEventListener('qabat:theme', onTheme);
    canvas.removeEventListener('pointerdown', pointerDown);
    canvas.removeEventListener('pointermove', pointerMove);
    canvas.removeEventListener('pointerup', pointerUp);
    canvas.removeEventListener('pointercancel', pointerUp);
    canvas.removeEventListener('pointerleave', pointerLeave);
    canvas.removeEventListener('keydown', keyDown);
    canvas.removeEventListener('webglcontextlost', contextLost);
    canvas.removeEventListener('webglcontextrestored', contextRestored);
    if (reduce.removeEventListener) reduce.removeEventListener('change', onReducedMotion);
    else if (reduce.removeListener) reduce.removeListener(onReducedMotion);
    if (!lost) { buffers.forEach(buffer => gl.deleteBuffer(buffer)); if (program) gl.deleteProgram(program); }
  }

  try {
    initialize(); draw();
    canvas.addEventListener('pointerdown', pointerDown);
    canvas.addEventListener('pointermove', pointerMove, { passive: true });
    canvas.addEventListener('pointerup', pointerUp);
    canvas.addEventListener('pointercancel', pointerUp);
    canvas.addEventListener('pointerleave', pointerLeave);
    canvas.addEventListener('keydown', keyDown);
    canvas.addEventListener('webglcontextlost', contextLost);
    canvas.addEventListener('webglcontextrestored', contextRestored);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('qabat:motion', onMotion);
    window.addEventListener('qabat:theme', onTheme);
    window.addEventListener('resize', onResize, { passive: true });
    if (reduce.addEventListener) reduce.addEventListener('change', onReducedMotion);
    else reduce.addListener(onReducedMotion);
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }, { rootMargin: '40px' });
      observer.observe(stage);
    }
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(() => draw()); resizeObserver.observe(stage);
    }
    window.QabatScene = {
      pause, renderOnce, dispose,
      setScrollProgress(value) {
        scrollProgress = reduce.matches || externalPause ? 0 : Math.max(0, Math.min(1, Number(value) || 0));
        if (!canAnimate()) draw();
      }
    };
    sync();
  } catch {
    // The artwork image stays visible if graphics are unavailable.
    stage.dataset.ready = 'false';
    setInteractive(false);
    dispose();
  }
})();
