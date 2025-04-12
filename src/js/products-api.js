// Функції для роботи з бекендом

import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/products"

export async function getCategories() {
    const { data } = await axios("/category-list");
    return data;
}

export async function getProducts(page) {
    const { data } = await axios(`?limit=12&skip=${(page - 1) * 12}`);
    return data;
}

export async function getProductsById(id) {
    const { data } = await axios(`/${id}`);
    return data;
}

export async function getSearchProduct(query, page) {
    const { data } = await axios(`/search?q=${query}&limit=12&skip=${(page - 1) * 12}`);
    return data;
}

export async function getProductsByCategory(category, page) {
    const { data } = await axios(`/category/${category}?limit=12&skip=${(page - 1) * 12}`);
    return data;
}