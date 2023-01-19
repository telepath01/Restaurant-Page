'use strict';
import ContactModal from './contactModal';
import HoursModal from './hoursModal';

const MenuModal = (function () {
  const menuModalArr = [];

  const menuModalElements = () => {
    ContactModal.elementCreator(menuModalArr, 'div', 'menu-container'),
      ContactModal.elementCreator(menuModalArr, 'h1', 'menu-heading'),
      ContactModal.elementCreator(menuModalArr, 'div', 'items-container'),
      ContactModal.elementCreator(menuModalArr, 'button', 'menu-close-btn'),
      ContactModal.elementCreator(menuModalArr, 'div', 'item'), // item 1
      ContactModal.elementCreator(menuModalArr, 'p', 'item-heading');
    ContactModal.elementCreator(menuModalArr, 'img', 'item-img');

    //   Text content for elements
    HoursModal.elementContentCreator(menuModalArr[1], 'MENU'),
      HoursModal.elementContentCreator(menuModalArr[3], 'X'),
      HoursModal.elementContentCreator(menuModalArr[4], 'Bistec Encebollado');
  };
  menuModalElements();
  const menuModalRender = () => {
    // This attaches the menu container to the (contact-modal-container)
    ContactModal.elementsArray[0].appendChild(menuModalArr[0]);
    //Attachment the heading, menu list, button
    menuModalArr[0].append(menuModalArr[1], menuModalArr[2], menuModalArr[3]),
      menuModalArr[2].append(menuModalArr[4]);

    // Attachment of item 1 elemnts
    menuModalArr[4].append(menuModalArr[5], menuModalArr[6]);
  };

  const menuListener = () => {
    menuModalArr[3].addEventListener('click', () => {
      ContactModal.elementsArray[0].style.display = 'none';
      menuModalArr[0].style.display = 'none';
    });
  };
  return { menuModalArr, menuModalRender, menuListener };
})();
export default MenuModal;
