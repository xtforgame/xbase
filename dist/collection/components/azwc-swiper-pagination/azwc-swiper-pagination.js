import { Component, Host, h } from '@stencil/core';
export class AzwcSwiperPagination {
  render() {
    return (h(Host, { class: "swiper-pagination" }));
  }
  static get is() { return "azwc-swiper-pagination"; }
}
