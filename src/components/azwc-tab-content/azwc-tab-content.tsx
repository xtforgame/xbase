import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-tab-content',
  shadow: true,
})
export class AzwcTabContent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
