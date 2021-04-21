import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'azwc-nav-menu',
  // styleUrl: 'azwc-nav-menu.scss',
  shadow: false,
})
export class AzwcNavMenu {
  @Prop() type: 'left-side' | '';
  @Prop({ attribute: 'show-on' }) showOn: 'left-side' | '';
  render() {
    return (
      <Host show-on={this.showOn}>
        <ul>
          <slot></slot>
        </ul>
      </Host>
    );
  }

}
