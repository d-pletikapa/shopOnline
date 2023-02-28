//GET
// fetch('http://localhost:3000/api/goods');
// fetch('http://localhost:3000/api/goods/8847764238');
// fetch('http://localhost:3000/api/goods', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'Манго',
//         description: 'Очень вкусный',
//         category: 'fruit',
//         price:'1500',
//         units:'кг',
//         count:'30',
//     }),
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

//DELETE
// fetch('http://localhost:3000/api/goods/6754944989', {
//     method: 'DELETE',
// });

//PATCH
// fetch('http://localhost:3000/api/goods/9170533458', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'Манго Шива',
//         price:'1600',
//         discount: 5,
//         count:'26',
//     }),
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// ASYNC - AWAIT - 1
// const loadGoods = async (callback) => {
//     const result = await fetch('http://localhost:3000/api/goods');
//
//     const data = await result.json();
//
//     callback(data);
// }
// // loadGoods();
//
// const renderGoods = (data) => {
//     const cardsWrapper = document.createElement('div');
//     cardsWrapper.className = 'cards';
//     const goods = data.map(item => {
//         const card = document.createElement('div');
//         card.className = 'card';
//         card.innerHTML = `
//         <h2>${item.title}</h2>
//         <br>
//         <p>Цена: ${item.price}Р</p>
//         <br>
//         <p>${item.description}</p>
//         `;
//         return card;
//     })
//     cardsWrapper.append(...goods);
//     document.body.append(cardsWrapper);
// };
// loadGoods(renderGoods);

// ASYNC - AWAIT - 2
const loadGoods = async (callback) => {
    const result = await fetch('http://localhost:3000/api/goods');

    const data = await result.json();

    return data
}
// loadGoods();

const renderGoods = async () => {
    const data = await loadGoods();

    const cardsWrapper = document.createElement('div');
    cardsWrapper.className = 'cards';
    const goods = data.map(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <h2>${item.title}</h2>
        <br>
        <p>Цена: ${item.price}Р</p>
        <br>
        <p>${item.description}</p>
        `;
        return card;
    })
    cardsWrapper.append(...goods);
    document.body.append(cardsWrapper);
};

renderGoods();
