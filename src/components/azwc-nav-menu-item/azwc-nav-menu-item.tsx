import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-nav-menu-item',
  // styleUrl: 'azwc-nav-menu-item.scss',
  shadow: false,
})
export class AzwcNavMenuItem {

  render() {
    return (
      <Host>
        <li>
          <slot></slot>
        </li>
      </Host>
    );
  }

}
