import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-swiper-prev',
  shadow: false,
})
export class AzwcSwiperPrev {

  render() {
    return (
      <Host class="azwc-swiper-prev">
        <slot></slot>
      </Host>
    );
  }

}
