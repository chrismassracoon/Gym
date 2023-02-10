const li = document.querySelectorAll('.header__menu__item');

li.forEach((i) => {
  i.addEventListener('mouseenter', (e) => {
    e.target.classList.remove('redlineoff');
    e.target.classList.add('redlinein');
  });
  i.addEventListener('mouseout', (e) => {
    e.target.classList.remove('redlinein');
    e.target.classList.add('redlineoff');
  });
});
