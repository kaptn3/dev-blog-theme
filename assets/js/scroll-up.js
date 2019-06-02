const scrollUp = () => {
  document.documentElement.scrollTop = 0;
}

document.addEventListener('scroll', () => {
  let btn = document.querySelector('.scroll-up-btn');

  if (document.documentElement.scrollTop > 500) {
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
});

document.addEventListener('click', scrollUp);