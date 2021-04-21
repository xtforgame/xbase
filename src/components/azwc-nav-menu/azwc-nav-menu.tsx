import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-nav-menu',
  // styleUrl: 'azwc-nav-menu.scss',
  shadow: false,
})
export class AzwcNavMenu {

  render() {
    return (
      <Host>
        <ul>
          <slot></slot>
        </ul>
      </Host>
    );
  }

}
