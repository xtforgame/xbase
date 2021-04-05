import { r as registerInstance, h, f as Host, g as getElement } from './index-5ee21963.js';
import { f as format, c as createRamdomUniqueId, a as createRamdomUniqueIdForElement } from './utils-cf715a8a.js';

const utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  format: format,
  createRamdomUniqueId: createRamdomUniqueId,
  createRamdomUniqueIdForElement: createRamdomUniqueIdForElement
});

const AzwcCollapseT1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    // const titles = this.host.querySelectorAll('.azac-title-box');
    // titles.forEach(t => {
    //   t.addEventListener('click', () => {
    //     this.host.classList.toggle('active');
    //     // ((e.target as HTMLElement).parentNode as HTMLElement).classList.toggle('active');
    //   });
    // });
  }
  disconnectedCallback() {
  }
  render() {
    this.titleId = this.titleId || this.collapseid || createRamdomUniqueIdForElement();
    const checked = this.active;
    return (h(Host, null, h("input", { checked: checked, name: "collapse", type: "checkbox", id: this.titleId, class: "azac-title-input" }), h("label", { htmlFor: this.titleId, class: "azac-title-box" }, h("slot", { name: "title" }), h("div", { class: "azac-icons" }, h("span", null), h("span", null))), h("div", { class: "azac-contents-box" }, h("div", { class: "azac-contents" }, h("slot", { name: "contents" }), h("slot", null)))));
  }
  get host() { return getElement(this); }
};

export { AzwcCollapseT1 as A, utils as u };
