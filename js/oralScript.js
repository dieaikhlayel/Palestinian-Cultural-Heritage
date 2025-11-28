let currentLanguage = localStorage.getItem('language') || 'en';

function updateCardLinks() {
  document.querySelectorAll('.card-link').forEach(link => {
    const href =
      currentLanguage === 'ar'
        ? link.getAttribute('data-link-ar')
        : link.getAttribute('data-link-en');

    if (href) link.setAttribute('href', href);
  });
}

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
   * 0. Loading Screen
   * ========================================================== */
  const loadingScreen = document.getElementById('loading-screen');

  if (loadingScreen) {
    const minDuration = 5000;
    const maxDuration = 10000;
    const randomDuration =
      Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;

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
   * 1. DOM Elements
   * ========================================================== */
  const heroSection = document.querySelector('.hero');
  const languageToggle = document.getElementById('language-toggle');
  const heroVideoContainer = document.getElementById('hero-video');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');



  /* ==========================================================
   * 2. Hero Background Slideshow
   * ========================================================== */
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



  /* ==========================================================
   * 3. TRANSLATIONS
   * ========================================================== */
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

      "featured": "Featured Oral Narratives",
      "hero-title": "Discover Palestinian Oral Narratives",
      "hero-text": "Oral storytelling is a key part of Palestinian cultural heritage. These stories, passed down by grandparents and village elders, capture values, history, and wisdom.",

      "oral-header": "Palestinian Oral Narratives",
      "oral-intro": "Oral storytelling is a key part of Palestinian cultural heritage. These stories, passed down by grandparents and village elders, capture values, history, and wisdom.",

      "oral-story1-title": "The Tale of Antar and Abla",
      "oral-story1-desc": "A love story of bravery and poetry that echoes through generations in the Levant.",

      "oral-story2-title": "The Olive Tree and the Land",
      "oral-story2-desc": "A tale symbolizing the connection between Palestinians and their homeland.",

      "oral-story3-title": "Folk Proverbs and Wisdom",
      "oral-story3-desc": "Explore traditional Palestinian proverbs that reflect everyday life, resilience, and humor.",

      "oral-story4-title": "Palestinian Folktales",
      "oral-story4-desc": "Delve into captivating stories told for generations—tales of wit, bravery, and moral lessons.",

      "oral-story5-title": "Oral Poetry and Zajal",
      "oral-story5-desc": "Learn about the art of oral poetry and how it preserves national identity, pride, and passion.",

      "oral-story6-title": "Traditional Lullabies",
      "oral-story6-desc": "Discover tender lullabies sung to generations of Palestinian children, rich with emotion and meaning.",

      "project-credit":
        "Part of the Empowering Journalists in Digital Media to Promote and Safeguard Palestinian Cultural Heritage project, funded by Irish Aid.",

      "disclaimer": "The video does not necessarily reflect the views of the donor.",
      "copyright":
        "© 2025 Palestinian Cultural Heritage. All rights reserved."
    },

    ar: {
      "site-title": "تراثنا",
      "home": "الرئيسية",
      "about": "من نحن",
      "cuisine": "المطبخ",

      "heritage": "التراث",
      "culture": "الثقافة",

      "geography": "الجغرافيا",
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

      "featured": "الروايات الشفوية المميزة",
      "hero-title": "اكتشف الروايات الشفوية الفلسطينية",
      "hero-text": "تُعد الرواية الشفوية جزءًا أساسيًا من التراث الثقافي الفلسطيني. تنتقل هذه القصص من الأجداد وكبار السن وتحمل في طياتها القيم والحكمة والتاريخ.",

      "oral-header": "الروايات الشفوية الفلسطينية",
      "oral-intro": "تُعد الرواية الشفوية جزءًا أساسيًا من التراث الثقافي الفلسطيني. تنتقل هذه القصص من الأجداد وكبار السن وتحمل في طياتها القيم والحكمة والتاريخ.",

      "oral-story1-title": "قصة عنتر وعبلة",
      "oral-story1-desc": "قصة حب وشجاعة وشعر تتناقلها الأجيال في المشرق.",

      "oral-story2-title": "شجرة الزيتون والأرض",
      "oral-story2-desc": "قصة ترمز إلى ارتباط الفلسطينيين بأرضهم.",

      "oral-story3-title": "الأمثال والحكم الشعبية",
      "oral-story3-desc": "استكشف الأمثال الفلسطينية التقليدية التي تعكس الحياة اليومية والمرونة والفكاهة.",

      "oral-story4-title": "الحكايات الشعبية الفلسطينية",
      "oral-story4-desc": "انغمس في قصص جذابة توارثتها الأجيال، تحكي عن الذكاء والشجاعة والدروس الأخلاقية.",

      "oral-story5-title": "الشعر الشفهي والزجل",
      "oral-story5-desc": "تعرّف على فن الشعر الشفهي وكيف يحافظ على الهوية الوطنية والفخر والعاطفة.",

      "oral-story6-title": "تهويدات الأطفال التقليدية",
      "oral-story6-desc": "اكتشف تهويدات رددتها الأمهات الفلسطينيّات عبر الأجيال، مليئة بالمشاعر والمعاني العميقة.",

      "project-credit":
        "جزء من مشروع تمكين الصحفيين في الإعلام الرقمي لتعزيز وحماية التراث الثقافي الفلسطيني، ممول من قبل Irish Aid.",

      "disclaimer": "الفيديو لا يعكس بالضرورة وجهة نظر المتبرع.",
      "copyright":
        "© 2025 التراث الثقافي الفلسطيني. جميع الحقوق محفوظة."
    }
  };



  /* ==========================================================
   * 4. Language Switcher
   * ========================================================== */
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
   * 5. Hero Video
   * ========================================================== */
  function updateHeroVideo() {
    if (!heroVideoContainer) return;

    const arabicVideoId = 'VKsDp24mV-A';
    const englishVideoId = 'Dgb5m3kD4YU';

    const videoId = currentLanguage === 'ar' ? arabicVideoId : englishVideoId;

    heroVideoContainer.innerHTML = `
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>`;
  }



  /* ==========================================================
   * 6. Mobile Menu
   * ========================================================== */
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');

      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isExpanded));
    });
  }

});
