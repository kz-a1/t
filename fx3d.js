/* QABAT / 3D effects layer. Vanilla JS, no dependencies. Respects motion-off + reduced motion. */
(() => {
  'use strict';
  const body = document.body;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 901px)');
  const off = () => body.classList.contains('motion-off') || reduce.matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* 1. Hero parallax: stage tilts toward the cursor */
  const hero = document.getElementById('home');
  const stage = document.getElementById('scene-stage');
  if (hero && stage) {
    hero.addEventListener('pointermove', e => {
      if (!fine.matches || off()) return;
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      stage.style.setProperty('--fx-ry', (x * 7).toFixed(2) + 'deg');
      stage.style.setProperty('--fx-rx', (-y * 5).toFixed(2) + 'deg');
    });
    hero.addEventListener('pointerleave', () => {
      stage.style.setProperty('--fx-ry', '0deg');
      stage.style.setProperty('--fx-rx', '0deg');
    });
  }

  /* 2. Work cards: 3D tilt with moving glare */
  document.querySelectorAll('.work-visual').forEach(el => {
    el.addEventListener('pointermove', e => {
      if (!fine.matches || off()) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.classList.add('is-tilting');
      el.style.transform = `perspective(1100px) rotateY(${((x - .5) * 6).toFixed(2)}deg) rotateX(${((.5 - y) * 5).toFixed(2)}deg)`;
      el.style.setProperty('--gx', (x * 100).toFixed(1) + '%');
      el.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
      el.style.setProperty('--px', ((.5 - x) * 22).toFixed(1) + 'px');
      el.style.setProperty('--py', ((.5 - y) * 16).toFixed(1) + 'px');
    });
    el.addEventListener('pointerleave', () => {
      el.classList.remove('is-tilting');
      el.style.transform = '';
    });
  });

  /* 3. Tech ring: 3D carousel, scroll-driven, draggable */
  const anchor = document.querySelector('.tech-line');
  if (anchor) {
    const words = ['HTML', 'CSS', 'JAVASCRIPT', 'UI / UX', 'WEBGL', 'MOTION', 'DESIGN', 'CODE'];
    const ring = document.createElement('div');
    ring.className = 'tech-ring';
    ring.setAttribute('aria-hidden', 'true');
    const spin = document.createElement('div');
    spin.className = 'tech-ring-spin';
    const step = 360 / words.length;
    words.forEach((w, i) => {
      const s = document.createElement('span');
      s.className = 'tech-ring-item';
      s.textContent = w;
      s.style.transform = `rotateY(${i * step}deg) translateZ(var(--r, 420px))`;
      spin.appendChild(s);
    });
    ring.appendChild(spin);
    anchor.before(ring);

    const setRadius = () => ring.style.setProperty('--r', clamp(ring.clientWidth * .34, 150, 520) + 'px');
    setRadius();
    addEventListener('resize', setRadius);

    let drag = 0, vel = 0, last = null, visible = false, raf = 0;
    new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible && !raf) raf = requestAnimationFrame(tick); }).observe(ring);

    ring.addEventListener('pointerdown', e => { last = e.clientX; ring.classList.add('is-dragging'); ring.setPointerCapture(e.pointerId); });
    ring.addEventListener('pointermove', e => { if (last === null) return; const d = e.clientX - last; last = e.clientX; drag += d * .35; vel = d * .35; });
    const end = () => { last = null; ring.classList.remove('is-dragging'); };
    ring.addEventListener('pointerup', end);
    ring.addEventListener('pointercancel', end);

    function tick() {
      raf = 0;
      if (!visible) return;
      if (!off()) {
        if (last === null) { drag += vel; vel *= .94; }
        const angle = performance.now() * .008 + scrollY * .12 + drag;
        spin.style.setProperty('--ring', angle.toFixed(2) + 'deg');
      }
      raf = requestAnimationFrame(tick);
    }
  }
})();
