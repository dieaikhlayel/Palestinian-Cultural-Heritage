// =========================
//  Loading Screen
// =========================
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

// =========================
//  Hero Background Slideshow
// =========================
const heroSection = document.querySelector('.hero');

const heroImages = [
  'images/flag.jpg', 'images/hero1.jpg', 'images/hero2.jpg', 'images/hero3.jpg',
  'images/hero4.jpg', 'images/hero5.jpg', 'images/hero6.jpg', 'images/hero7.jpg',
  'images/hero8.jpg', 'images/hero9.jpg', 'images/hero10.jpg', 'images/hero11.jpg',
  'images/hero12.jpg', 'images/hero13.jpg', 'images/hero14.jpg', 'images/hero15.jpg'
];

let currentIndex = 0;

function updateHeroBackground() {
  if (!heroSection) return;

  heroSection.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % heroImages.length;

  const nextDelay = Math.floor(Math.random() * 5000) + 10000;
  setTimeout(updateHeroBackground, nextDelay);
}

updateHeroBackground();

// =========================
//  Translation System
// =========================
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
      
    "contact-title": "Contact Us",
    "contact-subtitle": "Get in touch with the Palestinian Cultural Heritage team",
    "form-title": "Send Us a Message",
    "name-label": "Your Name",
    "email-label": "Email Address",
    "subject-label": "Subject",
    "message-label": "Your Message",
    "send-button": "Send Message",
    "email-title": "Email Us",
    "general-email": "General Inquiries:",
    "programs-email": "Cultural Programs:",
    "call-title": "Call Us",
    "main-office": "Main Office:",
    "education-dept": "Education Department:",
    "oral": "Oral Narratives",
    "project-credit": "Part of the Empowering Journalists in Digital Media to Promote and Safeguard Palestinian Cultural Heritage project, funded by Irish Aid.",
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
	  
    "contact-title": "اتصل بنا",
    "contact-subtitle": "تواصل مع فريق التراث الثقافي الفلسطيني",
    "form-title": "أرسل لنا رسالة",
    "name-label": "اسمك",
    "email-label": "عنوان البريد الإلكتروني",
    "subject-label": "الموضوع",
    "message-label": "رسالتك",
    "send-button": "إرسال الرسالة",
    "email-title": "راسلونا عبر البريد",
    "general-email": "الاستفسارات العامة:",
    "programs-email": "البرامج الثقافية:",
    "call-title": "اتصل بنا",
    "main-office": "المكتب الرئيسي:",
    "education-dept": "قسم التعليم:",
    "oral": "الروايات الشفوية",
    "project-credit": "جزء من مشروع تمكين الصحفيين في الإعلام الرقمي لتعزيز وحماية التراث الثقافي الفلسطيني، ممول من Irish Aid.",
    "copyright": "© 2025 التراث الثقافي الفلسطيني. جميع الحقوق محفوظة."
  }
};

const languageToggle = document.getElementById('language-toggle');
let currentLanguage = localStorage.getItem('language') || 'en';

function updateLanguage() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

  if (languageToggle) {
    languageToggle.querySelector('span').textContent =
      currentLanguage === 'en' ? 'العربية' : 'English';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translated = translations[currentLanguage][key];
    if (translated) el.innerHTML = translated;
  });
}

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLanguage);
    updateLanguage();
  });
}

updateLanguage();
