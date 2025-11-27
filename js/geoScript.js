document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
   * 0. Loading Screen
   * ========================================================== */
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
    if (pageLoaded && durationReached) {
      hideLoadingScreen();
    }
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

  if (heroSection) updateHeroBackground();



  /* ==========================================================
   * 3. Translation System
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

      "geo-hero-title": "Palestinian Geography",
      "geo-hero-text": "Explore the mountains, plains, valleys, and landscapes that shape Palestine.",
      "geo-title": "Geographical Regions of Palestine",

      "geo-coast-title": "Coastal Plains",
      "geo-coast-text": "Stretching along the Mediterranean Sea, including Jaffa, Acre, and Gaza.",

      "geo-highlands-title": "Central Highlands",
      "geo-highlands-text": "Mountain ranges including Jerusalem, Hebron, Bethlehem, and Nablus.",

      "geo-jordan-title": "Jordan Valley",
      "geo-jordan-text": "A deep valley forming part of the Great Rift Valley, known for agriculture and the Dead Sea.",

      "geo-negev-title": "Negev Desert",
      "geo-negev-text": "A vast desert region with rocky terrain and unique wildlife.",

      "geo-cities-title": "Major Cities",
      "geo-cities-text": "Jerusalem, Hebron, Gaza, Nablus, Bethlehem, and Ramallah hold great cultural importance.",

      "geo-climate-title": "Climate",
      "geo-climate-text": "Palestine’s climate ranges from Mediterranean to desert.",
	        "project-credit": "Part of the Empowering Journalists project, funded by Irish Aid.",

	  
	  "disclaimer": "The video does not necessarily reflect donor views.",
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
      "oral": "الروايات الشفوية",
      "history": "التاريخ",
      "festivals": "المهرجانات",
      "heritage": "التراث",
      "culture": "الثقافة",
      "contact": "اتصل بنا",
      "geography": "الجغرافيا",
      "facts": "حقائق",

      "geo-hero-title": "جغرافية فلسطين",
      "geo-hero-text": "استكشف الجبال والسهول والوديان والمناظر الطبيعية المتنوعة في فلسطين.",
      "geo-title": "المناطق الجغرافية في فلسطين",

      "geo-coast-title": "السهل الساحلي",
      "geo-coast-text": "يمتد على ساحل البحر المتوسط ويشمل يافا وعكا وغزة.",

      "geo-highlands-title": "المرتفعات الجبلية",
      "geo-highlands-text": "سلاسل جبلية تشمل القدس والخليل وبيت لحم ونابلس.",

      "geo-jordan-title": "الأغوار",
      "geo-jordan-text": "وادي عميق ضمن صدع البحر الميت، يتميز بالزراعة والبحر الميت.",

      "geo-negev-title": "صحراء النقب",
      "geo-negev-text": "منطقة صحراوية واسعة ذات طبيعة صخرية وحياة برية مميزة.",

      "geo-cities-title": "المدن الرئيسية",
      "geo-cities-text": "القدس، الخليل، غزة، نابلس، بيت لحم، ورام الله ذات أهمية ثقافية كبيرة.",

      "geo-climate-title": "المناخ",
      "geo-climate-text": "يتراوح مناخ فلسطين بين البحر الأبيض المتوسط والصحراوي.",
	        "project-credit": "جزء من مشروع ممول من Irish Aid.",
	   "disclaimer": "الفيديو لا يعكس بالضرورة رأي المتبرع.",
      "copyright": "© 2025 التراث الثقافي الفلسطيني."
    }
  };



  /* ==========================================================
   * 4. Language Switching
   * ========================================================== */
  let currentLanguage = localStorage.getItem("language") || "en";

  function updateLanguage() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = translations[currentLanguage][key] || key;
    });

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

    if (languageToggle) {
      languageToggle.querySelector("span").textContent =
        currentLanguage === "en" ? "العربية" : "English";
    }

    localStorage.setItem("language", currentLanguage);

    updateHeroVideo();
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      currentLanguage = currentLanguage === "en" ? "ar" : "en";
      updateLanguage();
    });
  }

  updateLanguage();



  /* ==========================================================
   * 5. Hero Video (optional)
   * ========================================================== */
  function updateHeroVideo() {
    if (!heroVideoContainer) return;

    const arabicVideoId = "LrhX0k1omHY";
    const englishVideoId = "5mZlOmnfWQM";

    const videoId = currentLanguage === "ar" ? arabicVideoId : englishVideoId;

    heroVideoContainer.innerHTML = `
      <iframe width="560" height="315"
      src="https://www.youtube.com/embed/${videoId}"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>`;
  }



  /* ==========================================================
   * 6. Mobile Navigation
   * ========================================================== */
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!isExpanded));
    });
  }

});
