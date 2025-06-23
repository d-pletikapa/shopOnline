// Подробный ПЛАН ДЛЯ category.js


export async function initCategories() {
  // Получаем список категорий с сервера
  const categories = await fetchCategories();
  // Рисуем их в меню и футере
  renderCategories(categories);
}

// 2. Определить текущую категорию (например, из URL или выбранного пункта меню)
//    - Функция getCurrentCategoryFromUrl()

/**
 * Эта функция смотрит на адресную строку (URL) и достаёт из неё имя категории.
 * Мы ищем то, что идёт после знака вопроса (?), убираем .html и декодируем обратно в нормальный текст.
 * Например: /category?%D0%94%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9%20%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82.html
 * превратится в "Детский транспорт"
 */
function getCurrentCategoryFromUrl() {
  const query = window.location.search.substring(1); // убираем '?'
  const clean = query.replace(/\.html$/, '');
  return decodeURIComponent(clean);
}


// 3. Получить список товаров с сервера
//    - Функция fetchGoods()

/**
 * Эта функция просит у сервера список всех товаров.
 * Сервер возвращает массив товаров.
 */
async function fetchGoods() {
  try {
    const response = await fetch('https://adventurous-fifth-hedge.glitch.me/api/goods');
    if (!response.ok) throw new Error('Ошибка загрузки товаров');
    return await response.json();
  } catch (e) {
    console.error('Ошибка при получении товаров:', e);
    return [];
  }
}

// 4. Отфильтровать товары по текущей категории
//    - Функция filterGoodsByCategory(goods, category)

/**
 * Эта функция берёт все товары и оставляет только те, у которых категория совпадает с нужной.
 */
function filterGoodsByCategory(goods, category) {
  return goods.filter(item => item.category === category);
}

// 5. Отрисовать товары на странице категории
//    - Функция renderGoods(goods)

/**
 * Эта функция рисует товары на странице.
 * Для простоты мы кладём их в контейнер с классом .category__goods-list
 */
function getImageUrl(imagePath) {
  return `https://adventurous-fifth-hedge.glitch.me/${imagePath}`;
}

function renderGoods(goods) {
  const container = document.querySelector('.suggestions-section__carousel');
  if (!container) return;

  container.innerHTML = '';

  goods.forEach(item => {
    const jpg = `https://adventurous-fifth-hedge.glitch.me/${item.image}`;
    // const webp = jpg.replace('.jpg', '.webp');
    // const avif = jpg.replace('.jpg', '.avif');
    const productUrl = `/product?${item.id}.html`;

    // Делаем карточку ссылкой <a>
    const card = document.createElement('a');
    card.className = 'carousel__minicard';
    card.href = productUrl;
    card.style.display = 'block'; // чтобы вся карточка была кликабельной

        // <source srcset="${avif}" type="image/avif">
        // <source srcset="${webp}" type="image/webp"></source>
    card.innerHTML = `
      <picture class="minicard__img">

        <img src="${jpg}" alt="${item.title}" style="width:420px; height:295px;">
      </picture>
      <div class="minicard__price-wrapper">
        <p class="minicard__price">${Number(item.price).toLocaleString()} ₽</p>
      </div>
      <p class="minicard__name">${item.title}</p>
    `;
    container.appendChild(card);
  });
}

// 5.1 Отрисовать название категории
//    - Функция renderCategoryTitle(category)
function renderCategoryTitle(category) {
  // Вставляем название в заголовок секции
  const title = document.querySelector('.suggestions-section__title');
  if (title) title.textContent = category;
}

// --- Главная функция для страницы категории ---
/**
 * Эта функция запускает все шаги по порядку:
 * 1. Определяет категорию из URL
 * 2. Загружает все товары
 * 3. Фильтрует товары по категории
 * 4. Рисует их на странице
 */
async function initCategoryPage() {
  const category = getCurrentCategoryFromUrl();
  renderCategoryTitle(category);

  const allGoods = await fetchGoods();
  const filteredGoods = filterGoodsByCategory(allGoods, category);
  renderGoods(filteredGoods);
}

// Запускаем, когда страница загрузилась
document.addEventListener('DOMContentLoaded', initCategoryPage);
