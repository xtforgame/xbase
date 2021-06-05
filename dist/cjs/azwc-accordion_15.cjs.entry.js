'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f961ad80.js');
const azwcTabs = require('./azwc-tabs-5891676f.js');

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.switchX = true;
    this.switchY = true;
  }
  static X() {
    console.log('ssss');
  }
  getText() {
    return azwcTabs.format(this.first, this.middle, this.last);
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
    return (index.h(index.Host, null, index.h("div", { part: "mc-container", class: "mc-container", style: { padding } }, index.h("button", null, "XXXXX"), index.h("slot", { name: "top" }), text, "Hello, World! I'm ", this.getText(), index.h("slot", { name: "body" }))));
  }
  get host() { return index.getElement(this); }
};

exports.azwc_accordion = azwcTabs.AzwcAccordion;
exports.azwc_collapse_t1 = azwcTabs.AzwcCollapseT1;
exports.azwc_dialog = azwcTabs.AzwcDialog;
exports.azwc_file_manager = azwcTabs.AzwcFileManager;
exports.azwc_nav_button = azwcTabs.AzwcNavButton;
exports.azwc_nav_menu = azwcTabs.AzwcNavMenu;
exports.azwc_nav_menu_item = azwcTabs.AzwcNavMenuItem;
exports.azwc_spinner = azwcTabs.AzwcSpinner;
exports.azwc_spinner_mask = azwcTabs.AzwcSpinnerMask;
exports.azwc_swiper = azwcTabs.AzwcSwiper;
exports.azwc_swiper_next = azwcTabs.AzwcSwiperNext;
exports.azwc_swiper_pagination = azwcTabs.AzwcSwiperPagination;
exports.azwc_swiper_prev = azwcTabs.AzwcSwiperPrev;
exports.azwc_tabs = azwcTabs.AzwcTabs;
exports.my_component = MyComponent;
