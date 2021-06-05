import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-tab-link',
  shadow: true,
})
export class AzwcTabLink {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
