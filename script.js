// script.js
import { menuData } from './data.js';
import { renderMenu } from './components.js';
import { openModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');

  // Render the main menu
  renderMenu(menuData, appContainer);

  // Add event listeners to menu items to open the modal
  addEventListenersToMenuItems();
});

function addEventListenersToMenuItems() {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const itemId = item.dataset.itemId;
      const itemData = findItemData(itemId);
      if (itemData) {
        openModal(itemData);
      }
    });
  });
}

// Helper function to find item data based on item ID
function findItemData(itemId) {
  for (const category of menuData.categories) {
    for (const item of category.items) {
      if (item.name === itemId) {
        return item;
      }
    }
  }
  return null;
}