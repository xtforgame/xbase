import { Component, Host, h } from '@stencil/core';
export class AzwcSwiperNext {
  render() {
    return (h(Host, { class: "azwc-swiper-next" },
      h("slot", null)));
  }
  static get is() { return "azwc-swiper-next"; }
}
