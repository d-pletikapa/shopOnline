import"./index-Cjo8lf0I.js";function i(){const e=window.location.search.substring(1).replace(/\.html$/,"");return decodeURIComponent(e)}async function s(){try{const t=await fetch("https://adventurous-fifth-hedge.glitch.me/api/goods");if(!t.ok)throw new Error("Ошибка загрузки товаров");return await t.json()}catch(t){return console.error("Ошибка при получении товаров:",t),[]}}function a(t,e){return t.filter(r=>r.category===e)}function d(t){const e=document.querySelector(".suggestions-section__carousel");e&&(e.innerHTML="",t.forEach(r=>{const o=`https://adventurous-fifth-hedge.glitch.me/${r.image}`,c=`/product?${r.id}.html`,n=document.createElement("a");n.className="carousel__minicard",n.href=c,n.style.display="block",n.innerHTML=`
      <picture class="minicard__img">

        <img src="${o}" alt="${r.title}" style="width:420px; height:295px;">
      </picture>
      <div class="minicard__price-wrapper">
        <p class="minicard__price">${Number(r.price).toLocaleString()} ₽</p>
      </div>
      <p class="minicard__name">${r.title}</p>
    `,e.appendChild(n)}))}function l(t){const e=document.querySelector(".suggestions-section__title");e&&(e.textContent=t)}async function u(){const t=i();l(t);const e=await s(),r=a(e,t);d(r)}document.addEventListener("DOMContentLoaded",u);
