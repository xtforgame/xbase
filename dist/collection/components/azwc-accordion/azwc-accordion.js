import { Component, Element, Host, h } from '@stencil/core';
export class AzwcAccordion {
  componentDidLoad() {
  }
  disconnectedCallback() {
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "azwc-accordion"; }
  static get elementRef() { return "host"; }
}
