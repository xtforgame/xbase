import { Component, Prop, Host, h } from '@stencil/core';
export class AzwcSpinnerMask {
  constructor() {
    this.enabled = 'false';
    this.size = '20px';
    this.strokeWidth = '4px';
  }
  render() {
    const hostStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    };
    if (this.enabled === 'false') {
      hostStyle.display = "none";
    }
    return (h(Host, { style: hostStyle },
      h("azwc-spinner", { size: this.size, 
        // containerSize={this.size}
        strokeWidth: this.strokeWidth })));
  }
  static get is() { return "azwc-spinner-mask"; }
  static get properties() { return {
    "enabled": {
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
      "attribute": "enabled",
      "reflect": false,
      "defaultValue": "'false'"
    },
    "size": {
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
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'20px'"
    },
    "strokeWidth": {
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
      "attribute": "stroke-width",
      "reflect": false,
      "defaultValue": "'4px'"
    }
  }; }
}
