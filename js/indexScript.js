document.addEventListener('DOMContentLoaded', () => {

  /** =======================
   * 0. Loading Screen Functionality
   * ======================= */
  const loadingScreen = document.getElementById('loading-screen');

  const minDuration = 5000;
  const maxDuration = 10000;
  const randomDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;

  let pageLoaded = false;
  let durationReached = false;

  function hideLoadingScreen() {
    if (loadingScreen) {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 300);
    }
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
    if (loadingScreen && loadingScreen.style.display !== 'none') {
      hideLoadingScreen();
    }
  }, 12000);

  /** =======================
   * 1. DOM Elements
   * ======================= */
  const heroSection = document.querySelector('.hero');
  const languageToggle = document.getElementById('language-toggle');
  const heroVideoContainer = document.getElementById('hero-video');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  /** =======================
   * 2. Hero Slideshow
   * ======================= */
  const heroImages = [
    'images/flag.jpg', 'images/hero1.jpg', 'images/hero2.jpg', 'images/hero3.jpg',
    'images/hero4.jpg', 'images/hero5.jpg', 'images/hero6.jpg', 'images/hero7.jpg',
    'images/hero8.jpg', 'images/hero9.jpg', 'images/hero10.jpg', 'images/hero11.jpg',
    'images/hero12.jpg', 'images/hero13.jpg', 'images/hero14.jpg', 'images/hero15.jpg'
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

  /** =======================
   * 3. Translations
   * ======================= */
   const translations = {
    en: {
      // Navigation
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
  
      // Hero Section
      "hero-title": "Discover Palestinian Cultural Heritage",
      "hero-text": "Explore the rich traditions, art, cuisine, and history of Palestine.",
      "geo-hero-text": "Explore Palestine’s diverse landscapes.",
      "facts-hero-text": "Discover unique cultural, historical, and geographical facts about Palestine.",
  
      // Buttons
      "learn-more": "Learn More",
      "featured": "Featured Cultural Aspects",
      "explore": "Explore →",
  
      // Feature Cards
      "cuisine-title": "Traditional Cuisine",
      "cuisine-text": "Discover Palestine's traditional dishes like maqluba, musakhan, and kanafeh.",
  
      "embroidery-title": "Tatreez Embroidery",
      "embroidery-text": "Learn about the intricate centuries-old tradition.",
  
      "architecture-title": "Architecture",
      "architecture-text": "Explore unique Palestinian architectural styles.",
  
      "art-title": "Palestinian Art",
      "art-text": "Experience Palestinian creativity in many art forms.",
  
      "tools-title": "Traditional Tools",
      "tools-text": "Discover traditional agricultural and household tools.",
  
      "history-title": "Palestinian History",
      "history-text": "Learn about Palestine's history from ancient to modern times.",
  
      "oral-title": "Palestinian Oral Narratives",
      "oral-text": "Explore storytelling traditions that preserve identity.",
  
      "festivals-title": "Cultural Festivals",
      "festivals-text": "Celebrate Palestinian culture through festivals.",
  
      // Footer
      "project-credit": "Part of the Empowering Journalists project, funded by Irish Aid.",
      "disclaimer": "The video does not necessarily reflect donor views.",
      "copyright": "© 2025 Palestinian Cultural Heritage. All rights reserved."
    },
  
    ar: {
      // Navigation
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
      "oral": "الروايات الشفوية",
      "culture": "الثقافة",
      "heritage": "التراث",
      "geography": "الجغرافيا",
      "facts": "حقائق",
  
      // Hero Section
      "hero-title": "اكتشف التراث الثقافي الفلسطيني",
      "hero-text": "استكشف التقاليد والفنون والمأكولات وتاريخ فلسطين.",
      "geo-hero-text": "استكشف طبيعة فلسطين المتنوعة.",
      "facts-hero-text": "اكتشف حقائق ثقافية وتاريخية وجغرافية مميزة عن فلسطين.",
  
      // Buttons
      "learn-more": "معرفة المزيد",
      "featured": "الجوانب الثقافية البارزة",
      "explore": "استكشف →",
  
      // Feature Cards
      "cuisine-title": "المأكولات التقليدية",
      "cuisine-text": "المقلوبة، المسخن، والكنافة.",
  
      "embroidery-title": "التطريز",
      "embroidery-text": "تعرف على فن التطريز الفلسطيني.",
  
      "architecture-title": "العمارة",
      "architecture-text": "استكشف الأنماط المعمارية الفلسطينية.",
  
      "art-title": "الفن الفلسطيني",
      "art-text": "إبداع الفنانين الفلسطينيين.",
  
      "tools-title": "الأدوات التقليدية",
      "tools-text": "الأدوات الزراعية والمنزلية.",
  
      "history-title": "التاريخ الفلسطيني",
      "history-text": "التاريخ من الحضارات القديمة حتى اليوم.",
  
      "oral-title": "الروايات الشفوية الفلسطينية",
      "oral-text": "قوة السرد الفلسطيني.",
  
      "festivals-title": "المهرجانات الثقافية",
      "festivals-text": "احتفال بالثقافة الفلسطينية.",
  
      // Footer
      "project-credit": "جزء من مشروع ممول من Irish Aid.",
      "disclaimer": "الفيديو لا يعكس بالضرورة رأي المتبرع.",
      "copyright": "© 2025 التراث الثقافي الفلسطيني."
    }
  };
  

  /** =======================
   * 4. Language Handling
   * ======================= */
  let currentLanguage = localStorage.getItem('language') || 'en';

  function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = translations[currentLanguage][key] || key;
    });

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

    if (languageToggle) {
      languageToggle.querySelector('span').textContent =
        currentLanguage === 'en' ? 'العربية' : 'English';
    }

    localStorage.setItem('language', currentLanguage);
    updateHeroVideo();
  }

  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
      updateLanguage();
    });
  }

  updateLanguage();

  /** =======================
   * 5. Hero Video
   * ======================= */
  function updateHeroVideo() {
    if (!heroVideoContainer) return;

    const arabicVideoId = '_kKBeVCdwQE';
    const englishVideoId = 'MJOs9RrGQzw';
    const videoId = currentLanguage === 'ar' ? arabicVideoId : englishVideoId;

    heroVideoContainer.innerHTML = `
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/${videoId}"
        frameborder="0"
        allowfullscreen>
      </iframe>
    `;
  }

  /** =======================
   * 6. Mobile Menu
   * ======================= */
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
    });
  }

});
