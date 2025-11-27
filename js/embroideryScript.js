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
// Translation Data
// ----------------------
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
      
        "embroidery-title": "Tatreez: Palestinian Embroidery",
        "embroidery-subtitle": "A centuries-old tradition of storytelling through needle and thread",
        "art-title": "The Art of Tatreez",
        "thobe": "The Thobe",
        "thobe-desc": "The traditional Palestinian dress, often heavily embroidered with regional patterns.",
        "patterns": "Regional Patterns",
        "patterns-desc": "Each Palestinian region developed distinct embroidery motifs and color schemes.",
        "symbols": "Symbolism",
        "symbols-desc": "Common motifs include cypress trees (strength), flowers (prosperity), and geometric patterns.",
        "modern": "Contemporary Adaptations",
        "modern-desc": "Traditional tatreez adapted to modern fashion and accessories.",
        "process": "The Process",
        "process-desc": "Traditionally done by hand with silk thread on linen or cotton fabric.",
        "revival": "Cultural Revival",
        "revival-desc": "Efforts to preserve and teach tatreez to new generations.",
        "tradition-title": "A Living Tradition",
        "tradition-text1": "Palestinian embroidery, known as tatreez, is more than decorative needlework - it's a visual language that communicates identity, heritage, and personal stories. Traditionally, Palestinian women would embroider their thobes (dresses) with patterns specific to their village or region, making each garment a unique representation of its wearer's origins.",
        "tradition-text2": "The colors and motifs used in tatreez carry deep symbolism. Red thread often dominates, representing vitality and protection, while common patterns like the 'cypress tree' symbolize resilience. In recent decades, tatreez has experienced a revival as both a cultural practice and a symbol of Palestinian identity, with contemporary artists and designers incorporating traditional motifs into modern fashion and art.",
                           "project-credit": "Part of the Empowering Journalists in Digital Media to Promote and Safeguard Palestinian Cultural Heritage project, funded by Irish Aid.",
	   "disclaimer": "The video does not necessarily reflect the views of the donor.",
        "copyright": "© 2025 Palestinian Cultural Heritage. All rights reserved."
      },
      ar: {
        "site-title": "تراثنا",
        "home": "الرئيسية",
        "about": "من نحن",
        "cuisine": "المطبخ",
        "facts": "حقائق",
		"geography": "الجغرافيا",
        "art": "الفن",
        "embroidery": "التطريز",
        "tools": "الأدوات",
		"heritage": "التراث",
        "culture": "الثقافة",
        "buildings": "المباني",
        "history": "التاريخ",
        "festivals": "المهرجانات",
        "contact": "اتصل بنا",
        "oral": "الروايات الشفوية",
        "embroidery-title": "التطريز",
        "embroidery-subtitle": "تقليد عمره قرون لسرد القصص بالإبرة والخيط",
        "art-title": "فن التطريز",
        "thobe": "الثوب",
        "thobe-desc": "الزي الفلسطيني التقليدي، غالبًا ما يكون مطرزًا بأنماط إقليمية.",
        "patterns": "أنماط إقليمية",
        "patterns-desc": "طورت كل منطقة فلسطينية زخارف وألوان تطريز مميزة.",
        "symbols": "الرمزية",
        "symbols-desc": "تشمل الزخارف الشائعة أشجار السرو (القوة)، والزهور (الازدهار)، والأنماط الهندسية.",
        "modern": "التكيفات المعاصرة",
        "modern-desc": "تم تكييف التطريز التقليدي لمواكبة الموضة والإكسسوارات الحديثة.",
        "process": "العملية",
        "process-desc": "يتم إجراؤه تقليديًا يدويًا بخيط الحرير على قماش الكتان أو القطن.",
        "revival": "إحياء ثقافي",
        "revival-desc": "جهود للحفاظ على التطريز وتعليمه للأجيال الجديدة.",
        "tradition-title": "تقليد حي",
        "tradition-text1": "التطريز الفلسطيني، المعروف باسم التطريز، هو أكثر من مجرد أعمال إبرة زخرفية - إنه لغة بصرية تنقل الهوية والتراث والقصص الشخصية. تقليديًا، كانت النساء الفلسطينيات يطرزن أثوابهن (فساتين) بأنماط خاصة بقريتهن أو منطقتهن، مما يجعل كل قطعة تمثيلاً فريدًا لأصول مرتديها.",
        "tradition-text2": "تحمل الألوان والزخارف المستخدمة في التطريز رمزية عميقة. غالبًا ما يهيمن الخيط الأحمر، الذي يمثل الحيوية والحماية، بينما ترمز الأنماط الشائعة مثل 'شجرة السرو' إلى المرونة. في العقود الأخيرة، شهد التطريز إحياءً كممارسة ثقافية ورمز للهوية الفلسطينية، حيث قام الفنانون والمصممون المعاصرون بدمج الزخارف التقليدية في الموضة والفن الحديث.",
                                      "project-credit": "جزء من مشروع تمكين الصحفيين في الإعلام الرقمي لتعزيز وحماية التراث الثقافي الفلسطيني، ممول من قبل Irish Aid.",

	   "disclaimer": "الفيديو لا يعكس بالضرورة وجهة نظر المتبرع.",
        "copyright": "© 2025 التراث الثقافي الفلسطيني. جميع الحقوق محفوظة."
      }
    };



// ----------------------
// Element Selectors
// ----------------------
const languageToggle = document.getElementById('language-toggle');
const heroSection = document.querySelector('.hero');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

let currentLanguage = localStorage.getItem('language') || 'en';
localStorage.setItem('language', currentLanguage);



// ----------------------
// Hero Image Rotator
// ----------------------
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
    currentIndex = (currentIndex + 1) % heroImages.length;
    const nextInterval = Math.floor(Math.random() * 5000) + 10000;
    setTimeout(updateHeroBackground, nextInterval);
  }
}



// ----------------------
// Hero Video Updater
// ----------------------
function updateHeroVideo() {
  const container = document.getElementById('hero-video');
  if (!container) return;

  const arabicVideoId = 'e7ZDthDWgZA';
  const englishVideoId = 'xBydjxu_DDc';
  const videoId = currentLanguage === 'ar' ? arabicVideoId : englishVideoId;

  container.innerHTML = `
    <iframe width="560" height="315"
      src="https://www.youtube.com/embed/${videoId}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;
}



// ----------------------
// Language System
// ----------------------
function updateLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[currentLanguage]?.[key] || key;
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



// ----------------------
// Update Card Links
// ----------------------
function updateCardLinks() {
  document.querySelectorAll('.card-link').forEach(link => {
    const newHref = link.getAttribute(`data-link-${currentLanguage}`);
    if (newHref) link.href = newHref;
  });
}



// ----------------------
// Language Toggle Button
// ----------------------
if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
  });
}



// ----------------------
// Mobile Navigation
// ----------------------
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
  });
}



// ----------------------
// Initialize Page
// ----------------------
updateLanguage();
updateHeroBackground();
