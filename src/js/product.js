// Получаем id товара из адресной строки
function getProductIdFromUrl() {
  const query = window.location.search.substring(1);
  return query.replace(/\.html$/, '');
}

// Загружаем товар с сервера по id
async function fetchProductById(id) {
  try {
    const response = await fetch(`https://adventurous-fifth-hedge.glitch.me/api/goods/${id}`);
    if (!response.ok) throw new Error('Ошибка загрузки товара');
    return await response.json();
  } catch (e) {
    console.error('Ошибка при получении товара:', e);
    return null;
  }
}

function renderProduct(product) {
  if (!product) return;

  // Название товара
  const titleEl = document.querySelector('.product__title');
  if (titleEl) titleEl.textContent = product.title;

  // Цена со скидкой (если есть)
  const priceAfterEl = document.querySelector('.price__after-disc');
  const priceBeforeEl = document.querySelector('.price__before-disc');
  let finalPrice = product.price;
  if (product.discount && product.discount > 0) {
    finalPrice = Math.round(product.price * (1 - product.discount / 100));
    if (priceBeforeEl) {
      priceBeforeEl.textContent = `${Number(product.price).toLocaleString()} ₽`;
      priceBeforeEl.style.display = '';
    }
  } else {
    if (priceBeforeEl) priceBeforeEl.style.display = 'none';
  }
  if (priceAfterEl) priceAfterEl.textContent = `${Number(finalPrice).toLocaleString()} ₽`;

  // Описание товара
  const descEl = document.querySelector('.description__text');
  if (descEl) descEl.textContent = product.description;

  // Картинка товара
  const imgContainer = document.querySelector('.product__img');
  if (imgContainer) {
    const jpg = `https://adventurous-fifth-hedge.glitch.me/${product.image}`;
    // const webp = jpg.replace('.jpg', '.webp');
    // const avif = jpg.replace('.jpg', '.avif');
    imgContainer.innerHTML = `
      <picture>
        <img src="${jpg}" alt="${product.title}" style="width:420px; height:295px;">
      </picture>
    `;
  }
}

// Получить или создать уникальный id корзины
function getCartId() {
  let cartId = localStorage.getItem('cartId');
  if (!cartId) {
    cartId = 'cart_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('cartId', cartId);
  }
  return cartId;
}

// Получить корзину из localStorage
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Сохранить корзину в localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Добавить товар в корзину
function addToCart(productId) {
  const cart = getCart();
  // Проверяем, есть ли уже этот товар в корзине
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.count += 1; // увеличиваем количество
    item.selected = true; // всегда выделяем при добавлении
  } else {
    cart.push({ id: productId, count: 1 });
  }
  saveCart(cart);
}

// Навешиваем обработчик на кнопку "Добавить в корзину"
function setupAddToCartButton(productId) {
  // Исправлено: ищем по правильному классу!
  const btn = document.querySelector('.add-to-card__action-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      getCartId(); // создаём id корзины, если его нет
      addToCart(productId);
      btn.textContent = 'В корзине!';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Добавить в корзину';
        btn.disabled = false;
      }, 1500);
    });
  }
}

// Главная функция для страницы товара
async function initProductPage() {
  const id = getProductIdFromUrl();
  if (!id) return;
  const product = await fetchProductById(id);
  renderProduct(product);
  // Навешиваем обработчик на кнопку
  setupAddToCartButton(product.id);
}

document.addEventListener('DOMContentLoaded', initProductPage);





