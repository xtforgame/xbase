import { Component, Element, Host, Prop, h } from '@stencil/core';
import { createRamdomUniqueIdForElement } from '../../utils';
export class AzwcCollapseT1 {
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
    return (h(Host, null,
      h("input", { checked: checked, name: "collapse", type: "checkbox", id: this.titleId, class: "azac-title-input" }),
      h("label", { htmlFor: this.titleId, class: "azac-title-box" },
        h("slot", { name: "title" }),
        (!this.type || this.type === 'sign') && (h("div", { class: "azac-icon-sign" },
          h("span", null),
          h("span", null))),
        this.type === 'arrow' && (h("div", { class: "azac-icon-arrow" },
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
        "original": "'sign' | 'arrow' | ''",
        "resolved": "\"\" | \"arrow\" | \"sign\"",
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
    }
  }; }
  static get elementRef() { return "host"; }
}
