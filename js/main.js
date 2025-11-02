
 const btn = document.querySelector('.menu__btn');
const nav = document.querySelector('.header__nav');
const overlay = document.querySelector('.overlay');
const body = document.body;

btn.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('header__nav--open');
  btn.setAttribute('aria-expanded', isOpen);
  
  // фон и скролл
  overlay.classList.toggle('overlay--active', isOpen);
  body.classList.toggle('no-scroll', isOpen);
});

// закрытие при клике на фон
overlay.addEventListener('click', () => {
  nav.classList.remove('header__nav--open');
  overlay.classList.remove('overlay--active');
  body.classList.remove('no-scroll');
  btn.setAttribute('aria-expanded', false);
});
