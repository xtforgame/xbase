import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-canvi-drawer',
  // styleUrl: 'azwc-canvi-drawer.scss',
  shadow: false,
})
export class AzwcCanviDrawer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
