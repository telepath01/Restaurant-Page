"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menuModal"],{

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
  const modalContainer = elementsArray[0];
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
      elementsArray[1].style.display = 'none';
    });
    elementsArray[15].addEventListener('click', (event) => {
      alert('Thank You for your comment');
      elementsArray[0].style.display = 'none';
      elementsArray[1].style.display = 'none';
      event.preventDefault();
    });
  };
  elementIdentifier();
  return { elementsArray, ConatactListiner, elementCreator, modalContainer };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactModal);


/***/ }),

/***/ "./src/hoursModal.js":
/*!***************************!*\
  !*** ./src/hoursModal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contactModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactModal */ "./src/contactModal.js");
' use strict';


const HoursModal = (function () {
  const hourElementsArray = [];

  const hoursModalElements = () => {
    _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(hourElementsArray, 'div', 'hours-container'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(hourElementsArray, 'h1', 'hours-heading'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(hourElementsArray, 'div', 'hours-body'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(hourElementsArray, 'p', 'days'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(hourElementsArray, 'p', 'hrs'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(hourElementsArray, 'p', 'days'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(hourElementsArray, 'p', 'hrs'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(hourElementsArray, 'p', 'days'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(hourElementsArray, 'p', 'hrs'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(hourElementsArray, 'button', 'hours-close');
  };
  hoursModalElements();
  const elementContentCreator = (element, content) => {
    element.textContent = content;
    return element;
  };

  const hoursRender = () => {
    _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementsArray[0].append(hourElementsArray[0]);
    hourElementsArray[0].append(
      hourElementsArray[1],
      hourElementsArray[2],
      hourElementsArray[9]
    ),
      hourElementsArray[2].append(
        hourElementsArray[3],
        hourElementsArray[4],
        hourElementsArray[5],
        hourElementsArray[6],
        hourElementsArray[7],
        hourElementsArray[8]
      );
    elementContentCreator(hourElementsArray[1], 'HOURS OF OPERATION'),
      elementContentCreator(hourElementsArray[3], 'Monday & Tuesday'),
      elementContentCreator(hourElementsArray[4], 'Closed'),
      elementContentCreator(hourElementsArray[5], 'Wednesday & Thursday'),
      elementContentCreator(hourElementsArray[6], '12:00 p.m. - 9 p.m.'),
      elementContentCreator(hourElementsArray[7], 'Friday - Sunday'),
      elementContentCreator(hourElementsArray[8], '1:00 p.m. - 1:00 a.m.'),
      elementContentCreator(hourElementsArray[9], 'X');
  };

  const hoursListener = () => {
    hourElementsArray[9].addEventListener('click', () => {
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementsArray[0].style.display = 'none';
      hourElementsArray[0].style.display = 'none';
    });
  };

  return {
    hoursRender,
    hourElementsArray,
    hoursListener,
    elementContentCreator,
  };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoursModal);


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
/* harmony import */ var _beach_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beach.png */ "./src/beach.png");




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
    'banner-img',
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
    const bannerimage = document.createElement('img'); // array [12]

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
      sidebarBtnDiv,
      bannerimage
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
    element[12].className = className[11];
    // image placement
    element[9].src = _food1_jpg__WEBPACK_IMPORTED_MODULE_0__;
    element[12].src = _beach_png__WEBPACK_IMPORTED_MODULE_1__;
    //children append
    element[8].append(element[9]);
    element[7].append(element[10]);
    element[6].append(element[7], element[8]);
    element[4].append(element[6]);
    element[3].append(element[11]);
    element[2].append(element[5], element[12]);
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

/***/ "./src/menuModal.js":
/*!**************************!*\
  !*** ./src/menuModal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contactModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactModal */ "./src/contactModal.js");
/* harmony import */ var _hoursModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoursModal */ "./src/hoursModal.js");
/* harmony import */ var _src_Bistec_Encebollado_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/Bistec-Encebollado.jpg */ "./src/Bistec-Encebollado.jpg");
/* harmony import */ var _src_Campeon_FB_0_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/Campeon_FB.0.jpg */ "./src/Campeon_FB.0.jpg");
/* harmony import */ var _src_pechuga_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/pechuga.png */ "./src/pechuga.png");




// Image imports




const MenuModal = (function () {
  const menuModalArr = [];

  const menuModalElements = () => {
    _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'div', 'menu-container'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'h1', 'menu-heading'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'div', 'items-container'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'button', 'menu-close-btn'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'div', 'item'), // item 1
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'p', 'item-heading'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'img', 'item-img'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'p', 'item-comment'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'p', 'price');
    _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'div', 'item'), // item 2
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'p', 'item-heading'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'img', 'item-img'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'p', 'item-comment'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'p', 'price');
    _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'div', 'item'), // item 3
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'p', 'item-heading'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'img', 'item-img'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'p', 'item-comment'),
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementCreator(menuModalArr, 'p', 'price');

    //   Text content for elements
    _hoursModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementContentCreator(menuModalArr[1], 'MENU'),
      _hoursModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementContentCreator(menuModalArr[3], 'X'),
      _hoursModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementContentCreator(menuModalArr[5], 'Bistec Encebollado'),
      _hoursModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementContentCreator(
        menuModalArr[7],
        'Latin style stake and onions that incorporate a mouth-watering adobo marinade.'
      ),
      _hoursModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementContentCreator(menuModalArr[8], '$ 15.99');
    _hoursModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementContentCreator(menuModalArr[10], 'Mofongo'),
      _hoursModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementContentCreator(
        menuModalArr[12],
        'A classic dish made of fried plantains, mashed and mixed with garlic paste and your choice of meat.'
      ),
      _hoursModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementContentCreator(menuModalArr[13], '$ 13.99');
    _hoursModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementContentCreator(menuModalArr[15], 'Pechuga Empanada'),
      _hoursModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementContentCreator(
        menuModalArr[17],
        'Breaded chicken breast served with rice and beans.'
      ),
      _hoursModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementContentCreator(menuModalArr[18], '$ 10.99');

    //   Image Placment
    menuModalArr[6].setAttribute('src', _src_Bistec_Encebollado_jpg__WEBPACK_IMPORTED_MODULE_2__);
    menuModalArr[11].setAttribute('src', _src_Campeon_FB_0_jpg__WEBPACK_IMPORTED_MODULE_3__);
    menuModalArr[16].setAttribute('src', _src_pechuga_png__WEBPACK_IMPORTED_MODULE_4__);
  };
  menuModalElements();
  const menuModalRender = () => {
    // This attaches the menu container to the (contact-modal-container)
    _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementsArray[0].appendChild(menuModalArr[0]);
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
      _contactModal__WEBPACK_IMPORTED_MODULE_0__["default"].elementsArray[0].style.display = 'none';
      menuModalArr[0].style.display = 'none';
    });
  };
  return { menuModalArr, menuModalRender, menuListener };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuModal);


/***/ }),

/***/ "./src/Bistec-Encebollado.jpg":
/*!************************************!*\
  !*** ./src/Bistec-Encebollado.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57815dcd1b5f2fdc916a.jpg";

/***/ }),

/***/ "./src/Campeon_FB.0.jpg":
/*!******************************!*\
  !*** ./src/Campeon_FB.0.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26117081c6a1f36bf69c.jpg";

/***/ }),

/***/ "./src/beach.png":
/*!***********************!*\
  !*** ./src/beach.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e8bf9d4ed5d2e3b37b3.png";

/***/ }),

/***/ "./src/food1.jpg":
/*!***********************!*\
  !*** ./src/food1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7438991b02fa9dcc1d4a.jpg";

/***/ }),

/***/ "./src/pechuga.png":
/*!*************************!*\
  !*** ./src/pechuga.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8af033bbb88a7ea18422.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menuModal.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9GQUEyQztBQUNqRDtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0QsaUVBQWUsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RNb2RhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG91cnNNb2RhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51TW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgTG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xyXG5cclxuY29uc3QgQ29udGFjdE1vZGFsID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBlbGVtZW50c0FycmF5ID0gW107XHJcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBlbGVtZW50c0FycmF5WzBdO1xyXG4gIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBlbGVtZW50Q3JlYXRvciA9IChhcnIsIHR5cGUsIGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGFyci5wdXNoKGRpdkVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIGFycjtcclxuICB9O1xyXG5cclxuICBjb25zdCBlbGVtZW50SWRlbnRpZmllciA9ICgpID0+IHtcclxuICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdkaXYnLCAnY29udGFjdC1tb2RhbC1jb250YWluZXInKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2RpdicsICdjb250YWN0LWZvcm0tY29udGFpbmVyJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdoMScsICdjb250YWN0LWhlYWRpbmcnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2Zvcm0nLCAnY29udGFjdC1mb3JtJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdmaWVsZHNldCcsICdjb250YWN0LWZpZWxkc2V0JyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdsYWJlbCcsICduYW1lLWxhYmVsJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdpbnB1dCcsICduYW1lLWlucHV0JyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdsYWJlbCcsICdlbWFpbC1sYWJlbCcpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnaW5wdXQnLCAnZW1haWwtaW5wdXQnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2RpdicsICduYW1lLWNvbnRlbnQnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2RpdicsICdlbWFpbC1jb250ZW50JyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdkaXYnLCAnY29tZW50LWNvbnRhaW5lcicpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnbGFiZWwnLCAnY29tZW50LWxhYmVsJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICd0ZXh0YXJlYScsICdjb21lbnQtYXJlYScpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZGl2JywgJ3N1Ym1pdC1idG4tY29udGFpbmVyJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdidXR0b24nLCAnc3VibWl0LWJ0bicpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnYnV0dG9uJywgJ2Nsb3NlLWJ0bicpO1xyXG5cclxuICAgIC8vIExhYmVsIGFuZCBpbnB1dCBpZCBzZXR0ZXJcclxuICAgIGZvcm1MYWJlbElucHV0U2V0dGVyKFxyXG4gICAgICBlbGVtZW50c0FycmF5WzVdLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzZdLFxyXG4gICAgICAnbmFtZScsXHJcbiAgICAgICd0ZXh0JyxcclxuICAgICAgJ0Z1bGwgTmFtZTonXHJcbiAgICApLFxyXG4gICAgICBmb3JtTGFiZWxJbnB1dFNldHRlcihcclxuICAgICAgICBlbGVtZW50c0FycmF5WzddLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbOF0sXHJcbiAgICAgICAgJ2VtYWlsJyxcclxuICAgICAgICAnZW1haWwnLFxyXG4gICAgICAgICdFLW1haWw6J1xyXG4gICAgICApO1xyXG4gICAgZWxlbWVudHNBcnJheVsxMl0uc2V0QXR0cmlidXRlKCdpZCcsICdjb21lbnQnKSxcclxuICAgICAgKGVsZW1lbnRzQXJyYXlbMTJdLnRleHRDb250ZW50ID0gJ0NvbW1lbnQ6JyksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbMTFdLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tZW50JyksXHJcbiAgICAgIChlbGVtZW50c0FycmF5WzRdLnRleHRDb250ZW50ID0gJ0FsbCBmaWVsZHMgcmVxdWlyZWQnKSxcclxuICAgICAgKGVsZW1lbnRzQXJyYXlbMl0udGV4dENvbnRlbnQgPSAnQ09OVEFDVCBGT1JNJyksXHJcbiAgICAgIChlbGVtZW50c0FycmF5WzE1XS50ZXh0Q29udGVudCA9ICdTdWJtaXQgQ29tbWVudCcpLFxyXG4gICAgICAoZWxlbWVudHNBcnJheVsxNl0udGV4dENvbnRlbnQgPSAnWCcpO1xyXG5cclxuICAgIC8vICAgcnVuIEVsZW1lbnQgcmVkZXJcclxuICAgIGVsZW1lbnRSZW5kZXJlcigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1MYWJlbElucHV0U2V0dGVyID0gKGxhYmVsLCBpbnB1dCwgaWQsIHR5cGUsIGNvbnRlbnQpID0+IHtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVsZW1lbnRSZW5kZXJlciA9ICgpID0+IHtcclxuICAgIGJvZHlFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRzQXJyYXlbMF0pO1xyXG4gICAgZWxlbWVudHNBcnJheVswXS5hcHBlbmQoZWxlbWVudHNBcnJheVsxXSksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbMV0uYXBwZW5kKFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMl0sXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVszXSxcclxuICAgICAgICBlbGVtZW50c0FycmF5WzE2XVxyXG4gICAgICApLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzNdLmFwcGVuZChlbGVtZW50c0FycmF5WzRdKSxcclxuICAgICAgZWxlbWVudHNBcnJheVs0XS5hcHBlbmQoXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVs5XSxcclxuICAgICAgICBlbGVtZW50c0FycmF5WzEwXSxcclxuICAgICAgICBlbGVtZW50c0FycmF5WzExXSxcclxuICAgICAgICBlbGVtZW50c0FycmF5WzE0XVxyXG4gICAgICApLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzldLmFwcGVuZChlbGVtZW50c0FycmF5WzVdLCBlbGVtZW50c0FycmF5WzZdKSxcclxuICAgICAgZWxlbWVudHNBcnJheVsxMF0uYXBwZW5kKGVsZW1lbnRzQXJyYXlbN10sIGVsZW1lbnRzQXJyYXlbOF0pLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzExXS5hcHBlbmQoZWxlbWVudHNBcnJheVsxMl0sIGVsZW1lbnRzQXJyYXlbMTNdKSxcclxuICAgICAgZWxlbWVudHNBcnJheVsxNF0uYXBwZW5kKGVsZW1lbnRzQXJyYXlbMTVdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBDb25hdGFjdExpc3RpbmVyID0gKCkgPT4ge1xyXG4gICAgZWxlbWVudHNBcnJheVsxNl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZWxlbWVudHNBcnJheVsxXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgICBlbGVtZW50c0FycmF5WzE1XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICBhbGVydCgnVGhhbmsgWW91IGZvciB5b3VyIGNvbW1lbnQnKTtcclxuICAgICAgZWxlbWVudHNBcnJheVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBlbGVtZW50c0FycmF5WzFdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGVsZW1lbnRJZGVudGlmaWVyKCk7XHJcbiAgcmV0dXJuIHsgZWxlbWVudHNBcnJheSwgQ29uYXRhY3RMaXN0aW5lciwgZWxlbWVudENyZWF0b3IsIG1vZGFsQ29udGFpbmVyIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RNb2RhbDtcclxuIiwiJyB1c2Ugc3RyaWN0JztcclxuaW1wb3J0IENvbnRhY3RNb2RhbCBmcm9tICcuL2NvbnRhY3RNb2RhbCc7XHJcblxyXG5jb25zdCBIb3Vyc01vZGFsID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBob3VyRWxlbWVudHNBcnJheSA9IFtdO1xyXG5cclxuICBjb25zdCBob3Vyc01vZGFsRWxlbWVudHMgPSAoKSA9PiB7XHJcbiAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXksICdkaXYnLCAnaG91cnMtY29udGFpbmVyJyksXHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheSwgJ2gxJywgJ2hvdXJzLWhlYWRpbmcnKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5LCAnZGl2JywgJ2hvdXJzLWJvZHknKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5LCAncCcsICdkYXlzJyksXHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheSwgJ3AnLCAnaHJzJyksXHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheSwgJ3AnLCAnZGF5cycpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXksICdwJywgJ2hycycpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXksICdwJywgJ2RheXMnKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5LCAncCcsICdocnMnKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5LCAnYnV0dG9uJywgJ2hvdXJzLWNsb3NlJyk7XHJcbiAgfTtcclxuICBob3Vyc01vZGFsRWxlbWVudHMoKTtcclxuICBjb25zdCBlbGVtZW50Q29udGVudENyZWF0b3IgPSAoZWxlbWVudCwgY29udGVudCkgPT4ge1xyXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9O1xyXG5cclxuICBjb25zdCBob3Vyc1JlbmRlciA9ICgpID0+IHtcclxuICAgIENvbnRhY3RNb2RhbC5lbGVtZW50c0FycmF5WzBdLmFwcGVuZChob3VyRWxlbWVudHNBcnJheVswXSk7XHJcbiAgICBob3VyRWxlbWVudHNBcnJheVswXS5hcHBlbmQoXHJcbiAgICAgIGhvdXJFbGVtZW50c0FycmF5WzFdLFxyXG4gICAgICBob3VyRWxlbWVudHNBcnJheVsyXSxcclxuICAgICAgaG91ckVsZW1lbnRzQXJyYXlbOV1cclxuICAgICksXHJcbiAgICAgIGhvdXJFbGVtZW50c0FycmF5WzJdLmFwcGVuZChcclxuICAgICAgICBob3VyRWxlbWVudHNBcnJheVszXSxcclxuICAgICAgICBob3VyRWxlbWVudHNBcnJheVs0XSxcclxuICAgICAgICBob3VyRWxlbWVudHNBcnJheVs1XSxcclxuICAgICAgICBob3VyRWxlbWVudHNBcnJheVs2XSxcclxuICAgICAgICBob3VyRWxlbWVudHNBcnJheVs3XSxcclxuICAgICAgICBob3VyRWxlbWVudHNBcnJheVs4XVxyXG4gICAgICApO1xyXG4gICAgZWxlbWVudENvbnRlbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5WzFdLCAnSE9VUlMgT0YgT1BFUkFUSU9OJyksXHJcbiAgICAgIGVsZW1lbnRDb250ZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheVszXSwgJ01vbmRheSAmIFR1ZXNkYXknKSxcclxuICAgICAgZWxlbWVudENvbnRlbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5WzRdLCAnQ2xvc2VkJyksXHJcbiAgICAgIGVsZW1lbnRDb250ZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheVs1XSwgJ1dlZG5lc2RheSAmIFRodXJzZGF5JyksXHJcbiAgICAgIGVsZW1lbnRDb250ZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheVs2XSwgJzEyOjAwIHAubS4gLSA5IHAubS4nKSxcclxuICAgICAgZWxlbWVudENvbnRlbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5WzddLCAnRnJpZGF5IC0gU3VuZGF5JyksXHJcbiAgICAgIGVsZW1lbnRDb250ZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheVs4XSwgJzE6MDAgcC5tLiAtIDE6MDAgYS5tLicpLFxyXG4gICAgICBlbGVtZW50Q29udGVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXlbOV0sICdYJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaG91cnNMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgIGhvdXJFbGVtZW50c0FycmF5WzldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudHNBcnJheVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBob3VyRWxlbWVudHNBcnJheVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGhvdXJzUmVuZGVyLFxyXG4gICAgaG91ckVsZW1lbnRzQXJyYXksXHJcbiAgICBob3Vyc0xpc3RlbmVyLFxyXG4gICAgZWxlbWVudENvbnRlbnRDcmVhdG9yLFxyXG4gIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IEhvdXJzTW9kYWw7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEltYWdlMSBmcm9tICcuL2Zvb2QxLmpwZyc7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi9iZWFjaC5wbmcnO1xyXG5cclxuY29uc3QgTG9hZFBhZ2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGRpdkFyciA9IFtdO1xyXG4gIGNvbnN0IGNsYXNzTmFtZUFyciA9IFtcclxuICAgICdjb250ZW50JyxcclxuICAgICdoZWFkZXItY29udGFpbmVyJyxcclxuICAgICdzaWRlYmFyLWNvbnRhaW5lcicsXHJcbiAgICAnbWFpbi1jb250YWluZXInLFxyXG4gICAgJ2NvbXBhbnktbmFtZScsXHJcbiAgICAnbWFpbi1jb250ZW50JyxcclxuICAgICd0ZXh0LWNvbnRlbnQnLFxyXG4gICAgJ21haW4taW1hZ2UtY29udGFpbmVyJyxcclxuICAgICdtYWluLWltZycsXHJcbiAgICAnbWFpbi10ZXh0JyxcclxuICAgICdzaWRlYmFyQnRuLWNvbnRhaW5lcicsXHJcbiAgICAnYmFubmVyLWltZycsXHJcbiAgXTtcclxuICBjb25zdCBlbGVtZW50Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhcmVudERpdiA9IGRvY3VtZW50LmJvZHk7IC8vIGFycmF5IFswXVxyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbMV1cclxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbMl1cclxuICAgIGNvbnN0IHNpZGViYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzNdXHJcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFs0XVxyXG4gICAgY29uc3QgaGVhZGluZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTsgLy8gYXJyYXkgWzVdXHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbNl1cclxuICAgIGNvbnN0IG1haW5UZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbN11cclxuICAgIGNvbnN0IG1pYW5JbWFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzhdXHJcbiAgICBjb25zdCBmb29kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgLy8gYXJyYXkgWzldXHJcbiAgICBjb25zdCB0ZXh0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy8gYXJyYXkgWzEwXVxyXG4gICAgY29uc3Qgc2lkZWJhckJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbMTFdXHJcbiAgICBjb25zdCBiYW5uZXJpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyAvLyBhcnJheSBbMTJdXHJcblxyXG4gICAgZGl2QXJyLnB1c2goXHJcbiAgICAgIHBhcmVudERpdixcclxuICAgICAgY29udGVudERpdixcclxuICAgICAgaGVhZGVyRGl2LFxyXG4gICAgICBzaWRlYmFyRGl2LFxyXG4gICAgICBtYWluRGl2LFxyXG4gICAgICBoZWFkaW5nVGl0bGUsXHJcbiAgICAgIG1haW5Db250ZW50LFxyXG4gICAgICBtYWluVGV4dENvbnRlbnQsXHJcbiAgICAgIG1pYW5JbWFnZUNvbnRlbnQsXHJcbiAgICAgIGZvb2RJbWFnZSxcclxuICAgICAgdGV4dEJvZHksXHJcbiAgICAgIHNpZGViYXJCdG5EaXYsXHJcbiAgICAgIGJhbm5lcmltYWdlXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRpdkFycjtcclxuICB9O1xyXG4gIGVsZW1lbnRDcmVhdG9yKCk7XHJcbiAgY29uc3QgZWxlbWVudE5hbWluZyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcclxuICAgIC8vIENvbnRhaW5lcnNcclxuICAgIGVsZW1lbnRbMV0uc2V0QXR0cmlidXRlKCdpZCcsIGNsYXNzTmFtZVswXSk7XHJcbiAgICBlbGVtZW50WzJdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVsxXTtcclxuICAgIGVsZW1lbnRbM10uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzJdO1xyXG4gICAgZWxlbWVudFs0XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbM107XHJcblxyXG4gICAgLy8gQ29udGFpbmVyIENoaWxkcmVuXHJcbiAgICBlbGVtZW50WzVdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs0XTtcclxuICAgIGVsZW1lbnRbNl0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzVdO1xyXG4gICAgZWxlbWVudFs3XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbNl07XHJcbiAgICBlbGVtZW50WzhdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs3XTtcclxuICAgIGVsZW1lbnRbOV0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzhdO1xyXG4gICAgZWxlbWVudFsxMF0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzldO1xyXG4gICAgZWxlbWVudFsxMV0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzEwXTtcclxuICAgIGVsZW1lbnRbMTJdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVsxMV07XHJcbiAgICAvLyBpbWFnZSBwbGFjZW1lbnRcclxuICAgIGVsZW1lbnRbOV0uc3JjID0gSW1hZ2UxO1xyXG4gICAgZWxlbWVudFsxMl0uc3JjID0gQmFubmVyO1xyXG4gICAgLy9jaGlsZHJlbiBhcHBlbmRcclxuICAgIGVsZW1lbnRbOF0uYXBwZW5kKGVsZW1lbnRbOV0pO1xyXG4gICAgZWxlbWVudFs3XS5hcHBlbmQoZWxlbWVudFsxMF0pO1xyXG4gICAgZWxlbWVudFs2XS5hcHBlbmQoZWxlbWVudFs3XSwgZWxlbWVudFs4XSk7XHJcbiAgICBlbGVtZW50WzRdLmFwcGVuZChlbGVtZW50WzZdKTtcclxuICAgIGVsZW1lbnRbM10uYXBwZW5kKGVsZW1lbnRbMTFdKTtcclxuICAgIGVsZW1lbnRbMl0uYXBwZW5kKGVsZW1lbnRbNV0sIGVsZW1lbnRbMTJdKTtcclxuICAgIGVsZW1lbnRbMV0uYXBwZW5kKGVsZW1lbnRbMl0sIGVsZW1lbnRbM10sIGVsZW1lbnRbNF0pO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50WzFdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckVsZW1lbnRUZXh0ID0gKGFyciwgY29tbWVudCkgPT4gKGFyci50ZXh0Q29udGVudCA9IGNvbW1lbnQpO1xyXG5cclxuICBjb25zdCByZW5kZXJMb2FkID0gKCkgPT4ge1xyXG4gICAgZGl2QXJyWzBdLmFwcGVuZENoaWxkKGVsZW1lbnROYW1pbmcoZGl2QXJyLCBjbGFzc05hbWVBcnIpKTtcclxuICAgIHJlbmRlckVsZW1lbnRUZXh0KGRpdkFycls1XSwgJ01pIEphcmRpbicpO1xyXG4gICAgcmVuZGVyRWxlbWVudFRleHQoXHJcbiAgICAgIGRpdkFyclsxMF0sXHJcbiAgICAgICdPdXIgZmFtaWx5IHdvdWxkIGxpa2UgdG8gZmlyc3Qgd2VsY29tZSB5b3UgdG8gb3VyIHNpdGUuIFdlIHdlbGNvbWUgeW91IHRvIHRha2UgdGhlIGRyaXZlIGFuZCBwYXJ0aWNpcGF0ZSBpbiB0aGUgYmVzdCBIaXNwYW5pYyBhdG1vc3BoZXJlIGluIHRoZSByZWdpb24uIE91ciBzdGFmZiB3ZWxjb21lcyB5b3Ugd2l0aCBvcGVuIGFybXMgYW5kIHdvbmRlcmZ1bCBmb29kLiBPdXIgZm9vZCBjYW4gb25seSBiZSBkZXNjcmliZWQgYXMgYW4gZXhwZXJpZW5jZSBmb3IgdGhlIGhlYXJ0LiBCb29rIHlvdXIgdGFibGUgdG9kYXkgYW5kIGVuam95IGEgd29uZGVyZnVsIHRpbWUgaGVyZSBhdCBNaSBKYXJkaW4uJ1xyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBkaXZBcnIsIGNsYXNzTmFtZUFyciwgcmVuZGVyTG9hZCwgcmVuZGVyRWxlbWVudFRleHQgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgTG9hZFBhZ2U7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IENvbnRhY3RNb2RhbCBmcm9tICcuL2NvbnRhY3RNb2RhbCc7XHJcbmltcG9ydCBIb3Vyc01vZGFsIGZyb20gJy4vaG91cnNNb2RhbCc7XHJcblxyXG4vLyBJbWFnZSBpbXBvcnRzXHJcbmltcG9ydCBCaXN0ZWNJbWFnZSBmcm9tICcvc3JjL0Jpc3RlYy1FbmNlYm9sbGFkby5qcGcnO1xyXG5pbXBvcnQgTW9mb25nb0ltYWdlIGZyb20gJy9zcmMvQ2FtcGVvbl9GQi4wLmpwZyc7XHJcbmltcG9ydCBCcmVhZENoaWNrZW4gZnJvbSAnL3NyYy9wZWNodWdhLnBuZyc7XHJcblxyXG5jb25zdCBNZW51TW9kYWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IG1lbnVNb2RhbEFyciA9IFtdO1xyXG5cclxuICBjb25zdCBtZW51TW9kYWxFbGVtZW50cyA9ICgpID0+IHtcclxuICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihtZW51TW9kYWxBcnIsICdkaXYnLCAnbWVudS1jb250YWluZXInKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKG1lbnVNb2RhbEFyciwgJ2gxJywgJ21lbnUtaGVhZGluZycpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IobWVudU1vZGFsQXJyLCAnZGl2JywgJ2l0ZW1zLWNvbnRhaW5lcicpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IobWVudU1vZGFsQXJyLCAnYnV0dG9uJywgJ21lbnUtY2xvc2UtYnRuJyksXHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihtZW51TW9kYWxBcnIsICdkaXYnLCAnaXRlbScpLCAvLyBpdGVtIDFcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKG1lbnVNb2RhbEFyciwgJ3AnLCAnaXRlbS1oZWFkaW5nJyksXHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihtZW51TW9kYWxBcnIsICdpbWcnLCAnaXRlbS1pbWcnKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKG1lbnVNb2RhbEFyciwgJ3AnLCAnaXRlbS1jb21tZW50JyksXHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihtZW51TW9kYWxBcnIsICdwJywgJ3ByaWNlJyk7XHJcbiAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IobWVudU1vZGFsQXJyLCAnZGl2JywgJ2l0ZW0nKSwgLy8gaXRlbSAyXHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihtZW51TW9kYWxBcnIsICdwJywgJ2l0ZW0taGVhZGluZycpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IobWVudU1vZGFsQXJyLCAnaW1nJywgJ2l0ZW0taW1nJyksXHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihtZW51TW9kYWxBcnIsICdwJywgJ2l0ZW0tY29tbWVudCcpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IobWVudU1vZGFsQXJyLCAncCcsICdwcmljZScpO1xyXG4gICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKG1lbnVNb2RhbEFyciwgJ2RpdicsICdpdGVtJyksIC8vIGl0ZW0gM1xyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IobWVudU1vZGFsQXJyLCAncCcsICdpdGVtLWhlYWRpbmcnKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKG1lbnVNb2RhbEFyciwgJ2ltZycsICdpdGVtLWltZycpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IobWVudU1vZGFsQXJyLCAncCcsICdpdGVtLWNvbW1lbnQnKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKG1lbnVNb2RhbEFyciwgJ3AnLCAncHJpY2UnKTtcclxuXHJcbiAgICAvLyAgIFRleHQgY29udGVudCBmb3IgZWxlbWVudHNcclxuICAgIEhvdXJzTW9kYWwuZWxlbWVudENvbnRlbnRDcmVhdG9yKG1lbnVNb2RhbEFyclsxXSwgJ01FTlUnKSxcclxuICAgICAgSG91cnNNb2RhbC5lbGVtZW50Q29udGVudENyZWF0b3IobWVudU1vZGFsQXJyWzNdLCAnWCcpLFxyXG4gICAgICBIb3Vyc01vZGFsLmVsZW1lbnRDb250ZW50Q3JlYXRvcihtZW51TW9kYWxBcnJbNV0sICdCaXN0ZWMgRW5jZWJvbGxhZG8nKSxcclxuICAgICAgSG91cnNNb2RhbC5lbGVtZW50Q29udGVudENyZWF0b3IoXHJcbiAgICAgICAgbWVudU1vZGFsQXJyWzddLFxyXG4gICAgICAgICdMYXRpbiBzdHlsZSBzdGFrZSBhbmQgb25pb25zIHRoYXQgaW5jb3Jwb3JhdGUgYSBtb3V0aC13YXRlcmluZyBhZG9ibyBtYXJpbmFkZS4nXHJcbiAgICAgICksXHJcbiAgICAgIEhvdXJzTW9kYWwuZWxlbWVudENvbnRlbnRDcmVhdG9yKG1lbnVNb2RhbEFycls4XSwgJyQgMTUuOTknKTtcclxuICAgIEhvdXJzTW9kYWwuZWxlbWVudENvbnRlbnRDcmVhdG9yKG1lbnVNb2RhbEFyclsxMF0sICdNb2ZvbmdvJyksXHJcbiAgICAgIEhvdXJzTW9kYWwuZWxlbWVudENvbnRlbnRDcmVhdG9yKFxyXG4gICAgICAgIG1lbnVNb2RhbEFyclsxMl0sXHJcbiAgICAgICAgJ0EgY2xhc3NpYyBkaXNoIG1hZGUgb2YgZnJpZWQgcGxhbnRhaW5zLCBtYXNoZWQgYW5kIG1peGVkIHdpdGggZ2FybGljIHBhc3RlIGFuZCB5b3VyIGNob2ljZSBvZiBtZWF0LidcclxuICAgICAgKSxcclxuICAgICAgSG91cnNNb2RhbC5lbGVtZW50Q29udGVudENyZWF0b3IobWVudU1vZGFsQXJyWzEzXSwgJyQgMTMuOTknKTtcclxuICAgIEhvdXJzTW9kYWwuZWxlbWVudENvbnRlbnRDcmVhdG9yKG1lbnVNb2RhbEFyclsxNV0sICdQZWNodWdhIEVtcGFuYWRhJyksXHJcbiAgICAgIEhvdXJzTW9kYWwuZWxlbWVudENvbnRlbnRDcmVhdG9yKFxyXG4gICAgICAgIG1lbnVNb2RhbEFyclsxN10sXHJcbiAgICAgICAgJ0JyZWFkZWQgY2hpY2tlbiBicmVhc3Qgc2VydmVkIHdpdGggcmljZSBhbmQgYmVhbnMuJ1xyXG4gICAgICApLFxyXG4gICAgICBIb3Vyc01vZGFsLmVsZW1lbnRDb250ZW50Q3JlYXRvcihtZW51TW9kYWxBcnJbMThdLCAnJCAxMC45OScpO1xyXG5cclxuICAgIC8vICAgSW1hZ2UgUGxhY21lbnRcclxuICAgIG1lbnVNb2RhbEFycls2XS5zZXRBdHRyaWJ1dGUoJ3NyYycsIEJpc3RlY0ltYWdlKTtcclxuICAgIG1lbnVNb2RhbEFyclsxMV0uc2V0QXR0cmlidXRlKCdzcmMnLCBNb2ZvbmdvSW1hZ2UpO1xyXG4gICAgbWVudU1vZGFsQXJyWzE2XS5zZXRBdHRyaWJ1dGUoJ3NyYycsIEJyZWFkQ2hpY2tlbik7XHJcbiAgfTtcclxuICBtZW51TW9kYWxFbGVtZW50cygpO1xyXG4gIGNvbnN0IG1lbnVNb2RhbFJlbmRlciA9ICgpID0+IHtcclxuICAgIC8vIFRoaXMgYXR0YWNoZXMgdGhlIG1lbnUgY29udGFpbmVyIHRvIHRoZSAoY29udGFjdC1tb2RhbC1jb250YWluZXIpXHJcbiAgICBDb250YWN0TW9kYWwuZWxlbWVudHNBcnJheVswXS5hcHBlbmRDaGlsZChtZW51TW9kYWxBcnJbMF0pO1xyXG4gICAgLy9BdHRhY2htZW50IHRoZSBoZWFkaW5nLCBtZW51IGxpc3QsIGJ1dHRvblxyXG4gICAgbWVudU1vZGFsQXJyWzBdLmFwcGVuZChtZW51TW9kYWxBcnJbMV0sIG1lbnVNb2RhbEFyclsyXSwgbWVudU1vZGFsQXJyWzNdKSxcclxuICAgICAgbWVudU1vZGFsQXJyWzJdLmFwcGVuZChcclxuICAgICAgICBtZW51TW9kYWxBcnJbNF0sXHJcbiAgICAgICAgbWVudU1vZGFsQXJyWzldLFxyXG4gICAgICAgIG1lbnVNb2RhbEFyclsxNF1cclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBBdHRhY2htZW50IG9mIGl0ZW0gMSBlbGVtbnRzXHJcbiAgICBtZW51TW9kYWxBcnJbNF0uYXBwZW5kKFxyXG4gICAgICBtZW51TW9kYWxBcnJbNV0sXHJcbiAgICAgIG1lbnVNb2RhbEFycls2XSxcclxuICAgICAgbWVudU1vZGFsQXJyWzddLFxyXG4gICAgICBtZW51TW9kYWxBcnJbOF1cclxuICAgICk7XHJcbiAgICBtZW51TW9kYWxBcnJbOV0uYXBwZW5kKFxyXG4gICAgICBtZW51TW9kYWxBcnJbMTBdLFxyXG4gICAgICBtZW51TW9kYWxBcnJbMTFdLFxyXG4gICAgICBtZW51TW9kYWxBcnJbMTJdLFxyXG4gICAgICBtZW51TW9kYWxBcnJbMTNdXHJcbiAgICApO1xyXG4gICAgbWVudU1vZGFsQXJyWzE0XS5hcHBlbmQoXHJcbiAgICAgIG1lbnVNb2RhbEFyclsxNV0sXHJcbiAgICAgIG1lbnVNb2RhbEFyclsxNl0sXHJcbiAgICAgIG1lbnVNb2RhbEFyclsxN10sXHJcbiAgICAgIG1lbnVNb2RhbEFyclsxOF1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbWVudUxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgbWVudU1vZGFsQXJyWzNdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudHNBcnJheVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBtZW51TW9kYWxBcnJbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgbWVudU1vZGFsQXJyLCBtZW51TW9kYWxSZW5kZXIsIG1lbnVMaXN0ZW5lciB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBNZW51TW9kYWw7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==