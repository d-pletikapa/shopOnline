export const menuInit = () => {
  const header = document.querySelector('.header');
const modal = document.createElement('div');
modal.className = 'modal-menu';
modal.classList.add('modal-menu--overlay');
modal.style.position = 'absolute';
modal.insertAdjacentHTML('afterbegin', `
<nav class="modal-menu__container">
<div class="modal-menu__section modal-menu__section--1">
  <h3 class="modal-menu__header">
    Каталог
  </h3>

  <ul class="modal-menu__list">
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Смартфоны</a></li>
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Ноутбуки</a></li>
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Ювелирные изделия</a></li>
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Одежда</a></li>
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Бытовая техника</a></li>
  </ul>
  <ul class="modal-menu__list">
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Бытовая химия</a></li>
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Книги и журналы</a></li>
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Домашний текстиль</a></li>
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Электроника</a></li>
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Косметика</a></li>
  </ul>
</div>

<div class="modal-menu__section modal-menu__section--2">
  <h3 class="modal-menu__header">
    Покупателям
  </h3>
  <ul class="modal-menu__list">
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Оплата заказа</a></li>
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Условия доставки</a></li>
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Условия возврата заказа</a></li>
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Блог</a></li>
  </ul>
</div>

<div class="modal-menu__section modal-menu__section--3">
  <h3 class="modal-menu__header">
    Связаться с нами
  </h3>
  <ul class="modal-menu__list">
    <li class="modal-menu__item"><a href="#" class="modal-menu__link">Контакты</a></li>
  </ul>
</div>

</nav>
`);


// header.parentNode.insertBefore(modal, header.nextSibling);
document.body.appendChild(modal);

const closeSvg = `
  <g clip-path="url(#clip0_1703_161)">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1703_161">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
`;

const openSvg = `
  <g clip-path="url(#clip0_215_2128)">
    <path d="M3 18H9V16H3V18ZM3 6V8H21V6H3ZM3 13H15V11H3V13Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_215_2128">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
`;

const menuBtn = document.querySelector('.header__menu-btn');
const menuBtnWrapper = document.querySelector('.header__menu-btn-wrp');

menuBtn.addEventListener('click', () => {
  modal.classList.toggle('show-modal');
  if (modal.classList.contains('show-modal')) {
    menuBtnWrapper.querySelector('svg').innerHTML = closeSvg;
  } else {
    menuBtnWrapper.querySelector('svg').innerHTML = openSvg;
  }
});

};
