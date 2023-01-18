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

  return { hoursRender, hourElementsArray, hoursListener };
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
/* harmony import */ var _hoursModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoursModal */ "./src/hoursModal.js");





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
      _contactModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArray[1].style.display = 'grid';
    });
    sidebarBtnArr[2].addEventListener('click', () => {
      _contactModal__WEBPACK_IMPORTED_MODULE_1__["default"].elementsArray[0].style.display = 'flex';
      _hoursModal__WEBPACK_IMPORTED_MODULE_2__["default"].hourElementsArray[0].style.display = 'grid';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUEwQjtBQUM5QixJQUFJLG9FQUEwQjtBQUM5QixJQUFJLG9FQUEwQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0ZBQTJDO0FBQ2pELE1BQU0sb0ZBQTJDO0FBQ2pELEtBQUs7QUFDTDtBQUNBLE1BQU0sb0ZBQTJDO0FBQ2pELE1BQU0sc0ZBQTZDO0FBQ25ELEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCxpRUFBZSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdE1vZGFsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob3Vyc01vZGFsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NpZGViYXItY3JlYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBMb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XHJcblxyXG5jb25zdCBDb250YWN0TW9kYWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGVsZW1lbnRzQXJyYXkgPSBbXTtcclxuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGVsZW1lbnRzQXJyYXlbMF07XHJcbiAgY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xyXG4gIGNvbnN0IGVsZW1lbnRDcmVhdG9yID0gKGFyciwgdHlwZSwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgYXJyLnB1c2goZGl2RWxlbWVudCk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVsZW1lbnRJZGVudGlmaWVyID0gKCkgPT4ge1xyXG4gICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2RpdicsICdjb250YWN0LW1vZGFsLWNvbnRhaW5lcicpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZGl2JywgJ2NvbnRhY3QtZm9ybS1jb250YWluZXInKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2gxJywgJ2NvbnRhY3QtaGVhZGluZycpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZm9ybScsICdjb250YWN0LWZvcm0nKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2ZpZWxkc2V0JywgJ2NvbnRhY3QtZmllbGRzZXQnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2xhYmVsJywgJ25hbWUtbGFiZWwnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2lucHV0JywgJ25hbWUtaW5wdXQnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2xhYmVsJywgJ2VtYWlsLWxhYmVsJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdpbnB1dCcsICdlbWFpbC1pbnB1dCcpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZGl2JywgJ25hbWUtY29udGVudCcpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZGl2JywgJ2VtYWlsLWNvbnRlbnQnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2RpdicsICdjb21lbnQtY29udGFpbmVyJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdsYWJlbCcsICdjb21lbnQtbGFiZWwnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ3RleHRhcmVhJywgJ2NvbWVudC1hcmVhJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdkaXYnLCAnc3VibWl0LWJ0bi1jb250YWluZXInKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2J1dHRvbicsICdzdWJtaXQtYnRuJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdidXR0b24nLCAnY2xvc2UtYnRuJyk7XHJcblxyXG4gICAgLy8gTGFiZWwgYW5kIGlucHV0IGlkIHNldHRlclxyXG4gICAgZm9ybUxhYmVsSW5wdXRTZXR0ZXIoXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbNV0sXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbNl0sXHJcbiAgICAgICduYW1lJyxcclxuICAgICAgJ3RleHQnLFxyXG4gICAgICAnRnVsbCBOYW1lOidcclxuICAgICksXHJcbiAgICAgIGZvcm1MYWJlbElucHV0U2V0dGVyKFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbN10sXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVs4XSxcclxuICAgICAgICAnZW1haWwnLFxyXG4gICAgICAgICdlbWFpbCcsXHJcbiAgICAgICAgJ0UtbWFpbDonXHJcbiAgICAgICk7XHJcbiAgICBlbGVtZW50c0FycmF5WzEyXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbWVudCcpLFxyXG4gICAgICAoZWxlbWVudHNBcnJheVsxMl0udGV4dENvbnRlbnQgPSAnQ29tbWVudDonKSxcclxuICAgICAgZWxlbWVudHNBcnJheVsxMV0uc2V0QXR0cmlidXRlKCdpZCcsICdjb21lbnQnKSxcclxuICAgICAgKGVsZW1lbnRzQXJyYXlbNF0udGV4dENvbnRlbnQgPSAnQWxsIGZpZWxkcyByZXF1aXJlZCcpLFxyXG4gICAgICAoZWxlbWVudHNBcnJheVsyXS50ZXh0Q29udGVudCA9ICdDT05UQUNUIEZPUk0nKSxcclxuICAgICAgKGVsZW1lbnRzQXJyYXlbMTVdLnRleHRDb250ZW50ID0gJ1N1Ym1pdCBDb21tZW50JyksXHJcbiAgICAgIChlbGVtZW50c0FycmF5WzE2XS50ZXh0Q29udGVudCA9ICdYJyk7XHJcblxyXG4gICAgLy8gICBydW4gRWxlbWVudCByZWRlclxyXG4gICAgZWxlbWVudFJlbmRlcmVyKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybUxhYmVsSW5wdXRTZXR0ZXIgPSAobGFiZWwsIGlucHV0LCBpZCwgdHlwZSwgY29udGVudCkgPT4ge1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWxlbWVudFJlbmRlcmVyID0gKCkgPT4ge1xyXG4gICAgYm9keUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudHNBcnJheVswXSk7XHJcbiAgICBlbGVtZW50c0FycmF5WzBdLmFwcGVuZChlbGVtZW50c0FycmF5WzFdKSxcclxuICAgICAgZWxlbWVudHNBcnJheVsxXS5hcHBlbmQoXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVsyXSxcclxuICAgICAgICBlbGVtZW50c0FycmF5WzNdLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMTZdXHJcbiAgICAgICksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbM10uYXBwZW5kKGVsZW1lbnRzQXJyYXlbNF0pLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzRdLmFwcGVuZChcclxuICAgICAgICBlbGVtZW50c0FycmF5WzldLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMTBdLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMTFdLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMTRdXHJcbiAgICAgICksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbOV0uYXBwZW5kKGVsZW1lbnRzQXJyYXlbNV0sIGVsZW1lbnRzQXJyYXlbNl0pLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzEwXS5hcHBlbmQoZWxlbWVudHNBcnJheVs3XSwgZWxlbWVudHNBcnJheVs4XSksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbMTFdLmFwcGVuZChlbGVtZW50c0FycmF5WzEyXSwgZWxlbWVudHNBcnJheVsxM10pLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzE0XS5hcHBlbmQoZWxlbWVudHNBcnJheVsxNV0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IENvbmF0YWN0TGlzdGluZXIgPSAoKSA9PiB7XHJcbiAgICBlbGVtZW50c0FycmF5WzE2XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZWxlbWVudHNBcnJheVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBlbGVtZW50c0FycmF5WzFdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICAgIGVsZW1lbnRzQXJyYXlbMTVdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGFsZXJ0KCdUaGFuayBZb3UgZm9yIHlvdXIgY29tbWVudCcpO1xyXG4gICAgICBlbGVtZW50c0FycmF5WzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbMV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZWxlbWVudElkZW50aWZpZXIoKTtcclxuICByZXR1cm4geyBlbGVtZW50c0FycmF5LCBDb25hdGFjdExpc3RpbmVyLCBlbGVtZW50Q3JlYXRvciwgbW9kYWxDb250YWluZXIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdE1vZGFsO1xyXG4iLCInIHVzZSBzdHJpY3QnO1xyXG5pbXBvcnQgQ29udGFjdE1vZGFsIGZyb20gJy4vY29udGFjdE1vZGFsJztcclxuXHJcbmNvbnN0IEhvdXJzTW9kYWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGhvdXJFbGVtZW50c0FycmF5ID0gW107XHJcblxyXG4gIGNvbnN0IGhvdXJzTW9kYWxFbGVtZW50cyA9ICgpID0+IHtcclxuICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheSwgJ2RpdicsICdob3Vycy1jb250YWluZXInKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5LCAnaDEnLCAnaG91cnMtaGVhZGluZycpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXksICdkaXYnLCAnaG91cnMtYm9keScpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXksICdwJywgJ2RheXMnKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5LCAncCcsICdocnMnKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5LCAncCcsICdkYXlzJyksXHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheSwgJ3AnLCAnaHJzJyksXHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheSwgJ3AnLCAnZGF5cycpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXksICdwJywgJ2hycycpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXksICdidXR0b24nLCAnaG91cnMtY2xvc2UnKTtcclxuICB9O1xyXG4gIGhvdXJzTW9kYWxFbGVtZW50cygpO1xyXG4gIGNvbnN0IGVsZW1lbnRDb250ZW50Q3JlYXRvciA9IChlbGVtZW50LCBjb250ZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhvdXJzUmVuZGVyID0gKCkgPT4ge1xyXG4gICAgQ29udGFjdE1vZGFsLmVsZW1lbnRzQXJyYXlbMF0uYXBwZW5kKGhvdXJFbGVtZW50c0FycmF5WzBdKTtcclxuICAgIGhvdXJFbGVtZW50c0FycmF5WzBdLmFwcGVuZChcclxuICAgICAgaG91ckVsZW1lbnRzQXJyYXlbMV0sXHJcbiAgICAgIGhvdXJFbGVtZW50c0FycmF5WzJdLFxyXG4gICAgICBob3VyRWxlbWVudHNBcnJheVs5XVxyXG4gICAgKSxcclxuICAgICAgaG91ckVsZW1lbnRzQXJyYXlbMl0uYXBwZW5kKFxyXG4gICAgICAgIGhvdXJFbGVtZW50c0FycmF5WzNdLFxyXG4gICAgICAgIGhvdXJFbGVtZW50c0FycmF5WzRdLFxyXG4gICAgICAgIGhvdXJFbGVtZW50c0FycmF5WzVdLFxyXG4gICAgICAgIGhvdXJFbGVtZW50c0FycmF5WzZdLFxyXG4gICAgICAgIGhvdXJFbGVtZW50c0FycmF5WzddLFxyXG4gICAgICAgIGhvdXJFbGVtZW50c0FycmF5WzhdXHJcbiAgICAgICk7XHJcbiAgICBlbGVtZW50Q29udGVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXlbMV0sICdIT1VSUyBPRiBPUEVSQVRJT04nKSxcclxuICAgICAgZWxlbWVudENvbnRlbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5WzNdLCAnTW9uZGF5ICYgVHVlc2RheScpLFxyXG4gICAgICBlbGVtZW50Q29udGVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXlbNF0sICdDbG9zZWQnKSxcclxuICAgICAgZWxlbWVudENvbnRlbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5WzVdLCAnV2VkbmVzZGF5ICYgVGh1cnNkYXknKSxcclxuICAgICAgZWxlbWVudENvbnRlbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5WzZdLCAnMTI6MDAgcC5tLiAtIDkgcC5tLicpLFxyXG4gICAgICBlbGVtZW50Q29udGVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXlbN10sICdGcmlkYXkgLSBTdW5kYXknKSxcclxuICAgICAgZWxlbWVudENvbnRlbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5WzhdLCAnMTowMCBwLm0uIC0gMTowMCBhLm0uJyksXHJcbiAgICAgIGVsZW1lbnRDb250ZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheVs5XSwgJ1gnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBob3Vyc0xpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgaG91ckVsZW1lbnRzQXJyYXlbOV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50c0FycmF5WzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGhvdXJFbGVtZW50c0FycmF5WzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBob3Vyc1JlbmRlciwgaG91ckVsZW1lbnRzQXJyYXksIGhvdXJzTGlzdGVuZXIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgSG91cnNNb2RhbDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgSW1hZ2UxIGZyb20gJy4vZm9vZDEuanBnJztcclxuXHJcbmNvbnN0IExvYWRQYWdlID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBkaXZBcnIgPSBbXTtcclxuICBjb25zdCBjbGFzc05hbWVBcnIgPSBbXHJcbiAgICAnY29udGVudCcsXHJcbiAgICAnaGVhZGVyLWNvbnRhaW5lcicsXHJcbiAgICAnc2lkZWJhci1jb250YWluZXInLFxyXG4gICAgJ21haW4tY29udGFpbmVyJyxcclxuICAgICdjb21wYW55LW5hbWUnLFxyXG4gICAgJ21haW4tY29udGVudCcsXHJcbiAgICAndGV4dC1jb250ZW50JyxcclxuICAgICdtYWluLWltYWdlLWNvbnRhaW5lcicsXHJcbiAgICAnbWFpbi1pbWcnLFxyXG4gICAgJ21haW4tdGV4dCcsXHJcbiAgICAnc2lkZWJhckJ0bi1jb250YWluZXInLFxyXG4gIF07XHJcbiAgY29uc3QgZWxlbWVudENyZWF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5ib2R5OyAvLyBhcnJheSBbMF1cclxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzFdXHJcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzJdXHJcbiAgICBjb25zdCBzaWRlYmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFszXVxyXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbNF1cclxuICAgIGNvbnN0IGhlYWRpbmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7IC8vIGFycmF5IFs1XVxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzZdXHJcbiAgICBjb25zdCBtYWluVGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzddXHJcbiAgICBjb25zdCBtaWFuSW1hZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFs4XVxyXG4gICAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IC8vIGFycmF5IFs5XVxyXG4gICAgY29uc3QgdGV4dEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7IC8vIGFycmF5IFsxMF1cclxuICAgIGNvbnN0IHNpZGViYXJCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzExXVxyXG5cclxuICAgIGRpdkFyci5wdXNoKFxyXG4gICAgICBwYXJlbnREaXYsXHJcbiAgICAgIGNvbnRlbnREaXYsXHJcbiAgICAgIGhlYWRlckRpdixcclxuICAgICAgc2lkZWJhckRpdixcclxuICAgICAgbWFpbkRpdixcclxuICAgICAgaGVhZGluZ1RpdGxlLFxyXG4gICAgICBtYWluQ29udGVudCxcclxuICAgICAgbWFpblRleHRDb250ZW50LFxyXG4gICAgICBtaWFuSW1hZ2VDb250ZW50LFxyXG4gICAgICBmb29kSW1hZ2UsXHJcbiAgICAgIHRleHRCb2R5LFxyXG4gICAgICBzaWRlYmFyQnRuRGl2XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRpdkFycjtcclxuICB9O1xyXG4gIGVsZW1lbnRDcmVhdG9yKCk7XHJcbiAgY29uc3QgZWxlbWVudE5hbWluZyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcclxuICAgIC8vIENvbnRhaW5lcnNcclxuICAgIGVsZW1lbnRbMV0uc2V0QXR0cmlidXRlKCdpZCcsIGNsYXNzTmFtZVswXSk7XHJcbiAgICBlbGVtZW50WzJdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVsxXTtcclxuICAgIGVsZW1lbnRbM10uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzJdO1xyXG4gICAgZWxlbWVudFs0XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbM107XHJcblxyXG4gICAgLy8gQ29udGFpbmVyIENoaWxkcmVuXHJcbiAgICBlbGVtZW50WzVdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs0XTtcclxuICAgIGVsZW1lbnRbNl0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzVdO1xyXG4gICAgZWxlbWVudFs3XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbNl07XHJcbiAgICBlbGVtZW50WzhdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs3XTtcclxuICAgIGVsZW1lbnRbOV0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzhdO1xyXG4gICAgZWxlbWVudFsxMF0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzldO1xyXG4gICAgZWxlbWVudFsxMV0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzEwXTtcclxuXHJcbiAgICAvLyBpbWFnZSBwbGFjZW1lbnRcclxuICAgIGVsZW1lbnRbOV0uc3JjID0gSW1hZ2UxO1xyXG4gICAgLy9jaGlsZHJlbiBhcHBlbmRcclxuICAgIGVsZW1lbnRbOF0uYXBwZW5kKGVsZW1lbnRbOV0pO1xyXG4gICAgZWxlbWVudFs3XS5hcHBlbmQoZWxlbWVudFsxMF0pO1xyXG4gICAgZWxlbWVudFs2XS5hcHBlbmQoZWxlbWVudFs3XSwgZWxlbWVudFs4XSk7XHJcbiAgICBlbGVtZW50WzRdLmFwcGVuZChlbGVtZW50WzZdKTtcclxuICAgIGVsZW1lbnRbM10uYXBwZW5kKGVsZW1lbnRbMTFdKTtcclxuICAgIGVsZW1lbnRbMl0uYXBwZW5kKGVsZW1lbnRbNV0pO1xyXG4gICAgZWxlbWVudFsxXS5hcHBlbmQoZWxlbWVudFsyXSwgZWxlbWVudFszXSwgZWxlbWVudFs0XSk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRbMV07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRWxlbWVudFRleHQgPSAoYXJyLCBjb21tZW50KSA9PiAoYXJyLnRleHRDb250ZW50ID0gY29tbWVudCk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckxvYWQgPSAoKSA9PiB7XHJcbiAgICBkaXZBcnJbMF0uYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWluZyhkaXZBcnIsIGNsYXNzTmFtZUFycikpO1xyXG4gICAgcmVuZGVyRWxlbWVudFRleHQoZGl2QXJyWzVdLCAnTWkgSmFyZGluJyk7XHJcbiAgICByZW5kZXJFbGVtZW50VGV4dChcclxuICAgICAgZGl2QXJyWzEwXSxcclxuICAgICAgJ091ciBmYW1pbHkgd291bGQgbGlrZSB0byBmaXJzdCB3ZWxjb21lIHlvdSB0byBvdXIgc2l0ZS4gV2Ugd2VsY29tZSB5b3UgdG8gdGFrZSB0aGUgZHJpdmUgYW5kIHBhcnRpY2lwYXRlIGluIHRoZSBiZXN0IEhpc3BhbmljIGF0bW9zcGhlcmUgaW4gdGhlIHJlZ2lvbi4gT3VyIHN0YWZmIHdlbGNvbWVzIHlvdSB3aXRoIG9wZW4gYXJtcyBhbmQgd29uZGVyZnVsIGZvb2QuIE91ciBmb29kIGNhbiBvbmx5IGJlIGRlc2NyaWJlZCBhcyBhbiBleHBlcmllbmNlIGZvciB0aGUgaGVhcnQuIEJvb2sgeW91ciB0YWJsZSB0b2RheSBhbmQgZW5qb3kgYSB3b25kZXJmdWwgdGltZSBoZXJlIGF0IE1pIEphcmRpbi4nXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGRpdkFyciwgY2xhc3NOYW1lQXJyLCByZW5kZXJMb2FkLCByZW5kZXJFbGVtZW50VGV4dCB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBMb2FkUGFnZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgTG9hZFBhZ2UgZnJvbSAnLi9sb2FkLXBhZ2UnO1xyXG5pbXBvcnQgQ29udGFjdE1vZGFsIGZyb20gJy4vY29udGFjdE1vZGFsJztcclxuaW1wb3J0IEhvdXJzTW9kYWwgZnJvbSAnLi9ob3Vyc01vZGFsJztcclxuXHJcbmNvbnN0IFNpZGViYXJFbGVtZW50cyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3Qgc2lkZWJhckJ0bkFyciA9IFtdO1xyXG4gIGxldCBjb250YWN0QnRuO1xyXG4gIGxldCBtZW51QnRuO1xyXG4gIGxldCBob3Vyc0J0bjtcclxuXHJcbiAgY29uc3QgYnV0dG9uRWxlbWVudHMgPSAoZWxlbWVudCwgdHlwZSwgY2xhc3NOYW1lLCBjb21tZW50KSA9PiB7XHJcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbW1lbnQ7XHJcbiAgICBzaWRlYmFyQnRuQXJyLnB1c2goZWxlbWVudCk7XHJcbiAgICByZXR1cm4gc2lkZWJhckJ0bkFycjtcclxuICB9O1xyXG4gIGJ1dHRvbkVsZW1lbnRzKGNvbnRhY3RCdG4sICdidXR0b24nLCAnY29udGFjdC1idG4nLCAnQ29udGFjdCBVcycpO1xyXG4gIGJ1dHRvbkVsZW1lbnRzKG1lbnVCdG4sICdidXR0b24nLCAnbWVudS1idG4nLCAnTWVudScpO1xyXG4gIGJ1dHRvbkVsZW1lbnRzKGhvdXJzQnRuLCAnYnV0dG9uJywgJ2hvdXJzLWJ0bicsICdIb3VycycpO1xyXG5cclxuICBjb25zdCByZW5kZXJCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgTG9hZFBhZ2UuZGl2QXJyWzExXS5hcHBlbmQoc2lkZWJhckJ0bkFyclswXSk7XHJcbiAgICBMb2FkUGFnZS5kaXZBcnJbMTFdLmFwcGVuZChzaWRlYmFyQnRuQXJyWzFdKTtcclxuICAgIExvYWRQYWdlLmRpdkFyclsxMV0uYXBwZW5kKHNpZGViYXJCdG5BcnJbMl0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RVc0xpc3RpbmVyID0gKCkgPT4ge1xyXG4gICAgc2lkZWJhckJ0bkFyclswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRzQXJyYXlbMF0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRzQXJyYXlbMV0uc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgIH0pO1xyXG4gICAgc2lkZWJhckJ0bkFyclsyXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRzQXJyYXlbMF0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgSG91cnNNb2RhbC5ob3VyRWxlbWVudHNBcnJheVswXS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgc2lkZWJhckJ0bkFyciwgcmVuZGVyQnV0dG9ucywgY29udGFjdFVzTGlzdGluZXIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckVsZW1lbnRzO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=