// Функції, які передаються колбеками в addEventListners

import { getCategories, getProducts } from "./products-api";
import { renderCategoriesLists, renderProductsLists } from "./render-function";

let page = 1;

export async function onDomContentLoaded() {
    try {
        const categories = await getCategories();
        renderCategoriesLists(categories);

        const { products } = await getProducts(page);
        renderProductsLists(products);
    } catch (error) {
        console.log(error);
    }
}