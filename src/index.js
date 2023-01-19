import _ from 'lodash';
import './style.css';
import LoadPage from './load-page';
import SidebarElements from './sidebar-creator';
import ContactModal from './contactModal';
import HoursModal from './hoursModal';
import MenuModal from './menuModal';

const PageFunction = (function () {
  const landingPageRender = () => {
    LoadPage.renderLoad();
    SidebarElements.renderButtons();
    SidebarElements.contactUsListiner();
    ContactModal.ConatactListiner();
    HoursModal.hoursRender();
    HoursModal.hoursListener();
    MenuModal.menuModalRender();
    MenuModal.menuListener();
  };
  return { landingPageRender };
})();
PageFunction.landingPageRender();
