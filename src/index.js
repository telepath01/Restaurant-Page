import _ from 'lodash';
import './style.css';
import LoadPage from './load-page';
import SidebarElements from './sidebar-creator';
import ContactModal from './contactModal';

const PageFunction = (function () {
  const landingPageRender = () => {
    LoadPage.renderLoad();
    SidebarElements.renderButtons();
    SidebarElements.contactUsListiner();
    ContactModal.ConatactListiner();
  };
  return { landingPageRender };
})();
PageFunction.landingPageRender();
