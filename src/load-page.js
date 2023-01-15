'use strict';

const LoadPage = (function () {
  const divArr = [];
  const elementCreator = () => {
    const parentDiv = document.body; // array [0]
    const contentDiv = document.createElement('div'); // array [1]
    const headerDiv = document.createElement('div'); // array [2]
    const sidebarDiv = document.createElement('div'); // array [3]
    const mainDiv = document.createElement('div'); // array [4]
    divArr.push(parentDiv, contentDiv, headerDiv, sidebarDiv, mainDiv);
    return divArr;
  };
  elementCreator();
  const elementNaming = () => {
    divArr[1].setAttribute('id', 'content');
    divArr[2].className = 'header-container';
    divArr[3].className = 'sidebar-container';
    divArr[4].className = 'main-container';
    divArr[1].append(divArr[2], divArr[3], divArr[4]);

    return divArr[1];
  };

  const renderLoad = () => {
    console.log(divArr);
    divArr[0].appendChild(elementNaming());
  };

  return { renderLoad };
})();
export default LoadPage;
