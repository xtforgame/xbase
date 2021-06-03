import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-swiper-next',
  shadow: false,
})
export class AzwcSwiperNext {

  render() {
    return (
      <Host class="azwc-swiper-next">
        <slot></slot>
      </Host>
    );
  }

}
