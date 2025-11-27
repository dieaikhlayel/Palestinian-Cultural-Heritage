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
      if (loadingScreen && loadingScreen.style.display !== 'none') hideLoadingScreen();
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
     * 3. Translation System (FACTS PAGE)
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
          "oral": "Oral Narratives",
          "history": "History",
          "festivals": "Festivals",
          "heritage": "Heritage",
          "culture": "Culture",
          "contact": "Contact",
          "geography": "Geography",
          "facts": "Facts",
      
          /* --- Facts Page --- */
          "facts-hero-title": "Interesting Facts About Palestine",
          "facts-hero-text": "Discover unique cultural, historical, and geographical facts about Palestine.",
          "facts-title": "Palestinian Facts",
      
          "fact1-title": "Ancient Civilizations",
          "fact1-text": "Palestine has hosted some of the world’s oldest civilizations, with traces dating back over 5,000 years.",
      
          "fact2-title": "Olive Trees",
          "fact2-text": "Some olive trees in Palestine are more than 2,000 years old, symbolizing resilience and heritage.",
      
          "fact3-title": "Population",
          "fact3-text": "More than 14 million Palestinians live around the world, both in Palestine and in diaspora communities.",
      
          "fact4-title": "Rich Cuisine",
          "fact4-text": "Palestinian cuisine is known for dishes like musakhan, maqluba, and knafeh — each tied to local tradition.",
      
          "fact5-title": "UNESCO Sites",
          "fact5-text": "Sites like Hebron’s Old City and Bethlehem’s Nativity Church are recognized as UNESCO World Heritage.",
      
          "fact6-title": "Lowest Point on Earth",
          "fact6-text": "The Dead Sea in Palestine sits at the lowest point on Earth, about 430 meters below sea level.",

"fact7-title": "Traditional Embroidery",
"fact7-text": "Palestinian embroidery, known as “Tatreez,” is a centuries-old art form recognized by UNESCO.",

"fact8-title": "Multiple Languages in Jerusalem",
"fact8-text": "Arabic, Aramaic, and other ancient languages have historically been spoken in Jerusalem.",

"fact9-title": "Unique Wildlife",
"fact9-text": "Palestine is home to diverse wildlife including gazelles, hyraxes, and rare migratory birds.",

"fact10-title": "Traditional Music",
"fact10-text": "Palestinian traditional music features instruments like the oud, mijwiz, and qanun.",


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
      
          /* --- Facts Page --- */
          "facts-hero-title": "حقائق مدهشة عن فلسطين",
          "facts-hero-text": "اكتشف حقائق ثقافية وتاريخية وجغرافية مميزة عن فلسطين.",
          "facts-title": "حقائق فلسطينية",
      
          "fact1-title": "حضارات قديمة",
          "fact1-text": "احتضنت فلسطين بعضاً من أقدم الحضارات في العالم، مع آثار يعود تاريخها لأكثر من 5000 عام.",
      
          "fact2-title": "أشجار الزيتون",
          "fact2-text": "بعض أشجار الزيتون في فلسطين يتجاوز عمرها 2000 عام، مما يجعلها رمزاً للصمود والتراث.",
      
          "fact3-title": "عدد السكان",
          "fact3-text": "يعيش أكثر من 14 مليون فلسطيني حول العالم، داخل فلسطين وفي الشتات.",
      
          "fact4-title": "المطبخ الفلسطيني",
          "fact4-text": "يشتهر المطبخ الفلسطيني بأطباق مثل المسخن والمقلوبة والكنافة، وكل منها مرتبط بتقاليد محلية عريقة.",
      
          "fact5-title": "مواقع اليونسكو",
          "fact5-text": "تم إدراج مواقع مثل البلدة القديمة في الخليل وكنيسة المهد في بيت لحم ضمن قائمة التراث العالمي لليونسكو.",
      
          "fact6-title": "أخفض نقطة على الأرض",
"fact6-text": "يقع البحر الميت في فلسطين في أخفض نقطة على سطح الأرض بعمق 430 مترًا تحت مستوى البحر.",

"fact7-title": "التطريز الفلسطيني",
"fact7-text": "يُعد التطريز الفلسطيني أو “التطريز” فناً تقليدياً عمره قرون ومعترف به من اليونسكو.",

"fact8-title": "لغات القدس",
"fact8-text": "تاريخياً، كانت العربية والآرامية ولغات أخرى تُستخدم في مدينة القدس.",

"fact9-title": "حياة برية متنوعة",
"fact9-text": "تضم فلسطين حياة برية متنوعة تشمل الغزلان والوبر البري وأنواعاً نادرة من الطيور المهاجرة.",

"fact10-title": "الموسيقى التقليدية",
"fact10-text": "تتميز الموسيقى الفلسطينية بآلات مثل العود والمجوز والقانون.",


          "project-credit": "جزء من مشروع تمكين الصحفيين الممول من Irish Aid.",
          "disclaimer": "الفيديو لا يعكس بالضرورة رأي الجهة المانحة.",
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
  
      const arabicVideoId = "icueyozDkdc";  
      const englishVideoId = "m7JVKcGRnbM";
  
      const videoId = currentLanguage === "ar" ? arabicVideoId : englishVideoId;
  
      heroVideoContainer.innerHTML = `
        <iframe width="560" height="315"
        src="https://www.youtube.com/embed/${videoId}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
  