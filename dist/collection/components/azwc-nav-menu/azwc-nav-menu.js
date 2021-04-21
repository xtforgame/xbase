import { Component, Host, Prop, h } from '@stencil/core';
export class AzwcNavMenu {
  render() {
    return (h(Host, { "show-on": this.showOn },
      h("ul", null,
        h("slot", null))));
  }
  static get is() { return "azwc-nav-menu"; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left-side' | ''",
        "resolved": "\"\" | \"left-side\"",
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
    "showOn": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left-side' | ''",
        "resolved": "\"\" | \"left-side\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "show-on",
      "reflect": false
    }
  }; }
}
