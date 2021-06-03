import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-swiper-pagination',
  shadow: false,
})
export class AzwcSwiperPagination {

  render() {
    return (
      <Host class="swiper-pagination"></Host>
    );
  }

}
