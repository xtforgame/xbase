import { Component, Host, h } from '@stencil/core';
export class AzwcCanviDrawer {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "azwc-canvi-drawer"; }
}
