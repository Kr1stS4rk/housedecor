
  const btn = document.querySelector('.menu__btn');
  const nav = document.querySelector('.header__nav');

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--open');
    btn.setAttribute('aria-expanded', isOpen);
  });