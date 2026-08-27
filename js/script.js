// Mwangaza Children's Centre — site interactions

document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Dawn progress bar (fills as the visitor scrolls the page)
const dawnBar = document.querySelector('.dawn-progress');
function updateDawnBar(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  dawnBar.style.width = pct + '%';
}
window.addEventListener('scroll', updateDawnBar, { passive: true });
updateDawnBar();

// Reveal-on-scroll for major sections
const revealTargets = document.querySelectorAll(
  '.value-card, .program-card, .gallery-tile, .donate-card, .news-card, .contact-item, .trustee-card, .testimonial-card'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => revealObserver.observe(el));

// Count-up animation for impact stats
const statNums = document.querySelectorAll('.stat-num');
function animateCount(el){
  const target = parseInt(el.getAttribute('data-count'), 10) || 0;
  const duration = 1400;
  const start = performance.now();

  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value = Math.floor(eased * target);
    el.textContent = value.toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

statNums.forEach(el => statObserver.observe(el));
