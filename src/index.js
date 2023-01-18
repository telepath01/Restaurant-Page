import _ from 'lodash';
import './style.css';
import LoadPage from './load-page';
import SidebarElements from './sidebar-creator';
import ContactModal from './contactModal';
import HoursModal from './hoursModal';

const PageFunction = (function () {
  const landingPageRender = () => {
    LoadPage.renderLoad();
    SidebarElements.renderButtons();
    SidebarElements.contactUsListiner();
    ContactModal.ConatactListiner();
    HoursModal.hoursRender();
    HoursModal.hoursListener();
  };
  return { landingPageRender };
})();
PageFunction.landingPageRender();
