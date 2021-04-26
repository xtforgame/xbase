import { AzwcNavButton } from './components/azwc-nav-button/azwc-nav-button';
import { AzwcNavMenu } from './components/azwc-nav-menu/azwc-nav-menu';
import { AzwcNavMenuItem } from './components/azwc-nav-menu-item/azwc-nav-menu-item';
import { AzwcAccordion } from './components/azwc-accordion/azwc-accordion';
import { AzwcDialog } from './components/azwc-dialog/azwc-dialog';
import { AzwcFileManager } from './components/azwc-file-manager/azwc-file-manager';
import { AzwcSpinner } from './components/azwc-spinner/azwc-spinner';
import { AzwcSpinnerMask } from './components/azwc-spinner-mask/azwc-spinner-mask';
import { AzwcSwiper } from './components/azwc-swiper/azwc-swiper';
import { AzwcCollapseT1 } from './components/azwc-collapse-t1/azwc-collapse-t1';
import * as swiperlib from 'swiper';
import Swiper from 'swiper';
import { AzwcCanviDrawer } from './components/azwc-canvi-drawer/azwc-canvi-drawer';
import Canvi from './components/azwc-canvi-drawer/Canvi';
import * as utils from './utils';
import * as eventBinder from './ex-event-binder';
import versionInfo from './versionInfo';
const Components = {
  AzwcNavButton,
  AzwcNavMenu,
  AzwcNavMenuItem,
  AzwcAccordion,
  AzwcDialog,
  AzwcFileManager,
  AzwcSpinner,
  AzwcSpinnerMask,
  AzwcSwiper,
  AzwcCollapseT1,
  AzwcCanviDrawer,
};
export const getExportData = () => (Object.assign(Object.assign({ Components }, Components), { thirdParty: {
    swiperlib,
    Swiper,
    Canvi,
  }, utils,
  eventBinder,
  versionInfo }));
export const exportData = getExportData();
export default async function () {
  const exportData = getExportData();
  window.__azwc_classes = exportData;
  window.__azwc_export = exportData;
  if (window.__on_azwc_init) {
    window.__on_azwc_init(exportData, {});
  }
}