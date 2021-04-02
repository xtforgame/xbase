import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-accordion',
  // styleUrl: 'azwc-accordion.scss',
  shadow: false,
})
export class AzwcAccordion {

  @Element() host: HTMLElement;
  componentDidLoad() {
  }

  disconnectedCallback() {

  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
