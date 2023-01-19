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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/load-page.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWE7QUFDb0I7QUFDQTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsc0RBQXNEO0FBQ3RELHFEQUFxRDtBQUNyRCxzREFBc0Q7QUFDdEQsbURBQW1EO0FBQ25ELHVEQUF1RDtBQUN2RCx1REFBdUQ7QUFDdkQsMkRBQTJEO0FBQzNELDREQUE0RDtBQUM1RCxxREFBcUQ7QUFDckQsa0RBQWtEO0FBQ2xELHlEQUF5RDtBQUN6RCx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVDQUFNO0FBQzNCLHNCQUFzQix1Q0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEltYWdlMSBmcm9tICcuL2Zvb2QxLmpwZyc7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi9iZWFjaC5wbmcnO1xyXG5cclxuY29uc3QgTG9hZFBhZ2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGRpdkFyciA9IFtdO1xyXG4gIGNvbnN0IGNsYXNzTmFtZUFyciA9IFtcclxuICAgICdjb250ZW50JyxcclxuICAgICdoZWFkZXItY29udGFpbmVyJyxcclxuICAgICdzaWRlYmFyLWNvbnRhaW5lcicsXHJcbiAgICAnbWFpbi1jb250YWluZXInLFxyXG4gICAgJ2NvbXBhbnktbmFtZScsXHJcbiAgICAnbWFpbi1jb250ZW50JyxcclxuICAgICd0ZXh0LWNvbnRlbnQnLFxyXG4gICAgJ21haW4taW1hZ2UtY29udGFpbmVyJyxcclxuICAgICdtYWluLWltZycsXHJcbiAgICAnbWFpbi10ZXh0JyxcclxuICAgICdzaWRlYmFyQnRuLWNvbnRhaW5lcicsXHJcbiAgICAnYmFubmVyLWltZycsXHJcbiAgXTtcclxuICBjb25zdCBlbGVtZW50Q3JlYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhcmVudERpdiA9IGRvY3VtZW50LmJvZHk7IC8vIGFycmF5IFswXVxyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbMV1cclxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbMl1cclxuICAgIGNvbnN0IHNpZGViYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzNdXHJcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFs0XVxyXG4gICAgY29uc3QgaGVhZGluZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTsgLy8gYXJyYXkgWzVdXHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbNl1cclxuICAgIGNvbnN0IG1haW5UZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbN11cclxuICAgIGNvbnN0IG1pYW5JbWFnZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzhdXHJcbiAgICBjb25zdCBmb29kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgLy8gYXJyYXkgWzldXHJcbiAgICBjb25zdCB0ZXh0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy8gYXJyYXkgWzEwXVxyXG4gICAgY29uc3Qgc2lkZWJhckJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbMTFdXHJcbiAgICBjb25zdCBiYW5uZXJpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyAvLyBhcnJheSBbMTJdXHJcblxyXG4gICAgZGl2QXJyLnB1c2goXHJcbiAgICAgIHBhcmVudERpdixcclxuICAgICAgY29udGVudERpdixcclxuICAgICAgaGVhZGVyRGl2LFxyXG4gICAgICBzaWRlYmFyRGl2LFxyXG4gICAgICBtYWluRGl2LFxyXG4gICAgICBoZWFkaW5nVGl0bGUsXHJcbiAgICAgIG1haW5Db250ZW50LFxyXG4gICAgICBtYWluVGV4dENvbnRlbnQsXHJcbiAgICAgIG1pYW5JbWFnZUNvbnRlbnQsXHJcbiAgICAgIGZvb2RJbWFnZSxcclxuICAgICAgdGV4dEJvZHksXHJcbiAgICAgIHNpZGViYXJCdG5EaXYsXHJcbiAgICAgIGJhbm5lcmltYWdlXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGRpdkFycjtcclxuICB9O1xyXG4gIGVsZW1lbnRDcmVhdG9yKCk7XHJcbiAgY29uc3QgZWxlbWVudE5hbWluZyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcclxuICAgIC8vIENvbnRhaW5lcnNcclxuICAgIGVsZW1lbnRbMV0uc2V0QXR0cmlidXRlKCdpZCcsIGNsYXNzTmFtZVswXSk7XHJcbiAgICBlbGVtZW50WzJdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVsxXTtcclxuICAgIGVsZW1lbnRbM10uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzJdO1xyXG4gICAgZWxlbWVudFs0XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbM107XHJcblxyXG4gICAgLy8gQ29udGFpbmVyIENoaWxkcmVuXHJcbiAgICBlbGVtZW50WzVdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs0XTtcclxuICAgIGVsZW1lbnRbNl0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzVdO1xyXG4gICAgZWxlbWVudFs3XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbNl07XHJcbiAgICBlbGVtZW50WzhdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs3XTtcclxuICAgIGVsZW1lbnRbOV0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzhdO1xyXG4gICAgZWxlbWVudFsxMF0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzldO1xyXG4gICAgZWxlbWVudFsxMV0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzEwXTtcclxuICAgIGVsZW1lbnRbMTJdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVsxMV07XHJcbiAgICAvLyBpbWFnZSBwbGFjZW1lbnRcclxuICAgIGVsZW1lbnRbOV0uc3JjID0gSW1hZ2UxO1xyXG4gICAgZWxlbWVudFsxMl0uc3JjID0gQmFubmVyO1xyXG4gICAgLy9jaGlsZHJlbiBhcHBlbmRcclxuICAgIGVsZW1lbnRbOF0uYXBwZW5kKGVsZW1lbnRbOV0pO1xyXG4gICAgZWxlbWVudFs3XS5hcHBlbmQoZWxlbWVudFsxMF0pO1xyXG4gICAgZWxlbWVudFs2XS5hcHBlbmQoZWxlbWVudFs3XSwgZWxlbWVudFs4XSk7XHJcbiAgICBlbGVtZW50WzRdLmFwcGVuZChlbGVtZW50WzZdKTtcclxuICAgIGVsZW1lbnRbM10uYXBwZW5kKGVsZW1lbnRbMTFdKTtcclxuICAgIGVsZW1lbnRbMl0uYXBwZW5kKGVsZW1lbnRbNV0sIGVsZW1lbnRbMTJdKTtcclxuICAgIGVsZW1lbnRbMV0uYXBwZW5kKGVsZW1lbnRbMl0sIGVsZW1lbnRbM10sIGVsZW1lbnRbNF0pO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50WzFdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckVsZW1lbnRUZXh0ID0gKGFyciwgY29tbWVudCkgPT4gKGFyci50ZXh0Q29udGVudCA9IGNvbW1lbnQpO1xyXG5cclxuICBjb25zdCByZW5kZXJMb2FkID0gKCkgPT4ge1xyXG4gICAgZGl2QXJyWzBdLmFwcGVuZENoaWxkKGVsZW1lbnROYW1pbmcoZGl2QXJyLCBjbGFzc05hbWVBcnIpKTtcclxuICAgIHJlbmRlckVsZW1lbnRUZXh0KGRpdkFycls1XSwgJ01pIEphcmRpbicpO1xyXG4gICAgcmVuZGVyRWxlbWVudFRleHQoXHJcbiAgICAgIGRpdkFyclsxMF0sXHJcbiAgICAgICdPdXIgZmFtaWx5IHdvdWxkIGxpa2UgdG8gZmlyc3Qgd2VsY29tZSB5b3UgdG8gb3VyIHNpdGUuIFdlIHdlbGNvbWUgeW91IHRvIHRha2UgdGhlIGRyaXZlIGFuZCBwYXJ0aWNpcGF0ZSBpbiB0aGUgYmVzdCBIaXNwYW5pYyBhdG1vc3BoZXJlIGluIHRoZSByZWdpb24uIE91ciBzdGFmZiB3ZWxjb21lcyB5b3Ugd2l0aCBvcGVuIGFybXMgYW5kIHdvbmRlcmZ1bCBmb29kLiBPdXIgZm9vZCBjYW4gb25seSBiZSBkZXNjcmliZWQgYXMgYW4gZXhwZXJpZW5jZSBmb3IgdGhlIGhlYXJ0LiBCb29rIHlvdXIgdGFibGUgdG9kYXkgYW5kIGVuam95IGEgd29uZGVyZnVsIHRpbWUgaGVyZSBhdCBNaSBKYXJkaW4uJ1xyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBkaXZBcnIsIGNsYXNzTmFtZUFyciwgcmVuZGVyTG9hZCwgcmVuZGVyRWxlbWVudFRleHQgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgTG9hZFBhZ2U7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==