"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["load"],{

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
  const buttonArr = [];
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
      textBody
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

    // image placement
    element[9].src = _food1_jpg__WEBPACK_IMPORTED_MODULE_0__;
    //children append
    element[8].append(element[9]);
    element[7].append(element[10]);
    element[6].append(element[7], element[8]);
    element[4].append(element[6]);
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
      'Our family would like to first welcome you to our site. If you have not participated in our wonderful experience, then we welcome you to take the drive and participate in the best Hispanic atmosphere in the region. Our staff welcomes you with open arms and wonderful food. We have live music and a dance floor for those that enjoy Latin music. Our food can only be described as an experience for the heart. Book your table today and enjoy a wonderful time here at Mi Jardin.'
    );
  };

  return { renderLoad };
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadPage);


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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/load-page.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUNvQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHNEQUFzRDtBQUN0RCxxREFBcUQ7QUFDckQsc0RBQXNEO0FBQ3RELG1EQUFtRDtBQUNuRCx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELDJEQUEyRDtBQUMzRCw0REFBNEQ7QUFDNUQscURBQXFEO0FBQ3JELGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUNBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNELGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLXBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgSW1hZ2UxIGZyb20gJy4vZm9vZDEuanBnJztcclxuXHJcbmNvbnN0IExvYWRQYWdlID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBkaXZBcnIgPSBbXTtcclxuICBjb25zdCBidXR0b25BcnIgPSBbXTtcclxuICBjb25zdCBjbGFzc05hbWVBcnIgPSBbXHJcbiAgICAnY29udGVudCcsXHJcbiAgICAnaGVhZGVyLWNvbnRhaW5lcicsXHJcbiAgICAnc2lkZWJhci1jb250YWluZXInLFxyXG4gICAgJ21haW4tY29udGFpbmVyJyxcclxuICAgICdjb21wYW55LW5hbWUnLFxyXG4gICAgJ21haW4tY29udGVudCcsXHJcbiAgICAndGV4dC1jb250ZW50JyxcclxuICAgICdtYWluLWltYWdlLWNvbnRhaW5lcicsXHJcbiAgICAnbWFpbi1pbWcnLFxyXG4gICAgJ21haW4tdGV4dCcsXHJcbiAgXTtcclxuICBjb25zdCBlbGVtZW50Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhcmVudERpdiA9IGRvY3VtZW50LmJvZHk7IC8vIGFycmF5IFswXVxyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbMV1cclxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbMl1cclxuICAgIGNvbnN0IHNpZGViYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzNdXHJcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFs0XVxyXG4gICAgY29uc3QgaGVhZGluZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTsgLy8gYXJyYXkgWzVdXHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbNl1cclxuICAgIGNvbnN0IG1haW5UZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbN11cclxuICAgIGNvbnN0IG1pYW5JbWFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzhdXHJcbiAgICBjb25zdCBmb29kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgLy8gYXJyYXkgWzldXHJcbiAgICBjb25zdCB0ZXh0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy8gYXJyYXkgWzEwXVxyXG5cclxuICAgIGRpdkFyci5wdXNoKFxyXG4gICAgICBwYXJlbnREaXYsXHJcbiAgICAgIGNvbnRlbnREaXYsXHJcbiAgICAgIGhlYWRlckRpdixcclxuICAgICAgc2lkZWJhckRpdixcclxuICAgICAgbWFpbkRpdixcclxuICAgICAgaGVhZGluZ1RpdGxlLFxyXG4gICAgICBtYWluQ29udGVudCxcclxuICAgICAgbWFpblRleHRDb250ZW50LFxyXG4gICAgICBtaWFuSW1hZ2VDb250ZW50LFxyXG4gICAgICBmb29kSW1hZ2UsXHJcbiAgICAgIHRleHRCb2R5XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRpdkFycjtcclxuICB9O1xyXG4gIGVsZW1lbnRDcmVhdG9yKCk7XHJcbiAgY29uc3QgZWxlbWVudE5hbWluZyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcclxuICAgIC8vIENvbnRhaW5lcnNcclxuICAgIGVsZW1lbnRbMV0uc2V0QXR0cmlidXRlKCdpZCcsIGNsYXNzTmFtZVswXSk7XHJcbiAgICBlbGVtZW50WzJdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVsxXTtcclxuICAgIGVsZW1lbnRbM10uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzJdO1xyXG4gICAgZWxlbWVudFs0XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbM107XHJcblxyXG4gICAgLy8gQ29udGFpbmVyIENoaWxkcmVuXHJcbiAgICBlbGVtZW50WzVdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs0XTtcclxuICAgIGVsZW1lbnRbNl0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzVdO1xyXG4gICAgZWxlbWVudFs3XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbNl07XHJcbiAgICBlbGVtZW50WzhdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs3XTtcclxuICAgIGVsZW1lbnRbOV0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzhdO1xyXG4gICAgZWxlbWVudFsxMF0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzldO1xyXG5cclxuICAgIC8vIGltYWdlIHBsYWNlbWVudFxyXG4gICAgZWxlbWVudFs5XS5zcmMgPSBJbWFnZTE7XHJcbiAgICAvL2NoaWxkcmVuIGFwcGVuZFxyXG4gICAgZWxlbWVudFs4XS5hcHBlbmQoZWxlbWVudFs5XSk7XHJcbiAgICBlbGVtZW50WzddLmFwcGVuZChlbGVtZW50WzEwXSk7XHJcbiAgICBlbGVtZW50WzZdLmFwcGVuZChlbGVtZW50WzddLCBlbGVtZW50WzhdKTtcclxuICAgIGVsZW1lbnRbNF0uYXBwZW5kKGVsZW1lbnRbNl0pO1xyXG4gICAgZWxlbWVudFsyXS5hcHBlbmQoZWxlbWVudFs1XSk7XHJcbiAgICBlbGVtZW50WzFdLmFwcGVuZChlbGVtZW50WzJdLCBlbGVtZW50WzNdLCBlbGVtZW50WzRdKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudFsxXTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJFbGVtZW50VGV4dCA9IChhcnIsIGNvbW1lbnQpID0+IChhcnIudGV4dENvbnRlbnQgPSBjb21tZW50KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTG9hZCA9ICgpID0+IHtcclxuICAgIGRpdkFyclswXS5hcHBlbmRDaGlsZChlbGVtZW50TmFtaW5nKGRpdkFyciwgY2xhc3NOYW1lQXJyKSk7XHJcbiAgICByZW5kZXJFbGVtZW50VGV4dChkaXZBcnJbNV0sICdNaSBKYXJkaW4nKTtcclxuICAgIHJlbmRlckVsZW1lbnRUZXh0KFxyXG4gICAgICBkaXZBcnJbMTBdLFxyXG4gICAgICAnT3VyIGZhbWlseSB3b3VsZCBsaWtlIHRvIGZpcnN0IHdlbGNvbWUgeW91IHRvIG91ciBzaXRlLiBJZiB5b3UgaGF2ZSBub3QgcGFydGljaXBhdGVkIGluIG91ciB3b25kZXJmdWwgZXhwZXJpZW5jZSwgdGhlbiB3ZSB3ZWxjb21lIHlvdSB0byB0YWtlIHRoZSBkcml2ZSBhbmQgcGFydGljaXBhdGUgaW4gdGhlIGJlc3QgSGlzcGFuaWMgYXRtb3NwaGVyZSBpbiB0aGUgcmVnaW9uLiBPdXIgc3RhZmYgd2VsY29tZXMgeW91IHdpdGggb3BlbiBhcm1zIGFuZCB3b25kZXJmdWwgZm9vZC4gV2UgaGF2ZSBsaXZlIG11c2ljIGFuZCBhIGRhbmNlIGZsb29yIGZvciB0aG9zZSB0aGF0IGVuam95IExhdGluIG11c2ljLiBPdXIgZm9vZCBjYW4gb25seSBiZSBkZXNjcmliZWQgYXMgYW4gZXhwZXJpZW5jZSBmb3IgdGhlIGhlYXJ0LiBCb29rIHlvdXIgdGFibGUgdG9kYXkgYW5kIGVuam95IGEgd29uZGVyZnVsIHRpbWUgaGVyZSBhdCBNaSBKYXJkaW4uJ1xyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyByZW5kZXJMb2FkIH07XHJcbn0pKCk7XHJcbmV4cG9ydCBkZWZhdWx0IExvYWRQYWdlO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=