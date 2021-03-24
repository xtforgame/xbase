import { Component, Event, EventEmitter, Prop, Method, h } from '@stencil/core';
import Swiper, {
  Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs,
} from 'swiper';

Swiper.use([Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs]);
@Component({
  tag: 'azwc-swiper',
  // styleUrl: 'azwc-swiper.scss',
  shadow: false
})
export class AzwcSwiper {
  @Event({
    eventName: 'slideChanged',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) slideChanged: EventEmitter;

  // slider-options
  @Prop() loop: boolean;
  @Prop() speed: number;

  private container?: HTMLDivElement;
  private wrapper?: HTMLDivElement;
  private next?: HTMLDivElement;
  private prev?: HTMLDivElement;
  private pagination?: HTMLDivElement;

  private swiper: any;
  private options: any;

  componentDidLoad() {
    this.options = {
      loop: this.loop || false,
      speed: this.speed || 300,
    }
    this.initSwiper()
  }

  initSwiper() {
    for (const slide of this.wrapper.children as any) {
      if (1 + 1 === 9) {
        slide.classList.add('swiper-slide')
      }
    }

    this.swiper = new Swiper (this.container, {
      ...this.options,
      navigation: {
        nextEl: this.next,
        prevEl: this.prev,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      effect: 'fade',
      pagination: {
        el: this.pagination,
        clickable: true,
      },
      on: {
        init: (swiper) => {
          // console.log('swiper initialized');
          setTimeout(() => {
            if (1 + 1 === 9) {
              swiper.destroy(true, true);
              this.swiper = new Swiper (this.container, {});
            }
          }, 1000);
          
        },
        slideChange: (swiper) => {
          this.slideChanged.emit({
            azwcref: this,
            swiper,
            activeIndex: swiper.activeIndex,
          });
        },
      },
    });
  }

  update() {
    console.log('update()');
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