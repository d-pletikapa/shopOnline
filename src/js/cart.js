// 2 Изначальный план для Корзины:
// создадим cart.js
// 2.2 Товары можно добавить в корзину и
// удалить из корзины
// 2.3 Все цены в корзине считаются корректно

// ПОДРОБНЫЙ ПЛАН ДЛЯ cart.js

// 1. Получить корзину из localStorage (или создать пустую)
//    - Функция getCart()
//    - Функция saveCart(cart)

// 2. Отрисовать товары корзины на странице
//    - Функция renderCart(cart)

// 3. Реализовать увеличение/уменьшение количества товара
//    - Функция changeProductQuantity(productId, delta)

// 4. Реализовать удаление товара из корзины
//    - Функция removeProductFromCart(productId)

// 5. Пересчитывать итоговую сумму и количество товаров основываясь на чекбосах и количестве товара и цене считать только выбранные товары
//    - Функция calculateCartTotals(cart)

// 6. Обновлять отображение итоговой суммы и количества при изменениях

// 7. (Опционально) Реализовать "Выбрать все" и "Удалить выбранные"

// 8. (Опционально) Синхронизировать корзину между вкладками (через storage event)

// 9. (Опционально) При оформлении заказа очищать корзину

// 10. (Опционально) Показать сообщение, если корзина пуста

// 7. (Опционально) Сохранять корзину в localStorage

// 9. (Опционально) Показать сообщение, если товаров нет

// 10. (Опционально) Показать количество товаров в корзине в иконке корзины

// ---

// ОБЩИЕ РЕКОМЕНДАЦИИ
// - Все функции должны быть небольшими и отвечать за одну задачу
// - Используй localStorage для хранения корзины
// - Для динамических элементов (товары, категории) используй делегирование событий
// - Не забудь про обработку ошибок при запросах к серверу
// - Для повторного использования функций (например, отрисовка категорий) вынеси их в отдельный модуль, если потребуется

// После написания такого плана можно реализовывать каждую функцию по очереди, тестируя шаг за шагом.

// ОБЩИЕ РЕКОМЕНДАЦИИ
// - Все функции должны быть небольшими и отвечать за одну задачу
// - Используй localStorage для хранения корзины
// - Для динамических элементов (товары, категории) используй делегирование событий
// - Не забудь про обработку ошибок при запросах к серверу
// - Для повторного использования функций (например, отрисовка категорий) вынеси их в отдельный модуль, если потребуется

// После написания такого плана можно реализовывать каждую функцию по очереди, тестируя шаг за шагом.

// Получить корзину из localStorage
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Сохранить корзину в localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Получить список id товаров из корзины
function getCartIds() {
  return getCart().map(item => item.id);
}

// Получить количество товара по id
function getProductCount(id) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  return item ? item.count : 1;
}

// Изменить количество товара
function changeProductQuantity(productId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.count += delta;
    if (item.count < 1) {
      cart = cart.filter(i => i.id !== productId);
    }
    saveCart(cart);
    renderCart();
  }
}

// Удалить товар из корзины
function removeProductFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== productId);
  saveCart(cart);
  renderCart();
}

// Получить товары по id с сервера
async function fetchProductsByIds(ids) {
  const response = await fetch('https://adventurous-fifth-hedge.glitch.me/api/goods');
  const goods = await response.json();
  return goods.filter(item => ids.includes(item.id));
}

// Рендерим корзину
async function renderCart() {
  const cart = getCart();
  const ids = cart.map(i => i.id);
  const products = await fetchProductsByIds(ids);

  const listBlock = document.querySelector('.cart__list-section__product-list-block');
  if (!listBlock) return;
  listBlock.innerHTML = '';

  if (products.length === 0) {
    listBlock.innerHTML = '<p>Корзина пуста</p>';
    updateTotals([]);
    return;
  }

  products.forEach(product => {
    const count = getProductCount(product.id);
    const price = Number(product.price);
    const discount = Number(product.discount) || 0;
    const priceWithDiscount = discount > 0 ? Math.round(price * (1 - discount / 100)) : price;
    const jpg = `https://adventurous-fifth-hedge.glitch.me/${product.image}`;
    const checkboxId = `product-item-${product.id}`;
    const itemInCart = cart.find(i => i.id === product.id) || {};
    const selected = itemInCart.selected !== false; // по умолчанию true

    // Итоговые цены для карточки
    const totalPriceWithDiscount = priceWithDiscount * count;
    const totalPrice = price * count;

    const item = document.createElement('div');
    item.className = 'product-item';
    item.innerHTML = `
      <label class="product-item-label">
        <input class="product-item-checkbox" type="checkbox" id="${checkboxId}" ${selected ? 'checked' : ''}>
        <picture class="product-item-img">
          <img src="${jpg}" alt="${product.title}" style="width:130px; height:130px;">
        </picture>
      </label>
      <p class="product-item-info">
        <span class="product-item-name">
          <a href="/product?${product.id}.html">${product.title}</a>
        </span>
        <span class="product-item-params">
          <span class="product-item-params-1">не заполнено</span>
          <span class="product-item-params-2">не заполнено</span>
        </span>
      </p>
      <div class="product-item-controls">
        <button class="product-item-btn-dec" data-id="${product.id}">−</button>
        <span class="product-item-btn-counter">${count}</span>
        <button class="product-item-btn-inc" data-id="${product.id}">+</button>
      </div>
      <p class="product-item-prices">
        <span class="product-item-price-1">${totalPriceWithDiscount.toLocaleString()} ₽</span>
        <span class="product-item-price-2"${discount > 0 ? '' : ' style="display:none"'}>${totalPrice.toLocaleString()} ₽</span>
      </p>
    `;
    listBlock.appendChild(item);
  });

  // (+) — увеличивает
  listBlock.querySelectorAll('.product-item-btn-inc').forEach(btn => {
    btn.addEventListener('click', () => changeProductQuantity(btn.dataset.id, 1));
  });
  // (−) — уменьшает, удаляет если стало 0
  listBlock.querySelectorAll('.product-item-btn-dec').forEach(btn => {
    btn.addEventListener('click', () => changeProductQuantity(btn.dataset.id, -1));
  });

  updateTotals(products);
  setupCheckboxes();
}

// Выделение/снятие всех чекбоксов
function setupSelectAll() {
  const selectAll = document.querySelector('.cart__list-section__select-all-input');
  if (!selectAll) return;
  selectAll.addEventListener('change', () => {
    const cart = getCart();
    cart.forEach(item => item.selected = selectAll.checked);
    saveCart(cart);
    renderCart();
  });
}

// Обновить итоговые суммы и количество
function updateTotals(productsArg) {
  const cart = getCart();
  // Берём только выбранные id
  const selectedIds = cart.filter(i => i.selected !== false).map(i => i.id);

  // productsArg — это массив товаров с сервера (у них есть price, discount)
  let products = productsArg || [];
  // Фильтруем только выбранные товары
  products = products.filter(product => selectedIds.includes(product.id));

  let totalCount = 0;
  let totalSum = 0;
  let totalFullSum = 0;
  let totalDiscount = 0;

  products.forEach(product => {
    const count = getProductCount(product.id);
    const price = Number(product.price) || 0;
    const discount = Number(product.discount) || 0;
    const priceWithDiscount = discount > 0 ? Math.round(price * (1 - discount / 100)) : price;

    totalCount += count;
    totalSum += priceWithDiscount * count;
    totalFullSum += price * count;
    totalDiscount += (price - priceWithDiscount) * count;
  });

  // Если ничего не выбрано — всё по нулям
  if (products.length === 0) {
    totalCount = 0;
    totalSum = 0;
    totalFullSum = 0;
    totalDiscount = 0;
  }

  // cart__list-section__title-num — общее количество товаров в корзине (по всем, не только выбранным)
  const titleNumEl = document.querySelector('.cart__list-section__title-num');
  if (titleNumEl) {
    const allCount = cart.reduce((sum, item) => sum + (item.count || 0), 0);
    titleNumEl.textContent = allCount;
  }

  const totalPriceEl = document.querySelector('.cart__finalize-section__total-price');
  if (totalPriceEl) totalPriceEl.textContent = `${totalSum.toLocaleString()} ₽`;

  const costLabelEl = document.querySelector('.cart__finalize-section__cost-label');
  if (costLabelEl) costLabelEl.textContent = `Товары, ${totalCount} шт.`;

  const costValueEl = document.querySelectorAll('.cart__finalize-section__cost-value');
  if (costValueEl[0]) costValueEl[0].textContent = `${totalFullSum.toLocaleString()} ₽`;
  if (costValueEl[1]) costValueEl[1].textContent = `${totalDiscount.toLocaleString()} ₽`;
  if (costValueEl[2]) costValueEl[2].textContent = 'Бесплатно';
}

// Обновлять суммы при изменении чекбоксов
async function setupCheckboxes() {
  document.querySelectorAll('.product-item-checkbox').forEach(cb => {
    cb.addEventListener('change', async () => {
      const cart = getCart();
      const id = cb.id.replace('product-item-', '');
      const item = cart.find(i => i.id === id);
      if (item) {
        item.selected = cb.checked;
        saveCart(cart);
      }
      // Получаем актуальные товары с сервера и пересчитываем суммы
      const ids = getCart().map(i => i.id);
      const products = await fetchProductsByIds(ids);
      updateTotals(products);
    });
  });
}

// Инициализация корзины
function initCart() {
  renderCart();
  setupSelectAll();
}

document.addEventListener('DOMContentLoaded', initCart);