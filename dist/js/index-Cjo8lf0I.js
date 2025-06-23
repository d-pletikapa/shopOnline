(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function l(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(a){if(a.ep)return;a.ep=!0;const e=l(a);fetch(a.href,e)}})();const b=()=>{const o=t=>new URLSearchParams(window.location.search).get(`${t}`);(async t=>{const e=await(await fetch(`https://gorest.co.in/public-api/posts/${o("id")}`)).json();console.log("🚀 ~ file: article.js:14 ~ getArticleInfo ~ data:",e),t(e),(async r=>{const m=await fetch(`https://gorest.co.in/public-api/users/${r}`);console.log("🚀 ~ file: article.js:6 ~ getArticleInfo ~ result2:",m);const i=await m.json();console.log("🚀 ~ file: article.js:6 ~ getArticleInfo ~ data2:",i);const d=document.querySelector(".article__author-credentials");d.textContent=`${i.data.name}`})(e.data.user_id)})(t=>{document.title=`Статья № ${t.data.id}`;const a=document.querySelector(".article__title");a.textContent=`${t.data.title}`;const e=document.querySelector(".article__link");e.href=`http://127.0.0.1:5500/article.html?id=${t.data.id}`,e.textContent=`${t.data.title}`;const s=document.querySelector(".article__paragraph");s.textContent=`${t.data.body}`})},x=()=>{const o=c=>new URLSearchParams(window.location.search).get(`${c}`);{const c=document.querySelector(".blog__main-section"),l=async()=>await(await fetch(`https://gorest.co.in/public-api/posts?page=${o("page")}`)).json();(async()=>{const e=await l();console.log("🚀 ~ file: blog.js:13 ~ renderArticles ~ data:",e);const s=e.data.map((r,m)=>{const i=document.createElement("article");return i.className="blog__article",i.id=`${r.id}`,i.innerHTML=`
			<a class="article__link" href="article.html?id=${r.id}">
				<img class="article__preview-img" src="./img/__img-blog/${m+1}.png" alt="article__preview-img--${m+1}">
			</a>
						<div class="article__preview-text">
							<div class="article__preview-text-wrapper">
								<a class="article__link" href="article.html?id=${r.id}">
									<h2 class="article__title">${r.title}</h2>
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
			`,i});c.append(...s)})(),(async()=>{const e=await l(),s=document.querySelectorAll(".pagination__number"),r=e.meta.pagination.page,m=e.meta.pagination.pages,i=document.querySelectorAll(".pagination__item a");r<=2?i[0].href="blog.html":i[0].href=`?page=${r-1}`,i[1].href=`?page=${r+1}`,s.forEach((d,h)=>{r<m&&(r===1&&h===0?(d.href="blog.html",d.firstElementChild.textContent="1"):(d.href=`blog.html?page=${r+h}`,d.firstElementChild.textContent=`${r+h}`))})})()}};function C(){document.querySelector(".header");const o=document.createElement("div");o.className="modal-menu",o.classList.add("modal-menu--overlay"),o.style.position="absolute",o.insertAdjacentHTML("afterbegin",`
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
`),document.body.appendChild(o);const c=`
  <g clip-path="url(#clip0_1703_161)">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1703_161">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
`,l=`
  <g clip-path="url(#clip0_215_2128)">
    <path d="M3 18H9V16H3V18ZM3 6V8H21V6H3ZM3 13H15V11H3V13Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_215_2128">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
`,t=document.querySelector(".header__menu-btn"),a=document.querySelector(".header__menu-btn-wrp");t.addEventListener("click",()=>{o.classList.toggle("show-modal"),o.classList.contains("show-modal")?a.querySelector("svg").innerHTML=c:a.querySelector("svg").innerHTML=l})}const v=()=>{const o=l=>{const t=document.querySelector(".timer"),a=document.querySelector(".main__counter--day"),e=document.querySelector(".main__counter--hour"),s=document.querySelector(".main__counter--minute"),r=document.querySelector(".main__counter--second"),m=document.querySelector(".main__text--day"),i=document.querySelector(".main__text--hour"),d=document.querySelector(".main__text--minute"),h=document.querySelector(".main__text--second"),$=(n,_)=>{const u=n.getTime(),g=n.getTimezoneOffset()*6e4,y=u+g;return new Date(y+36e5*_).getTime()},p=()=>{const n=$(new Date(l),3);t.dataset.deadline=new Date(n).toLocaleString();const _=new Date().getTime(),u=n-_,g=Math.floor(u/1e3/60/60/24),y=Math.floor(u/1e3/60/60%24),L=Math.floor(u/1e3/60%60),A=Math.floor(u/1e3%60);return{timeRemaining:u,days:g,hours:y,minutes:L,seconds:A}},f={ru:{day:["день","дня","дней"],hour:["час","часа","часов"],minute:["минута","минуты","минут"],second:["секунда","секунды","секунд"],get(n,_){if(_==="day"){if(n%100/10===1||n>=10&&n<=20)return this.day[2];switch(n%10){case 1:return this.day[0];case 2:case 3:case 4:return this.day[1];default:return this.day[2]}}else if(_==="hour"){if(n%100/10===1||n>=10&&n<=20)return this.hour[2];switch(n%10){case 1:return this.hour[0];case 2:case 3:case 4:return this.hour[1];default:return this.hour[2]}}else if(_==="minute"){if(n%100/10===1||n>=10&&n<=20)return this.minute[2];switch(n%10){case 1:return this.minute[0];case 2:case 3:case 4:return this.minute[1];default:return this.minute[2]}}else if(_==="second"){if(n%100/10===1||n>=10&&n<=20)return this.second[2];switch(n%10){case 1:return this.second[0];case 2:case 3:case 4:return this.second[1];default:return this.second[2]}}}}},S=()=>{const n=p();a.textContent=`${n.days}`,e.textContent=`${n.hours}`,s.textContent=`${n.minutes}`,r.textContent=`${n.seconds}`},k=()=>{const n=p();m.textContent=f.ru.get(n.days,"day"),i.textContent=f.ru.get(n.hours,"hour"),d.textContent=f.ru.get(n.minutes,"minute"),h.textContent=f.ru.get(n.seconds,"second")},M=()=>{t.style.display="none"},q=()=>{p().timeRemaining<=864e5&&(a.style.display="none",m.style.display="none",r.style.display="inline-block",h.style.display="inline-block")},w=()=>{S(),k();const n=p(),_=setTimeout(w,1e3);q(),n.timeRemaining<=0&&(clearTimeout(_),a.textContent="00",e.textContent="00",s.textContent="00",r.textContent="00",m.textContent="дней",i.textContent="часов",d.textContent="минут",h.textContent="секунд",setTimeout(M,3e3))};w()};document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelectorAll("[data-timer-deadline]");l&&l.forEach(t=>{t.insertAdjacentHTML("afterbegin",`
  <p class="main__subtitle">До конца акции:</p>
    <time class="main__text-counter" datetime="${c}" aria-label="Акция истекает ${c}">
      <span class="main__counter main__counter--day" aria-labelledby="main__text--day"></span>
      <span class="main__text main__text--day" id="main__text--day"></span>
      <span class="main__counter main__counter--hour" aria-labelledby="main__text--hour"></span>
      <span class="main__text main__text--hour" id="main__text--hour"></span>
      <span class="main__counter main__counter--minute" aria-labelledby="main__text--minute"></span>
      <span class="main__text main__text--minute" id="main__text--minute"></span>
      <span class="main__counter main__counter--second" style="display: none" aria-labelledby="main__text--second"></span>
      <span class="main__text main__text--second" style="display: none" id="main__text--second"></span>
    </time>
        `)}),o(c)});const c="2024/02/10 14:53"},T="https://adventurous-fifth-hedge.glitch.me/api";async function H(){try{const o=await fetch(`${T}/category`);if(!o.ok)throw new Error("Network response was not ok");return await o.json()}catch(o){console.error("Ошибка при получении категорий:",o)}}function P(o){const c=document.querySelector(".modal-menu__section--1");if(c&&Array.isArray(o)){c.querySelectorAll(".modal-menu__list").forEach(e=>e.remove());const t=5,a=Math.ceil(o.length/t);for(let e=0;e<a;e++){const s=document.createElement("ul");s.className="modal-menu__list",o.slice(e*t,(e+1)*t).forEach(m=>{const i=document.createElement("li");i.className="modal-menu__item";const d=`/category?${encodeURIComponent(m)}.html`;i.innerHTML=`<a href="${d}" class="modal-menu__link">${m}</a>`,s.appendChild(i)}),c.appendChild(s)}}const l=document.querySelector(".footer__catalogue");if(l&&Array.isArray(o)){l.querySelectorAll(".footer__catalogue-list").forEach(e=>e.remove());const t=5,a=Math.ceil(o.length/t);for(let e=0;e<a;e++){const s=document.createElement("ul");s.className="footer__catalogue-list",o.slice(e*t,(e+1)*t).forEach(m=>{const i=document.createElement("li");i.className="catalogue-list__item";const d=`/category?${encodeURIComponent(m)}.html`;i.innerHTML=`<a href="${d}">${m}</a>`,s.appendChild(i)}),l.appendChild(s)}}}async function E(){const o=document.querySelector(".main__breadcrumbs");if(o&&!(document.body.classList.contains("main-page")||document.body.classList.contains("cart-page"))){if(document.body.classList.contains("category-page")){const l=window.location.search.substring(1).replace(/\.html$/,""),t=decodeURIComponent(l);o.innerHTML=`
      <p>
        <a href="./index.html">Главная</a>
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.442383 8.4425L3.87738 5L0.442383 1.5575L1.49988 0.5L5.99988 5L1.49988 9.5L0.442383 8.4425Z" fill="#525252" />
        </svg>
        <a href="./category?${encodeURIComponent(t)}.html">${t}</a>
      </p>
    `;return}if(document.body.classList.contains("product-page")){const l=window.location.search.substring(1).replace(/\.html$/,"");try{const t=await fetch(`https://adventurous-fifth-hedge.glitch.me/api/goods/${l}`);if(!t.ok)throw new Error("Ошибка загрузки товара");const a=await t.json(),e=a.category,s=a.title;o.innerHTML=`
        <p>
          <a href="./index.html">Главная</a>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.442383 8.4425L3.87738 5L0.442383 1.5575L1.49988 0.5L5.99988 5L1.49988 9.5L0.442383 8.4425Z" fill="#525252" />
          </svg>
          <a href="./category?${encodeURIComponent(e)}.html">${e}</a>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.442383 8.4425L3.87738 5L0.442383 1.5575L1.49988 0.5L5.99988 5L1.49988 9.5L0.442383 8.4425Z" fill="#525252" />
          </svg>
          <span>${s}</span>
        </p>
      `}catch{o.innerHTML=""}return}}}document.addEventListener("DOMContentLoaded",async()=>{typeof C=="function"&&C(),document.body.classList.contains("main-page")&&typeof v=="function"&&v(),document.body.classList.contains("cart-page"),document.body.classList.contains("blog-page")&&typeof x=="function"&&x(),document.body.classList.contains("article-page")&&typeof b=="function"&&b();const o=await H();P(o),E()});
