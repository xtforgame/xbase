import { r as registerInstance, h, f as Host, g as getElement } from './index-5ee21963.js';

const AzwcAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
  }
  disconnectedCallback() {
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get host() { return getElement(this); }
};

export { AzwcAccordion as A };
