// components.js
import { getCloudinaryUrl } from './utils.js';
import { openModal } from './modal.js';

export function renderMenu(menuData, container) {
    let menuHTML = '';

    menuData.categories.forEach(category => {
        menuHTML += renderCategoryHeader(category.name);
        menuHTML += '<div class="category-items">';

        category.items.forEach(item => {
            menuHTML += renderMenuItem(item);
        });

        menuHTML += '</div>';
    });

    container.innerHTML = menuHTML;
}

export function renderCategoryHeader(categoryName) {
    return `<h2 class="menu-category">${categoryName}</h2>`;
}

export function renderMenuItem(item) {
    return `
        <div class="menu-item" data-item-id="${item.name}">
            <img src="${getCloudinaryUrl(item.imageUrl, {
                width: 350,
                height: 350,
                crop: 'fill',
                quality: 'auto',
                format: 'auto'
            })}" 
            alt="${item.name}" loading="lazy" class="menu-item-image">
            <h3 class="menu-item-name">${item.name}</h3>
            <p class="menu-item-price">${item.price}</p>
        </div>
    `;
}