import { Component, Element, Host, Prop, h } from '@stencil/core';
import { createRamdomUniqueIdForElement } from '../../utils';
export class AzwcCollapseT1 {
  constructor() {
    this.labelPlacement = 'left';
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
    console.log('this.labelPlacement :', this.labelPlacement);
    return (h(Host, null,
      h("input", { checked: checked, name: "collapse", type: "checkbox", id: this.titleId, class: "azac-title-input" }),
      h("label", { htmlFor: this.titleId, class: "azac-title-box" },
        this.labelPlacement === 'right' && (!this.type || this.type === 'sign') && (h("div", { class: "azac-icon-sign" },
          h("span", null),
          h("span", null))),
        this.labelPlacement === 'right' && this.type === 'arrow' && (h("div", { class: "azac-icon-arrow" },
          h("span", null))),
        this.labelPlacement === 'right' && this.type === 'angle-bracket' && (h("div", { class: "az-angle-bracket" },
          h("span", null),
          h("span", null))),
        h("slot", { name: "left-icon" }),
        h("slot", { name: "title" }),
        h("slot", { name: "right-icon" }),
        this.labelPlacement === 'left' && (!this.type || this.type === 'sign') && (h("div", { class: "azac-icon-sign" },
          h("span", null),
          h("span", null))),
        this.labelPlacement === 'left' && this.type === 'arrow' && (h("div", { class: "azac-icon-arrow" },
          h("span", null))),
        this.labelPlacement === 'left' && this.type === 'angle-bracket' && (h("div", { class: "az-angle-bracket" },
          h("span", null),
          h("span", null)))),
      h("div", { class: "azac-contents-box" },
        h("div", { class: "azac-contents" },
          h("slot", { name: "contents" }),
          h("slot", null)))));
  }
  static get is() { return "azwc-collapse-t1"; }
  static get properties() { return {
    "collapseid": {
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
      "attribute": "collapseid",
      "reflect": false
    },
    "active": {
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
      "attribute": "active",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'sign' | 'arrow' | 'angle-bracket' | ''",
        "resolved": "\"\" | \"angle-bracket\" | \"arrow\" | \"sign\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false
    },
    "labelPlacement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left' | 'right'",
        "resolved": "\"left\" | \"right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "label-placement",
      "reflect": false,
      "defaultValue": "'left'"
    }
  }; }
  static get elementRef() { return "host"; }
}
