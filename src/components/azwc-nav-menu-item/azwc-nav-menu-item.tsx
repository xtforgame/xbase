import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'azwc-nav-menu-item',
  // styleUrl: 'azwc-nav-menu-item.scss',
  shadow: false,
})
export class AzwcNavMenuItem {

  @Prop({ attribute: 'show-on' }) showOn: 'left-side' | '';
  render() {
    return (
      <Host>
        <li>
          <div><slot name="label"></slot></div>
          <azwc-nav-menu show-on={this.showOn}>
            <slot></slot>
          </azwc-nav-menu>
        </li>
      </Host>
    );
  }

}
