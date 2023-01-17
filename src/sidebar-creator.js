'use strict';
import LoadPage from './load-page';
import ContactModal from './contactModal';

const SidebarElements = (function () {
  const sidebarBtnArr = [];
  let contactBtn;
  let menuBtn;
  let hoursBtn;

  const buttonElements = (element, type, className, comment) => {
    element = document.createElement(type);
    element.className = className;
    element.textContent = comment;
    sidebarBtnArr.push(element);
    return sidebarBtnArr;
  };
  buttonElements(contactBtn, 'button', 'contact-btn', 'Contact Us');
  buttonElements(menuBtn, 'button', 'menu-btn', 'Menu');
  buttonElements(hoursBtn, 'button', 'hours-btn', 'Hours');

  const renderButtons = () => {
    LoadPage.divArr[11].append(sidebarBtnArr[0]);
    LoadPage.divArr[11].append(sidebarBtnArr[1]);
    LoadPage.divArr[11].append(sidebarBtnArr[2]);
  };

  const contactUsListiner = () => {
    sidebarBtnArr[0].addEventListener('click', () => {
      ContactModal.elementsArray[0].style.display = 'flex';
    });
  };

  return { sidebarBtnArr, renderButtons, contactUsListiner };
})();
export default SidebarElements;
