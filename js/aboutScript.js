document.addEventListener('DOMContentLoaded', () => {
  // ============================
  // LOADING SCREEN FUNCTIONALITY
  // ============================
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

  // ============================
  // BACKGROUND SLIDESHOW
  // ============================
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

  function updateHeroBackground() {
    if (heroSection) {
      heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
    }
    currentIndex = (currentIndex + 1) % heroImages.length;

    const nextInterval = Math.floor(Math.random() * 5000) + 10000;
    setTimeout(updateHeroBackground, nextInterval);
  }
  updateHeroBackground();

  // ============================
  // LANGUAGE SYSTEM
  // ============================
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
      
      "about-title": "About Palestinian Cultural Heritage",
      "about-subtitle": "Preserving and celebrating the rich cultural identity of Palestine",

      "mission-title": "Our Mission",
      "mission-text": "Our mission is to preserve aspects related to the Palestinian folk heritage, both tangible and oral, in light of the ongoing attempts to obliterate it.",

      "story-title": "Our Story",
      "story-text": "In 2025, a group of young people, headed by Diea Ahmed Ikhlayel, launched the \"Turathna\" website as part of the \"Empowering Journalists in Digital Media to Promote and Safeguard Palestinian Cultural Heritage\" project, with support from Irish Aid and Hebron University, with the aim of preserving Palestinian folklore.",

      "what-we-do": "What We Do",
      "documentation": "Documentation",
      "documentation-text": "We research and document Palestinian traditions, creating comprehensive archives accessible to researchers and the public.",

      "education": "Education",
      "education-text": "We conduct workshops, lectures, and educational programs to teach traditional Palestinian arts and crafts.",

      "preservation": "Preservation",
      "preservation-text": "We work with communities to preserve endangered traditions and support traditional artisans.",

      "project-credit": "Part of the Empowering Journalists in Digital Media to Promote and Safeguard Palestinian Cultural Heritage project, funded by Irish Aid.",
      "disclaimer": "The video does not necessarily reflect the views of the donor.",
      "copyright": "© 2025 Palestinian Cultural Heritage. All rights reserved."
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
      "oral": "الروايات الشفوية",
      "culture": "الثقافة",
      "heritage": "التراث",
      "geography": "الجغرافيا",
      "facts": "حقائق",
	  "icons": "الرموز الثقافية",

      "about-title": "حول التراث الثقافي الفلسطيني",
      "about-subtitle": "الحفاظ على الهوية الثقافية الغنية لفلسطين والاحتفال بها",

      "mission-title": "مهمتنا",
      "mission-text": "مهمتنا هي الحفاظ على الجوانب المتعلقة بالتراث الشعبي الفلسطيني، المادي منه والشفوي، في ظل المحاولات المستمرة لطمسه.",

      "story-title": "قصتنا",
      "story-text": "في عام 2025، أطلق مجموعة من الشباب بقيادة ضياء أحمد إخليل موقع \"تراثنا\" كجزء من مشروع \"تمكين الصحفيين في الإعلام الرقمي لتعزيز وحماية التراث الثقافي الفلسطيني\"، بدعم من برنامج Irish Aid وجامعة الخليل، بهدف الحفاظ على التراث الشعبي الفلسطيني.",

      "what-we-do": "ما نفعله",
      "documentation": "التوثيق",
      "documentation-text": "نقوم بالبحث وتوثيق التقاليد الفلسطينية، وإنشاء أرشيفات شاملة متاحة للباحثين والجمهور.",

      "education": "التعليم",
      "education-text": "نقوم بتنظيم ورش عمل ومحاضرات وبرامج تعليمية لتعليم الفنون والحرف الفلسطينية التقليدية.",

      "preservation": "الحفظ",
      "preservation-text": "نعمل مع المجتمعات المحلية للحفاظ على التقاليد المهددة بالانقراض ودعم الحرفيين التقليديين.",

      "project-credit": "جزء من مشروع تمكين الصحفيين في الإعلام الرقمي لتعزيز وحماية التراث الثقافي الفلسطيني، ممول من قبل Irish Aid.",
      "disclaimer": "الفيديو لا يعكس بالضرورة وجهة نظر المتبرع.",
      "copyright": "© 2025 التراث الثقافي الفلسطيني. جميع الحقوق محفوظة."
    }
  };

  const languageToggle = document.getElementById('language-toggle');
  let currentLanguage = localStorage.getItem('language') || 'en';

  // ============================
  // HERO VIDEO UPDATE BASED ON LANGUAGE
  // ============================
  function updateHeroVideo() {
    const heroVideoContainer = document.getElementById('hero-video');
    if (!heroVideoContainer) return;

    const arabicVideoId = '_kKBeVCdwQE';
    const englishVideoId = 'MJOs9RrGQzw';

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

  // ============================
  // APPLY LANGUAGE
  // ============================
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

  // ============================
  // MOBILE NAV MENU
  // ============================
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
