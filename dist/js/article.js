// import { getParamValueFromUrl } from './blog.js'

const getParamValueFromUrl = (param) => {
	const searchParams = new URLSearchParams(window.location.search);

	const pageNumber = searchParams.get(`${param}`);
	// console.log("🚀 ~ file: blog.js:11 ~ getPageNumberFromUrl ~ pageNumber:", pageNumber)
	return pageNumber;
}

const getArticleInfo = async (callback) => {
	const result = await fetch(`https://gorest.co.in/public-api/posts/${getParamValueFromUrl('id')}`);
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