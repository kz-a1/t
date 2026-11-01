/* QABAT — copy, navigation and browser-local interactions.
   Edit the three dictionaries to change the text. No dependencies or build step. */
(() => {
  'use strict';

  const PHONE = '77754476327';
  const DISPLAY_PHONE = '+7 775 447 6327';
  const COPY = {
    kk: {
      skip: 'Мазмұнға өту', navLabel: 'Негізгі мәзір', mobileNavLabel: 'Мобильді мәзір',
      navWork: 'Жобалар', navAbout: 'Мен туралы', navContact: 'Байланыс', languageLabel: 'Сайт тілі',
      themeLight: 'Ашық тақырыпқа ауысу', themeDark: 'Қараңғы тақырыпқа ауысу', menuOpen: 'Мәзірді ашу', menuClose: 'Мәзірді жабу',
      role: 'ВЕБ-ӘЗІРЛЕУШІ / FRONTEND & FULL-STACK', hero1: 'САЙТТЫ', hero2: 'БІРГЕ', hero3: 'ЖАСАЙЫҚ.',
      heroIntro: 'Бизнеске, жеке жобаға, портфолиоға. Дизайнды да, кодты да өзім жасаймын.', heroCta: 'Жобаны талқылау',
      sceneLabel: 'Көлемді Q нысаны. Бұру үшін сүйреңіз немесе бағдарша пернелерін басыңыз.', sceneHint: 'БҰРУ ҮШІН СҮЙРЕҢІЗ', sceneStatic: 'QABAT / 3D',
      viewWork: 'Жобаларды көру', heroLocation: 'ҚАЗАҚСТАН · ОНЛАЙН ЖҰМЫС', pauseMotion: 'Қозғалысты тоқтату',
      resumeMotion: 'Қозғалысты қосу', reducedMotion: 'Қозғалыс құрылғы баптауына сай өшірілген', motionLabel: 'ҚОЗҒАЛЫС',
      selectedWork: '01 — ТАҢДАЛҒАН ЖОБАЛАР', conceptCollection: 'АВТОРЛЫҚ КОНЦЕПТТЕР / 2026', workTitle: 'ЖОБАЛАР',
      workIntro: 'Үш түрлі міндет. Үш түрлі шешім. Әрқайсысын ашып көріңіз.', filterLabel: 'Жоба сүзгісі',
      filterAll: 'Барлығы', filterWebsite: 'Веб-сайттар', filterCommerce: 'E-commerce', countLabel: 'жоба көрсетілді',
      concept: 'КОНЦЕПТ', openProject: 'Жобаны ашу', sauleOpen: 'SÄULE жобасын ашу', tolqynOpen: 'TOLQYN жобасын ашу', auraOpen: 'AURA жобасын ашу',
      sauleAlt: 'SÄULE сәулет бюросының сайт концепті', tolqynAlt: 'TOLQYN аудиоөнім дүкенінің сайт концепті', auraAlt: 'AURA күтім өнімдері брендінің сайт концепті',
      sauleType: 'Сәулет бюросы', tolqynType: 'Аудиоөнім дүкені', auraType: 'Күтім өнімдері бренді',
      conceptNote: 'Осы портфолиоға дайындалған дизайн концепттері.', aboutLabel: '02 — МЕН ТУРАЛЫ', about1: 'ДИЗАЙН ДА.', about2: 'КОД ТА.',
      aboutLead: 'Мен сайт әзірлеушімін. Құрылымын ойластырып, дизайнын жасап, кодын жазамын.',
      aboutText: 'Алдымен сайт сізге не үшін қажет екенін анықтаймыз: қызметіңізді таныстыру, өнім сату немесе өтінім жинау. Соған қарай экрандарды құрастырып, телефон мен компьютерге бейімдеймін. Жоба бойынша өзіммен тікелей сөйлесесіз.',
      aboutCta: 'Танысайық', skillsLabel: 'Технологиялар', servicesLabel: 'НЕ ЖАСАЙМЫН', servicesNote: 'ДИЗАЙННАН ІСКЕ ҚОСУҒА ДЕЙІН',
      service1: 'Лендинг', service1Text: 'Бір өнімге, қызметке немесе іс-шараға арналған бір бет. Негізгі ақпарат пен байланыс бір жерде.',
      service2: 'Бизнес сайты', service2Text: 'Компанияңыз, қызметтеріңіз, жұмыстарыңыз және байланыс. Қажет бөлімдерді бірге анықтаймыз.',
      service3: 'Интерфейс және интерактив', service3Text: 'Каталог, жеке кабинет, сүзгі немесе форма. Қолданушыға керек әрекетті орындауға көмектесетін экрандар.',
      processLabel: 'ЖҰМЫС БАРЫСЫ', processTitle: 'Әр қадамды\nбірге өтеміз.',
      step1: 'Сөйлесеміз', step1Text: 'Не қажет, кімге арналған, қашан керек — осыны анықтаймыз.',
      step2: 'Дизайнды келісеміз', step2Text: 'Алдымен құрылым мен негізгі экрандарды көрсетемін.',
      step3: 'Кодын жазамын', step3Text: 'Дизайнды жұмыс істейтін сайтқа айналдырып, экрандарға бейімдеймін.',
      step4: 'Іске қосамыз', step4Text: 'Сілтемелер мен формаларды тексереміз. Сайтты жариялап, басқаруын көрсетемін.',
      contactLabel: '03 — БАЙЛАНЫС', contact1: 'АЛ,', contact2: 'БАСТАЙЫҚ.', contactText: 'Идеяңызды екі ауыз сөзбен жазыңыз. Қалғанын сөйлесіп анықтаймыз.',
      copyPhone: 'Нөмірді көшіру', copied: 'Нөмір көшірілді.', copyFailed: 'Қолмен көшіріңіз: +7 775 447 6327',
      formTitle: 'Жоба туралы қысқаша', nameLabel: 'Есіміңіз', namePlaceholder: 'Қалай атайын?',
      contactFieldLabel: 'Телефон немесе email', contactPlaceholder: 'Қайда жауап берейін?', typeLabel: 'Қандай сайт?',
      typeLanding: 'Лендинг', typeBusiness: 'Бизнес сайты', typeCommerce: 'Интернет-дүкен', typeOther: 'Басқа жоба',
      messageLabel: 'Не жасау керек?', messagePlaceholder: 'Сайт кімге арналған? Не көрсету немесе сату керек?',
      submitForm: 'WhatsApp-та жалғастыру', formNote: 'WhatsApp ашылады. Дайын хабарламаны сол жерден жібере аласыз.',
      errorName: 'Есіміңізді жазыңыз — кемінде 2 таңба.', errorContact: 'Дұрыс телефон нөмірін немесе email жазыңыз.',
      errorMessage: 'Жоба туралы кемінде 10 таңба жазыңыз.', errorSummary: 'Белгіленген өрістерді тексеріңіз.',
      whatsappGreeting: 'Сәлем! QABAT портфолиосы арқылы хабарласып тұрмын.', whatsappStatus: 'Дайын хабарлама WhatsApp-та ашылады. Жіберуді сол жерде растайсыз.',
      footerText: 'САЙТТАР. ДИЗАЙН. КОД.', backTop: 'ЖОҒАРЫҒА', close: 'Жабу', goalLabel: 'МІНДЕТ', solutionLabel: 'ШЕШІМ',
      dialogNote: 'Бұл — осы портфолиоға жасалған дизайн үлгісі.', projectCta: 'Маған да осындай сайт керек',
      sauleDescription: 'Сәулет бюросының жобаларын таныстыратын сайт үлгісі. Кеңістік, материал және ғимарат формасы бірінші орында.',
      sauleGoal: 'Жобалардың сипатын үлкен көріністермен жеткізіп, бюроға хабарласуды оңайлату.',
      sauleSolution: 'Ірі типографика, ашық фон және бетон пішіндер. Жоба туралы ақпарат суретпен жарыспай, оның жанында беріледі.',
      tolqynDescription: 'Аудиоөнімге арналған дүкен бетінің үлгісі. Басты назар — құлаққап пен оның пішінінде.',
      tolqynGoal: 'Өнімді алғашқы экранда таныстырып, оның сипаттамасына өту жолын көрсету.',
      tolqynSolution: 'Графит пен лайм контрасты, көлемді өнім визуалы және қысқа мәтіндер. Бұл — дүкен интерфейсінің дизайн үлгісі.',
      auraDescription: 'Күтім өнімдері брендіне арналған тыныш, ашық түсті сайт үлгісі. Құты мен оның материалы композицияның өзегіне айналады.',
      auraGoal: 'Өнімнің өзін, қолдану ретін және брендтің жалпы бағытын бір бетке жинау.',
      auraSolution: 'Жылы реңктер, ірі қаріп және өнімге жақын кадр. Әр бөлімде бір негізгі ой қалады.',
      pageTitle: 'QABAT — Сайтты бірге жасайық', pageDescription: 'QABAT — сайт әзірлеуші. Бизнеске, жеке жобаға, портфолиоға. Дизайнды да, кодты да өзім жасаймын.',
      ogDescription: 'Лендинг, бизнес сайты, интерфейс. Жобаңызды WhatsApp-та талқылайық.'
    },
    ru: {
      skip: 'Перейти к содержимому', navLabel: 'Основная навигация', mobileNavLabel: 'Мобильное меню',
      navWork: 'Проекты', navAbout: 'Обо мне', navContact: 'Контакты', languageLabel: 'Язык сайта',
      themeLight: 'Включить светлую тему', themeDark: 'Включить тёмную тему', menuOpen: 'Открыть меню', menuClose: 'Закрыть меню',
      role: 'ВЕБ-РАЗРАБОТЧИК / FRONTEND & FULL-STACK', hero1: 'ДАВАЙТЕ', hero2: 'СДЕЛАЕМ', hero3: 'ВАШ САЙТ.',
      heroIntro: 'Для бизнеса, личного проекта или портфолио. Сам делаю дизайн и пишу код.', heroCta: 'Обсудить проект',
      sceneLabel: 'Объёмная фигура Q. Перетаскивайте или нажимайте клавиши со стрелками, чтобы повернуть.', sceneHint: 'ПЕРЕТАЩИТЕ, ЧТОБЫ ПОВЕРНУТЬ', sceneStatic: 'QABAT / 3D',
      viewWork: 'Посмотреть работы', heroLocation: 'КАЗАХСТАН · РАБОТАЮ ОНЛАЙН', pauseMotion: 'Остановить движение',
      resumeMotion: 'Включить движение', reducedMotion: 'Движение отключено в настройках устройства', motionLabel: 'ДВИЖЕНИЕ',
      selectedWork: '01 — ИЗБРАННЫЕ ПРОЕКТЫ', conceptCollection: 'АВТОРСКИЕ КОНЦЕПТЫ / 2026', workTitle: 'ПРОЕКТЫ',
      workIntro: 'Три разных задачи. Три разных решения. Откройте каждый проект.', filterLabel: 'Фильтр проектов',
      filterAll: 'Все', filterWebsite: 'Веб-сайты', filterCommerce: 'E-commerce', countLabel: 'проектов показано',
      concept: 'КОНЦЕПТ', openProject: 'Открыть проект', sauleOpen: 'Открыть проект SÄULE', tolqynOpen: 'Открыть проект TOLQYN', auraOpen: 'Открыть проект AURA',
      sauleAlt: 'Концепт сайта архитектурного бюро SÄULE', tolqynAlt: 'Концепт сайта магазина аудиотоваров TOLQYN', auraAlt: 'Концепт сайта бренда уходовых средств AURA',
      sauleType: 'Архитектурное бюро', tolqynType: 'Магазин аудиотоваров', auraType: 'Бренд уходовых средств',
      conceptNote: 'Дизайн-концепты, подготовленные для этого портфолио.', aboutLabel: '02 — ОБО МНЕ', about1: 'И ДИЗАЙН.', about2: 'И КОД.',
      aboutLead: 'Я веб-разработчик. Продумываю структуру, делаю дизайн и пишу код.',
      aboutText: 'Сначала выясняем, зачем вам сайт: рассказать об услуге, продавать товары или собирать заявки. Под эту задачу я собираю экраны и адаптирую их для телефона и компьютера. Все вопросы по проекту обсуждаем напрямую.',
      aboutCta: 'Познакомимся', skillsLabel: 'Технологии', servicesLabel: 'ЧТО Я ДЕЛАЮ', servicesNote: 'ОТ ДИЗАЙНА ДО ЗАПУСКА',
      service1: 'Лендинг', service1Text: 'Одна страница для продукта, услуги или события. Главная информация и связь в одном месте.',
      service2: 'Сайт для бизнеса', service2Text: 'О компании, услугах, работах и контактах. Вместе определим, какие разделы нужны.',
      service3: 'Интерфейс и интерактив', service3Text: 'Каталог, личный кабинет, фильтр или форма. Экраны, которые помогают человеку сделать нужное действие.',
      processLabel: 'КАК Я РАБОТАЮ', processTitle: 'Каждый этап\nпроходим вместе.',
      step1: 'Обсуждаем', step1Text: 'Выясняем, что нужно, для кого и к какому сроку.',
      step2: 'Согласуем дизайн', step2Text: 'Сначала показываю структуру и основные экраны.',
      step3: 'Пишу код', step3Text: 'Превращаю дизайн в работающий сайт и адаптирую под экраны.',
      step4: 'Запускаем', step4Text: 'Проверяем ссылки и формы. Публикую сайт и показываю, как им управлять.',
      contactLabel: '03 — КОНТАКТЫ', contact1: 'НУ ЧТО,', contact2: 'НАЧНЁМ.', contactText: 'Опишите идею в двух словах. Остальное выясним в разговоре.',
      copyPhone: 'Скопировать номер', copied: 'Номер скопирован.', copyFailed: 'Скопируйте вручную: +7 775 447 6327',
      formTitle: 'Коротко о проекте', nameLabel: 'Ваше имя', namePlaceholder: 'Как к вам обращаться?',
      contactFieldLabel: 'Телефон или email', contactPlaceholder: 'Куда вам ответить?', typeLabel: 'Какой сайт?',
      typeLanding: 'Лендинг', typeBusiness: 'Сайт для бизнеса', typeCommerce: 'Интернет-магазин', typeOther: 'Другой проект',
      messageLabel: 'Что нужно сделать?', messagePlaceholder: 'Для кого сайт? Что нужно показать или продавать?',
      submitForm: 'Продолжить в WhatsApp', formNote: 'Откроется WhatsApp с готовым сообщением. Отправить его сможете там.',
      errorName: 'Укажите имя — не менее 2 символов.', errorContact: 'Укажите корректный номер телефона или email.',
      errorMessage: 'Опишите проект хотя бы в 10 символах.', errorSummary: 'Проверьте отмеченные поля.',
      whatsappGreeting: 'Здравствуйте! Пишу через портфолио QABAT.', whatsappStatus: 'Готовое сообщение откроется в WhatsApp. Отправку подтвердите там.',
      footerText: 'САЙТЫ. ДИЗАЙН. КОД.', backTop: 'НАВЕРХ', close: 'Закрыть', goalLabel: 'ЗАДАЧА', solutionLabel: 'РЕШЕНИЕ',
      dialogNote: 'Это дизайн-концепт, созданный для этого портфолио.', projectCta: 'Хочу похожий сайт',
      sauleDescription: 'Концепт сайта архитектурного бюро. В центре внимания — пространство, материал и форма здания.',
      sauleGoal: 'Показать характер проектов через крупные изображения и упростить связь с бюро.',
      sauleSolution: 'Крупная типографика, светлый фон и бетонные формы. Информация о проекте располагается рядом с изображением и не спорит с ним.',
      tolqynDescription: 'Концепт страницы магазина аудиотоваров. Главный акцент — на наушниках и их форме.',
      tolqynGoal: 'Представить продукт с первого экрана и показать путь к его характеристикам.',
      tolqynSolution: 'Контраст графита и лайма, объёмный визуал продукта и короткие тексты. Это дизайн-макет интерфейса магазина.',
      auraDescription: 'Концепт сайта бренда уходовых средств в спокойных светлых тонах. Флакон и его материал становятся центром композиции.',
      auraGoal: 'Собрать продукт, порядок использования и направление бренда на одной странице.',
      auraSolution: 'Тёплые оттенки, крупный шрифт и близкие ракурсы продукта. В каждом разделе остаётся одна главная мысль.',
      pageTitle: 'QABAT — Давайте сделаем ваш сайт', pageDescription: 'QABAT — веб-разработчик. Для бизнеса, личного проекта или портфолио. Сам делаю дизайн и пишу код.',
      ogDescription: 'Лендинг, сайт для бизнеса, интерфейс. Обсудим ваш проект в WhatsApp.'
    },
    en: {
      skip: 'Skip to content', navLabel: 'Main navigation', mobileNavLabel: 'Mobile menu',
      navWork: 'Work', navAbout: 'About', navContact: 'Contact', languageLabel: 'Site language',
      themeLight: 'Switch to light theme', themeDark: 'Switch to dark theme', menuOpen: 'Open menu', menuClose: 'Close menu',
      role: 'WEB DEVELOPER / FRONTEND & FULL-STACK', hero1: 'LET’S', hero2: 'BUILD YOUR', hero3: 'WEBSITE.',
      heroIntro: 'For your business, personal project or portfolio. I handle the design and the code.', heroCta: 'Discuss a project',
      sceneLabel: 'A three-dimensional Q sculpture. Drag or use the arrow keys to rotate it.', sceneHint: 'DRAG TO ROTATE', sceneStatic: 'QABAT / 3D',
      viewWork: 'See the work', heroLocation: 'KAZAKHSTAN · WORKING ONLINE', pauseMotion: 'Pause motion',
      resumeMotion: 'Resume motion', reducedMotion: 'Motion is disabled by your device settings', motionLabel: 'MOTION',
      selectedWork: '01 — SELECTED WORK', conceptCollection: 'ORIGINAL CONCEPTS / 2026', workTitle: 'WORK',
      workIntro: 'Three different briefs. Three different approaches. Open a project to take a look.', filterLabel: 'Filter projects',
      filterAll: 'All work', filterWebsite: 'Websites', filterCommerce: 'E-commerce', countLabel: 'projects shown',
      concept: 'CONCEPT', openProject: 'View project', sauleOpen: 'Open SÄULE project', tolqynOpen: 'Open TOLQYN project', auraOpen: 'Open AURA project',
      sauleAlt: 'SÄULE architecture studio website concept', tolqynAlt: 'TOLQYN audio products store website concept', auraAlt: 'AURA skincare brand website concept',
      sauleType: 'Architecture studio', tolqynType: 'Audio products store', auraType: 'Skincare brand',
      conceptNote: 'Design concepts created for this portfolio.', aboutLabel: '02 — ABOUT ME', about1: 'THE DESIGN.', about2: 'THE CODE.',
      aboutLead: 'I’m a web developer. I plan the structure, design the pages and write the code.',
      aboutText: 'First, we work out what your site needs to do: explain a service, sell products or bring in enquiries. Then I build around that goal, for phones and computers. You work directly with me.',
      aboutCta: 'Say hello', skillsLabel: 'Technologies', servicesLabel: 'WHAT I BUILD', servicesNote: 'FROM DESIGN TO LAUNCH',
      service1: 'Landing pages', service1Text: 'One page for a product, service or event. The essentials and a way to get in touch, all in one place.',
      service2: 'Business websites', service2Text: 'Your company, services, work and contact details. We’ll decide which sections you need together.',
      service3: 'Interfaces and interaction', service3Text: 'A catalogue, account area, filter or form. Screens that help people get things done.',
      processLabel: 'HOW I WORK', processTitle: 'Every step,\ntogether.',
      step1: 'Talk', step1Text: 'We work out what you need, who it’s for and when you need it.',
      step2: 'Agree on the design', step2Text: 'I show you the structure and key screens first.',
      step3: 'Build', step3Text: 'I turn the design into a working site and adapt it to different screens.',
      step4: 'Launch', step4Text: 'We check the links and forms. I publish the site and show you how to manage it.',
      contactLabel: '03 — CONTACT', contact1: 'LET’S', contact2: 'START.', contactText: 'Tell me the idea in a few words. We’ll work out the details together.',
      copyPhone: 'Copy number', copied: 'Number copied.', copyFailed: 'Copy manually: +7 775 447 6327',
      formTitle: 'A little about the project', nameLabel: 'Your name', namePlaceholder: 'What should I call you?',
      contactFieldLabel: 'Phone or email', contactPlaceholder: 'Where can I reach you?', typeLabel: 'What are we building?',
      typeLanding: 'Landing page', typeBusiness: 'Business website', typeCommerce: 'Online store', typeOther: 'Another project',
      messageLabel: 'What do you need?', messagePlaceholder: 'Who is the site for? What should it show or sell?',
      submitForm: 'Continue in WhatsApp', formNote: 'WhatsApp will open with a prepared message. You can send it there.',
      errorName: 'Enter your name — at least 2 characters.', errorContact: 'Enter a valid phone number or email.',
      errorMessage: 'Describe the project in at least 10 characters.', errorSummary: 'Please check the highlighted fields.',
      whatsappGreeting: 'Hello! I’m getting in touch through the QABAT portfolio.', whatsappStatus: 'Your prepared message will open in WhatsApp. You can send it there.',
      footerText: 'WEBSITES. DESIGN. CODE.', backTop: 'BACK TO TOP', close: 'Close', goalLabel: 'THE BRIEF', solutionLabel: 'THE APPROACH',
      dialogNote: 'This is a design concept created for this portfolio.', projectCta: 'I’d like a site like this',
      sauleDescription: 'A website concept for an architecture studio. Space, material and the shape of the building take centre stage.',
      sauleGoal: 'Show the character of the projects through generous imagery and make it easy to contact the studio.',
      sauleSolution: 'Large type, a light background and concrete forms. Project information sits alongside the image without competing with it.',
      tolqynDescription: 'A product-store page concept for audio equipment. The headphones and their shape are the focus.',
      tolqynGoal: 'Introduce the product from the first screen and provide a clear route to its specifications.',
      tolqynSolution: 'Graphite-and-lime contrast, a dimensional product visual and short copy. This is an online-store interface mockup.',
      auraDescription: 'A skincare brand website concept in calm, light colours. The bottle and its material sit at the centre of the composition.',
      auraGoal: 'Bring the product, its routine and the brand’s direction together on one page.',
      auraSolution: 'Warm colours, generous type and close views of the product. Each section focuses on one main idea.',
      pageTitle: 'QABAT — Let’s build your website', pageDescription: 'QABAT — web developer. For your business, personal project or portfolio. I handle the design and the code.',
      ogDescription: 'Landing pages, business websites and interfaces. Let’s discuss your project in WhatsApp.'
    }
  };

  const PROJECTS = {
    saule: { title: 'SÄULE', image: 'assets/rebuild-work-01.svg' },
    tolqyn: { title: 'TOLQYN', image: 'assets/rebuild-work-02.svg' },
    aura: { title: 'AURA', image: 'assets/rebuild-work-03.svg' }
  };
  const root = document.documentElement;
  const body = document.body;
  const byId = id => document.getElementById(id);
  const all = selector => [...document.querySelectorAll(selector)];
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Optional storage. */ } };
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 901px)');
  const smallScreen = window.matchMedia('(max-width: 700px)');
  const mediaListen = (query, fn) => query.addEventListener ? query.addEventListener('change', fn) : query.addListener(fn);
  const emit = (name, detail) => window.dispatchEvent(new CustomEvent(name, { detail }));
  let language = 'kk';
  let pausedByUser = read('qabat-motion') === 'off';
  let motionPaused = pausedByUser || reduce.matches;
  let activeProject = null;
  let projectTrigger = null;
  let copyStatusKey = '';
  let formStatusKey = '';
  let navigating = false;
  let navigationTimers = [];
  let themeBusy = false;
  let sceneInteractive = false;
  let scrollFrame = 0;
  let revealObserver;
  const touched = new Set();
  const cards = all('.work-card');
  const revealItems = all('.reveal');
  const text = key => COPY[language][key] ?? COPY.kk[key] ?? key;

  function setTranslatedText(element, value) {
    if (element.dataset.i18n === 'workTitle') {
      // Preserve the decorative dot while translating only its preceding text.
      const dot = element.querySelector('span');
      if (dot) { element.replaceChildren(document.createTextNode(value), dot); return; }
    }
    if (value.includes('\n')) {
      const nodes = [];
      value.split('\n').forEach((line, index) => {
        if (index) nodes.push(document.createElement('br'));
        nodes.push(document.createTextNode(line));
      });
      element.replaceChildren(...nodes);
    } else element.textContent = value;
  }
  function setMetadata(selector, content) {
    const meta = document.querySelector(selector);
    if (meta) meta.content = content;
  }
  function updateControlLabels() {
    const isLight = root.dataset.theme === 'light';
    byId('theme-toggle').setAttribute('aria-label', text(isLight ? 'themeDark' : 'themeLight'));
    byId('theme-toggle').setAttribute('aria-pressed', String(isLight));
    byId('menu-toggle').setAttribute('aria-label', text(byId('mobile-menu').hidden ? 'menuOpen' : 'menuClose'));
    const motionButton = byId('motion-toggle');
    motionButton.setAttribute('aria-label', text(reduce.matches ? 'reducedMotion' : motionPaused ? 'resumeMotion' : 'pauseMotion'));
    motionButton.setAttribute('aria-pressed', String(motionPaused));
    motionButton.disabled = reduce.matches;
    motionButton.title = reduce.matches ? text('reducedMotion') : '';
  }
  function updateSceneAccess() {
    const canvas = byId('hero-canvas');
    byId('scene-stage').dataset.interactive = String(sceneInteractive);
    canvas.tabIndex = sceneInteractive ? 0 : -1;
    canvas.setAttribute('aria-hidden', String(!sceneInteractive));
    byId('scene-hint').textContent = text(sceneInteractive ? 'sceneHint' : 'sceneStatic');
    if (!sceneInteractive && document.activeElement === canvas) {
      const heading = byId('hero-title');
      heading.setAttribute('tabindex', '-1');
      try { heading.focus({ preventScroll: true }); } catch { heading.focus(); }
    }
  }
  window.addEventListener('qabat:scene', event => {
    sceneInteractive = Boolean(event.detail && event.detail.interactive);
    updateSceneAccess();
  });
  function updateCount() {
    const visible = cards.filter(card => !card.hidden);
    byId('work-count').textContent = `${String(visible.length).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
    byId('work-count').setAttribute('aria-label', `${visible.length} ${text('countLabel')}`);
    visible.forEach((card, index) => card.style.setProperty('--stack', index));
  }
  function renderProject(key) {
    const project = PROJECTS[key];
    byId('dialog-title').textContent = project.title;
    byId('dialog-image').src = project.image;
    byId('dialog-image').alt = text(`${key}Alt`);
    byId('dialog-description').textContent = text(`${key}Description`);
    byId('dialog-goal').textContent = text(`${key}Goal`);
    byId('dialog-solution').textContent = text(`${key}Solution`);
  }
  function setLanguage(next) {
    language = Object.prototype.hasOwnProperty.call(COPY, next) ? next : 'kk';
    root.lang = language;
    save('qabat-language', language);
    all('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    all('[data-i18n]').forEach(element => setTranslatedText(element, text(element.dataset.i18n)));
    [['data-i18n-aria', 'aria-label'], ['data-i18n-alt', 'alt'], ['data-i18n-placeholder', 'placeholder']].forEach(([key, attribute]) => {
      all(`[${key}]`).forEach(element => element.setAttribute(attribute, text(element.getAttribute(key))));
    });
    document.title = text('pageTitle');
    setMetadata('meta[name="description"]', text('pageDescription'));
    setMetadata('meta[property="og:title"]', text('pageTitle'));
    setMetadata('meta[property="og:description"]', text('ogDescription'));
    updateControlLabels(); updateSceneAccess(); updateCount();
    if (activeProject) renderProject(activeProject);
    touched.forEach(validateField);
    byId('copy-status').textContent = copyStatusKey ? text(copyStatusKey) : '';
    byId('form-status').textContent = formStatusKey ? text(formStatusKey) : '';
    scheduleScroll();
  }
  all('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

  function applyTheme(theme) {
    root.dataset.theme = theme;
    save('qabat-theme', theme);
    const fallback = document.querySelector('.scene-fallback');
    const fallbackPath = `assets/hero-sculpture-${theme}.webp`;
    if (fallback && fallback.getAttribute('src') !== fallbackPath) fallback.src = fallbackPath;
    setMetadata('meta[name="theme-color"]', theme === 'dark' ? '#191a17' : '#efeee8');
    updateControlLabels();
    emit('qabat:theme', { theme });
  }
  function syncSceneMotion() {
    // A full-screen overlay should not spend GPU time drawing the hidden hero.
    const overlayOpen = body.classList.contains('menu-open') || body.classList.contains('dialog-open') || navigating;
    emit('qabat:motion', { paused: motionPaused || overlayOpen });
  }
  byId('theme-toggle').addEventListener('click', event => {
    if (themeBusy) return;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    root.style.setProperty('--theme-x', `${x}px`);
    root.style.setProperty('--theme-y', `${y}px`);
    root.style.setProperty('--theme-radius', `${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px`);
    if (!document.startViewTransition || motionPaused || navigating) { applyTheme(next); return; }
    themeBusy = true;
    root.classList.add('theme-transition');
    try {
      const transition = document.startViewTransition(() => applyTheme(next));
      transition.finished.catch(() => {}).finally(() => { root.classList.remove('theme-transition'); themeBusy = false; });
    } catch { root.classList.remove('theme-transition'); themeBusy = false; applyTheme(next); }
  });
  function setMotion() {
    motionPaused = pausedByUser || reduce.matches;
    body.classList.toggle('motion-off', motionPaused);
    updateControlLabels();
    syncSceneMotion();
    if (motionPaused) { revealAll(); clearNavigation(); }
    scheduleScroll();
  }
  byId('motion-toggle').addEventListener('click', () => {
    if (reduce.matches) return;
    pausedByUser = !pausedByUser;
    save('qabat-motion', pausedByUser ? 'off' : 'on');
    setMotion();
  });
  mediaListen(reduce, setMotion);

  // The mobile menu is a real focus-contained navigation surface.
  const mobileMenu = byId('mobile-menu');
  const menuButton = byId('menu-toggle');
  const main = byId('main');
  function setMenu(open, restore = false) {
    mobileMenu.hidden = !open;
    mobileMenu.inert = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    body.classList.toggle('menu-open', open);
    main.inert = open;
    updateControlLabels();
    syncSceneMotion();
    if (open) {
      const first = mobileMenu.querySelector('a');
      if (first) first.focus();
    } else if (restore) menuButton.focus();
  }
  menuButton.addEventListener('click', () => setMenu(mobileMenu.hidden, !mobileMenu.hidden));
  mediaListen(desktop, event => { if (event.matches && !mobileMenu.hidden) setMenu(false); });
  document.addEventListener('keydown', event => {
    if (mobileMenu.hidden) return;
    if (event.key === 'Escape') { event.preventDefault(); setMenu(false, true); return; }
    if (event.key !== 'Tab') return;
    const focusable = [menuButton, ...mobileMenu.querySelectorAll('a[href], button:not([disabled])')];
    const index = focusable.indexOf(document.activeElement);
    if (event.shiftKey && index <= 0) { event.preventDefault(); focusable[focusable.length - 1].focus(); }
    else if (!event.shiftKey && (index === focusable.length - 1 || index === -1)) { event.preventDefault(); focusable[0].focus(); }
  });

  // Normal browser scroll remains intact. Curtain covers only explicit section jumps.
  function clearNavigation() {
    navigationTimers.forEach(clearTimeout);
    navigationTimers = [];
    body.classList.remove('nav-cover', 'nav-reveal');
    navigating = false;
    syncSceneMotion();
  }
  function jumpTo(target, hash) {
    const headerHeight = byId('header').getBoundingClientRect().height;
    const top = target.id === 'home' ? 0 : Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - 16);
    window.scrollTo({ top, behavior: 'auto' });
    try { if (window.location.hash !== hash) history.pushState(null, '', hash); } catch { /* Hash updates are optional in file previews. */ }
    const heading = target.querySelector('h1, h2') || target;
    if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
    try { heading.focus({ preventScroll: true }); } catch { heading.focus(); }
    scheduleScroll();
  }
  all('.js-jump').forEach(link => link.addEventListener('click', event => {
    if (event.defaultPrevented || event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const hash = link.getAttribute('href');
    if (!hash || !hash.startsWith('#')) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    event.preventDefault();
    if (navigating) return;
    if (link.id === 'dialog-cta') closeProject(false, false);
    if (!mobileMenu.hidden) setMenu(false);
    if (motionPaused) { jumpTo(target, hash); return; }
    navigating = true;
    syncSceneMotion();
    body.classList.remove('nav-reveal');
    body.classList.add('nav-cover');
    navigationTimers.push(setTimeout(() => {
      jumpTo(target, hash);
      body.classList.remove('nav-cover');
      body.classList.add('nav-reveal');
    }, 420));
    navigationTimers.push(setTimeout(clearNavigation, 900));
  }));
  window.addEventListener('pageshow', () => { clearNavigation(); if (!mobileMenu.hidden) setMenu(false); });

  // Reveal is an enhancement: without JS or with reduced motion, all copy is visible.
  function revealAll() {
    revealItems.forEach(element => { element.classList.remove('is-pending'); element.classList.add('is-visible'); });
    if (revealObserver) revealObserver.disconnect();
  }
  function setupReveals() {
    if (!('IntersectionObserver' in window) || motionPaused) { revealAll(); return; }
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('is-pending'); entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });
    revealItems.forEach(element => {
      if (element.getBoundingClientRect().top < innerHeight * 0.94) element.classList.add('is-visible');
      else { element.classList.add('is-pending'); revealObserver.observe(element); }
    });
  }
  // The decorative band only animates while visible. This adds no render loop.
  const marquee = document.querySelector('.marquee');
  if (marquee) {
    marquee.classList.add('motion-paused');
    if ('IntersectionObserver' in window) {
      const marqueeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.target.classList.toggle('motion-paused', !entry.isIntersecting));
      }, { threshold: 0.01 });
      marqueeObserver.observe(marquee);
    }
  }
  function syncPageVisibility() { body.classList.toggle('motion-paused', document.hidden); }
  document.addEventListener('visibilitychange', syncPageVisibility);
  syncPageVisibility();
  function updateScroll() {
    scrollFrame = 0;
    const scrollable = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    byId('scroll-progress').style.transform = `scaleX(${Math.max(0, Math.min(1, window.scrollY / scrollable))})`;
    byId('header').classList.toggle('is-scrolled', window.scrollY > 24);
    const visible = cards.filter(card => !card.hidden);
    const useStack = !smallScreen.matches && !motionPaused;
    visible.forEach((card, index) => {
      let progress = 0;
      if (useStack && index < visible.length - 1) {
        const nextTop = visible[index + 1].getBoundingClientRect().top;
        const start = innerHeight * 0.88;
        const end = byId('header').getBoundingClientRect().height + 54;
        progress = Math.max(0, Math.min(1, (start - nextTop) / Math.max(1, start - end)));
      }
      card.style.setProperty('--progress', progress.toFixed(4));
    });
    const hero = byId('home');
    const rect = hero.getBoundingClientRect();
    const overlayOpen = body.classList.contains('menu-open') || body.classList.contains('dialog-open') || navigating;
    if (!motionPaused && !overlayOpen && rect.bottom > 0 && rect.top < innerHeight && window.QabatScene) {
      window.QabatScene.setScrollProgress(Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height))));
    }
  }
  function scheduleScroll() { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); }
  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', scheduleScroll, { passive: true });
  mediaListen(smallScreen, scheduleScroll);

  all('.filter').forEach(button => button.addEventListener('click', () => {
    all('.filter').forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('is-active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      card.style.setProperty('--progress', '0');
    });
    updateCount(); scheduleScroll();
  }));

  const dialog = byId('project-dialog');
  function openProject(key, trigger) {
    if (!PROJECTS[key]) return;
    activeProject = key; projectTrigger = trigger;
    renderProject(key);
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else { dialog.setAttribute('open', ''); dialog.setAttribute('aria-modal', 'true'); }
    body.classList.add('dialog-open');
    syncSceneMotion();
    byId('dialog-close').focus();
  }
  let closingTimer = 0;
  function finishClose(restore) {
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    body.classList.remove('dialog-open');
    syncSceneMotion();
    activeProject = null;
    if (restore && projectTrigger) projectTrigger.focus();
  }
  // Closing plays the 3D flip-out first; instant closes (motion off, section jump) finish at once.
  function closeProject(restore = true, animate = true) {
    const canAnimate = animate && !motionPaused && typeof dialog.close === 'function' && dialog.hasAttribute('open');
    if (!canAnimate) { clearTimeout(closingTimer); dialog.classList.remove('is-closing'); finishClose(restore); return; }
    if (dialog.classList.contains('is-closing')) return;
    dialog.classList.add('is-closing');
    closingTimer = setTimeout(() => { dialog.classList.remove('is-closing'); finishClose(restore); }, 400);
  }
  all('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
  byId('dialog-close').addEventListener('click', () => closeProject());
  dialog.addEventListener('close', () => { body.classList.remove('dialog-open'); activeProject = null; syncSceneMotion(); });
  // Esc goes through the animated close too (native cancel would skip the flip-out).
  dialog.addEventListener('cancel', event => { if (!motionPaused) { event.preventDefault(); closeProject(); } });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProject();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && dialog.hasAttribute('open') && typeof dialog.showModal !== 'function') closeProject();
  });

  const fields = {
    name: { input: byId('name'), error: byId('name-error'), key: 'errorName', valid: value => [...value].length >= 2 },
    contact: { input: byId('contact-detail'), error: byId('contact-error'), key: 'errorContact', valid: value => {
      const email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u.test(value);
      const digits = value.replace(/\D/gu, '').length;
      const phone = /^\+?[\d\s().-]+$/u.test(value) && digits >= 7 && digits <= 15;
      return email || phone;
    } },
    message: { input: byId('message'), error: byId('message-error'), key: 'errorMessage', valid: value => [...value].length >= 10 }
  };
  function validateField(key) {
    const field = fields[key];
    const limit = field.input.maxLength > 0 ? field.input.maxLength : Infinity;
    const valid = field.valid(field.input.value.trim()) && field.input.value.length <= limit;
    field.input.setAttribute('aria-invalid', String(!valid));
    field.error.textContent = valid ? '' : text(field.key);
    return valid;
  }
  Object.entries(fields).forEach(([key, field]) => {
    field.input.addEventListener('blur', () => {
      if (field.input.value.trim() || touched.has(key)) { touched.add(key); validateField(key); }
    });
    field.input.addEventListener('input', () => {
      if (touched.has(key)) validateField(key);
      if (formStatusKey) { formStatusKey = ''; byId('form-status').textContent = ''; }
    });
  });
  byId('contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const invalid = [];
    Object.keys(fields).forEach(key => { touched.add(key); if (!validateField(key)) invalid.push(key); });
    if (invalid.length) {
      formStatusKey = 'errorSummary'; byId('form-status').textContent = text(formStatusKey);
      fields[invalid[0]].input.focus(); return;
    }
    const type = byId('project-type');
    const message = [text('whatsappGreeting'), '', `${text('nameLabel')}: ${fields.name.input.value.trim()}`,
      `${text('contactFieldLabel')}: ${fields.contact.input.value.trim()}`, `${text('typeLabel')}: ${type.options[type.selectedIndex].textContent}`,
      '', `${text('messageLabel')}:`, fields.message.input.value.trim()].join('\n');
    formStatusKey = 'whatsappStatus'; byId('form-status').textContent = text(formStatusKey);
    window.location.assign(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`);
  });
  function legacyCopy() {
    const input = document.createElement('textarea');
    input.value = DISPLAY_PHONE; input.readOnly = true;
    input.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    body.appendChild(input); input.select();
    let result = false;
    try { result = document.execCommand('copy'); } catch { /* Manual copy remains available. */ }
    input.remove(); byId('copy-phone').focus(); return result;
  }
  byId('copy-phone').addEventListener('click', async () => {
    let copied = false;
    try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(DISPLAY_PHONE); copied = true; } } catch { /* Try the local fallback. */ }
    if (!copied) copied = legacyCopy();
    copyStatusKey = copied ? 'copied' : 'copyFailed'; byId('copy-status').textContent = text(copyStatusKey);
  });

  root.dataset.theme = root.dataset.theme === 'light' ? 'light' : 'dark';
  body.classList.toggle('motion-off', motionPaused);
  setLanguage(read('qabat-language') || 'kk');
  applyTheme(root.dataset.theme);
  setMotion(); setupReveals();
  byId('year').textContent = String(new Date().getFullYear());
  scheduleScroll();
})();
