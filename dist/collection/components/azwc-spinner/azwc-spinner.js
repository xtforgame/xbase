import { Component, Prop, Host, h } from '@stencil/core';
export class AzwcSpinner {
  constructor() {
    this.size = '1em';
    this.containerSize = '';
    this.strokeWidth = '2px';
  }
  render() {
    const containerStyle = {};
    if (this.containerSize) {
      containerStyle.width = this.containerSize;
      containerStyle.height = this.containerSize;
    }
    return (h(Host, { style: containerStyle },
      h("span", { part: "base", class: "spinner", "aria-busy": "true", "aria-live": "polite", style: {
          width: this.size,
          height: this.size,
          borderWidth: this.strokeWidth,
        } })));
  }
  static get is() { return "azwc-spinner"; }
  static get properties() { return {
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
      "defaultValue": "'1em'"
    },
    "containerSize": {
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
      "attribute": "container-size",
      "reflect": false,
      "defaultValue": "''"
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
      "defaultValue": "'2px'"
    }
  }; }
}
