import { Component, Host, h } from '@stencil/core';
export class AzwcTabLink {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "azwc-tab-link"; }
  static get encapsulation() { return "shadow"; }
}
