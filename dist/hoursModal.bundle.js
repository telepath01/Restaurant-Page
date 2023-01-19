"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["hoursModal"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/hoursModal.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNELGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvdXJzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQtcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBMb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XHJcblxyXG5jb25zdCBDb250YWN0TW9kYWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGVsZW1lbnRzQXJyYXkgPSBbXTtcclxuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGVsZW1lbnRzQXJyYXlbMF07XHJcbiAgY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xyXG4gIGNvbnN0IGVsZW1lbnRDcmVhdG9yID0gKGFyciwgdHlwZSwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgYXJyLnB1c2goZGl2RWxlbWVudCk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVsZW1lbnRJZGVudGlmaWVyID0gKCkgPT4ge1xyXG4gICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2RpdicsICdjb250YWN0LW1vZGFsLWNvbnRhaW5lcicpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZGl2JywgJ2NvbnRhY3QtZm9ybS1jb250YWluZXInKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2gxJywgJ2NvbnRhY3QtaGVhZGluZycpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZm9ybScsICdjb250YWN0LWZvcm0nKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2ZpZWxkc2V0JywgJ2NvbnRhY3QtZmllbGRzZXQnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2xhYmVsJywgJ25hbWUtbGFiZWwnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2lucHV0JywgJ25hbWUtaW5wdXQnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2xhYmVsJywgJ2VtYWlsLWxhYmVsJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdpbnB1dCcsICdlbWFpbC1pbnB1dCcpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZGl2JywgJ25hbWUtY29udGVudCcpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZGl2JywgJ2VtYWlsLWNvbnRlbnQnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2RpdicsICdjb21lbnQtY29udGFpbmVyJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdsYWJlbCcsICdjb21lbnQtbGFiZWwnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ3RleHRhcmVhJywgJ2NvbWVudC1hcmVhJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdkaXYnLCAnc3VibWl0LWJ0bi1jb250YWluZXInKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2J1dHRvbicsICdzdWJtaXQtYnRuJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdidXR0b24nLCAnY2xvc2UtYnRuJyk7XHJcblxyXG4gICAgLy8gTGFiZWwgYW5kIGlucHV0IGlkIHNldHRlclxyXG4gICAgZm9ybUxhYmVsSW5wdXRTZXR0ZXIoXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbNV0sXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbNl0sXHJcbiAgICAgICduYW1lJyxcclxuICAgICAgJ3RleHQnLFxyXG4gICAgICAnRnVsbCBOYW1lOidcclxuICAgICksXHJcbiAgICAgIGZvcm1MYWJlbElucHV0U2V0dGVyKFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbN10sXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVs4XSxcclxuICAgICAgICAnZW1haWwnLFxyXG4gICAgICAgICdlbWFpbCcsXHJcbiAgICAgICAgJ0UtbWFpbDonXHJcbiAgICAgICk7XHJcbiAgICBlbGVtZW50c0FycmF5WzEyXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbWVudCcpLFxyXG4gICAgICAoZWxlbWVudHNBcnJheVsxMl0udGV4dENvbnRlbnQgPSAnQ29tbWVudDonKSxcclxuICAgICAgZWxlbWVudHNBcnJheVsxMV0uc2V0QXR0cmlidXRlKCdpZCcsICdjb21lbnQnKSxcclxuICAgICAgKGVsZW1lbnRzQXJyYXlbNF0udGV4dENvbnRlbnQgPSAnQWxsIGZpZWxkcyByZXF1aXJlZCcpLFxyXG4gICAgICAoZWxlbWVudHNBcnJheVsyXS50ZXh0Q29udGVudCA9ICdDT05UQUNUIEZPUk0nKSxcclxuICAgICAgKGVsZW1lbnRzQXJyYXlbMTVdLnRleHRDb250ZW50ID0gJ1N1Ym1pdCBDb21tZW50JyksXHJcbiAgICAgIChlbGVtZW50c0FycmF5WzE2XS50ZXh0Q29udGVudCA9ICdYJyk7XHJcblxyXG4gICAgLy8gICBydW4gRWxlbWVudCByZWRlclxyXG4gICAgZWxlbWVudFJlbmRlcmVyKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybUxhYmVsSW5wdXRTZXR0ZXIgPSAobGFiZWwsIGlucHV0LCBpZCwgdHlwZSwgY29udGVudCkgPT4ge1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWxlbWVudFJlbmRlcmVyID0gKCkgPT4ge1xyXG4gICAgYm9keUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudHNBcnJheVswXSk7XHJcbiAgICBlbGVtZW50c0FycmF5WzBdLmFwcGVuZChlbGVtZW50c0FycmF5WzFdKSxcclxuICAgICAgZWxlbWVudHNBcnJheVsxXS5hcHBlbmQoXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVsyXSxcclxuICAgICAgICBlbGVtZW50c0FycmF5WzNdLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMTZdXHJcbiAgICAgICksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbM10uYXBwZW5kKGVsZW1lbnRzQXJyYXlbNF0pLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzRdLmFwcGVuZChcclxuICAgICAgICBlbGVtZW50c0FycmF5WzldLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMTBdLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMTFdLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMTRdXHJcbiAgICAgICksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbOV0uYXBwZW5kKGVsZW1lbnRzQXJyYXlbNV0sIGVsZW1lbnRzQXJyYXlbNl0pLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzEwXS5hcHBlbmQoZWxlbWVudHNBcnJheVs3XSwgZWxlbWVudHNBcnJheVs4XSksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbMTFdLmFwcGVuZChlbGVtZW50c0FycmF5WzEyXSwgZWxlbWVudHNBcnJheVsxM10pLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzE0XS5hcHBlbmQoZWxlbWVudHNBcnJheVsxNV0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IENvbmF0YWN0TGlzdGluZXIgPSAoKSA9PiB7XHJcbiAgICBlbGVtZW50c0FycmF5WzE2XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZWxlbWVudHNBcnJheVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBlbGVtZW50c0FycmF5WzFdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICAgIGVsZW1lbnRzQXJyYXlbMTVdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGFsZXJ0KCdUaGFuayBZb3UgZm9yIHlvdXIgY29tbWVudCcpO1xyXG4gICAgICBlbGVtZW50c0FycmF5WzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbMV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZWxlbWVudElkZW50aWZpZXIoKTtcclxuICByZXR1cm4geyBlbGVtZW50c0FycmF5LCBDb25hdGFjdExpc3RpbmVyLCBlbGVtZW50Q3JlYXRvciwgbW9kYWxDb250YWluZXIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdE1vZGFsO1xyXG4iLCInIHVzZSBzdHJpY3QnO1xyXG5pbXBvcnQgQ29udGFjdE1vZGFsIGZyb20gJy4vY29udGFjdE1vZGFsJztcclxuXHJcbmNvbnN0IEhvdXJzTW9kYWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGhvdXJFbGVtZW50c0FycmF5ID0gW107XHJcblxyXG4gIGNvbnN0IGhvdXJzTW9kYWxFbGVtZW50cyA9ICgpID0+IHtcclxuICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheSwgJ2RpdicsICdob3Vycy1jb250YWluZXInKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5LCAnaDEnLCAnaG91cnMtaGVhZGluZycpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXksICdkaXYnLCAnaG91cnMtYm9keScpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXksICdwJywgJ2RheXMnKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5LCAncCcsICdocnMnKSxcclxuICAgICAgQ29udGFjdE1vZGFsLmVsZW1lbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5LCAncCcsICdkYXlzJyksXHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheSwgJ3AnLCAnaHJzJyksXHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheSwgJ3AnLCAnZGF5cycpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXksICdwJywgJ2hycycpLFxyXG4gICAgICBDb250YWN0TW9kYWwuZWxlbWVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXksICdidXR0b24nLCAnaG91cnMtY2xvc2UnKTtcclxuICB9O1xyXG4gIGhvdXJzTW9kYWxFbGVtZW50cygpO1xyXG4gIGNvbnN0IGVsZW1lbnRDb250ZW50Q3JlYXRvciA9IChlbGVtZW50LCBjb250ZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhvdXJzUmVuZGVyID0gKCkgPT4ge1xyXG4gICAgQ29udGFjdE1vZGFsLmVsZW1lbnRzQXJyYXlbMF0uYXBwZW5kKGhvdXJFbGVtZW50c0FycmF5WzBdKTtcclxuICAgIGhvdXJFbGVtZW50c0FycmF5WzBdLmFwcGVuZChcclxuICAgICAgaG91ckVsZW1lbnRzQXJyYXlbMV0sXHJcbiAgICAgIGhvdXJFbGVtZW50c0FycmF5WzJdLFxyXG4gICAgICBob3VyRWxlbWVudHNBcnJheVs5XVxyXG4gICAgKSxcclxuICAgICAgaG91ckVsZW1lbnRzQXJyYXlbMl0uYXBwZW5kKFxyXG4gICAgICAgIGhvdXJFbGVtZW50c0FycmF5WzNdLFxyXG4gICAgICAgIGhvdXJFbGVtZW50c0FycmF5WzRdLFxyXG4gICAgICAgIGhvdXJFbGVtZW50c0FycmF5WzVdLFxyXG4gICAgICAgIGhvdXJFbGVtZW50c0FycmF5WzZdLFxyXG4gICAgICAgIGhvdXJFbGVtZW50c0FycmF5WzddLFxyXG4gICAgICAgIGhvdXJFbGVtZW50c0FycmF5WzhdXHJcbiAgICAgICk7XHJcbiAgICBlbGVtZW50Q29udGVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXlbMV0sICdIT1VSUyBPRiBPUEVSQVRJT04nKSxcclxuICAgICAgZWxlbWVudENvbnRlbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5WzNdLCAnTW9uZGF5ICYgVHVlc2RheScpLFxyXG4gICAgICBlbGVtZW50Q29udGVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXlbNF0sICdDbG9zZWQnKSxcclxuICAgICAgZWxlbWVudENvbnRlbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5WzVdLCAnV2VkbmVzZGF5ICYgVGh1cnNkYXknKSxcclxuICAgICAgZWxlbWVudENvbnRlbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5WzZdLCAnMTI6MDAgcC5tLiAtIDkgcC5tLicpLFxyXG4gICAgICBlbGVtZW50Q29udGVudENyZWF0b3IoaG91ckVsZW1lbnRzQXJyYXlbN10sICdGcmlkYXkgLSBTdW5kYXknKSxcclxuICAgICAgZWxlbWVudENvbnRlbnRDcmVhdG9yKGhvdXJFbGVtZW50c0FycmF5WzhdLCAnMTowMCBwLm0uIC0gMTowMCBhLm0uJyksXHJcbiAgICAgIGVsZW1lbnRDb250ZW50Q3JlYXRvcihob3VyRWxlbWVudHNBcnJheVs5XSwgJ1gnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBob3Vyc0xpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgaG91ckVsZW1lbnRzQXJyYXlbOV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIENvbnRhY3RNb2RhbC5lbGVtZW50c0FycmF5WzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGhvdXJFbGVtZW50c0FycmF5WzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaG91cnNSZW5kZXIsXHJcbiAgICBob3VyRWxlbWVudHNBcnJheSxcclxuICAgIGhvdXJzTGlzdGVuZXIsXHJcbiAgICBlbGVtZW50Q29udGVudENyZWF0b3IsXHJcbiAgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgSG91cnNNb2RhbDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgSW1hZ2UxIGZyb20gJy4vZm9vZDEuanBnJztcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuL2JlYWNoLnBuZyc7XHJcblxyXG5jb25zdCBMb2FkUGFnZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgZGl2QXJyID0gW107XHJcbiAgY29uc3QgY2xhc3NOYW1lQXJyID0gW1xyXG4gICAgJ2NvbnRlbnQnLFxyXG4gICAgJ2hlYWRlci1jb250YWluZXInLFxyXG4gICAgJ3NpZGViYXItY29udGFpbmVyJyxcclxuICAgICdtYWluLWNvbnRhaW5lcicsXHJcbiAgICAnY29tcGFueS1uYW1lJyxcclxuICAgICdtYWluLWNvbnRlbnQnLFxyXG4gICAgJ3RleHQtY29udGVudCcsXHJcbiAgICAnbWFpbi1pbWFnZS1jb250YWluZXInLFxyXG4gICAgJ21haW4taW1nJyxcclxuICAgICdtYWluLXRleHQnLFxyXG4gICAgJ3NpZGViYXJCdG4tY29udGFpbmVyJyxcclxuICAgICdiYW5uZXItaW1nJyxcclxuICBdO1xyXG4gIGNvbnN0IGVsZW1lbnRDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQuYm9keTsgLy8gYXJyYXkgWzBdXHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFsxXVxyXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFsyXVxyXG4gICAgY29uc3Qgc2lkZWJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbM11cclxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzRdXHJcbiAgICBjb25zdCBoZWFkaW5nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpOyAvLyBhcnJheSBbNV1cclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFs2XVxyXG4gICAgY29uc3QgbWFpblRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFs3XVxyXG4gICAgY29uc3QgbWlhbkltYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbOF1cclxuICAgIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyAvLyBhcnJheSBbOV1cclxuICAgIGNvbnN0IHRleHRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpOyAvLyBhcnJheSBbMTBdXHJcbiAgICBjb25zdCBzaWRlYmFyQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFsxMV1cclxuICAgIGNvbnN0IGJhbm5lcmltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IC8vIGFycmF5IFsxMl1cclxuXHJcbiAgICBkaXZBcnIucHVzaChcclxuICAgICAgcGFyZW50RGl2LFxyXG4gICAgICBjb250ZW50RGl2LFxyXG4gICAgICBoZWFkZXJEaXYsXHJcbiAgICAgIHNpZGViYXJEaXYsXHJcbiAgICAgIG1haW5EaXYsXHJcbiAgICAgIGhlYWRpbmdUaXRsZSxcclxuICAgICAgbWFpbkNvbnRlbnQsXHJcbiAgICAgIG1haW5UZXh0Q29udGVudCxcclxuICAgICAgbWlhbkltYWdlQ29udGVudCxcclxuICAgICAgZm9vZEltYWdlLFxyXG4gICAgICB0ZXh0Qm9keSxcclxuICAgICAgc2lkZWJhckJ0bkRpdixcclxuICAgICAgYmFubmVyaW1hZ2VcclxuICAgICk7XHJcbiAgICByZXR1cm4gZGl2QXJyO1xyXG4gIH07XHJcbiAgZWxlbWVudENyZWF0b3IoKTtcclxuICBjb25zdCBlbGVtZW50TmFtaW5nID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgLy8gQ29udGFpbmVyc1xyXG4gICAgZWxlbWVudFsxXS5zZXRBdHRyaWJ1dGUoJ2lkJywgY2xhc3NOYW1lWzBdKTtcclxuICAgIGVsZW1lbnRbMl0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzFdO1xyXG4gICAgZWxlbWVudFszXS5jbGFzc05hbWUgPSBjbGFzc05hbWVbMl07XHJcbiAgICBlbGVtZW50WzRdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVszXTtcclxuXHJcbiAgICAvLyBDb250YWluZXIgQ2hpbGRyZW5cclxuICAgIGVsZW1lbnRbNV0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzRdO1xyXG4gICAgZWxlbWVudFs2XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbNV07XHJcbiAgICBlbGVtZW50WzddLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs2XTtcclxuICAgIGVsZW1lbnRbOF0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzddO1xyXG4gICAgZWxlbWVudFs5XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbOF07XHJcbiAgICBlbGVtZW50WzEwXS5jbGFzc05hbWUgPSBjbGFzc05hbWVbOV07XHJcbiAgICBlbGVtZW50WzExXS5jbGFzc05hbWUgPSBjbGFzc05hbWVbMTBdO1xyXG4gICAgZWxlbWVudFsxMl0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzExXTtcclxuICAgIC8vIGltYWdlIHBsYWNlbWVudFxyXG4gICAgZWxlbWVudFs5XS5zcmMgPSBJbWFnZTE7XHJcbiAgICBlbGVtZW50WzEyXS5zcmMgPSBCYW5uZXI7XHJcbiAgICAvL2NoaWxkcmVuIGFwcGVuZFxyXG4gICAgZWxlbWVudFs4XS5hcHBlbmQoZWxlbWVudFs5XSk7XHJcbiAgICBlbGVtZW50WzddLmFwcGVuZChlbGVtZW50WzEwXSk7XHJcbiAgICBlbGVtZW50WzZdLmFwcGVuZChlbGVtZW50WzddLCBlbGVtZW50WzhdKTtcclxuICAgIGVsZW1lbnRbNF0uYXBwZW5kKGVsZW1lbnRbNl0pO1xyXG4gICAgZWxlbWVudFszXS5hcHBlbmQoZWxlbWVudFsxMV0pO1xyXG4gICAgZWxlbWVudFsyXS5hcHBlbmQoZWxlbWVudFs1XSwgZWxlbWVudFsxMl0pO1xyXG4gICAgZWxlbWVudFsxXS5hcHBlbmQoZWxlbWVudFsyXSwgZWxlbWVudFszXSwgZWxlbWVudFs0XSk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRbMV07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRWxlbWVudFRleHQgPSAoYXJyLCBjb21tZW50KSA9PiAoYXJyLnRleHRDb250ZW50ID0gY29tbWVudCk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckxvYWQgPSAoKSA9PiB7XHJcbiAgICBkaXZBcnJbMF0uYXBwZW5kQ2hpbGQoZWxlbWVudE5hbWluZyhkaXZBcnIsIGNsYXNzTmFtZUFycikpO1xyXG4gICAgcmVuZGVyRWxlbWVudFRleHQoZGl2QXJyWzVdLCAnTWkgSmFyZGluJyk7XHJcbiAgICByZW5kZXJFbGVtZW50VGV4dChcclxuICAgICAgZGl2QXJyWzEwXSxcclxuICAgICAgJ091ciBmYW1pbHkgd291bGQgbGlrZSB0byBmaXJzdCB3ZWxjb21lIHlvdSB0byBvdXIgc2l0ZS4gV2Ugd2VsY29tZSB5b3UgdG8gdGFrZSB0aGUgZHJpdmUgYW5kIHBhcnRpY2lwYXRlIGluIHRoZSBiZXN0IEhpc3BhbmljIGF0bW9zcGhlcmUgaW4gdGhlIHJlZ2lvbi4gT3VyIHN0YWZmIHdlbGNvbWVzIHlvdSB3aXRoIG9wZW4gYXJtcyBhbmQgd29uZGVyZnVsIGZvb2QuIE91ciBmb29kIGNhbiBvbmx5IGJlIGRlc2NyaWJlZCBhcyBhbiBleHBlcmllbmNlIGZvciB0aGUgaGVhcnQuIEJvb2sgeW91ciB0YWJsZSB0b2RheSBhbmQgZW5qb3kgYSB3b25kZXJmdWwgdGltZSBoZXJlIGF0IE1pIEphcmRpbi4nXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGRpdkFyciwgY2xhc3NOYW1lQXJyLCByZW5kZXJMb2FkLCByZW5kZXJFbGVtZW50VGV4dCB9O1xyXG59KSgpO1xyXG5leHBvcnQgZGVmYXVsdCBMb2FkUGFnZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9