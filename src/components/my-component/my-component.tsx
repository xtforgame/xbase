import { Component, Host, Element, Prop, State, Method, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  // shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() switchX: boolean = true;

  @State() switchY: boolean = true;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  @Method()
  async togglePadding() {
    // alert("xxxx");
    this.switchX = !this.switchX;
    // console.log('this.switchX :', this.switchX);
  }

  @Element() host: HTMLElement;
  componentWillLoad() {
    // console.log('this :', this);
    // console.log('this.togglePadding :', this.togglePadding);
    // let slotted = this.host.querySelector('slot') as HTMLSlotElement;
    // console.log('slotted :', slotted);
  }

  componentDidLoad() {
    // console.log('this.host.togglePadding :', (this.host as any).togglePadding);
    setInterval(() => {
      this.switchY = !this.switchY
    }, 1000);
  }

  disconnectedCallback() {
    (this.host as any).togglePadding = this.togglePadding.bind(this);
  }

  render() {
    let padding = '22px';
    let text = 'on :';
    if (this.first === 'Rick') {
      padding = '12px';
    }
    // console.log('this.switchX :', this.switchX);
    if (this.switchX) {
      padding = '0px';
    }
    if (!this.switchY) {
      text = 'off :';
    }
    return (
      <Host>
        <div style={{ padding, borderWidth: '1px', borderStyle: 'solid' }}>
          <slot name="top"></slot>
          {text}
          Hello, World! I'm {this.getText()}
          <slot name="body"></slot>
        </div>
      </Host>
    );
  }
}
