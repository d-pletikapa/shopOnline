// article.js 
const articleInit = () => {
  const getParamValueFromArticleUrl = (param) => {
    const searchParams = new URLSearchParams(window.location.search);

    const pageNumber = searchParams.get(`${param}`);
    // console.log("🚀 ~ file: blog.js:11 ~ getPageNumberFromUrl ~ pageNumber:", pageNumber)
    return pageNumber;
  }

  const getArticleInfo = async (callback) => {
    const result = await fetch(`https://gorest.co.in/public-api/posts/${getParamValueFromArticleUrl('id')}`);
    const data = await result.json();
    console.log("🚀 ~ file: article.js:14 ~ getArticleInfo ~ data:", data)

    callback(data);

    const getAuthorInfo = async (userName) => {

      const result = await fetch(`https://gorest.co.in/public-api/users/${userName}`);
      console.log("🚀 ~ file: article.js:6 ~ getArticleInfo ~ result2:", result)

      const data = await result.json();
      console.log("🚀 ~ file: article.js:6 ~ getArticleInfo ~ data2:", data)
      const authorName = document.querySelector('.article__author-credentials');
      authorName.textContent = `${data.data.name}`;

    }
    getAuthorInfo(data.data.user_id);
  }


  const rendereArticle = (data) => {
    document.title = `Статья № ${data.data.id}`;
    const articleTitle = document.querySelector('.article__title');
    articleTitle.textContent = `${data.data.title}`;
    const articleLink = document.querySelector('.article__link');
    articleLink.href = `http://127.0.0.1:5500/article.html?id=${data.data.id}`;
    articleLink.textContent = `${data.data.title}`;
    const articleParagraph = document.querySelector('.article__paragraph');
    articleParagraph.textContent = `${data.data.body}`;
  }

  getArticleInfo(rendereArticle);
};

// blog.js
const blogInit = () => {
  const getParamValueFromBlogUrl = (param) => {
    const searchParams = new URLSearchParams(window.location.search);

    const pageNumber = searchParams.get(`${param}`);
    // console.log("🚀 ~ file: blog.js:11 ~ getPageNumberFromUrl ~ pageNumber:", pageNumber)
    return pageNumber;
  }
  {
    const articlesContainer = document.querySelector('.blog__main-section');

    const getArticleList = async () => {
      const result = await fetch(`https://gorest.co.in/public-api/posts?page=${getParamValueFromBlogUrl('page')}`);
      const data = await result.json();
      return data;
    }

    const renderArticles = async () => {
      const data = await getArticleList();
      console.log("🚀 ~ file: blog.js:13 ~ renderArticles ~ data:", data);
      const articles = data.data.map((item, index) => {

        const newArticle = document.createElement('article');
        newArticle.className = 'blog__article';
        newArticle.id = `${item.id}`;
        newArticle.innerHTML = `
			<a class="article__link" href="article.html?id=${item.id}">
				<img class="article__preview-img" src="./img/__img-blog/${index + 1}.png" alt="article__preview-img--${index + 1}">
			</a>
						<div class="article__preview-text">
							<div class="article__preview-text-wrapper">
								<a class="article__link" href="article.html?id=${item.id}">
									<h2 class="article__title">${item.title}</h2>
								</a>
								<p class="arctile__creation-date">22 октября 2021, 12:45</p>
							</div>
							<div class="article__counter">
								<svg width="22" height="16" viewBox="0 0 22 16" fill="currentColor"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M20.2565 6.962C20.7305 7.582 20.7305 8.419 20.2565 9.038C18.7635 10.987 15.1815 15 10.9995 15C6.81752 15 3.23552 10.987 1.74252 9.038C1.51191 8.74113 1.38672 8.37592 1.38672 8C1.38672 7.62408 1.51191 7.25887 1.74252 6.962C3.23552 5.013 6.81752 1 10.9995 1C15.1815 1 18.7635 5.013 20.2565 6.962V6.962Z"
										stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
									<path
										d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
										stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
								<span class="counter__views-text">1.2K</span>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM4 7H16V9H4V7ZM12 12H4V10H12V12ZM16 6H4V4H16V6Z"
										fill="#8F8F8F" />
								</svg>
								<span class="counter__commetns-text">0</span>
							</div>
						</div>
			`;
        return newArticle;
      });
      articlesContainer.append(...articles);
    };
    renderArticles();

    const getPaginationList = async () => {
      const data = await getArticleList();
      const paginationPage = document.querySelectorAll('.pagination__number');
      const CurrentPage = data.meta.pagination.page;
      const allPages = data.meta.pagination.pages;
      const paginationArrows = document.querySelectorAll('.pagination__item a');
      CurrentPage <= 2 ? paginationArrows[0].href = `blog.html` : paginationArrows[0].href = `?page=${CurrentPage - 1}`;


      paginationArrows[1].href = `?page=${CurrentPage + 1}`;
      paginationPage.forEach((item, index) => {
        if (CurrentPage < allPages) {
          if (CurrentPage === 1 && index === 0) {
            item.href = `blog.html`;
            item.firstElementChild.textContent = `1`;
          } else {
            item.href = `blog.html?page=${CurrentPage + index}`;
            item.firstElementChild.textContent = `${CurrentPage + index}`;
          }
        }
      })
    }
    getPaginationList();
  }
};

// menu.js
function menuInit() {
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

}

// timer.js
const timerInit = () => {
  const timer = (deadline) => {
    const timerBlock = document.querySelector('.timer');
    const timerBlockDay = document.querySelector(
        '.main__counter--day');
    const timerBlockHour = document.querySelector(
        '.main__counter--hour');
    const timerBlockMin = document.querySelector(
        '.main__counter--minute');
    const timerBlockSec = document.querySelector(
        '.main__counter--second');
  
    const dayText = document.querySelector('.main__text--day');
    const hourText = document.querySelector('.main__text--hour');
    const minuteText = document.querySelector('.main__text--minute');
    const secondText = document.querySelector('.main__text--second');
  
    const getUtcTime = (date, offsetUtc) => {
      const timeStamp = date.getTime();
      const offsetTime = date.getTimezoneOffset() * 6e4;
      const utcTime = timeStamp + offsetTime;
      const newDate = new Date(utcTime + (36e5 * offsetUtc));
      return newDate.getTime();
    };
  
    const getTimeLeft = () => {
      const timeStampStop = getUtcTime(new Date(deadline), 3);
      timerBlock.dataset.deadline = new Date(timeStampStop).toLocaleString();
      const timeStampNow = new Date().getTime();
      // const timeStampNow = getUtcTime(new Date(), 3);
      const timeRemaining = timeStampStop - timeStampNow;
      const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
      // console.log('==> days', days);
      const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
      // console.log('==> hours', hours);
      const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
      // console.log('==> minutes', minutes);
      const seconds = Math.floor(timeRemaining / 1000 % 60);
      // console.log('==> seconds', seconds);
      return {
        timeRemaining,
        days,
        hours,
        minutes,
        seconds,
      };
    };
  
    const localization = {
      ru: {
        day: ['день', 'дня', 'дней'],
        hour: ['час', 'часа', 'часов'],
        minute: ['минута', 'минуты', 'минут'],
        second: ['секунда', 'секунды', 'секунд'],
        get(num, type) {
          // const result = null;
          if (type === 'day') {
            const preLastDigit = num % 100 / 10;
            if (preLastDigit === 1 || num >= 10 && num <= 20) {
              return this.day[2];
            } else {
              switch (num % 10) {
                case 1:
                  return this.day[0];
                case 2:
                case 3:
                case 4:
                  return this.day[1];
                default:
                  return this.day[2];
              }
            }
          } else if (type === 'hour') {
            const preLastDigit = num % 100 / 10;
            if (preLastDigit === 1 || num >= 10 && num <= 20) {
              return this.hour[2];
            } else {
              switch (num % 10) {
                case 1:
                  return this.hour[0];
                case 2:
                case 3:
                case 4:
                  return this.hour[1];
                default:
                  return this.hour[2];
              }
            }
          } else if (type === 'minute') {
            const preLastDigit = num % 100 / 10;
            if (preLastDigit === 1 || num >= 10 && num <= 20) {
              return this.minute[2];
            } else {
              switch (num % 10) {
                case 1:
                  return this.minute[0];
                case 2:
                case 3:
                case 4:
                  return this.minute[1];
                default:
                  return this.minute[2];
              }
            }
          } else if (type === 'second') {
            const preLastDigit = num % 100 / 10;
            if (preLastDigit === 1 || num >= 10 && num <= 20) {
              return this.second[2];
            } else {
              switch (num % 10) {
                case 1:
                  return this.second[0];
                case 2:
                case 3:
                case 4:
                  return this.second[1];
                default:
                  return this.second[2];
              }
            }
          }
        },
      },
    };
  
    const renderNumbers = () => {
      const timer = getTimeLeft();
      timerBlockDay.textContent = `${timer.days}`;
      timerBlockHour.textContent = `${timer.hours}`;
      timerBlockMin.textContent = `${timer.minutes}`;
      timerBlockSec.textContent = `${timer.seconds}`;
    };
  
    const renderLocalization = () => {
      const timer = getTimeLeft();
      dayText.textContent = localization.ru.get(timer.days, 'day');
      // console.log('==> thisLocalization.day', thisLocalization.day);
      hourText.textContent = localization.ru.get(timer.hours, 'hour');
      // console.log('==> thisLocalization.hour', thisLocalization.hour);
      minuteText.textContent = localization.ru.get(timer.minutes, 'minute');
      // console.log('==> thisLocalization.min', thisLocalization.minute);
      secondText.textContent = localization.ru.get(timer.seconds, 'second');
    };
  
    const hideTimer = () => {
      timerBlock.style.display = 'none';
    };
    const checkForMode2 = () => {
      const timer = getTimeLeft();
      if (timer.timeRemaining <= 864e+5) {
        timerBlockDay.style.display = 'none';
        dayText.style.display = 'none';
        timerBlockSec.style.display = 'inline-block';
        secondText.style.display = 'inline-block';
      }
    };
    const init = () => {
      renderNumbers();
      renderLocalization();
      const timer = getTimeLeft();
      const interval = setTimeout(init, 1000);
      checkForMode2();
      if (timer.timeRemaining <= 0) {
        clearTimeout(interval);
        timerBlockDay.textContent = '00';
        timerBlockHour.textContent = '00';
        timerBlockMin.textContent = '00';
        timerBlockSec.textContent = '00';
  
        dayText.textContent = 'дней';
        hourText.textContent = 'часов';
        minuteText.textContent = 'минут';
        secondText.textContent = 'секунд';
        setTimeout(hideTimer, 3000);
      }
    };
    init();
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const getAllTimerBlocks = document.querySelectorAll('[data-timer-deadline]');
    if (getAllTimerBlocks) {
      getAllTimerBlocks.forEach(elem => {
        elem.insertAdjacentHTML('afterbegin', `
  <p class="main__subtitle">До конца акции:</p>
    <time class="main__text-counter" datetime="${deadline}" aria-label="Акция истекает ${deadline}">
      <span class="main__counter main__counter--day" aria-labelledby="main__text--day"></span>
      <span class="main__text main__text--day" id="main__text--day"></span>
      <span class="main__counter main__counter--hour" aria-labelledby="main__text--hour"></span>
      <span class="main__text main__text--hour" id="main__text--hour"></span>
      <span class="main__counter main__counter--minute" aria-labelledby="main__text--minute"></span>
      <span class="main__text main__text--minute" id="main__text--minute"></span>
      <span class="main__counter main__counter--second" style="display: none" aria-labelledby="main__text--second"></span>
      <span class="main__text main__text--second" style="display: none" id="main__text--second"></span>
    </time>
        `);
      });
    }
    timer(deadline);
  });
  
  const deadline = '2024/02/10 14:53';
};

// 1. Получить список категорий с сервера и отрисовать их в меню и футере
//    - Функция fetchCategories()
const baseUrl = 'https://adventurous-fifth-hedge.glitch.me/api';
async function fetchCategories() {
  try {
    const response = await fetch(`${baseUrl}/category`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Ошибка при получении категорий:', error);
  }
}

//    - Функция renderCategories(categories)
function renderCategories(categories) {
  // ====== МЕНЮ ======
  const menuSection = document.querySelector('.modal-menu__section--1');
  if (menuSection && Array.isArray(categories)) {
    // Удаляем все старые списки меню, чтобы не было дублей
    menuSection.querySelectorAll('.modal-menu__list').forEach(list => list.remove());

    // Считаем, сколько нужно списков (по 5 категорий в каждом)
    const batchSize = 5;
    const menuBatches = Math.ceil(categories.length / batchSize);

    // Для каждой "пачки" категорий создаём новый список
    for (let i = 0; i < menuBatches; i++) {
      const ul = document.createElement('ul');
      ul.className = 'modal-menu__list';
      // Берём 5 категорий для этой пачки
      const batch = categories.slice(i * batchSize, (i + 1) * batchSize);
      batch.forEach(category => {
        const li = document.createElement('li');
        li.className = 'modal-menu__item';
        // Формируем ссылку с encodeURIComponent
        const url = `/category?${encodeURIComponent(category)}.html`;
        li.innerHTML = `<a href="${url}" class="modal-menu__link">${category}</a>`;
        ul.appendChild(li);
      });
      // Добавляем список в меню
      menuSection.appendChild(ul);
    }
  }

  // ====== ФУТЕР ======
  const footerCatalogue = document.querySelector('.footer__catalogue');
  if (footerCatalogue && Array.isArray(categories)) {
    // Удаляем все старые списки футера
    footerCatalogue.querySelectorAll('.footer__catalogue-list').forEach(list => list.remove());

    // Считаем, сколько нужно списков (по 5 категорий в каждом)
    const batchSize = 5;
    const footerBatches = Math.ceil(categories.length / batchSize);

    // Для каждой "пачки" категорий создаём новый список
    for (let i = 0; i < footerBatches; i++) {
      const ul = document.createElement('ul');
      ul.className = 'footer__catalogue-list';
      // Берём 5 категорий для этой пачки
      const batch = categories.slice(i * batchSize, (i + 1) * batchSize);
      batch.forEach(category => {
        const li = document.createElement('li');
        li.className = 'catalogue-list__item';
        // Формируем ссылку с encodeURIComponent
        const url = `/category?${encodeURIComponent(category)}.html`;
        li.innerHTML = `<a href="${url}">${category}</a>`;
        ul.appendChild(li);
      });
      // Добавляем список в футер
      footerCatalogue.appendChild(ul);
    }
  }
}

// Универсальная функция для рендера хлебных крошек
async function renderBreadcrumbs() {
  const breadcrumbs = document.querySelector('.main__breadcrumbs');
  if (!breadcrumbs) return;

  // Главная и корзина — не рендерим крошки
  if (document.body.classList.contains('main-page') || document.body.classList.contains('cart-page')) {
    return;
  }

  // Категория
  if (document.body.classList.contains('category-page')) {
    // Получаем категорию из URL
    const query = window.location.search.substring(1);
    const clean = query.replace(/\.html$/, '');
    const category = decodeURIComponent(clean);
    breadcrumbs.innerHTML = `
      <p>
        <a href="./index.html">Главная</a>
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.442383 8.4425L3.87738 5L0.442383 1.5575L1.49988 0.5L5.99988 5L1.49988 9.5L0.442383 8.4425Z" fill="#525252" />
        </svg>
        <a href="./category?${encodeURIComponent(category)}.html">${category}</a>
      </p>
    `;
    return;
  }

  // Товар
  if (document.body.classList.contains('product-page')) {
    // Получаем id товара из URL
    const query = window.location.search.substring(1);
    const id = query.replace(/\.html$/, '');
    try {
      const response = await fetch(`https://adventurous-fifth-hedge.glitch.me/api/goods/${id}`);
      if (!response.ok) throw new Error('Ошибка загрузки товара');
      const product = await response.json();
      const category = product.category;
      const title = product.title;
      breadcrumbs.innerHTML = `
        <p>
          <a href="./index.html">Главная</a>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.442383 8.4425L3.87738 5L0.442383 1.5575L1.49988 0.5L5.99988 5L1.49988 9.5L0.442383 8.4425Z" fill="#525252" />
          </svg>
          <a href="./category?${encodeURIComponent(category)}.html">${category}</a>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.442383 8.4425L3.87738 5L0.442383 1.5575L1.49988 0.5L5.99988 5L1.49988 9.5L0.442383 8.4425Z" fill="#525252" />
          </svg>
          <span>${title}</span>
        </p>
      `;
    } catch (e) {
      breadcrumbs.innerHTML = '';
    }
    return;
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  if (typeof menuInit === 'function') menuInit();

  // Для главной страницы
  if (document.body.classList.contains('main-page')) {
    if (typeof timerInit === 'function') timerInit();
    // другие инициализации для главной
  }

  // Для корзины
  if (document.body.classList.contains('cart-page')) {
    // инициализация для cart
  }

  // Для блога
  if (document.body.classList.contains('blog-page')) {
    if (typeof blogInit === 'function') blogInit();
  }

  // Для статьи
  if (document.body.classList.contains('article-page')) {
    if (typeof articleInit === 'function') articleInit();
  }

  // Для всех страниц — меню и футер
  const categories = await fetchCategories();
  renderCategories(categories);

  // Рендерим хлебные крошки централизованно
  renderBreadcrumbs();
});
