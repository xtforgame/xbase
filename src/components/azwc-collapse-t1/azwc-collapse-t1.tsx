import { Component, Element, Host, Prop, h } from '@stencil/core';
import { createRamdomUniqueIdForElement } from '../../utils';

@Component({
  tag: 'azwc-collapse-t1',
  // styleUrl: 'azwc-collapse-t1.scss',
  shadow: false,
})
export class AzwcCollapseT1 {

  @Prop() collapseid: string;
  titleId?: string;

  @Prop() active: boolean;

  @Prop() type: 'sign' | 'arrow' | '';

  @Element() host: HTMLElement;
  componentDidLoad() {
    // const titles = this.host.querySelectorAll('.azac-title-box');
    // titles.forEach(t => {
    //   t.addEventListener('click', () => {
    //     this.host.classList.toggle('active');
    //     // ((e.target as HTMLElement).parentNode as HTMLElement).classList.toggle('active');
    //   });
    // });
  }

  disconnectedCallback() {

  }

  render() {
    this.titleId = this.titleId || this.collapseid || createRamdomUniqueIdForElement();
    const checked = this.active;
    return (
      <Host>
        <input checked={checked} name="collapse" type="checkbox" id={this.titleId} class="azac-title-input">
        </input>
        <label htmlFor={this.titleId} class="azac-title-box">
          <slot name="title"></slot>
          {(!this.type || this.type === 'sign') && (
            <div class="azac-icon-sign">
              <span></span>
              <span></span>
            </div>
          )}
          {this.type === 'arrow' && (
            <div class="azac-icon-arrow">
              <span></span>
            </div>
          )}
        </label>
        <div class="azac-contents-box">
          <div class="azac-contents">
            <slot name="contents"></slot>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
