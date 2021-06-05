import { Component, Host, h } from '@stencil/core';
export class AzwcTabContent {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "azwc-tab-content"; }
  static get encapsulation() { return "shadow"; }
}
