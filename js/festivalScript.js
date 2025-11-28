document.addEventListener('DOMContentLoaded', () => {

  // === Loading Screen Functionality ===
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
      if (loadingScreen.style.display !== 'none') hideLoadingScreen();
    }, 12000);
  }

  // === Hero Background Rotation ===
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
    if (!heroSection) return;
    heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % heroImages.length;

    const nextInterval = Math.floor(Math.random() * 5000) + 10000;
    setTimeout(updateHeroBackground, nextInterval);
  }
  updateHeroBackground();

  // === Translation System ===
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

    "festivals-title": "Palestinian Festivals",
    "festivals-subtitle": "Celebrations of harvest, heritage, and community",
    "festivals-types": "Traditional and Contemporary Festivals",

    "olive-festival": "Olive Harvest Festival",
    "olive-desc": "Celebrating Palestine's most important agricultural product.",

    "cultural-festival": "Palestinian Cultural Festival",
    "cultural-desc": "Annual celebration of music, dance, and traditional arts.",

    "religious-festivals": "Religious Festivals",
    "religious-desc": "Christian and Muslim holidays celebrated across Palestine.",

    "weddings": "Wedding Celebrations",
    "weddings-desc": "Traditional multi-day Palestinian wedding festivities.",

    "dabke": "Dabke Performances",
    "dabke-desc": "The traditional Palestinian line dance featured at celebrations.",

    "music-festivals": "Music Festivals",
    "music-desc": "Contemporary festivals showcasing Palestinian musicians.",

    "expression-title": "Festivals as Cultural Expression",
    "expression-text1":
      "Palestinian festivals serve as vibrant expressions of cultural identity and community solidarity. Traditional celebrations often revolve around agricultural cycles, particularly the olive harvest, while religious festivals bring together Christian and Muslim communities in shared public spaces.",
    "expression-text2":
      "Contemporary cultural festivals have become important platforms for Palestinian artists, musicians, and performers. These events often blend traditional elements like dabke dancing and folk music with modern artistic expressions. In diaspora communities, Palestinian festivals help maintain cultural connections across generations.",

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
    "culture": "الثقافة",       // ✔ corrected
    "heritage": "التراث",      // ✔ added
    "geography": "الجغرافيا",
    "art": "الفن",
    "embroidery": "التطريز",
    "tools": "الأدوات",
    "buildings": "المباني",
    "history": "التاريخ",
    "festivals": "المهرجانات",
    "oral": "الروايات الشفوية",
    "contact": "اتصل بنا",
    "facts": "حقائق",
	 "icons": "الرموز الثقافية",

    "festivals-title": "المهرجانات الفلسطينية",
    "festivals-subtitle": "احتفالات الحصاد والتراث والمجتمع",
    "festivals-types": "المهرجانات التقليدية والمعاصرة",

    "olive-festival": "مهرجان قطف الزيتون",
    "olive-desc": "الاحتفال بأهم منتج زراعي في فلسطين.",

    "cultural-festival": "المهرجان الثقافي الفلسطيني",
    "cultural-desc": "احتفال سنوي بالموسيقى والرقص والفنون التقليدية.",

    "religious-festivals": "المهرجانات الدينية",
    "religious-desc": "الأعياد المسيحية والإسلامية التي يتم الاحتفال بها في جميع أنحاء فلسطين.",

    "weddings": "احتفالات الزفاف",
    "weddings-desc":
      "احتفالات الزفاف الفلسطينية التقليدية التي تستمر عدة أيام.",

    "dabke": "عروض الدبكة",
    "dabke-desc": "رقصة الدبكة الفلسطينية التقليدية التي تظهر في الاحتفالات.",

    "music-festivals": "مهرجانات الموسيقى",
    "music-desc": "مهرجانات معاصرة تعرض موسيقيين فلسطينيين.",

    "expression-title": "المهرجانات كتعبير ثقافي",
    "expression-text1":
      "تمثل المهرجانات الفلسطينية تعبيرات حيوية عن الهوية الثقافية والتضامن المجتمعي. غالبًا ما تدور الاحتفالات التقليدية حول الدورات الزراعية، وخاصة حصاد الزيتون، بينما تجمع المهرجانات الدينية المجتمعات المسيحية والمسلمة في مساحات عامة مشتركة.",
    "expression-text2":
      "أصبحت المهرجانات الثقافية المعاصرة منصات مهمة للفنانين والموسيقيين والفنانين الفلسطينيين. غالبًا ما تمزج هذه الأحداث بين العناصر التقليدية مثل رقصة الدبكة والموسيقى الشعبية مع التعبيرات الفنية الحديثة. في مجتمعات الشتات، تساعد المهرجانات الفلسطينية في الحفاظ على الروابط الثقافية عبر الأجيال.",

    "project-credit":
      "جزء من مشروع تمكين الصحفيين في الإعلام الرقمي لتعزيز وحماية التراث الثقافي الفلسطيني، ممول من قبل Irish Aid.",

    "disclaimer": "الفيديو لا يعكس بالضرورة وجهة نظر المتبرع.",
    "copyright":
      "© 2025 التراث الثقافي الفلسطيني. جميع الحقوق محفوظة."
  }
};

  // === Language Toggle ===
  const languageToggle = document.getElementById('language-toggle');
  let currentLanguage = localStorage.getItem('language') || 'en';

  function updateHeroVideo() {
    const heroVideoContainer = document.getElementById('hero-video');
    if (!heroVideoContainer) return;

    const arabicVideoId = 'SyVm4Dt_OfI';
    const englishVideoId = 'JBw6UCQ_JxI';
    const videoId = currentLanguage === 'ar' ? arabicVideoId : englishVideoId;

    heroVideoContainer.innerHTML = `
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/${videoId}"
        allowfullscreen>
      </iframe>
    `;
  }

  function updateCardLinks() {
    document.querySelectorAll('.card-link').forEach(link => {
      const href = currentLanguage === 'ar' ? link.dataset.linkAr : link.dataset.linkEn;
      if (href) link.href = href;
    });
  }

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

  // === Hamburger Menu ===
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
