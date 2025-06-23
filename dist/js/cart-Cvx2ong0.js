import"./index-Cjo8lf0I.js";function p(){const e=localStorage.getItem("cart");return e?JSON.parse(e):[]}function b(e){localStorage.setItem("cart",JSON.stringify(e))}function $(e){const n=p().find(c=>c.id===e);return n?n.count:1}function C(e,i){let n=p();const c=n.find(t=>t.id===e);c&&(c.count+=i,c.count<1&&(n=n.filter(t=>t.id!==e)),b(n),y())}async function E(e){return(await(await fetch("https://adventurous-fifth-hedge.glitch.me/api/goods")).json()).filter(c=>e.includes(c.id))}async function y(){const e=p(),i=e.map(t=>t.id),n=await E(i),c=document.querySelector(".cart__list-section__product-list-block");if(c){if(c.innerHTML="",n.length===0){c.innerHTML="<p>Корзина пуста</p>",S([]);return}n.forEach(t=>{const a=$(t.id),s=Number(t.price),d=Number(t.discount)||0,f=d>0?Math.round(s*(1-d/100)):s,h=`https://adventurous-fifth-hedge.glitch.me/${t.image}`,g=`product-item-${t.id}`,o=(e.find(_=>_.id===t.id)||{}).selected!==!1,r=f*a,l=s*a,m=document.createElement("div");m.className="product-item",m.innerHTML=`
      <label class="product-item-label">
        <input class="product-item-checkbox" type="checkbox" id="${g}" ${o?"checked":""}>
        <picture class="product-item-img">
          <img src="${h}" alt="${t.title}" style="width:130px; height:130px;">
        </picture>
      </label>
      <p class="product-item-info">
        <span class="product-item-name">
          <a href="/product?${t.id}.html">${t.title}</a>
        </span>
        <span class="product-item-params">
          <span class="product-item-params-1">не заполнено</span>
          <span class="product-item-params-2">не заполнено</span>
        </span>
      </p>
      <div class="product-item-controls">
        <button class="product-item-btn-dec" data-id="${t.id}">−</button>
        <span class="product-item-btn-counter">${a}</span>
        <button class="product-item-btn-inc" data-id="${t.id}">+</button>
      </div>
      <p class="product-item-prices">
        <span class="product-item-price-1">${r.toLocaleString()} ₽</span>
        <span class="product-item-price-2"${d>0?"":' style="display:none"'}>${l.toLocaleString()} ₽</span>
      </p>
    `,c.appendChild(m)}),c.querySelectorAll(".product-item-btn-inc").forEach(t=>{t.addEventListener("click",()=>C(t.dataset.id,1))}),c.querySelectorAll(".product-item-btn-dec").forEach(t=>{t.addEventListener("click",()=>C(t.dataset.id,-1))}),S(n),x()}}function L(){const e=document.querySelector(".cart__list-section__select-all-input");e&&e.addEventListener("change",()=>{const i=p();i.forEach(n=>n.selected=e.checked),b(i),y()})}function S(e){const i=p(),n=i.filter(o=>o.selected!==!1).map(o=>o.id);let c=e||[];c=c.filter(o=>n.includes(o.id));let t=0,a=0,s=0,d=0;c.forEach(o=>{const r=$(o.id),l=Number(o.price)||0,m=Number(o.discount)||0,_=m>0?Math.round(l*(1-m/100)):l;t+=r,a+=_*r,s+=l*r,d+=(l-_)*r}),c.length===0&&(t=0,a=0,s=0,d=0);const f=document.querySelector(".cart__list-section__title-num");if(f){const o=i.reduce((r,l)=>r+(l.count||0),0);f.textContent=o}const h=document.querySelector(".cart__finalize-section__total-price");h&&(h.textContent=`${a.toLocaleString()} ₽`);const g=document.querySelector(".cart__finalize-section__cost-label");g&&(g.textContent=`Товары, ${t} шт.`);const u=document.querySelectorAll(".cart__finalize-section__cost-value");u[0]&&(u[0].textContent=`${s.toLocaleString()} ₽`),u[1]&&(u[1].textContent=`${d.toLocaleString()} ₽`),u[2]&&(u[2].textContent="Бесплатно")}async function x(){document.querySelectorAll(".product-item-checkbox").forEach(e=>{e.addEventListener("change",async()=>{const i=p(),n=e.id.replace("product-item-",""),c=i.find(s=>s.id===n);c&&(c.selected=e.checked,b(i));const t=p().map(s=>s.id),a=await E(t);S(a)})})}function k(){y(),L()}document.addEventListener("DOMContentLoaded",k);
