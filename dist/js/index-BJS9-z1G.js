(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(n){if(n.ep)return;n.ep=!0;const t=r(n);fetch(n.href,t)}})();const x=()=>{const s=a=>new URLSearchParams(window.location.search).get(`${a}`);(async a=>{const t=await(await fetch(`https://gorest.co.in/public-api/posts/${s("id")}`)).json();console.log("🚀 ~ file: article.js:14 ~ getArticleInfo ~ data:",t),a(t),(async i=>{const m=await fetch(`https://gorest.co.in/public-api/users/${i}`);console.log("🚀 ~ file: article.js:6 ~ getArticleInfo ~ result2:",m);const c=await m.json();console.log("🚀 ~ file: article.js:6 ~ getArticleInfo ~ data2:",c);const _=document.querySelector(".article__author-credentials");_.textContent=`${c.data.name}`})(t.data.user_id)})(a=>{document.title=`Статья № ${a.data.id}`;const n=document.querySelector(".article__title");n.textContent=`${a.data.title}`;const t=document.querySelector(".article__link");t.href=`http://127.0.0.1:5500/article.html?id=${a.data.id}`,t.textContent=`${a.data.title}`;const l=document.querySelector(".article__paragraph");l.textContent=`${a.data.body}`})},C=()=>{const s=o=>new URLSearchParams(window.location.search).get(`${o}`);{const o=document.querySelector(".blog__main-section"),r=async()=>await(await fetch(`https://gorest.co.in/public-api/posts?page=${s("page")}`)).json();(async()=>{const t=await r();console.log("🚀 ~ file: blog.js:13 ~ renderArticles ~ data:",t);const l=t.data.map((i,m)=>{const c=document.createElement("article");return c.className="blog__article",c.id=`${i.id}`,c.innerHTML=`
			<a class="article__link" href="article.html?id=${i.id}">
				<img class="article__preview-img" src="./img/__img-blog/${m+1}.png" alt="article__preview-img--${m+1}">
			</a>
						<div class="article__preview-text">
							<div class="article__preview-text-wrapper">
								<a class="article__link" href="article.html?id=${i.id}">
									<h2 class="article__title">${i.title}</h2>
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
			`,c});o.append(...l)})(),(async()=>{const t=await r(),l=document.querySelectorAll(".pagination__number"),i=t.meta.pagination.page,m=t.meta.pagination.pages,c=document.querySelectorAll(".pagination__item a");i<=2?c[0].href="blog.html":c[0].href=`?page=${i-1}`,c[1].href=`?page=${i+1}`,l.forEach((_,h)=>{i<m&&(i===1&&h===0?(_.href="blog.html",_.firstElementChild.textContent="1"):(_.href=`blog.html?page=${i+h}`,_.firstElementChild.textContent=`${i+h}`))})})()}};function b(){document.querySelector(".header");const s=document.createElement("div");s.className="modal-menu",s.classList.add("modal-menu--overlay"),s.style.position="absolute",s.insertAdjacentHTML("afterbegin",`
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
`),document.body.appendChild(s);const o=`
  <g clip-path="url(#clip0_1703_161)">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1703_161">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
`,r=`
  <g clip-path="url(#clip0_215_2128)">
    <path d="M3 18H9V16H3V18ZM3 6V8H21V6H3ZM3 13H15V11H3V13Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_215_2128">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
`,a=document.querySelector(".header__menu-btn"),n=document.querySelector(".header__menu-btn-wrp");a.addEventListener("click",()=>{s.classList.toggle("show-modal"),s.classList.contains("show-modal")?n.querySelector("svg").innerHTML=o:n.querySelector("svg").innerHTML=r})}const v=()=>{const s=r=>{const a=document.querySelector(".timer"),n=document.querySelector(".main__counter--day"),t=document.querySelector(".main__counter--hour"),l=document.querySelector(".main__counter--minute"),i=document.querySelector(".main__counter--second"),m=document.querySelector(".main__text--day"),c=document.querySelector(".main__text--hour"),_=document.querySelector(".main__text--minute"),h=document.querySelector(".main__text--second"),S=(e,u)=>{const d=e.getTime(),g=e.getTimezoneOffset()*6e4,y=d+g;return new Date(y+36e5*u).getTime()},p=()=>{const e=S(new Date(r),3);a.dataset.deadline=new Date(e).toLocaleString();const u=new Date().getTime(),d=e-u,g=Math.floor(d/1e3/60/60/24),y=Math.floor(d/1e3/60/60%24),L=Math.floor(d/1e3/60%60),A=Math.floor(d/1e3%60);return{timeRemaining:d,days:g,hours:y,minutes:L,seconds:A}},f={ru:{day:["день","дня","дней"],hour:["час","часа","часов"],minute:["минута","минуты","минут"],second:["секунда","секунды","секунд"],get(e,u){if(u==="day"){if(e%100/10===1||e>=10&&e<=20)return this.day[2];switch(e%10){case 1:return this.day[0];case 2:case 3:case 4:return this.day[1];default:return this.day[2]}}else if(u==="hour"){if(e%100/10===1||e>=10&&e<=20)return this.hour[2];switch(e%10){case 1:return this.hour[0];case 2:case 3:case 4:return this.hour[1];default:return this.hour[2]}}else if(u==="minute"){if(e%100/10===1||e>=10&&e<=20)return this.minute[2];switch(e%10){case 1:return this.minute[0];case 2:case 3:case 4:return this.minute[1];default:return this.minute[2]}}else if(u==="second"){if(e%100/10===1||e>=10&&e<=20)return this.second[2];switch(e%10){case 1:return this.second[0];case 2:case 3:case 4:return this.second[1];default:return this.second[2]}}}}},k=()=>{const e=p();n.textContent=`${e.days}`,t.textContent=`${e.hours}`,l.textContent=`${e.minutes}`,i.textContent=`${e.seconds}`},$=()=>{const e=p();m.textContent=f.ru.get(e.days,"day"),c.textContent=f.ru.get(e.hours,"hour"),_.textContent=f.ru.get(e.minutes,"minute"),h.textContent=f.ru.get(e.seconds,"second")},M=()=>{a.style.display="none"},q=()=>{p().timeRemaining<=864e5&&(n.style.display="none",m.style.display="none",i.style.display="inline-block",h.style.display="inline-block")},w=()=>{k(),$();const e=p(),u=setTimeout(w,1e3);q(),e.timeRemaining<=0&&(clearTimeout(u),n.textContent="00",t.textContent="00",l.textContent="00",i.textContent="00",m.textContent="дней",c.textContent="часов",_.textContent="минут",h.textContent="секунд",setTimeout(M,3e3))};w()};document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll("[data-timer-deadline]");r&&r.forEach(a=>{a.insertAdjacentHTML("afterbegin",`
  <p class="main__subtitle">До конца акции:</p>
    <time class="main__text-counter" datetime="${o}" aria-label="Акция истекает ${o}">
      <span class="main__counter main__counter--day" aria-labelledby="main__text--day"></span>
      <span class="main__text main__text--day" id="main__text--day"></span>
      <span class="main__counter main__counter--hour" aria-labelledby="main__text--hour"></span>
      <span class="main__text main__text--hour" id="main__text--hour"></span>
      <span class="main__counter main__counter--minute" aria-labelledby="main__text--minute"></span>
      <span class="main__text main__text--minute" id="main__text--minute"></span>
      <span class="main__counter main__counter--second" style="display: none" aria-labelledby="main__text--second"></span>
      <span class="main__text main__text--second" style="display: none" id="main__text--second"></span>
    </time>
        `)}),s(o)});const o="2024/02/10 14:53"};document.addEventListener("DOMContentLoaded",()=>{typeof b=="function"&&b(),document.body.classList.contains("main-page")&&typeof v=="function"&&v(),document.body.classList.contains("cart-page"),document.body.classList.contains("blog-page")&&typeof C=="function"&&C(),document.body.classList.contains("article-page")&&typeof x=="function"&&x()});
