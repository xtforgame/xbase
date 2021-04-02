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

export default async function () {
  (<any>window).__azwc_classes = {
    AzwcAccordion,
    AzwcDialog,
    AzwcFileManager,
    AzwcSpinner,
    AzwcSpinnerMask,
    AzwcSwiper,
    AzwcCollapseT1,
    AzwcCanviDrawer,
    thirdParty: {
      swiperlib,
      Swiper,
      Canvi,
    },
    utils,
  };
  if ((<any>window).__on_azwc_init) {
    (<any>window).__on_azwc_init((<any>window).__azwc_classes, {})
  }
}
