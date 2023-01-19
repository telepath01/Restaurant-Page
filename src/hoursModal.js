' use strict';
import ContactModal from './contactModal';

const HoursModal = (function () {
  const hourElementsArray = [];

  const hoursModalElements = () => {
    ContactModal.elementCreator(hourElementsArray, 'div', 'hours-container'),
      ContactModal.elementCreator(hourElementsArray, 'h1', 'hours-heading'),
      ContactModal.elementCreator(hourElementsArray, 'div', 'hours-body'),
      ContactModal.elementCreator(hourElementsArray, 'p', 'days'),
      ContactModal.elementCreator(hourElementsArray, 'p', 'hrs'),
      ContactModal.elementCreator(hourElementsArray, 'p', 'days'),
      ContactModal.elementCreator(hourElementsArray, 'p', 'hrs'),
      ContactModal.elementCreator(hourElementsArray, 'p', 'days'),
      ContactModal.elementCreator(hourElementsArray, 'p', 'hrs'),
      ContactModal.elementCreator(hourElementsArray, 'button', 'hours-close');
  };
  hoursModalElements();
  const elementContentCreator = (element, content) => {
    element.textContent = content;
    return element;
  };

  const hoursRender = () => {
    ContactModal.elementsArray[0].append(hourElementsArray[0]);
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
      ContactModal.elementsArray[0].style.display = 'none';
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
export default HoursModal;
