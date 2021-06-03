import { r as registerInstance, h, H as Host, g as getElement } from './index-54a7a200.js';
import { l as format } from './azwc-collapse-t1-cb61a6b0.js';
export { r as azwc_accordion, x as azwc_collapse_t1, s as azwc_dialog, t as azwc_file_manager, o as azwc_nav_button, p as azwc_nav_menu, q as azwc_nav_menu_item, u as azwc_spinner, v as azwc_spinner_mask, w as azwc_swiper } from './azwc-collapse-t1-cb61a6b0.js';

const AzwcSwiperNext = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "azwc-swiper-next" }, h("slot", null)));
  }
};

const AzwcSwiperPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "swiper-pagination" }));
  }
};

const AzwcSwiperPrev = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "azwc-swiper-prev" }, h("slot", null)));
  }
};

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.switchX = true;
    this.switchY = true;
  }
  static X() {
    console.log('ssss');
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  async togglePadding() {
    // alert("xxxx");
    this.switchX = !this.switchX;
    // console.log('this.switchX :', this.switchX);
    // console.log('this.host :', this.host);
    // let slotted = this.host.querySelector('slot') as HTMLSlotElement;
    // console.log('slotted :', slotted);
  }
  componentWillLoad() {
    // console.log('this :', this);
    // console.log('this.togglePadding :', this.togglePadding);
    // let slotted = this.host.querySelector('slot') as HTMLSlotElement;
    // console.log('slotted :', slotted);
  }
  componentDidLoad() {
    // console.log('this.host.togglePadding :', (this.host as any).togglePadding);
    setInterval(() => {
      this.switchY = !this.switchY;
    }, 1000);
  }
  disconnectedCallback() {
  }
  render() {
    let padding = '22px';
    let text = 'on :';
    if (this.first === 'Rick') {
      padding = '12px';
    }
    // console.log('this.switchX :', this.switchX);
    if (this.switchX) {
      padding = '0px';
    }
    if (!this.switchY) {
      text = 'off :';
    }
    return (h(Host, null, h("div", { part: "mc-container", class: "mc-container", style: { padding } }, h("button", null, "XXXXX"), h("slot", { name: "top" }), text, "Hello, World! I'm ", this.getText(), h("slot", { name: "body" }))));
  }
  get host() { return getElement(this); }
};

export { AzwcSwiperNext as azwc_swiper_next, AzwcSwiperPagination as azwc_swiper_pagination, AzwcSwiperPrev as azwc_swiper_prev, MyComponent as my_component };
