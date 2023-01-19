'use strict';
import ContactModal from './contactModal';
import HoursModal from './hoursModal';

// Image imports
import BistecImage from '/src/Bistec-Encebollado.jpg';
import MofongoImage from '/src/Campeon_FB.0.jpg';
import BreadChicken from '/src/pechuga.png';

const MenuModal = (function () {
  const menuModalArr = [];

  const menuModalElements = () => {
    ContactModal.elementCreator(menuModalArr, 'div', 'menu-container'),
      ContactModal.elementCreator(menuModalArr, 'h1', 'menu-heading'),
      ContactModal.elementCreator(menuModalArr, 'div', 'items-container'),
      ContactModal.elementCreator(menuModalArr, 'button', 'menu-close-btn'),
      ContactModal.elementCreator(menuModalArr, 'div', 'item'), // item 1
      ContactModal.elementCreator(menuModalArr, 'p', 'item-heading'),
      ContactModal.elementCreator(menuModalArr, 'img', 'item-img'),
      ContactModal.elementCreator(menuModalArr, 'p', 'item-comment'),
      ContactModal.elementCreator(menuModalArr, 'p', 'price');
    ContactModal.elementCreator(menuModalArr, 'div', 'item'), // item 2
      ContactModal.elementCreator(menuModalArr, 'p', 'item-heading'),
      ContactModal.elementCreator(menuModalArr, 'img', 'item-img'),
      ContactModal.elementCreator(menuModalArr, 'p', 'item-comment'),
      ContactModal.elementCreator(menuModalArr, 'p', 'price');
    ContactModal.elementCreator(menuModalArr, 'div', 'item'), // item 3
      ContactModal.elementCreator(menuModalArr, 'p', 'item-heading'),
      ContactModal.elementCreator(menuModalArr, 'img', 'item-img'),
      ContactModal.elementCreator(menuModalArr, 'p', 'item-comment'),
      ContactModal.elementCreator(menuModalArr, 'p', 'price');

    //   Text content for elements
    HoursModal.elementContentCreator(menuModalArr[1], 'MENU'),
      HoursModal.elementContentCreator(menuModalArr[3], 'X'),
      HoursModal.elementContentCreator(menuModalArr[5], 'Bistec Encebollado'),
      HoursModal.elementContentCreator(
        menuModalArr[7],
        'Latin style stake and onions that incorporate a mouth-watering adobo marinade.'
      ),
      HoursModal.elementContentCreator(menuModalArr[8], '$ 15.99');
    HoursModal.elementContentCreator(menuModalArr[10], 'Mofongo'),
      HoursModal.elementContentCreator(
        menuModalArr[12],
        'A classic dish made of fried plantains, mashed and mixed with garlic paste and your choice of meat.'
      ),
      HoursModal.elementContentCreator(menuModalArr[13], '$ 13.99');
    HoursModal.elementContentCreator(menuModalArr[15], 'Pechuga Empanada'),
      HoursModal.elementContentCreator(
        menuModalArr[17],
        'Breaded chicken breast served with rice and beans.'
      ),
      HoursModal.elementContentCreator(menuModalArr[18], '$ 10.99');

    //   Image Placment
    menuModalArr[6].setAttribute('src', BistecImage);
    menuModalArr[11].setAttribute('src', MofongoImage);
    menuModalArr[16].setAttribute('src', BreadChicken);
  };
  menuModalElements();
  const menuModalRender = () => {
    // This attaches the menu container to the (contact-modal-container)
    ContactModal.elementsArray[0].appendChild(menuModalArr[0]);
    //Attachment the heading, menu list, button
    menuModalArr[0].append(menuModalArr[1], menuModalArr[2], menuModalArr[3]),
      menuModalArr[2].append(
        menuModalArr[4],
        menuModalArr[9],
        menuModalArr[14]
      );

    // Attachment of item 1 elemnts
    menuModalArr[4].append(
      menuModalArr[5],
      menuModalArr[6],
      menuModalArr[7],
      menuModalArr[8]
    );
    menuModalArr[9].append(
      menuModalArr[10],
      menuModalArr[11],
      menuModalArr[12],
      menuModalArr[13]
    );
    menuModalArr[14].append(
      menuModalArr[15],
      menuModalArr[16],
      menuModalArr[17],
      menuModalArr[18]
    );
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
