import { Component, Host, h } from '@stencil/core';
export class AzwcNavMenu {
  render() {
    return (h(Host, null,
      h("ul", null,
        h("slot", null))));
  }
  static get is() { return "azwc-nav-menu"; }
}
