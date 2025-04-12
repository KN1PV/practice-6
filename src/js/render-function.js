//Функцію для створення, рендеру або видалення розмітки
import { refs } from "./refs";


export const renderCategoriesLists = (categories) => {
    const allCategories = ["All", ...categories]
    const markup = allCategories.map(category =>
        `
        <li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
        </li>

        `
    ).join("");
    refs.categoriesList.innerHTML = markup;
}


export const renderProductsLists = (products) => {
    const markup = products.map(({ id, title, thumbnail, brand, category, price}) => 
        `
        <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}</p>
        </li>
        `
    ).join("")
    refs.productsList.insertAdjacentHTML("beforeend", markup);
}