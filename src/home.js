//Логіка сторінки Home

import { onDomContentLoaded } from "./js/handlers";
import { refs } from "./js/refs";
import { categoriesButtonClick } from "./js/handlers";

document.addEventListener('DOMContentLoaded', onDomContentLoaded);

refs.productsList.addEventListener("click", categoriesButtonClick);
