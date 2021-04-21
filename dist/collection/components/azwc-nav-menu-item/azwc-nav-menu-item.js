import { Component, Host, Prop, h } from '@stencil/core';
export class AzwcNavMenuItem {
  render() {
    return (h(Host, null,
      h("li", null,
        h("azwc-nav-menu-label", null,
          h("slot", { name: "label" })),
        h("azwc-nav-menu", { "show-on": this.showOn },
          h("slot", null)))));
  }
  static get is() { return "azwc-nav-menu-item"; }
  static get properties() { return {
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
