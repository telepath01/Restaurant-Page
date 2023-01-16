'use strict';
import LoadPage from './load-page';

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
export default ContactModal;
