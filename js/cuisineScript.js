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

// === Hero Background Slideshow ===
const heroSection = document.querySelector('.hero');
const heroImages = [
  'images/flag.jpg', 'images/hero1.jpg', 'images/hero2.jpg', 'images/hero3.jpg',
  'images/hero4.jpg', 'images/hero5.jpg', 'images/hero6.jpg', 'images/hero7.jpg',
  'images/hero8.jpg', 'images/hero9.jpg', 'images/hero10.jpg', 'images/hero11.jpg',
  'images/hero12.jpg', 'images/hero13.jpg', 'images/hero14.jpg', 'images/hero15.jpg'
];

let currentIndex = 0;

function updateHeroBackground() {
  if (heroSection) {
    heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
  }
  currentIndex = (currentIndex + 1) % heroImages.length;
  setTimeout(updateHeroBackground, Math.floor(Math.random() * 5000) + 10000);
}

updateHeroBackground();

// === Translations ===
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
      
    "cuisine-title": "Palestinian Cuisine",
    "cuisine-subtitle": "Flavors of the past, preserved through generations of tradition",
    "dishes-title": "Traditional Palestinian Dishes",
    "maqluba": "Maqluba",
    "maqluba-desc": "The national dish of Palestine, a flavorful upside-down rice dish with meat and vegetables.",
    "musakhan": "Musakhan",
    "musakhan-desc": "Sumac-spiced chicken baked on taboon bread with caramelized onions.",
    "kanafeh": "Kanafeh",
    "kanafeh-desc": "Palestine's famous dessert made with cheese pastry soaked in sweet syrup.",
    "msakhan": "Msakhan",
    "msakhan-desc": "Traditional dish of roasted chicken with sumac and onions on flatbread.",
    "fatteh": "Fatteh",
    "fatteh-desc": "Layered dish with bread, chickpeas, yogurt, and pine nuts.",
    "zaatar": "Za'atar",
    "zaatar-desc": "The iconic Palestinian herb mix used in bread, pastries, and more.",
    "traditions-title": "Culinary Traditions",
    "traditions-text1": "Palestinian cuisine is deeply connected to the land and seasons...",
    "traditions-text2": "Food plays a central role in Palestinian hospitality...",
    "project-credit": "Part of the Empowering Journalists... funded by Irish Aid.",
    "disclaimer": "The video does not necessarily reflect the views of the donor.",
    "copyright": "© 2025 Palestinian Cultural Heritage. All rights reserved."
  },
  ar: {
   "site-title": "تراثنا",
        "home": "الرئيسية",
        "about": "من نحن",
        "cuisine": "المطبخ",
		"geography": "الجغرافيا",
		"heritage": "التراث",
        "art": "الفن",
        "culture": "الثقافة",
        "embroidery": "التطريز",
        "tools": "الأدوات",
        "buildings": "المباني",
        "history": "التاريخ",
        "festivals": "المهرجانات",
        "contact": "اتصل بنا",
        "oral": "الروايات الشفوية",
        "facts": "حقائق",
        "cuisine-title": "المطبخ الفلسطيني",
        "cuisine-subtitle": "نكهات الماضي، محفوظة عبر أجيال من التقاليد",
        "dishes-title": "أطباق فلسطينية تقليدية",
        "maqluba": "المقلوبة",
        "maqluba-desc": "الطبق الوطني الفلسطيني، طبق أرز مقلوب مع اللحم والخضروات.",
        "musakhan": "المسخن",
        "musakhan-desc": "دجاج متبل بالسماق يُخبز على خبز الطابون مع البصل المكرمل.",
        "kanafeh": "الكنافة",
        "kanafeh-desc": "الحلوى الفلسطينية الشهيرة المصنوعة من عجينة الجبنة المنقوعة بالقطر.",
        "msakhan": "المسخن",
        "msakhan-desc": "طبق تقليدي من الدجاج المشوي بالسماق والبصل على خبز مسطح.",
        "fatteh": "الفتة",
        "fatteh-desc": "طبق مكون من طبقات الخبز والحمص واللبن والمكسرات.",
        "zaatar": "الزعتر",
        "zaatar-desc": "خليط الأعشاب الفلسطيني الأيقوني المستخدم في الخبز والمعجنات والمزيد.",
        "traditions-title": "التقاليد الغذائية",
        "traditions-text1": "يرتبط المطبخ الفلسطيني ارتباطًا وثيقًا بالأرض والمواسم، حيث تعتمد الوجبات التقليدية على مكونات طازجة ومحلية مثل زيت الزيتون، الزعتر، البقوليات، الحبوب، والخضروات الموسمية.",
        "traditions-text2": "يلعب الطعام دورًا محوريًا في الضيافة الفلسطينية، حيث يتم الترحيب بالضيوف دائمًا بالقهوة أو الشاي والكثير من الطعام. لا تزال الطرق التقليدية للطهي مثل الطابون والنار المكشوفة مستخدمة إلى جانب الأساليب الحديثة.",
        "project-credit": "جزء من مشروع تمكين الصحفيين في الإعلام الرقمي لتعزيز وحماية التراث الثقافي الفلسطيني، ممول من قبل Irish Aid.",

        "disclaimer": "الفيديو لا يعكس بالضرورة وجهة نظر المتبرع.",
        "copyright": "© 2025 التراث الثقافي الفلسطيني. جميع الحقوق محفوظة."
  }
};

const languageToggle = document.getElementById('language-toggle');
let currentLanguage = localStorage.getItem('language') || 'en';

// === Hero Video Based on Language ===
function updateHeroVideo() {
  const container = document.getElementById('hero-video');
  if (!container) return;

  const videoId = currentLanguage === 'ar' ? 'HODURHMz0iI' : 'lQu50tnFgN8';

  container.innerHTML = `
    <iframe width="560" height="315"
      src="https://www.youtube.com/embed/${videoId}"
      allowfullscreen></iframe>
  `;
}

// === Update Card Links ===
function updateCardLinks() {
  document.querySelectorAll('.card-link').forEach(link => {
    const en = link.dataset.linkEn;
    const ar = link.dataset.linkAr;
    link.href = currentLanguage === 'ar' ? ar : en;
  });
}

// === Update Language ===
function updateLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[currentLanguage][key] || key;
  });

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

  if (languageToggle) {
    const span = languageToggle.querySelector('span');
    if (span) {
      span.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    }
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

// === Mobile Menu ===
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
  });
}
