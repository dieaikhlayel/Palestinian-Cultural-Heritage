  document.addEventListener('DOMContentLoaded', () => {
      // Loading screen (same behaviour as other pages)
      const loadingScreen = document.getElementById('loading-screen');
      const minDuration = 5000; const maxDuration = 10000;
      const randomDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;
      let pageLoaded = false, durationReached = false;
      function hideLoadingScreen(){ if(loadingScreen){ loadingScreen.classList.add('fade-out'); setTimeout(()=>{ loadingScreen.style.display='none'; },300); } }
      function checkHide(){ if(pageLoaded && durationReached) hideLoadingScreen(); }
      setTimeout(()=>{ durationReached=true; checkHide(); }, randomDuration);
      window.addEventListener('load', ()=>{ pageLoaded=true; checkHide(); });
      setTimeout(()=>{ if(loadingScreen && loadingScreen.style.display !== 'none') hideLoadingScreen(); }, 12000);

      // DOM
      const heroSection = document.querySelector('.hero');
      const languageToggle = document.getElementById('language-toggle');
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');

      // Hero slideshow (preload images list used above)
      const heroImages = [
	  'images/flag.jpg', 'images/hero1.jpg', 'images/hero2.jpg', 'images/hero3.jpg',
    'images/hero4.jpg', 'images/hero5.jpg', 'images/hero6.jpg', 'images/hero7.jpg',
    'images/hero8.jpg', 'images/hero9.jpg', 'images/hero10.jpg', 'images/hero11.jpg',
    'images/hero12.jpg', 'images/hero13.jpg', 'images/hero14.jpg', 'images/hero15.jpg'
	  ];
      heroImages.forEach(src=>{ const i=new Image(); i.src=src; });
      let idx=0;
      function updateHeroBg(){ if(!heroSection) return; heroSection.style.backgroundImage = `url('${heroImages[idx]}')`; idx=(idx+1)%heroImages.length; setTimeout(updateHeroBg, Math.floor(Math.random()*5000)+8000); }
      if(heroSection) updateHeroBg();

      // Translations for this page (merged into global-style object)
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
		
          "icons-hero-title":"Palestinian Cultural Icons",
          "icons-hero-text":"Discover people, symbols and heritage that shape Palestinian identity.",
          "icons-title":"Cultural Icons",
          "icons-national":"National Icons",
          "icons-figures":"Influential Figures",
          "icons-artistic":"Artistic & Heritage Icons",

          "icon1-title":"Handala","icon1-text":"A powerful emblem of Palestinian identity and resistance created by Naji al-Ali.",
          "icon2-title":"Key of Return","icon2-text":"The symbolic key carried by families representing the right of return.",
          "icon3-title":"Kuffiyeh","icon3-text":"The traditional scarf that became a symbol of Palestinian identity worldwide.",
          "icon4-title":"Palestinian Flag","icon4-text":"A national emblem whose colors carry deep historical and cultural meanings.",

          "icon5-title":"Mahmoud Darwish","icon5-text":"Poet and voice of Palestinian modern literature and longing.",
          "icon6-title":"Fadwa Tuqan","icon6-text":"Renowned poet who reflected social realities and personal resilience.",
          "icon7-title":"Ghassan Kanafani","icon7-text":"Writer and intellectual whose works captured Palestinian experience.",
          "icon8-title":"Rim Banna","icon8-text":"Singer and cultural preservationist of Palestinian songs and folklore.",

          "icon9-title":"Oud","icon9-text":"A classic string instrument central to Palestinian and Levantine music.",
          "icon10-title":"Olive Tree","icon10-text":"A living symbol of life, continuity and connection to the land.",
          "icon11-title":"Arabic Calligraphy","icon11-text":"An artistic tradition used in manuscripts, murals and religious art.",
          "icon12-title":"Tatreez Thobe","icon12-text":"The embroidered dress that tells regional stories through patterns and colors.",

          "project-credit":"Part of the Empowering Journalists project, funded by Irish Aid.",
          "disclaimer":"The video does not necessarily reflect donor views.",
          "copyright":"© 2025 Palestinian Cultural Heritage. All rights reserved."
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
	  
          "icons-hero-title":"الرموز الثقافية الفلسطينية",
          "icons-hero-text":"اكتشف الأشخاص والرموز والتراث التي تشكل الهوية الفلسطينية.",
          "icons-title":"الرموز الثقافية",
          "icons-national":"الرموز الوطنية",
          "icons-figures":"الشخصيات المؤثرة",
          "icons-artistic":"رموز فنية وتراثية",

          "icon1-title":"حنظلة","icon1-text":"رمز قوي للهوية والمقاومة الفلسطينية من إبداع ناجي العلي.",
          "icon2-title":"مفتاح العودة","icon2-text":"المفتاح الرمزي الذي تحمله العائلات معبراً عن حق العودة.",
          "icon3-title":"الكوفية","icon3-text":"الوشاح التقليدي الذي أصبح رمزًا للهوية الفلسطينية عالميًا.",
          "icon4-title":"علم فلسطين","icon4-text":"رمز وطني تحمل ألوانه معانٍ تاريخية وثقافية عميقة.",

          "icon5-title":"محمود درويش","icon5-text":"شاعر وصوت الأدب الفلسطيني الحديث والحنين.",
          "icon6-title":"فدوى طوقان","icon6-text":"شاعرة تعكس الواقع الاجتماعي وقوة الصمود.",
          "icon7-title":"غسان كنفاني","icon7-text":"كاتب ومفكر جسد التجربة الفلسطينية في أعماله.",
          "icon8-title":"ريم بنا","icon8-text":"مطربة حارست الأغنية والتراث الفلسطيني.",

          "icon9-title":"العود","icon9-text":"آلة وترية تقليدية في الموسيقى الفلسطينية والشامية.",
          "icon10-title":"شجرة الزيتون","icon10-text":"رمز حي للحياة والاستمرارية والارتباط بالأرض.",
          "icon11-title":"الخط العربي","icon11-text":"تقليد فني يظهر في المخطوطات والجداريات والفنون الدينية.",
          "icon12-title":"الثوب المطرز","icon12-text":"الثوب الذي يروي تاريخ المناطق عبر النقوش والألوان.",

          "project-credit":"جزء من مشروع تمكين الصحفيين الممول من Irish Aid.",
          "disclaimer":"الفيديو لا يعكس بالضرورة رأي الجهة المانحة.",
          "copyright":"© 2025 التراث الثقافي الفلسطيني."
        }
      };

      // language handling
      let currentLanguage = localStorage.getItem('language') || 'en';

      function updateLanguage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.dataset.i18n;
          if (translations[currentLanguage] && translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
          }
        });

        document.documentElement.lang = currentLanguage;
        document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

        if (languageToggle) {
          languageToggle.querySelector('span').textContent = currentLanguage === 'en' ? 'العربية' : 'English';
        }

        localStorage.setItem('language', currentLanguage);
      }

      if (languageToggle) {
        languageToggle.addEventListener('click', () => {
          currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
          updateLanguage();
        });
      }

      updateLanguage();

      // mobile nav
      if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
          navLinks.classList.toggle('active');
          const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
          hamburger.setAttribute('aria-expanded', String(!isExpanded));
        });
      }

    });