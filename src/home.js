//Логіка сторінки Home

import { getCategories, getProducts, getProductsByCategory, getProductsById, getSearchProduct } from "./js/products-api";

// console.log(await getCategories());

console.log(await getProducts(1));

// console.log(await getProductsById(1));

// console.log(await getSearchProduct("phone"));

// console.log(await getProductsByCategory("smartphones"));
