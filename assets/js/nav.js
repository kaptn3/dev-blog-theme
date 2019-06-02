const btnNav = document.querySelector('.main-nav__btn');
const navList = document.querySelector('.main-nav__list');

btnNav.addEventListener('click', () => {
  navList.classList.toggle('main-nav__list_opened');
});