import { EventEmitter } from '../../stencil-public-runtime';
import Swiper, { SwiperOptions } from 'swiper';
export declare class AzwcSwiper {
  static componentDidLoad: (inst: AzwcSwiper) => void;
  static getDefaultOptions: (inst: AzwcSwiper) => SwiperOptions;
  static createSwiper: (inst: AzwcSwiper) => Swiper;
  slideChanged: EventEmitter;
  loop: boolean;
  speed: number;
  host: HTMLElement;
  container?: HTMLDivElement;
  wrapper?: HTMLDivElement;
  next?: HTMLDivElement;
  prev?: HTMLDivElement;
  pagination?: HTMLDivElement;
  swiper: any;
  componentDidLoad(): void;
  initSwiper(): void;
  update(): void;
  slideTo(index: Number, speed?: Number): Promise<void>;
  getSwiper(): Promise<any>;
  render(): any;
}
