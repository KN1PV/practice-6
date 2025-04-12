import"./assets/styles-BK7AYJoX.js";import{a}from"./assets/vendor-C19taMLP.js";a.defaults.baseURL="https://dummyjson.com/products";async function p(){const{data:t}=await a("/category-list");return t}async function u(t){const{data:s}=await a(`?limit=12&skip=${(t-1)*12}`);return s}const c={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products")},l=t=>{const e=["All",...t].map(o=>`
        <li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
        </li>

        `).join("");c.categoriesList.innerHTML=e},g=t=>{const s=t.map(({id:e,title:o,thumbnail:r,brand:n,category:i,price:d})=>`
        <li class="products__item" data-id="${e}">
    <img class="products__image" src="${r}" alt="${o}"/>
    <p class="products__title">${o}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${n}</span></p>
    <p class="products__category">Category: ${i}</p>
    <p class="products__price">Price: ${d}</p>
        </li>
        `).join("");c.productsList.insertAdjacentHTML("beforeend",s)};let m=1;async function _(){try{const t=await p();l(t);const{products:s}=await u(m);g(s)}catch(t){console.log(t)}}document.addEventListener("DOMContentLoaded",_);
//# sourceMappingURL=index.js.map
