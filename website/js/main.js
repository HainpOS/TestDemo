// Menu mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Đóng menu khi chọn một mục (trên mobile)
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    closeNavDropdowns();
  });
});

// Dropdown "Nước ngoài"
function closeNavDropdowns() {
  navMenu.querySelectorAll('.nav-dropdown.open').forEach((dropdown) => {
    dropdown.classList.remove('open');
    dropdown.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
  });
}

navMenu.querySelectorAll('.nav-dropdown').forEach((dropdown) => {
  const toggle = dropdown.querySelector('.nav-dropdown-toggle');
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
});

document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target)) {
    closeNavDropdowns();
  }
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

// Form liên hệ
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      formNote.textContent = 'Vui lòng điền đầy đủ thông tin bắt buộc.';
      formNote.className = 'form-note error';
      return;
    }

    const name = contactForm.name.value.trim();
    formNote.textContent = `Cảm ơn ${name}! Chúng tôi sẽ liên hệ lại với bạn sớm nhất.`;
    formNote.className = 'form-note success';
    contactForm.reset();
  });
}
