import { AzwcDialog } from './components/azwc-dialog/azwc-dialog';
import { AzwcFileManager } from './components/azwc-file-manager/azwc-file-manager';
import { AzwcSpinner } from './components/azwc-spinner/azwc-spinner';
import { AzwcSpinnerMask } from './components/azwc-spinner-mask/azwc-spinner-mask';
import { AzwcSwiper } from './components/azwc-swiper/azwc-swiper';
import * as swiperlib from 'swiper';
import Swiper from 'swiper';

export default async function () {
  (<any>window).__azwc_classes = {
    AzwcDialog,
    AzwcFileManager,
    AzwcSpinner,
    AzwcSpinnerMask,
    AzwcSwiper,
    thirdParty: {
      swiperlib,
      Swiper,
    },
  };
  if ((<any>window).__on_azwc_init) {
    (<any>window).__on_azwc_init((<any>window).__azwc_classes, {})
  }
}
