"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contactModal"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contactModal.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdE1vZGFsLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFhO0FBQ3NCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0QsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHZjtBQUNvQjtBQUNBO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxzREFBc0Q7QUFDdEQscURBQXFEO0FBQ3JELHNEQUFzRDtBQUN0RCxtREFBbUQ7QUFDbkQsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCwyREFBMkQ7QUFDM0QsNERBQTREO0FBQzVELHFEQUFxRDtBQUNyRCxrREFBa0Q7QUFDbEQseURBQXlEO0FBQ3pELHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUNBQU07QUFDM0Isc0JBQXNCLHVDQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNELGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQtcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBMb2FkUGFnZSBmcm9tICcuL2xvYWQtcGFnZSc7XHJcblxyXG5jb25zdCBDb250YWN0TW9kYWwgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGVsZW1lbnRzQXJyYXkgPSBbXTtcclxuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGVsZW1lbnRzQXJyYXlbMF07XHJcbiAgY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xyXG4gIGNvbnN0IGVsZW1lbnRDcmVhdG9yID0gKGFyciwgdHlwZSwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgYXJyLnB1c2goZGl2RWxlbWVudCk7XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVsZW1lbnRJZGVudGlmaWVyID0gKCkgPT4ge1xyXG4gICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2RpdicsICdjb250YWN0LW1vZGFsLWNvbnRhaW5lcicpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZGl2JywgJ2NvbnRhY3QtZm9ybS1jb250YWluZXInKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2gxJywgJ2NvbnRhY3QtaGVhZGluZycpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZm9ybScsICdjb250YWN0LWZvcm0nKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2ZpZWxkc2V0JywgJ2NvbnRhY3QtZmllbGRzZXQnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2xhYmVsJywgJ25hbWUtbGFiZWwnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2lucHV0JywgJ25hbWUtaW5wdXQnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2xhYmVsJywgJ2VtYWlsLWxhYmVsJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdpbnB1dCcsICdlbWFpbC1pbnB1dCcpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZGl2JywgJ25hbWUtY29udGVudCcpLFxyXG4gICAgICBlbGVtZW50Q3JlYXRvcihlbGVtZW50c0FycmF5LCAnZGl2JywgJ2VtYWlsLWNvbnRlbnQnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2RpdicsICdjb21lbnQtY29udGFpbmVyJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdsYWJlbCcsICdjb21lbnQtbGFiZWwnKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ3RleHRhcmVhJywgJ2NvbWVudC1hcmVhJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdkaXYnLCAnc3VibWl0LWJ0bi1jb250YWluZXInKSxcclxuICAgICAgZWxlbWVudENyZWF0b3IoZWxlbWVudHNBcnJheSwgJ2J1dHRvbicsICdzdWJtaXQtYnRuJyksXHJcbiAgICAgIGVsZW1lbnRDcmVhdG9yKGVsZW1lbnRzQXJyYXksICdidXR0b24nLCAnY2xvc2UtYnRuJyk7XHJcblxyXG4gICAgLy8gTGFiZWwgYW5kIGlucHV0IGlkIHNldHRlclxyXG4gICAgZm9ybUxhYmVsSW5wdXRTZXR0ZXIoXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbNV0sXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbNl0sXHJcbiAgICAgICduYW1lJyxcclxuICAgICAgJ3RleHQnLFxyXG4gICAgICAnRnVsbCBOYW1lOidcclxuICAgICksXHJcbiAgICAgIGZvcm1MYWJlbElucHV0U2V0dGVyKFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbN10sXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVs4XSxcclxuICAgICAgICAnZW1haWwnLFxyXG4gICAgICAgICdlbWFpbCcsXHJcbiAgICAgICAgJ0UtbWFpbDonXHJcbiAgICAgICk7XHJcbiAgICBlbGVtZW50c0FycmF5WzEyXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbWVudCcpLFxyXG4gICAgICAoZWxlbWVudHNBcnJheVsxMl0udGV4dENvbnRlbnQgPSAnQ29tbWVudDonKSxcclxuICAgICAgZWxlbWVudHNBcnJheVsxMV0uc2V0QXR0cmlidXRlKCdpZCcsICdjb21lbnQnKSxcclxuICAgICAgKGVsZW1lbnRzQXJyYXlbNF0udGV4dENvbnRlbnQgPSAnQWxsIGZpZWxkcyByZXF1aXJlZCcpLFxyXG4gICAgICAoZWxlbWVudHNBcnJheVsyXS50ZXh0Q29udGVudCA9ICdDT05UQUNUIEZPUk0nKSxcclxuICAgICAgKGVsZW1lbnRzQXJyYXlbMTVdLnRleHRDb250ZW50ID0gJ1N1Ym1pdCBDb21tZW50JyksXHJcbiAgICAgIChlbGVtZW50c0FycmF5WzE2XS50ZXh0Q29udGVudCA9ICdYJyk7XHJcblxyXG4gICAgLy8gICBydW4gRWxlbWVudCByZWRlclxyXG4gICAgZWxlbWVudFJlbmRlcmVyKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybUxhYmVsSW5wdXRTZXR0ZXIgPSAobGFiZWwsIGlucHV0LCBpZCwgdHlwZSwgY29udGVudCkgPT4ge1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWxlbWVudFJlbmRlcmVyID0gKCkgPT4ge1xyXG4gICAgYm9keUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudHNBcnJheVswXSk7XHJcbiAgICBlbGVtZW50c0FycmF5WzBdLmFwcGVuZChlbGVtZW50c0FycmF5WzFdKSxcclxuICAgICAgZWxlbWVudHNBcnJheVsxXS5hcHBlbmQoXHJcbiAgICAgICAgZWxlbWVudHNBcnJheVsyXSxcclxuICAgICAgICBlbGVtZW50c0FycmF5WzNdLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMTZdXHJcbiAgICAgICksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbM10uYXBwZW5kKGVsZW1lbnRzQXJyYXlbNF0pLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzRdLmFwcGVuZChcclxuICAgICAgICBlbGVtZW50c0FycmF5WzldLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMTBdLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMTFdLFxyXG4gICAgICAgIGVsZW1lbnRzQXJyYXlbMTRdXHJcbiAgICAgICksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbOV0uYXBwZW5kKGVsZW1lbnRzQXJyYXlbNV0sIGVsZW1lbnRzQXJyYXlbNl0pLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzEwXS5hcHBlbmQoZWxlbWVudHNBcnJheVs3XSwgZWxlbWVudHNBcnJheVs4XSksXHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbMTFdLmFwcGVuZChlbGVtZW50c0FycmF5WzEyXSwgZWxlbWVudHNBcnJheVsxM10pLFxyXG4gICAgICBlbGVtZW50c0FycmF5WzE0XS5hcHBlbmQoZWxlbWVudHNBcnJheVsxNV0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IENvbmF0YWN0TGlzdGluZXIgPSAoKSA9PiB7XHJcbiAgICBlbGVtZW50c0FycmF5WzE2XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZWxlbWVudHNBcnJheVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBlbGVtZW50c0FycmF5WzFdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICAgIGVsZW1lbnRzQXJyYXlbMTVdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGFsZXJ0KCdUaGFuayBZb3UgZm9yIHlvdXIgY29tbWVudCcpO1xyXG4gICAgICBlbGVtZW50c0FycmF5WzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGVsZW1lbnRzQXJyYXlbMV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZWxlbWVudElkZW50aWZpZXIoKTtcclxuICByZXR1cm4geyBlbGVtZW50c0FycmF5LCBDb25hdGFjdExpc3RpbmVyLCBlbGVtZW50Q3JlYXRvciwgbW9kYWxDb250YWluZXIgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdE1vZGFsO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBJbWFnZTEgZnJvbSAnLi9mb29kMS5qcGcnO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4vYmVhY2gucG5nJztcclxuXHJcbmNvbnN0IExvYWRQYWdlID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBkaXZBcnIgPSBbXTtcclxuICBjb25zdCBjbGFzc05hbWVBcnIgPSBbXHJcbiAgICAnY29udGVudCcsXHJcbiAgICAnaGVhZGVyLWNvbnRhaW5lcicsXHJcbiAgICAnc2lkZWJhci1jb250YWluZXInLFxyXG4gICAgJ21haW4tY29udGFpbmVyJyxcclxuICAgICdjb21wYW55LW5hbWUnLFxyXG4gICAgJ21haW4tY29udGVudCcsXHJcbiAgICAndGV4dC1jb250ZW50JyxcclxuICAgICdtYWluLWltYWdlLWNvbnRhaW5lcicsXHJcbiAgICAnbWFpbi1pbWcnLFxyXG4gICAgJ21haW4tdGV4dCcsXHJcbiAgICAnc2lkZWJhckJ0bi1jb250YWluZXInLFxyXG4gICAgJ2Jhbm5lci1pbWcnLFxyXG4gIF07XHJcbiAgY29uc3QgZWxlbWVudENyZWF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5ib2R5OyAvLyBhcnJheSBbMF1cclxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzFdXHJcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzJdXHJcbiAgICBjb25zdCBzaWRlYmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFszXVxyXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbNF1cclxuICAgIGNvbnN0IGhlYWRpbmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7IC8vIGFycmF5IFs1XVxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzZdXHJcbiAgICBjb25zdCBtYWluVGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzddXHJcbiAgICBjb25zdCBtaWFuSW1hZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFs4XVxyXG4gICAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IC8vIGFycmF5IFs5XVxyXG4gICAgY29uc3QgdGV4dEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7IC8vIGFycmF5IFsxMF1cclxuICAgIGNvbnN0IHNpZGViYXJCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzExXVxyXG4gICAgY29uc3QgYmFubmVyaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgLy8gYXJyYXkgWzEyXVxyXG5cclxuICAgIGRpdkFyci5wdXNoKFxyXG4gICAgICBwYXJlbnREaXYsXHJcbiAgICAgIGNvbnRlbnREaXYsXHJcbiAgICAgIGhlYWRlckRpdixcclxuICAgICAgc2lkZWJhckRpdixcclxuICAgICAgbWFpbkRpdixcclxuICAgICAgaGVhZGluZ1RpdGxlLFxyXG4gICAgICBtYWluQ29udGVudCxcclxuICAgICAgbWFpblRleHRDb250ZW50LFxyXG4gICAgICBtaWFuSW1hZ2VDb250ZW50LFxyXG4gICAgICBmb29kSW1hZ2UsXHJcbiAgICAgIHRleHRCb2R5LFxyXG4gICAgICBzaWRlYmFyQnRuRGl2LFxyXG4gICAgICBiYW5uZXJpbWFnZVxyXG4gICAgKTtcclxuICAgIHJldHVybiBkaXZBcnI7XHJcbiAgfTtcclxuICBlbGVtZW50Q3JlYXRvcigpO1xyXG4gIGNvbnN0IGVsZW1lbnROYW1pbmcgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgICAvLyBDb250YWluZXJzXHJcbiAgICBlbGVtZW50WzFdLnNldEF0dHJpYnV0ZSgnaWQnLCBjbGFzc05hbWVbMF0pO1xyXG4gICAgZWxlbWVudFsyXS5jbGFzc05hbWUgPSBjbGFzc05hbWVbMV07XHJcbiAgICBlbGVtZW50WzNdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVsyXTtcclxuICAgIGVsZW1lbnRbNF0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzNdO1xyXG5cclxuICAgIC8vIENvbnRhaW5lciBDaGlsZHJlblxyXG4gICAgZWxlbWVudFs1XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbNF07XHJcbiAgICBlbGVtZW50WzZdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs1XTtcclxuICAgIGVsZW1lbnRbN10uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzZdO1xyXG4gICAgZWxlbWVudFs4XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbN107XHJcbiAgICBlbGVtZW50WzldLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs4XTtcclxuICAgIGVsZW1lbnRbMTBdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs5XTtcclxuICAgIGVsZW1lbnRbMTFdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVsxMF07XHJcbiAgICBlbGVtZW50WzEyXS5jbGFzc05hbWUgPSBjbGFzc05hbWVbMTFdO1xyXG4gICAgLy8gaW1hZ2UgcGxhY2VtZW50XHJcbiAgICBlbGVtZW50WzldLnNyYyA9IEltYWdlMTtcclxuICAgIGVsZW1lbnRbMTJdLnNyYyA9IEJhbm5lcjtcclxuICAgIC8vY2hpbGRyZW4gYXBwZW5kXHJcbiAgICBlbGVtZW50WzhdLmFwcGVuZChlbGVtZW50WzldKTtcclxuICAgIGVsZW1lbnRbN10uYXBwZW5kKGVsZW1lbnRbMTBdKTtcclxuICAgIGVsZW1lbnRbNl0uYXBwZW5kKGVsZW1lbnRbN10sIGVsZW1lbnRbOF0pO1xyXG4gICAgZWxlbWVudFs0XS5hcHBlbmQoZWxlbWVudFs2XSk7XHJcbiAgICBlbGVtZW50WzNdLmFwcGVuZChlbGVtZW50WzExXSk7XHJcbiAgICBlbGVtZW50WzJdLmFwcGVuZChlbGVtZW50WzVdLCBlbGVtZW50WzEyXSk7XHJcbiAgICBlbGVtZW50WzFdLmFwcGVuZChlbGVtZW50WzJdLCBlbGVtZW50WzNdLCBlbGVtZW50WzRdKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudFsxXTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJFbGVtZW50VGV4dCA9IChhcnIsIGNvbW1lbnQpID0+IChhcnIudGV4dENvbnRlbnQgPSBjb21tZW50KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTG9hZCA9ICgpID0+IHtcclxuICAgIGRpdkFyclswXS5hcHBlbmRDaGlsZChlbGVtZW50TmFtaW5nKGRpdkFyciwgY2xhc3NOYW1lQXJyKSk7XHJcbiAgICByZW5kZXJFbGVtZW50VGV4dChkaXZBcnJbNV0sICdNaSBKYXJkaW4nKTtcclxuICAgIHJlbmRlckVsZW1lbnRUZXh0KFxyXG4gICAgICBkaXZBcnJbMTBdLFxyXG4gICAgICAnT3VyIGZhbWlseSB3b3VsZCBsaWtlIHRvIGZpcnN0IHdlbGNvbWUgeW91IHRvIG91ciBzaXRlLiBXZSB3ZWxjb21lIHlvdSB0byB0YWtlIHRoZSBkcml2ZSBhbmQgcGFydGljaXBhdGUgaW4gdGhlIGJlc3QgSGlzcGFuaWMgYXRtb3NwaGVyZSBpbiB0aGUgcmVnaW9uLiBPdXIgc3RhZmYgd2VsY29tZXMgeW91IHdpdGggb3BlbiBhcm1zIGFuZCB3b25kZXJmdWwgZm9vZC4gT3VyIGZvb2QgY2FuIG9ubHkgYmUgZGVzY3JpYmVkIGFzIGFuIGV4cGVyaWVuY2UgZm9yIHRoZSBoZWFydC4gQm9vayB5b3VyIHRhYmxlIHRvZGF5IGFuZCBlbmpveSBhIHdvbmRlcmZ1bCB0aW1lIGhlcmUgYXQgTWkgSmFyZGluLidcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgZGl2QXJyLCBjbGFzc05hbWVBcnIsIHJlbmRlckxvYWQsIHJlbmRlckVsZW1lbnRUZXh0IH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IExvYWRQYWdlO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=