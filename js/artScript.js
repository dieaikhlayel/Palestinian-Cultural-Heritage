// ===============================
// LOADING SCREEN FUNCTIONALITY
// ===============================
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

// ===============================
// LANGUAGE SETUP
// ===============================
let currentLanguage = localStorage.getItem('language') || 'en';
const languageToggle = document.getElementById('language-toggle');

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

    "art-title": "Palestinian Art",
    "art-subtitle": "Expressions of identity, resistance, and beauty",

    "art-types-title": "Traditional and Contemporary Palestinian Art",

    "calligraphy": "Islamic Calligraphy",
    "calligraphy-desc": "The sacred art of Arabic calligraphy has flourished in Palestine for centuries.",

    "iconography": "Christian Iconography",
    "iconography-desc": "Palestine's Christian communities have preserved ancient icon painting traditions.",

    "contemporary": "Contemporary Art",
    "contemporary-desc": "Modern Palestinian artists blend traditional motifs with contemporary themes.",

    "street-art": "Street Art",
    "street-art-desc": "Murals and graffiti have become powerful tools of expression in Palestine.",

    "ceramics": "Ceramics",
    "ceramics-desc": "Hebron's distinctive blue pottery and other ceramic traditions.",

    "woodwork": "Woodwork",
    "woodwork-desc": "Intricate wood carvings and mother-of-pearl inlay from Bethlehem.",

    "preservation-title": "Art as Cultural Preservation",

    "preservation-text1": "Palestinian art serves as both cultural expression and documentation of heritage. Traditional crafts like olive wood carving, mother-of-pearl inlay, and glassblowing have been practiced for centuries in cities like Bethlehem and Hebron.",

    "preservation-text2": "Contemporary Palestinian artists often incorporate traditional motifs and symbols into their work while addressing modern themes of identity, displacement, and resistance. The keffiyeh pattern, olive trees, and keys (symbolizing the right of return) frequently appear in Palestinian art across mediums.",

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

    "art-title": "الفن الفلسطيني",
    "art-subtitle": "تعبيرات عن الهوية والمقاومة والجمال",

    "art-types-title": "الفن الفلسطيني التقليدي والمعاصر",

    "calligraphy": "الخط الإسلامي",
    "calligraphy-desc": "فن الخط العربي المقدس ازدهر في فلسطين لقرون.",

    "iconography": "الأيقونات المسيحية",
    "iconography-desc": "حافظت المجتمعات المسيحية في فلسطين على تقاليد رسم الأيقونات القديمة.",

    "contemporary": "الفن المعاصر",
    "contemporary-desc": "يمزج الفنانون الفلسطينيون المعاصرون بين الزخارف التقليدية والموضوعات المعاصرة.",

    "street-art": "فن الشارع",
    "street-art-desc": "أصبحت الجداريات والغرافيتي أدوات قوية للتعبير في فلسطين.",

    "ceramics": "السيراميك",
    "ceramics-desc": "فخار الخليل الأزرق المميز وتقاليد السيراميك الأخرى.",

    "woodwork": "النحت على الخشب",
    "woodwork-desc": "منحوتات خشبية معقدة وتطعيم بالصدف من بيت لحم.",

    "preservation-title": "الفن كحفظ للتراث الثقافي",

    "preservation-text1": "يخدم الفن الفلسطيني كتعبير ثقافي وتوثيق للتراث. تم ممارسة الحرف التقليدية مثل النحت على خشب الزيتون والتطعيم بالصدف ونفخ الزجاج لقرون في مدن مثل بيت لحم والخليل.",

    "preservation-text2": "غالبًا ما يدمج الفنانون الفلسطينيون المعاصرون الزخارف والرموز التقليدية في أعمالهم مع معالجة موضوعات حديثة مثل الهوية والتهجير والمقاومة. غالبًا ما تظهر أنماط الكوفية وأشجار الزيتون والمفاتيح (التي ترمز إلى حق العودة) في الفن الفلسطيني عبر الوسائط المختلفة.",

    "project-credit": "جزء من مشروع تمكين الصحفيين في الإعلام الرقمي لتعزيز وحماية التراث الثقافي الفلسطيني، ممول من قبل Irish Aid.",
    "disclaimer": "الفيديو لا يعكس بالضرورة وجهة نظر المتبرع.",
    "copyright": "© 2025 التراث الثقافي الفلسطيني. جميع الحقوق محفوظة."
  }
};

// ===============================
// UPDATE CARD LINKS
// ===============================
function updateCardLinks() {
  document.querySelectorAll('.card-link').forEach(link => {
    const href = currentLanguage === 'ar' ? link.dataset.linkAr : link.dataset.linkEn;
    if (href) link.href = href;
  });
}

// ===============================
// UPDATE HERO VIDEO
// ===============================
function updateHeroVideo() {
  const container = document.getElementById('hero-video');
  if (!container) return;

  const arabicId = 'AhIzH5cdRS8';
  const englishId = 'SwX5q_y8I6k';

  const videoId = currentLanguage === 'ar' ? arabicId : englishId;

  container.innerHTML = `
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

// ===============================
// LANGUAGE UPDATE FUNCTION
// ===============================
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

// ===============================
// LANGUAGE TOGGLE
// ===============================
if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
  });
}

// Initialize on page load
updateLanguage();

// ===============================
// HERO BACKGROUND ROTATION
// ===============================
const heroSection = document.querySelector('.hero');
const heroImages = [
  'images/flag.jpg', 'images/hero1.jpg', 'images/hero2.jpg',
  'images/hero3.jpg', 'images/hero4.jpg', 'images/hero5.jpg',
  'images/hero6.jpg', 'images/hero7.jpg', 'images/hero8.jpg',
  'images/hero9.jpg', 'images/hero10.jpg', 'images/hero11.jpg',
  'images/hero12.jpg', 'images/hero13.jpg', 'images/hero14.jpg',
  'images/hero15.jpg'
];

let currentImageIndex = 0;

function updateHeroBackground() {
  if (heroSection) {
    heroSection.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
  }

  currentImageIndex = (currentImageIndex + 1) % heroImages.length;

  const nextDelay = Math.floor(Math.random() * 5000) + 10000;
  setTimeout(updateHeroBackground, nextDelay);
}

updateHeroBackground();

// ===============================
// HAMBURGER MENU
// ===============================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
  });
}
