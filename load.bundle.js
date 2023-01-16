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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUNvQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLHNEQUFzRDtBQUN0RCxxREFBcUQ7QUFDckQsc0RBQXNEO0FBQ3RELG1EQUFtRDtBQUNuRCx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELDJEQUEyRDtBQUMzRCw0REFBNEQ7QUFDNUQscURBQXFEO0FBQ3JELGtEQUFrRDtBQUNsRCx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1Q0FBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRCxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC1wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IEltYWdlMSBmcm9tICcuL2Zvb2QxLmpwZyc7XHJcblxyXG5jb25zdCBMb2FkUGFnZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgZGl2QXJyID0gW107XHJcbiAgY29uc3QgY2xhc3NOYW1lQXJyID0gW1xyXG4gICAgJ2NvbnRlbnQnLFxyXG4gICAgJ2hlYWRlci1jb250YWluZXInLFxyXG4gICAgJ3NpZGViYXItY29udGFpbmVyJyxcclxuICAgICdtYWluLWNvbnRhaW5lcicsXHJcbiAgICAnY29tcGFueS1uYW1lJyxcclxuICAgICdtYWluLWNvbnRlbnQnLFxyXG4gICAgJ3RleHQtY29udGVudCcsXHJcbiAgICAnbWFpbi1pbWFnZS1jb250YWluZXInLFxyXG4gICAgJ21haW4taW1nJyxcclxuICAgICdtYWluLXRleHQnLFxyXG4gICAgJ3NpZGViYXJCdG4tY29udGFpbmVyJyxcclxuICBdO1xyXG4gIGNvbnN0IGVsZW1lbnRDcmVhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQuYm9keTsgLy8gYXJyYXkgWzBdXHJcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFsxXVxyXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFsyXVxyXG4gICAgY29uc3Qgc2lkZWJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbM11cclxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gYXJyYXkgWzRdXHJcbiAgICBjb25zdCBoZWFkaW5nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpOyAvLyBhcnJheSBbNV1cclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFs2XVxyXG4gICAgY29uc3QgbWFpblRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFs3XVxyXG4gICAgY29uc3QgbWlhbkltYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvLyBhcnJheSBbOF1cclxuICAgIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyAvLyBhcnJheSBbOV1cclxuICAgIGNvbnN0IHRleHRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpOyAvLyBhcnJheSBbMTBdXHJcbiAgICBjb25zdCBzaWRlYmFyQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vIGFycmF5IFsxMV1cclxuXHJcbiAgICBkaXZBcnIucHVzaChcclxuICAgICAgcGFyZW50RGl2LFxyXG4gICAgICBjb250ZW50RGl2LFxyXG4gICAgICBoZWFkZXJEaXYsXHJcbiAgICAgIHNpZGViYXJEaXYsXHJcbiAgICAgIG1haW5EaXYsXHJcbiAgICAgIGhlYWRpbmdUaXRsZSxcclxuICAgICAgbWFpbkNvbnRlbnQsXHJcbiAgICAgIG1haW5UZXh0Q29udGVudCxcclxuICAgICAgbWlhbkltYWdlQ29udGVudCxcclxuICAgICAgZm9vZEltYWdlLFxyXG4gICAgICB0ZXh0Qm9keSxcclxuICAgICAgc2lkZWJhckJ0bkRpdlxyXG4gICAgKTtcclxuICAgIHJldHVybiBkaXZBcnI7XHJcbiAgfTtcclxuICBlbGVtZW50Q3JlYXRvcigpO1xyXG4gIGNvbnN0IGVsZW1lbnROYW1pbmcgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgICAvLyBDb250YWluZXJzXHJcbiAgICBlbGVtZW50WzFdLnNldEF0dHJpYnV0ZSgnaWQnLCBjbGFzc05hbWVbMF0pO1xyXG4gICAgZWxlbWVudFsyXS5jbGFzc05hbWUgPSBjbGFzc05hbWVbMV07XHJcbiAgICBlbGVtZW50WzNdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVsyXTtcclxuICAgIGVsZW1lbnRbNF0uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzNdO1xyXG5cclxuICAgIC8vIENvbnRhaW5lciBDaGlsZHJlblxyXG4gICAgZWxlbWVudFs1XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbNF07XHJcbiAgICBlbGVtZW50WzZdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs1XTtcclxuICAgIGVsZW1lbnRbN10uY2xhc3NOYW1lID0gY2xhc3NOYW1lWzZdO1xyXG4gICAgZWxlbWVudFs4XS5jbGFzc05hbWUgPSBjbGFzc05hbWVbN107XHJcbiAgICBlbGVtZW50WzldLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs4XTtcclxuICAgIGVsZW1lbnRbMTBdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVs5XTtcclxuICAgIGVsZW1lbnRbMTFdLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVsxMF07XHJcblxyXG4gICAgLy8gaW1hZ2UgcGxhY2VtZW50XHJcbiAgICBlbGVtZW50WzldLnNyYyA9IEltYWdlMTtcclxuICAgIC8vY2hpbGRyZW4gYXBwZW5kXHJcbiAgICBlbGVtZW50WzhdLmFwcGVuZChlbGVtZW50WzldKTtcclxuICAgIGVsZW1lbnRbN10uYXBwZW5kKGVsZW1lbnRbMTBdKTtcclxuICAgIGVsZW1lbnRbNl0uYXBwZW5kKGVsZW1lbnRbN10sIGVsZW1lbnRbOF0pO1xyXG4gICAgZWxlbWVudFs0XS5hcHBlbmQoZWxlbWVudFs2XSk7XHJcbiAgICBlbGVtZW50WzNdLmFwcGVuZChlbGVtZW50WzExXSk7XHJcbiAgICBlbGVtZW50WzJdLmFwcGVuZChlbGVtZW50WzVdKTtcclxuICAgIGVsZW1lbnRbMV0uYXBwZW5kKGVsZW1lbnRbMl0sIGVsZW1lbnRbM10sIGVsZW1lbnRbNF0pO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50WzFdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckVsZW1lbnRUZXh0ID0gKGFyciwgY29tbWVudCkgPT4gKGFyci50ZXh0Q29udGVudCA9IGNvbW1lbnQpO1xyXG5cclxuICBjb25zdCByZW5kZXJMb2FkID0gKCkgPT4ge1xyXG4gICAgZGl2QXJyWzBdLmFwcGVuZENoaWxkKGVsZW1lbnROYW1pbmcoZGl2QXJyLCBjbGFzc05hbWVBcnIpKTtcclxuICAgIHJlbmRlckVsZW1lbnRUZXh0KGRpdkFycls1XSwgJ01pIEphcmRpbicpO1xyXG4gICAgcmVuZGVyRWxlbWVudFRleHQoXHJcbiAgICAgIGRpdkFyclsxMF0sXHJcbiAgICAgICdPdXIgZmFtaWx5IHdvdWxkIGxpa2UgdG8gZmlyc3Qgd2VsY29tZSB5b3UgdG8gb3VyIHNpdGUuIFdlIHdlbGNvbWUgeW91IHRvIHRha2UgdGhlIGRyaXZlIGFuZCBwYXJ0aWNpcGF0ZSBpbiB0aGUgYmVzdCBIaXNwYW5pYyBhdG1vc3BoZXJlIGluIHRoZSByZWdpb24uIE91ciBzdGFmZiB3ZWxjb21lcyB5b3Ugd2l0aCBvcGVuIGFybXMgYW5kIHdvbmRlcmZ1bCBmb29kLiBPdXIgZm9vZCBjYW4gb25seSBiZSBkZXNjcmliZWQgYXMgYW4gZXhwZXJpZW5jZSBmb3IgdGhlIGhlYXJ0LiBCb29rIHlvdXIgdGFibGUgdG9kYXkgYW5kIGVuam95IGEgd29uZGVyZnVsIHRpbWUgaGVyZSBhdCBNaSBKYXJkaW4uJ1xyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBkaXZBcnIsIGNsYXNzTmFtZUFyciwgcmVuZGVyTG9hZCwgcmVuZGVyRWxlbWVudFRleHQgfTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgTG9hZFBhZ2U7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==