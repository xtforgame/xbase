import { Component, Element, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-collapse-t1',
  // styleUrl: 'azwc-collapse-t1.scss',
  shadow: false,
})
export class AzwcCollapseT1 {

  @Element() host: HTMLElement;
  componentDidLoad() {
    const titles = this.host.querySelectorAll('.azac-title-box');
    titles.forEach(t => {
      t.addEventListener('click', () => {
        this.host.classList.toggle('active');
        // ((e.target as HTMLElement).parentNode as HTMLElement).classList.toggle('active');
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
