// Menu mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Đóng menu khi chọn một mục (trên mobile)
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Header đổ bóng khi cuộn
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// Hiệu ứng fade-in khi cuộn tới
const revealTargets = document.querySelectorAll('.about-card, .tour-card, .section-title, .section-sub, .section-tag');
revealTargets.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => observer.observe(el));
