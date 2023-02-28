// https://gorest.co.in/public-api/posts
// https://gorest.co.in/public-api/posts?page=24

// Список статей, где каждый элемент должен быть ссылкой на статью вида article.html ? id = 945(вместо 945 - id соответствующей статьи).Сам список находится в свойстве data в ответе на список статей.
const articlesContainer = document.querySelector('.blog__main-section .container');

const getPageNumberFromUrl = () => {
	// const currentUrl = window.location.href;
	// console.log("🚀 ~ file: blog.js:9 ~ getPageNumberFromUrl ~ currentUrl:", currentUrl)

	const currentSearch = window.location.search;
	console.log("🚀 ~ file: blog.js:10 ~ getPageNumberFromUrl ~ currentSearch:", currentSearch)

	// const searchParams = new URLSearchParams(currentUrl.search);
	// const pageNumber = searchParams.get('page');
	// console.log("🚀 ~ file: blog.js:11 ~ getPageNumberFromUrl ~ pageNumber:", pageNumber)
	return currentSearch;
}

getPageNumberFromUrl();

const getArticleList = async () => {
	const result = await fetch(`https://gorest.co.in/public-api/posts${getPageNumberFromUrl()}`);
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
		<a class="article__link" href="article.html?${item.id}">
			<img class="article__preview-img" src="./img/${index + 1}.png" alt="article__preview-img--${index + 1}">
		</a>
					<div class="article__preview-text">
						<div class="article__preview-text-wrapper">
							<a class="article__link" href="article.html?${item.id}">
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

			item.href = `blog.html?page=${CurrentPage + index}`;
			console.log(item)
			item.firstElementChild.textContent = `${CurrentPage + index}`;
		}
	})
}
getPaginationList();
