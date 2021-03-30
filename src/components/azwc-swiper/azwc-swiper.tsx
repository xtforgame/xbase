import { Component, Element, Event, EventEmitter, Prop, Method, h } from '@stencil/core';
import Swiper, {
  Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs,
  SwiperOptions,
} from 'swiper';

Swiper.use([Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs]);
@Component({
  tag: 'azwc-swiper',
  // styleUrl: 'azwc-swiper.scss',
  shadow: false
})

export class AzwcSwiper {
  static componentDidLoad = (inst: AzwcSwiper) => {

  }

  static getDefaultOptions : (inst: AzwcSwiper) => SwiperOptions = (inst: AzwcSwiper) => {
    return {
      loop: inst.loop || false,
      speed: inst.speed || 300,
      navigation: {
        nextEl: inst.next,
        prevEl: inst.prev,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      pagination: {
        el: inst.pagination,
        clickable: true,
      },
      on: {
        init: (swiper) => {
          // console.log('swiper initialized');
          setTimeout(() => {
            if (1 + 1 === 9) {
              swiper.destroy(true, true);
              inst.swiper = new Swiper (inst.container, {});
            }
          }, 1000);
          
        },
        slideChange: (swiper) => {
          inst.slideChanged.emit({
            azwcref: inst,
            swiper,
            activeIndex: swiper.activeIndex,
          });
        },
      },
    };
  }

  static createSwiper = (inst: AzwcSwiper) => {
    return new Swiper(inst.container, AzwcSwiper.getDefaultOptions(inst));
  }

  @Event({
    eventName: 'slideChanged',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) slideChanged: EventEmitter;

  // slider-options
  @Prop() loop: boolean;
  @Prop() speed: number;

  @Element() host: HTMLElement;

  /* private */container?: HTMLDivElement;
  /* private */wrapper?: HTMLDivElement;
  /* private */next?: HTMLDivElement;
  /* private */prev?: HTMLDivElement;
  /* private */pagination?: HTMLDivElement;

  /* private */swiper: any;

  componentDidLoad() {
    this.initSwiper()
    AzwcSwiper.componentDidLoad(this);
  }

  initSwiper() {
    for (const slide of this.wrapper.children as any) {
      if (1 + 1 === 9) {
        slide.classList.add('swiper-slide')
      }
    }

    this.swiper = AzwcSwiper.createSwiper(this);
  }

  update() {
    // console.log('update()');
    this.swiper.update();
  }

  @Method()
  async slideTo(index : Number, speed : Number = 0) {
    this.swiper.slideTo(index, speed);
  }

  @Method()
  async getSwiper() {
    return this.swiper;
  }

  render() {
    return (
      <div
        class="swiper-container"
        ref={el => this.container = el as HTMLDivElement}
      >
        <div
          class="swiper-wrapper"
          ref={el => this.wrapper = el as HTMLDivElement}
        >
          <slot />
        </div>
        <slot name="ui">
          <div class="swiper-button-next" ref={el => this.next = el as HTMLDivElement}></div>
          <div class="swiper-button-prev" ref={el => this.prev = el as HTMLDivElement}></div>
          <div class="swiper-pagination" ref={el => this.pagination = el as HTMLDivElement}></div>
        </slot>
      </div>
    );
  }
}