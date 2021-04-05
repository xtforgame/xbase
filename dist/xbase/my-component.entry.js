import { r as registerInstance, h, f as Host, g as getElement } from './index-5ee21963.js';
import { f as format } from './utils-cf715a8a.js';

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

export { MyComponent as my_component };
