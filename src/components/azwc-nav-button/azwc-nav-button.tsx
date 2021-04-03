import { Component, Event, EventEmitter, Prop, State, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-nav-button',
  // styleUrl: 'azwc-nav-button.scss',
  shadow: false,
})
export class AzwcNavButton {
  @Prop() type: 'larr' | 'rarr' | 'uarr' | 'darr' | 'x' | 'plus' | '';
  @State() isOpen: boolean = false;

  @Event({
    eventName: 'customStateChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) customStateChange: EventEmitter;

  handleClick(e: MouseEvent) {
    this.isOpen = !this.isOpen;
    this.customStateChange.emit({
      open: this.isOpen,
      azwcref: this,
    });
  }

  render() {
    const cls = ['navicon-button', this.type || ''];
    if (this.isOpen) {
      cls.push('open');
    }
    const classes = cls.join(' ');
    return (
      <Host>
        <a class={classes} onClick={(e) => this.handleClick(e)}>
          <div class="navicon"></div>
        </a>
      </Host>
    );
  }

}
