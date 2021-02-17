import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-sec-comp',
  styleUrl: 'my-sec-comp.css',
  scoped: true,
  // shadow: true,
})
export class MySecComp {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
