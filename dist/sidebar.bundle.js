"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["sidebar"],{

/***/ "./src/contactModal.js":
/*!*****************************!*\
  !*** ./src/contactModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");



const ContactModal = (function () {
  const elementsArray = [];
  const bodyElement = document.body;
  const elementCreator = (arr, type, className) => {
    const divElement = document.createElement(type);
    divElement.className = className;
    arr.push(divElement);
    return arr;
  };

  const elementIdentifier = () => {
    elementCreator(elementsArray, 'div', 'contact-modal-container'),
      elementCreator(elementsArray, 'div', 'contact-form-container'),
      elementCreator(elementsArray, 'h1', 'contact-heading'),
      elementCreator(elementsArray, 'form', 'contact-form'),
      elementCreator(elementsArray, 'fieldset', 'contact-fieldset'),
      elementCreator(elementsArray, 'label', 'name-label'),
      elementCreator(elementsArray, 'input', 'name-input'),
      elementCreator(elementsArray, 'label', 'email-label'),
      elementCreator(elementsArray, 'input', 'email-input'),
      elementCreator(elementsArray, 'div', 'name-content'),
      elementCreator(elementsArray, 'div', 'email-content'),
      elementCreator(elementsArray, 'div', 'coment-container'),
      elementCreator(elementsArray, 'label', 'coment-label'),
      elementCreator(elementsArray, 'textarea', 'coment-area'),
      elementCreator(elementsArray, 'div', 'submit-btn-container'),
      elementCreator(elementsArray, 'button', 'submit-btn'),
      elementCreator(elementsArray, 'button', 'close-btn');

    // Label and input id setter
    formLabelInputSetter(
      elementsArray[5],
      elementsArray[6],
      'name',
      'text',
      'Full Name:'
    ),
      formLabelInputSetter(
        elementsArray[7],
        elementsArray[8],
        'email',
        'email',
        'E-mail:'
      );
    elementsArray[12].setAttribute('id', 'coment'),
      (elementsArray[12].textContent = 'Comment:'),
      elementsArray[11].setAttribute('id', 'coment'),
      (elementsArray[4].textContent = 'All fields required'),
      (elementsArray[2].textContent = 'CONTACT FORM'),
      (elementsArray[15].textContent = 'Submit Comment'),
      (elementsArray[16].textContent = 'X');

    //   run Element reder
    elementRenderer();
  };

  const formLabelInputSetter = (label, input, id, type, content) => {
    label.setAttribute('id', id);
    label.textContent = content;
    input.setAttribute('id', id);
    input.setAttribute('type', type);
    input.setAttribute('required', '');
  };

  const elementRenderer = () => {
    bodyElement.appendChild(elementsArray[0]);
    elementsArray[0].append(elementsArray[1]),
      elementsArray[1].append(
        elementsArray[2],
        elementsArray[3],
        elementsArray[16]
      ),
      elementsArray[3].append(elementsArray[4]),
      elementsArray[4].append(
        elementsArray[9],
        elementsArray[10],
        elementsArray[11],
        elementsArray[14]
      ),
      elementsArray[9].append(elementsArray[5], elementsArray[6]),
      elementsArray[10].append(elementsArray[7], elementsArray[8]),
      elementsArray[11].append(elementsArray[12], elementsArray[13]),
      elementsArray[14].append(elementsArray[15]);
  };

  const ConatactListiner = () => {
    elementsArray[16].addEventListener('click', () => {
      elementsArray[0].style.display = 'none';
    });
  };
  elementIdentifier();
  return { elementsArray, ConatactListiner };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactModal);


/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _food1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food1.jpg */ "./src/food1.jpg");



const LoadPage = (function () {
  const divArr = [];
  const classNameArr = [
    'content',
    'header-container',
    'sidebar-container',
    'main-container',
    'company-name',
    'main-content',
    'text-content',
    'main-image-container',
    'main-img',
    'main-text',
    'sidebarBtn-container',
  ];
  const elementCreator = () => {
    const parentDiv = document.body; // array [0]
    const contentDiv = document.createElement('div'); // array [1]
    const headerDiv = document.createElement('div'); // array [2]
    const sidebarDiv = document.createElement('div'); // array [3]
    const mainDiv = document.createElement('div'); // array [4]
    const headingTitle = document.createElement('h1'); // array [5]
    const mainContent = document.createElement('div'); // array [6]
    const mainTextContent = document.createElement('div'); // array [7]
    const mianImageContent = document.createElement('div'); // array [8]
    const foodImage = document.createElement('img'); // array [9]
    const textBody = document.createElement('p'); // array [10]
    const sidebarBtnDiv = document.createElement('div'); // array [11]

    divArr.push(
      parentDiv,
      contentDiv,
      headerDiv,
      sidebarDiv,
      mainDiv,
      headingTitle,
      mainContent,
      mainTextContent,
      mianImageContent,
      foodImage,
      textBody,
      sidebarBtnDiv
    );
    return divArr;
  };
  elementCreator();
  const elementNaming = (element, className) => {
    // Containers
    element[1].setAttribute('id', className[0]);
    element[2].className = className[1];
    element[3].className = className[2];
    element[4].className = className[3];

    // Container Children
    element[5].className = className[4];
    element[6].className = className[5];
    element[7].className = className[6];
    element[8].className = className[7];
    element[9].className = className[8];
    element[10].className = className[9];
    element[11].className = className[10];

    // image placement
    element[9].src = _food1_jpg__WEBPACK_IMPORTED_MODULE_0__;
    //children append
    element[8].append(element[9]);
    element[7].append(element[10]);
    element[6].append(element[7], element[8]);
    element[4].append(element[6]);
    element[3].append(element[11]);
    element[2].append(element[5]);
    element[1].append(element[2], element[3], element[4]);

    return element[1];
  };

  const renderElementText = (arr, comment) => (arr.textContent = comment);

  const renderLoad = () => {
    divArr[0].appendChild(elementNaming(divArr, classNameArr));
    renderElementText(divArr[5], 'Mi Jardin');
    renderElementText(
      divArr[10],
      'Our family would like to first welcome you to our site. We welcome you to take the drive and participate in the best Hispanic atmosphere in the region. Our staff welcomes you with open arms and wonderful food. Our food can only be described as an experience for the heart. Book your table today and enjoy a wonderful time here at Mi Jardin.'
    );
  };

  return { divArr, classNameArr, renderLoad, renderElementText };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadPage);


/***/ }),

/***/ "./src/sidebar-creator.js":
/*!********************************!*\
  !*** ./src/sidebar-creator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _contactModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactModal */ "./src/contactModal.js");




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
    _load_page__WEBPACK_IMPORTED_MODULE_0__["default"].divArr[11].append(sidebarBtnArr[0]);
    _load_page__WEBPACK_IMPORTED_MODULE_0__["default"].divArr[11].append(sidebarBtnArr[1]);
    _load_page__WEBPACK_IMPORTED_MODULE_0__["default"].divArr[11].append(sidebarBtnArr[2]);
  };

  const contactUsListiner = () => {
    sidebarBtnArr[0].addEventListener('click', () => {
      _contactModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArray[0].style.display = 'flex';
    });
  };

  return { sidebarBtnArr, renderButtons, contactUsListiner };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarElements);


/***/ }),

/***/ "./src/food1.jpg":
/*!***********************!*\
  !*** ./src/food1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7438991b02fa9dcc1d4a.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/sidebar-creator.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUNzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNELGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHZjtBQUNvQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHNEQUFzRDtBQUN0RCxxREFBcUQ7QUFDckQsc0RBQXNEO0FBQ3RELG1EQUFtRDtBQUNuRCx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELDJEQUEyRDtBQUMzRCw0REFBNEQ7QUFDNUQscURBQXFEO0FBQ3JELGtEQUFrRDtBQUNsRCx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1Q0FBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZYO0FBQ3NCO0FBQ087QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUEwQjtBQUM5QixJQUFJLG9FQUEwQjtBQUM5QixJQUFJLG9FQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0ZBQTJDO0FBQ2pELEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCxpRUFBZSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdE1vZGFsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NpZGViYXItY3JlYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBMb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XHJcblxyXG5jb25zdCBDb250YWN0TW9kYWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGVsZW1lbnRzQXJyYXkgPSBbXTtcclxuICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XHJcbiAgY29uc3QgZWxlbWVudENyZWF0b3IgPSAoYXJyLCB0eXBlLCBjbGFzc05hbWUpID0+IHtcclxuICAgIGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgZGl2RWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICBhcnIucHVzaChkaXZFbGVtZW50KTtcclxuICAgIHJldHVybiBhcnI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWxlbWVudElkZW50aWZpZXIgPSAoKSA9PiB7XHJcbiAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZGl2JywgJ2NvbnRhY3QtbW9kYWwtY29udGFpbmVyJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdkaXYnLCAnY29udGFjdC1mb3JtLWNvbnRhaW5lcicpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnaDEnLCAnY29udGFjdC1oZWFkaW5nJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdmb3JtJywgJ2NvbnRhY3QtZm9ybScpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZmllbGRzZXQnLCAnY29udGFjdC1maWVsZHNldCcpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnbGFiZWwnLCAnbmFtZS1sYWJlbCcpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnaW5wdXQnLCAnbmFtZS1pbnB1dCcpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnbGFiZWwnLCAnZW1haWwtbGFiZWwnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2lucHV0JywgJ2VtYWlsLWlucHV0JyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdkaXYnLCAnbmFtZS1jb250ZW50JyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdkaXYnLCAnZW1haWwtY29udGVudCcpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZGl2JywgJ2NvbWVudC1jb250YWluZXInKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2xhYmVsJywgJ2NvbWVudC1sYWJlbCcpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAndGV4dGFyZWEnLCAnY29tZW50LWFyZWEnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2RpdicsICdzdWJtaXQtYnRuLWNvbnRhaW5lcicpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnYnV0dG9uJywgJ3N1Ym1pdC1idG4nKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2J1dHRvbicsICdjbG9zZS1idG4nKTtcclxuXHJcbiAgICAvLyBMYWJlbCBhbmQgaW5wdXQgaWQgc2V0dGVyXHJcbiAgICBmb3JtTGFiZWxJbnB1dFNldHRlcihcclxuICAgICAgZWxlbWVudHNBcnJheVs1XSxcclxuICAgICAgZWxlbWVudHNBcnJheVs2XSxcclxuICAgICAgJ25hbWUnLFxyXG4gICAgICAndGV4dCcsXHJcbiAgICAgICdGdWxsIE5hbWU6J1xyXG4gICAgKSxcclxuICAgICAgZm9ybUxhYmVsSW5wdXRTZXR0ZXIoXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVs3XSxcclxuICAgICAgICBlbGVtZW50c0FycmF5WzhdLFxyXG4gICAgICAgICdlbWFpbCcsXHJcbiAgICAgICAgJ2VtYWlsJyxcclxuICAgICAgICAnRS1tYWlsOidcclxuICAgICAgKTtcclxuICAgIGVsZW1lbnRzQXJyYXlbMTJdLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tZW50JyksXHJcbiAgICAgIChlbGVtZW50c0FycmF5WzEyXS50ZXh0Q29udGVudCA9ICdDb21tZW50OicpLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzExXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbWVudCcpLFxyXG4gICAgICAoZWxlbWVudHNBcnJheVs0XS50ZXh0Q29udGVudCA9ICdBbGwgZmllbGRzIHJlcXVpcmVkJyksXHJcbiAgICAgIChlbGVtZW50c0FycmF5WzJdLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QgRk9STScpLFxyXG4gICAgICAoZWxlbWVudHNBcnJheVsxNV0udGV4dENvbnRlbnQgPSAnU3VibWl0IENvbW1lbnQnKSxcclxuICAgICAgKGVsZW1lbnRzQXJyYXlbMTZdLnRleHRDb250ZW50ID0gJ1gnKTtcclxuXHJcbiAgICAvLyAgIHJ1biBFbGVtZW50IHJlZGVyXHJcbiAgICBlbGVtZW50UmVuZGVyZXIoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtTGFiZWxJbnB1dFNldHRlciA9IChsYWJlbCwgaW5wdXQsIGlkLCB0eXBlLCBjb250ZW50KSA9PiB7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlbGVtZW50UmVuZGVyZXIgPSAoKSA9PiB7XHJcbiAgICBib2R5RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50c0FycmF5WzBdKTtcclxuICAgIGVsZW1lbnRzQXJyYXlbMF0uYXBwZW5kKGVsZW1lbnRzQXJyYXlbMV0pLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzFdLmFwcGVuZChcclxuICAgICAgICBlbGVtZW50c0FycmF5WzJdLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbM10sXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVsxNl1cclxuICAgICAgKSxcclxuICAgICAgZWxlbWVudHNBcnJheVszXS5hcHBlbmQoZWxlbWVudHNBcnJheVs0XSksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbNF0uYXBwZW5kKFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbOV0sXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVsxMF0sXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVsxMV0sXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVsxNF1cclxuICAgICAgKSxcclxuICAgICAgZWxlbWVudHNBcnJheVs5XS5hcHBlbmQoZWxlbWVudHNBcnJheVs1XSwgZWxlbWVudHNBcnJheVs2XSksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbMTBdLmFwcGVuZChlbGVtZW50c0FycmF5WzddLCBlbGVtZW50c0FycmF5WzhdKSxcclxuICAgICAgZWxlbWVudHNBcnJheVsxMV0uYXBwZW5kKGVsZW1lbnRzQXJyYXlbMTJdLCBlbGVtZW50c0FycmF5WzEzXSksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbMTRdLmFwcGVuZChlbGVtZW50c0FycmF5WzE1XSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgQ29uYXRhY3RMaXN0aW5lciA9ICgpID0+IHtcclxuICAgIGVsZW1lbnRzQXJyYXlbMTZdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBlbGVtZW50c0FycmF5WzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGVsZW1lbnRJZGVudGlmaWVyKCk7XHJcbiAgcmV0dXJuIHsgZWxlbWVudHNBcnJheSwgQ29uYXRhY3RMaXN0aW5lciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0TW9kYWw7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEltYWdlMSBmcm9tICcuL2Zvb2QxLmpwZyc7XHJcblxyXG5jb25zdCBMb2FkUGFnZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgZGl2QXJyID0gW107XHJcbiAgY29uc3QgY2xhc3NOYW1lQXJyID0gW1xyXG4gICAgJ2NvbnRlbnQnLFxyXG4gICAgJ2hlYWRlci1jb250YWluZXInLFxyXG4gICAgJ3NpZGViYXItY29udGFpbmVyJyxcclxuICAgICdtYWluLWNvbnRhaW5lcicsXHJcbiAgICAnY29tcGFueS1uYW1lJyxcclxuICAgICdtYWluLWNvbnRlbnQnLFxyXG4gICAgJ3RleHQtY29udGVudCcsXHJcbiAgICAnbWFpbi1pbWFnZS1jb250YWluZXInLFxyXG4gICAgJ21haW4taW1nJyxcclxuICAgICdtYWluLXRleHQnLFxyXG4gICAgJ3NpZGViYXJCdG4tY29udGFpbmVyJyxcclxuICBdO1xyXG4gIGNvbnN0IGVsZW1lbnRDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQuYm9keTsgLy8gYXJyYXkgWzBdXHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFsxXVxyXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFsyXVxyXG4gICAgY29uc3Qgc2lkZWJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbM11cclxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzRdXHJcbiAgICBjb25zdCBoZWFkaW5nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpOyAvLyBhcnJheSBbNV1cclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFs2XVxyXG4gICAgY29uc3QgbWFpblRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFs3XVxyXG4gICAgY29uc3QgbWlhbkltYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbOF1cclxuICAgIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyAvLyBhcnJheSBbOV1cclxuICAgIGNvbnN0IHRleHRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpOyAvLyBhcnJheSBbMTBdXHJcbiAgICBjb25zdCBzaWRlYmFyQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFsxMV1cclxuXHJcbiAgICBkaXZBcnIucHVzaChcclxuICAgICAgcGFyZW50RGl2LFxyXG4gICAgICBjb250ZW50RGl2LFxyXG4gICAgICBoZWFkZXJEaXYsXHJcbiAgICAgIHNpZGViYXJEaXYsXHJcbiAgICAgIG1haW5EaXYsXHJcbiAgICAgIGhlYWRpbmdUaXRsZSxcclxuICAgICAgbWFpbkNvbnRlbnQsXHJcbiAgICAgIG1haW5UZXh0Q29udGVudCxcclxuICAgICAgbWlhbkltYWdlQ29udGVudCxcclxuICAgICAgZm9vZEltYWdlLFxyXG4gICAgICB0ZXh0Qm9keSxcclxuICAgICAgc2lkZWJhckJ0bkRpdlxyXG4gICAgKTtcclxuICAgIHJldHVybiBkaXZBcnI7XHJcbiAgfTtcclxuICBlbGVtZW50Q3JlYXRvcigpO1xyXG4gIGNvbnN0IGVsZW1lbnROYW1pbmcgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgICAvLyBDb250YWluZXJzXHJcbiAgICBlbGVtZW50WzFdLnNldEF0dHJpYnV0ZSgnaWQnLCBjbGFzc05hbWVbMF0pO1xyXG4gICAgZWxlbWVudFsyXS5jbGFzc05hbWUgPSBjbGFzc05hbWVbMV07XHJcbiAgICBlbGVtZW50WzNdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVsyXTtcclxuICAgIGVsZW1lbnRbNF0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzNdO1xyXG5cclxuICAgIC8vIENvbnRhaW5lciBDaGlsZHJlblxyXG4gICAgZWxlbWVudFs1XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbNF07XHJcbiAgICBlbGVtZW50WzZdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs1XTtcclxuICAgIGVsZW1lbnRbN10uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzZdO1xyXG4gICAgZWxlbWVudFs4XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbN107XHJcbiAgICBlbGVtZW50WzldLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs4XTtcclxuICAgIGVsZW1lbnRbMTBdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs5XTtcclxuICAgIGVsZW1lbnRbMTFdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVsxMF07XHJcblxyXG4gICAgLy8gaW1hZ2UgcGxhY2VtZW50XHJcbiAgICBlbGVtZW50WzldLnNyYyA9IEltYWdlMTtcclxuICAgIC8vY2hpbGRyZW4gYXBwZW5kXHJcbiAgICBlbGVtZW50WzhdLmFwcGVuZChlbGVtZW50WzldKTtcclxuICAgIGVsZW1lbnRbN10uYXBwZW5kKGVsZW1lbnRbMTBdKTtcclxuICAgIGVsZW1lbnRbNl0uYXBwZW5kKGVsZW1lbnRbN10sIGVsZW1lbnRbOF0pO1xyXG4gICAgZWxlbWVudFs0XS5hcHBlbmQoZWxlbWVudFs2XSk7XHJcbiAgICBlbGVtZW50WzNdLmFwcGVuZChlbGVtZW50WzExXSk7XHJcbiAgICBlbGVtZW50WzJdLmFwcGVuZChlbGVtZW50WzVdKTtcclxuICAgIGVsZW1lbnRbMV0uYXBwZW5kKGVsZW1lbnRbMl0sIGVsZW1lbnRbM10sIGVsZW1lbnRbNF0pO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50WzFdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckVsZW1lbnRUZXh0ID0gKGFyciwgY29tbWVudCkgPT4gKGFyci50ZXh0Q29udGVudCA9IGNvbW1lbnQpO1xyXG5cclxuICBjb25zdCByZW5kZXJMb2FkID0gKCkgPT4ge1xyXG4gICAgZGl2QXJyWzBdLmFwcGVuZENoaWxkKGVsZW1lbnROYW1pbmcoZGl2QXJyLCBjbGFzc05hbWVBcnIpKTtcclxuICAgIHJlbmRlckVsZW1lbnRUZXh0KGRpdkFycls1XSwgJ01pIEphcmRpbicpO1xyXG4gICAgcmVuZGVyRWxlbWVudFRleHQoXHJcbiAgICAgIGRpdkFyclsxMF0sXHJcbiAgICAgICdPdXIgZmFtaWx5IHdvdWxkIGxpa2UgdG8gZmlyc3Qgd2VsY29tZSB5b3UgdG8gb3VyIHNpdGUuIFdlIHdlbGNvbWUgeW91IHRvIHRha2UgdGhlIGRyaXZlIGFuZCBwYXJ0aWNpcGF0ZSBpbiB0aGUgYmVzdCBIaXNwYW5pYyBhdG1vc3BoZXJlIGluIHRoZSByZWdpb24uIE91ciBzdGFmZiB3ZWxjb21lcyB5b3Ugd2l0aCBvcGVuIGFybXMgYW5kIHdvbmRlcmZ1bCBmb29kLiBPdXIgZm9vZCBjYW4gb25seSBiZSBkZXNjcmliZWQgYXMgYW4gZXhwZXJpZW5jZSBmb3IgdGhlIGhlYXJ0LiBCb29rIHlvdXIgdGFibGUgdG9kYXkgYW5kIGVuam95IGEgd29uZGVyZnVsIHRpbWUgaGVyZSBhdCBNaSBKYXJkaW4uJ1xyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBkaXZBcnIsIGNsYXNzTmFtZUFyciwgcmVuZGVyTG9hZCwgcmVuZGVyRWxlbWVudFRleHQgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgTG9hZFBhZ2U7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IExvYWRQYWdlIGZyb20gJy4vbG9hZC1wYWdlJztcclxuaW1wb3J0IENvbnRhY3RNb2RhbCBmcm9tICcuL2NvbnRhY3RNb2RhbCc7XHJcblxyXG5jb25zdCBTaWRlYmFyRWxlbWVudHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHNpZGViYXJCdG5BcnIgPSBbXTtcclxuICBsZXQgY29udGFjdEJ0bjtcclxuICBsZXQgbWVudUJ0bjtcclxuICBsZXQgaG91cnNCdG47XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkVsZW1lbnRzID0gKGVsZW1lbnQsIHR5cGUsIGNsYXNzTmFtZSwgY29tbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb21tZW50O1xyXG4gICAgc2lkZWJhckJ0bkFyci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIHNpZGViYXJCdG5BcnI7XHJcbiAgfTtcclxuICBidXR0b25FbGVtZW50cyhjb250YWN0QnRuLCAnYnV0dG9uJywgJ2NvbnRhY3QtYnRuJywgJ0NvbnRhY3QgVXMnKTtcclxuICBidXR0b25FbGVtZW50cyhtZW51QnRuLCAnYnV0dG9uJywgJ21lbnUtYnRuJywgJ01lbnUnKTtcclxuICBidXR0b25FbGVtZW50cyhob3Vyc0J0biwgJ2J1dHRvbicsICdob3Vycy1idG4nLCAnSG91cnMnKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQnV0dG9ucyA9ICgpID0+IHtcclxuICAgIExvYWRQYWdlLmRpdkFyclsxMV0uYXBwZW5kKHNpZGViYXJCdG5BcnJbMF0pO1xyXG4gICAgTG9hZFBhZ2UuZGl2QXJyWzExXS5hcHBlbmQoc2lkZWJhckJ0bkFyclsxXSk7XHJcbiAgICBMb2FkUGFnZS5kaXZBcnJbMTFdLmFwcGVuZChzaWRlYmFyQnRuQXJyWzJdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb250YWN0VXNMaXN0aW5lciA9ICgpID0+IHtcclxuICAgIHNpZGViYXJCdG5BcnJbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50c0FycmF5WzBdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBzaWRlYmFyQnRuQXJyLCByZW5kZXJCdXR0b25zLCBjb250YWN0VXNMaXN0aW5lciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyRWxlbWVudHM7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==