import { Component, Host, h } from '@stencil/core';
export class AzwcNavMenuItem {
  render() {
    return (h(Host, null,
      h("li", null,
        h("slot", null))));
  }
  static get is() { return "azwc-nav-menu-item"; }
}
