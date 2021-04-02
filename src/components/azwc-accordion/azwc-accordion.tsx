import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-accordion',
  // styleUrl: 'azwc-accordion.scss',
  shadow: false,
})
export class AzwcAccordion {

  @Element() host: HTMLElement;
  componentDidLoad() {
    const titles = this.host.querySelectorAll('.azac-title-box');
    titles.forEach(t => {
      t.addEventListener('click', e => {
        ((e.target as HTMLElement).parentNode as HTMLElement).classList.toggle('active');
      });
    });
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
