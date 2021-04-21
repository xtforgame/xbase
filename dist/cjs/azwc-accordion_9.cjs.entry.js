'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cbad13bb.js');
const azwcCollapseT1 = require('./azwc-collapse-t1-b54e5a48.js');

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
    return azwcCollapseT1.format(this.first, this.middle, this.last);
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

exports.azwc_accordion = azwcCollapseT1.AzwcAccordion;
exports.azwc_collapse_t1 = azwcCollapseT1.AzwcCollapseT1;
exports.azwc_dialog = azwcCollapseT1.AzwcDialog;
exports.azwc_file_manager = azwcCollapseT1.AzwcFileManager;
exports.azwc_nav_button = azwcCollapseT1.AzwcNavButton;
exports.azwc_spinner = azwcCollapseT1.AzwcSpinner;
exports.azwc_spinner_mask = azwcCollapseT1.AzwcSpinnerMask;
exports.azwc_swiper = azwcCollapseT1.AzwcSwiper;
exports.my_component = MyComponent;
