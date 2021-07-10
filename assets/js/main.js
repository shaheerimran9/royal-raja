const toggleBtn = document.querySelector('.main-nav__mobile-toggle');
const mobileNav = document.querySelector('.mobile-nav');

toggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('visible');
});