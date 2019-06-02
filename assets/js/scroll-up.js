const scrollUp = () => {
  document.documentElement.scrollTop = 0;
}

let btn = document.querySelector('.scroll-up-btn');

document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 500 && document.body.offsetWidth > 768) {
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
});

btn.addEventListener('click', scrollUp);