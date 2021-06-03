import { Component, Element, Event, Prop, Method, h } from '@stencil/core';
import Swiper, { Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs, } from 'swiper';
Swiper.use([Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs]);
export class AzwcSwiper {
  componentDidLoad() {
    this.initSwiper();
    AzwcSwiper.componentDidLoad(this);
  }
  initSwiper() {
    for (const slide of this.wrapper.children) {
      if (1 + 1 === 9) {
        slide.classList.add('swiper-slide');
      }
    }
    this.swiper = AzwcSwiper.createSwiper(this);
  }
  update() {
    // console.log('update()');
    this.swiper.update();
  }
  async slideTo(index, speed = 0) {
    this.swiper.slideTo(index, speed);
  }
  async getSwiper() {
    return this.swiper;
  }
  render() {
    return (h("div", { class: "swiper-container", ref: el => this.container = el },
      h("div", { class: "swiper-wrapper", ref: el => this.wrapper = el },
        h("slot", null)),
      h("slot", { name: "ui" },
        h("div", { class: "swiper-button-next", ref: el => this.next = el }),
        h("div", { class: "swiper-button-prev", ref: el => this.prev = el }),
        h("div", { class: "swiper-pagination", ref: el => this.pagination = el })),
      h("slot", { name: "azwc-swiper-prev" }),
      h("slot", { name: "azwc-swiper-next" }),
      h("slot", { name: "azwc-swiper-pagination" })));
  }
  static get is() { return "azwc-swiper"; }
  static get properties() { return {
    "loop": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "loop",
      "reflect": false
    },
    "speed": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "speed",
      "reflect": false
    },
    "nextSelector": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "next-selector",
      "reflect": false
    },
    "prevSelector": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "prev-selector",
      "reflect": false
    },
    "paginationSelector": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "pagination-selector",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "slideChanged",
      "name": "slideChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "slideTo": {
      "complexType": {
        "signature": "(index: Number, speed?: Number) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Number": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "getSwiper": {
      "complexType": {
        "signature": "() => Promise<any>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<any>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
}
AzwcSwiper.componentDidLoad = () => {
};
AzwcSwiper.getDefaultOptions = (inst) => {
  return {
    loop: inst.loop || false,
    speed: inst.speed || 300,
    navigation: {
      nextEl: inst.nextSelector || inst.next,
      prevEl: inst.prevSelector || inst.prev,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: inst.paginationSelector || inst.pagination,
      clickable: true,
    },
    on: {
      init: (swiper) => {
        // console.log('swiper initialized');
        setTimeout(() => {
          if (1 + 1 === 9) {
            swiper.destroy(true, true);
            inst.swiper = new Swiper(inst.container, {});
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
};
AzwcSwiper.createSwiper = (inst) => {
  return new Swiper(inst.container, AzwcSwiper.getDefaultOptions(inst));
};
