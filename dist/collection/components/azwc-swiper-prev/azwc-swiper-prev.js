import { Component, Host, h } from '@stencil/core';
export class AzwcSwiperPrev {
  render() {
    return (h(Host, { class: "azwc-swiper-prev" },
      h("slot", null)));
  }
  static get is() { return "azwc-swiper-prev"; }
}
