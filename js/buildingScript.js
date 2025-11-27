// ----------------------
// Loading Screen
// ----------------------
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



// ----------------------
// FontAwesome Accessibility Fix
// ----------------------
window.FontAwesomeConfig = { autoReplaceSvg: 'nest' };
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("i.fab, i.fas, i.far").forEach(icon => {
    icon.setAttribute("aria-hidden", "true");
  });
});



// ----------------------
// Hero Image Rotator
// ----------------------
const heroSection = document.querySelector('.hero');
const heroImages = [
  'images/flag.jpg', 'images/hero1.jpg', 'images/hero2.jpg',
  'images/hero3.jpg', 'images/hero4.jpg', 'images/hero5.jpg',
  'images/hero6.jpg', 'images/hero7.jpg', 'images/hero8.jpg',
  'images/hero9.jpg', 'images/hero10.jpg', 'images/hero11.jpg', 'images/hero12.jpg',
  'images/hero13.jpg', 'images/hero14.jpg', 'images/hero15.jpg'
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



// ----------------------
// Translation System
// ----------------------
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

    "architecture-title": "Palestinian Architecture",
    "architecture-subtitle": "Stone, history, and identity in built form",

    "buildings-title": "Traditional Palestinian Buildings",
    "village-homes": "Village Homes",
    "village-desc": "Stone houses with vaulted ceilings and central courtyards.",
    "museum-title": "Museums",
    "museum-desc": "Immersive museums preserving Palestine's rich history, culture, and artistic heritage.",
    "mosques": "Mosques",
    "mosques-desc": "Islamic architecture blending local and regional styles.",
    "churches": "Churches",
    "churches-desc": "Ancient Christian sites with Byzantine and Crusader influences.",
    "caravanserais": "Caravanserais",
    "caravanserais-desc": "Historic roadside inns for merchants and travelers.",
    "public-baths": "Public Baths",
    "baths-desc": "Traditional hammams with sophisticated water systems.",

    "heritage-title": "Architectural Heritage",
    "heritage-text1": "Palestinian architecture reflects the region's long history and diverse cultural influences...",
    "heritage-text2": "Key features of Palestinian architecture include arched doorways...",

    "project-credit": "Part of the Empowering Journalists in Digital Media to Promote and Safeguard Palestinian Cultural Heritage project, funded by Irish Aid.",
    "disclaimer": "The video does not necessarily reflect the views of the donor.",
    "copyright": "© 2025 Palestinian Cultural Heritage. All rights reserved."
  },

  ar: {
    "site-title": "تراثنا",
    "home": "الرئيسية",
    "about": "من نحن",
    "heritage": "التراث",
    "culture": "الثقافة",
    "cuisine": "المطبخ",
    "geography": "الجغرافيا",
    "art": "الفن",
    "embroidery": "التطريز",
    "tools": "الأدوات",
    "buildings": "المباني",
    "history": "التاريخ",
    "festivals": "المهرجانات",
    "oral": "الروايات الشفوية",
    "facts": "حقائق",
    "contact": "اتصل بنا",

    "architecture-title": "العمارة الفلسطينية",
    "architecture-subtitle": "الحجر والتاريخ والهوية في شكل مبني",

    "buildings-title": "المباني الفلسطينية التقليدية",
    "village-homes": "منازل القرى",
    "village-desc": "منازل حجرية ذات أسقف مقوسة وساحات مركزية.",
    "museum-title": "قصور المدينة",
    "museum-desc": "منازل عثمانية مزخرفة ذات ميزات معمارية مميزة.",
    "mosques": "المساجد",
    "mosques-desc": "عمارة إسلامية تمزج بين الأساليب المحلية والإقليمية.",
    "churches": "الكنائس",
    "churches-desc": "مواقع مسيحية قديمة بتأثيرات بيزنطية وصليبية.",
    "caravanserais": "الخانات",
    "caravanserais-desc": "نُزُل تاريخية على جانب الطريق للتجار والمسافرين.",
    "public-baths": "الحمامات العامة",
    "baths-desc": "حمامات تقليدية بنظم مائية متطورة.",

    "heritage-title": "التراث المعماري",
    "heritage-text1": "تعكس العمارة الفلسطينية التاريخ الطويل للمنطقة...",
    "heritage-text2": "تشمل الميزات الرئيسية للعمارة الفلسطينية المداخل والنوافذ المقوسة...",

    "project-credit": "جزء من مشروع تمكين الصحفيين...",
    "disclaimer": "الفيديو لا يعكس بالضرورة وجهة نظر المتبرع.",
    "copyright": "© 2025 التراث الثقافي الفلسطيني. جميع الحقوق محفوظة."
  }
};


// Update internal links depending on language
function updateCardLinks() {
  document.querySelectorAll('.card-link').forEach(link => {
    const href = currentLanguage === 'ar' ? link.dataset.linkAr : link.dataset.linkEn;
    if (href) link.href = href;
  });
}


// Update hero video
function updateHeroVideo() {
  const heroVideoContainer = document.getElementById('hero-video');
  if (!heroVideoContainer) return;

  const arabicVideoId = 'd9itz3zCcyI';
  const englishVideoId = 'vZMSjPBjU6A';
  const videoId = currentLanguage === 'ar' ? arabicVideoId : englishVideoId;

  heroVideoContainer.innerHTML = `
    <iframe width="560" height="315"
      src="https://www.youtube.com/embed/${videoId}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;
}



// Main language update
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


// Language toggle
if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
  });
}

updateLanguage();


// ----------------------
// Mobile Navigation
// ----------------------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
  });
}
