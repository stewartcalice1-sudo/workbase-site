// Public SITESERV website. All WORKBASE SITESERV links use this single setting.
const WORKBASE_CONFIG = {
  siteservUrl: "https://stewartcalice1-sudo.github.io/siteserv-website/"
};

// WORKBASE corporate website interactions.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

if (toggle && nav) {
  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  };

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
}

const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.primary-nav a').forEach(link => {
  if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page');
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Keep every SITESERV website link synchronized across the site.
const siteservUrlInput = (WORKBASE_CONFIG.siteservUrl || "").trim();
let siteservUrl = "";
try {
  const candidate = new URL(siteservUrlInput);
  if (candidate.protocol === "https:" || candidate.protocol === "http:") siteservUrl = candidate.href;
} catch { /* Keep external links hidden until a valid public URL is supplied. */ }
document.querySelectorAll("[data-siteserv-website]").forEach(link => {
  if (siteservUrl) {
    link.href = siteservUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.removeAttribute("aria-disabled");
    link.hidden = false;
  } else {
    link.hidden = true;
    link.setAttribute("aria-disabled", "true");
  }
});

// Preselect SITESERV when a visitor follows its inquiry link.
const params = new URLSearchParams(window.location.search);
const inquiryType = document.getElementById('inquiry-type');
if (inquiryType && params.get('interest') === 'siteserv') {
  inquiryType.value = 'SITESERV inquiry';
}

// Reveal content as it enters view, while respecting reduced-motion preferences.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll('main section, .priority-grid article, .philosophy-principles article, .home-direction-grid > div, .capability-grid article, .method-grid > div');
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal');
    if (element.matches('.priority-grid article, .philosophy-principles article, .home-direction-grid > div, .capability-grid article, .method-grid > div')) {
      element.dataset.delay = String((index % 3) + 1);
    }
  });
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });
  revealTargets.forEach(element => observer.observe(element));
}

// Restrained page progress indicator.
let ticking = false;
function updateScrollProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollProgress);
    ticking = true;
  }
}, { passive: true });
updateScrollProgress();
