/* ==========================================================
 * 0. Preload Images (from deferred script)
 * ========================================================== */
const preloadImages = [
    'images/flag.jpg', 'images/hero1.jpg', 'images/hero2.jpg',
    'images/hero3.jpg', 'images/hero4.jpg', 'images/hero5.jpg',
    'images/hero6.jpg', 'images/hero7.jpg', 'images/hero8.jpg',
    'images/hero9.jpg', 'images/hero10.jpg', 'images/hero11.jpg',
    'images/hero12.jpg', 'images/hero13.jpg', 'images/hero14.jpg',
    'images/hero15.jpg'
];

preloadImages.forEach(src => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
});


/* ==========================================================
 * 1. MAIN SCRIPT
 * ========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
   * Loading Screen
   * ========================================================== */
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


  /* ==========================================================
   * Hero Slideshow
   * ========================================================== */
  const heroSection = document.querySelector('.hero');
  const heroImages = [
    'images/flag.jpg', 'images/hero1.jpg', 'images/hero2.jpg',
    'images/hero3.jpg', 'images/hero4.jpg', 'images/hero5.jpg',
    'images/hero6.jpg', 'images/hero7.jpg', 'images/hero8.jpg',
    'images/hero9.jpg', 'images/hero10.jpg', 'images/hero11.jpg',
    'images/hero12.jpg', 'images/hero13.jpg', 'images/hero14.jpg',
    'images/hero15.jpg'
  ];

  let currentIndex = 0;

  function updateHeroBackgroundImage() {
    if (!heroSection) return;

    heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % heroImages.length;

    const nextInterval = Math.floor(Math.random() * 5000) + 10000;
    setTimeout(updateHeroBackgroundImage, nextInterval);
  }

  updateHeroBackgroundImage();


  /* ==========================================================
   * Translations
   * ========================================================== */
  const languageToggle = document.getElementById('language-toggle');
  let currentLanguage = localStorage.getItem('language') || 'en';

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

      "historyTitle": "Palestinian History",
      "historySubtitle": "A land of ancient civilizations and enduring culture",

      "timelineTitle": "Historical Timeline",

      "canaaniteTitle": "Canaanite Period",
      "canaaniteDesc": "The Bronze Age origins of Palestinian civilization (3000–1200 BCE).",

      "philistineTitle": "Philistine Era",
      "philistineDesc": "The coastal civilization that gave Palestine its name (1200–600 BCE).",

      "romanTitle": "Roman Rule",
      "romanDesc": "From Pompey's conquest to the Byzantine era (63 BCE–636 CE).",

      "islamicTitle": "Islamic Caliphates",
      "islamicDesc": "Arab Muslim rule beginning in the 7th century.",

      "crusaderTitle": "Crusader Kingdoms",
      "crusaderDesc": "European Christian rule (1099–1291) and its legacy.",

      "ottomanTitle": "Ottoman Era",
      "ottomanDesc": "Four centuries of Ottoman rule (1516–1917).",

      "more": "More",

      "culturalTitle": "Cultural Continuity",
      "culturalP1": "Despite numerous conquests and rulers throughout history, Palestinian culture has demonstrated remarkable continuity...",
      "culturalP2": "The 20th century brought dramatic changes with the Nakba (catastrophe) of 1948...",

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
      "geography": "الجغرافيا",
      "heritage": "التراث",
      "culture": "الثقافة",
      "art": "الفن",
      "embroidery": "التطريز",
      "tools": "الأدوات",
      "buildings": "المباني",
      "history": "التاريخ",
      "festivals": "المهرجانات",
      "contact": "اتصل بنا",
      "oral": "الروايات الشفوية",
      "facts": "حقائق",
	   "icons": "الرموز الثقافية",

      "historyTitle": "التاريخ الفلسطيني",
      "historySubtitle": "أرض الحضارات القديمة والثقافة الدائمة",

      "timelineTitle": "الخط الزمني التاريخي",

      "canaaniteTitle": "الفترة الكنعانية",
      "canaaniteDesc": "أصول الحضارة الفلسطينية في العصر البرونزي (3000–1200 قبل الميلاد).",

      "philistineTitle": "العصر الفلسطيني",
      "philistineDesc": "الحضارة الساحلية التي أعطت فلسطين اسمها (1200–600 قبل الميلاد).",

      "romanTitle": "الحكم الروماني",
      "romanDesc": "من غزو بومبي إلى العصر البيزنطي (63 ق.م – 636 م).",

      "islamicTitle": "الخلافات الإسلامية",
      "islamicDesc": "الحكم الإسلامي العربي الذي بدأ في القرن السابع.",

      "crusaderTitle": "ممالك الصليبيين",
      "crusaderDesc": "الحكم المسيحي الأوروبي (1099–1291) وإرثه.",

      "ottomanTitle": "العهد العثماني",
      "ottomanDesc": "أربعة قرون من الحكم العثماني (1516–1917).",

      "more": "المزيد",

      "culturalTitle": "استمرارية الثقافة",
      "culturalP1": "على الرغم من الغزوات العديدة والحكام المتعاقبين، أظهرت الثقافة الفلسطينية استمرارية ملحوظة...",
      "culturalP2": "جلب القرن العشرون تغييرات جذرية مع النكبة عام 1948...",

      "project-credit":
        "جزء من مشروع تمكين الصحفيين في الإعلام الرقمي لتعزيز وحماية التراث الثقافي الفلسطيني، ممول من قبل Irish Aid.",
      "disclaimer": "الفيديو لا يعكس بالضرورة وجهة نظر المتبرع.",
      "copyright":
        "© 2025 التراث الثقافي الفلسطيني. جميع الحقوق محفوظة."
    }
  };


  /* ==========================================================
   * Dynamic Card Links
   * ========================================================== */
  function updateCardLinks() {
    document.querySelectorAll('.card-link').forEach(link => {
      const href = currentLanguage === 'ar' ? link.dataset.linkAr : link.dataset.linkEn;
      if (href) link.href = href;
    });
  }


  /* ==========================================================
   * Hero YouTube Video Embed
   * ========================================================== */
  function updateHeroVideoEmbed() {
    const heroVideoContainer = document.getElementById('hero-video');
    if (!heroVideoContainer) return;

    const arabicVideoId = 'f0oy-NicIgE';
    const englishVideoId = 'QUCeQt8zg5o';

    const videoId = currentLanguage === 'ar' ? arabicVideoId : englishVideoId;

    heroVideoContainer.innerHTML = `
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/${videoId}?si=YfzZoQz8GD80Xb-g"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>`;
  }


  /* ==========================================================
   * Language Switching System
   * ========================================================== */
  function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = translations[currentLanguage][key] || key;
    });

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

    if (languageToggle) {
      const span = languageToggle.querySelector('span');
      if (span) span.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    }

    localStorage.setItem('language', currentLanguage);

    updateHeroVideoEmbed();
    updateCardLinks();
  }

  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
      updateLanguage();
    });
  }

  updateLanguage();


  /* ==========================================================
   * Mobile Navigation Menu
   * ========================================================== */
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
