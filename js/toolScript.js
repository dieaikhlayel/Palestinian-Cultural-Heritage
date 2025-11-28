document.addEventListener('DOMContentLoaded', () => {

  /* ======================================
     0. Loading Screen Functionality
  ====================================== */
  const loadingScreen = document.getElementById('loading-screen');
  
  if (loadingScreen) {
    const minDuration = 5000;
    const maxDuration = 10000;
    const randomDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;

    let pageLoaded = false;
    let durationReached = false;

    function hideLoadingScreen() {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 300);
    }

    function checkHideLoading() {
      if (pageLoaded && durationReached) hideLoadingScreen();
    }

    setTimeout(() => {
      durationReached = true;
      checkHideLoading();
    }, randomDuration);

    window.addEventListener('load', () => {
      pageLoaded = true;
      checkHideLoading();
    });

    setTimeout(() => {
      if (loadingScreen.style.display !== 'none') hideLoadingScreen();
    }, 12000);
  }

  /* ======================================
     1. Hero Background Rotation
  ====================================== */
  const heroSection = document.querySelector('.hero');
  const heroImages = [
    'images/flag.jpg', 'images/hero1.jpg', 'images/hero2.jpg',
    'images/hero3.jpg', 'images/hero4.jpg', 'images/hero5.jpg',
    'images/hero6.jpg', 'images/hero7.jpg', 'images/hero8.jpg',
    'images/hero9.jpg', 'images/hero10.jpg', 'images/hero11.jpg',
    'images/hero12.jpg', 'images/hero13.jpg', 'images/hero14.jpg',  
    'images/hero15.jpg'
  ];

  heroImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  let currentIndex = 0;
  function updateHeroBackground() {
    if (!heroSection) return;

    heroSection.style.transition = 'background-image 1s ease-in-out';
    heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;

    currentIndex = (currentIndex + 1) % heroImages.length;

    const nextInterval = Math.floor(Math.random() * 5000) + 10000;
    setTimeout(updateHeroBackground, nextInterval);
  }
  updateHeroBackground();

  /* ======================================
     2. Translation Data
  ====================================== */
  const translations = {
    en: {
           "site-title": "Turathna",
      "home": "Home",
      "about": "About",
      "cuisine": "Cuisine",
      "art": "Art",
      "embroidery": "Embroidery",
      "tools": "Tools",
      "buildings": "Buildings",
      "history": "History",
      "festivals": "Festivals",
      "contact": "Contact",
      "oral": "Oral Narratives",
      "culture": "Culture",
      "heritage": "Heritage",
      "geography": "Geography",
      "facts": "Facts",
		"icons": "Cultural Icons",
		

      "tools-title": "Traditional Palestinian Tools",
      "tools-subtitle": "Artifacts of daily life and craftsmanship from Palestine's past",
      "heritage-title": "Tools of Palestinian Heritage",

      "agriculture": "Agricultural Tools",
      "agriculture-desc": "Traditional plows, sickles, and olive harvesting implements.",

      "weaving": "Weaving Tools",
      "weaving-desc": "Looms, spindles, and other textile production equipment.",

      "kitchen": "Kitchen Implements",
      "kitchen-desc": "Copper pots, mortar and pestles, and traditional baking tools.",

      "carpentry": "Carpentry Tools",
      "carpentry-desc": "Woodworking tools used in traditional Palestinian furniture making.",

      "coffee": "Coffee Making",
      "coffee-desc": "Traditional coffee roasting and grinding tools.",

      "artifacts-title": "Tools as Cultural Artifacts",
      "artifacts-text1": "Traditional Palestinian tools offer insight into the daily lives and livelihoods of past generations...",
      "artifacts-text2": "Agricultural tools dominate Palestinian traditional tool collections...",

      "project-credit": "Part of the Empowering Journalists in Digital Media to Promote and Safeguard Palestinian Cultural Heritage project, funded by Irish Aid.",
      "disclaimer": "The video does not necessarily reflect the views of the donor.",
      "copyright":
        "© 2025 Palestinian Cultural Heritage. All rights reserved."
    },

    ar: {
      "site-title": "تراثنا",
      "home": "الرئيسية",
      "about": "من نحن",
      "cuisine": "المطبخ",
      "art": "الفن",
      "embroidery": "التطريز",
      "tools": "الأدوات",
      "buildings": "المباني",
      "history": "التاريخ",
      "festivals": "المهرجانات",
      "contact": "اتصل بنا",
      "geography": "الجغرافيا",
      "heritage": "التراث",
      "culture": "الثقافة",
      "facts": "حقائق",
	   "icons": "الرموز الثقافية",

      "tools-title": "الأدوات الفلسطينية التقليدية",
      "tools-subtitle": "قطع من الحياة اليومية والحرف اليدوية من ماضي فلسطين",
      "heritage-title": "أدوات التراث الفلسطيني",

      "agriculture": "أدوات الزراعة",
      "agriculture-desc": "المحاريث التقليدية والمناجل وأدوات حصاد الزيتون.",

      "weaving": "أدوات النسيج",
      "weaving-desc": "أنوال النسيج والمغازل وغيرها من معدات إنتاج النسيج.",

      "kitchen": "أدوات المطبخ",
      "kitchen-desc": "أواني النحاس، الهاون والمدقة، وأدوات الخبز التقليدية.",

      "carpentry": "أدوات النجارة",
      "carpentry-desc": "أدوات النجارة المستخدمة في صناعة الأثاث الفلسطيني التقليدي.",

      "coffee": "أدوات تحضير القهوة",
      "coffee-desc": "أدوات تحميص وطحن القهوة التقليدية.",

      "artifacts-title": "الأدوات كقطع تراثية ثقافية",
      "artifacts-text1": "توفر الأدوات الفلسطينية التقليدية نظرة ثاقبة على الحياة اليومية ومصادر الرزق...",
      "artifacts-text2": "تهيمن الأدوات الزراعية على مجموعات الأدوات الفلسطينية التقليدية...",

      "project-credit": "جزء من مشروع تمكين الصحفيين في الإعلام الرقمي لتعزيز وحماية التراث الثقافي الفلسطيني، ممول من قبل Irish Aid.",
      "disclaimer": "الفيديو لا يعكس بالضرورة وجهة نظر المتبرع.",
      "copyright":
        "© 2025 التراث الثقافي الفلسطيني. جميع الحقوق محفوظة."
    }
  };

  /* ======================================
     3. Language Toggle Logic
  ====================================== */
  const languageToggle = document.getElementById('language-toggle');
  let currentLanguage = localStorage.getItem('language') || 'en';

  function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = translations[currentLanguage][key] || key;
    });

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

    if (languageToggle) {
      const label = currentLanguage === 'en' ? 'العربية' : 'English';
      const span = languageToggle.querySelector('span');
      if (span) span.textContent = label;
    }

    localStorage.setItem('language', currentLanguage);
    updateHeroVideo();
    updateCardLinks();
  }

  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
      updateLanguage();
    });
  }

  updateLanguage();

  /* ======================================
     4. Card Link Localization
  ====================================== */
  function updateCardLinks() {
    document.querySelectorAll('.card-link').forEach(link => {
      const href = currentLanguage === 'ar' ? link.dataset.linkAr : link.dataset.linkEn;
      if (href) link.href = href;
    });
  }

  /* ======================================
     5. Hero YouTube Video Switcher
  ====================================== */
  function updateHeroVideo() {
    const heroVideoContainer = document.getElementById('hero-video');
    if (!heroVideoContainer) return;

    const arabicVideoId = 'hFun_dz-LcE';
    const englishVideoId = 'zrSoc51dOPM';
    const videoId = currentLanguage === 'ar' ? arabicVideoId : englishVideoId;

    heroVideoContainer.innerHTML = `
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/${videoId}?si=YfzZoQz8GD80Xb-g"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    `;
  }

  /* ======================================
     6. Hamburger Menu Toggle
  ====================================== */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isExpanded));
    });
  }
});
