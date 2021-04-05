import { Component, Element, Method, Event, EventEmitter, Prop, State, Host, h } from '@stencil/core';
import { ClickSource, OnOffSource } from './eb';
import {
  EbEventSenderWrapper,
  SourceBase,
} from '../../ex-event-binder';

@Component({
  tag: 'azwc-nav-button',
  // styleUrl: 'azwc-nav-button.scss',
  shadow: false,
})
export class AzwcNavButton {
  static ClickSource = ClickSource;
  static OnOffSource = OnOffSource;
  static SenderEventMap : { [s : string]: { new(sender: EbEventSenderWrapper, component: any, elem: HTMLElement): SourceBase } } = {
    click: ClickSource,
    onoff: OnOffSource,
  };

  @Prop() type: 'larr' | 'rarr' | 'uarr' | 'darr' | 'x' | 'plus' | '';
  @Prop() stayclosed: boolean;
  @State() isOpen: boolean = false;

  @Event({
    eventName: 'customStateChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) customStateChange: EventEmitter;

  senderWrapper: EbEventSenderWrapper;

  constructor() {
    this.senderWrapper = new EbEventSenderWrapper();
    this.senderWrapper.addSource('click', new ClickSource(this.senderWrapper, {
      getComponent: () => this,
      getElement: () => null,
    }));
    this.senderWrapper.addSource('onoff', new OnOffSource(this.senderWrapper, {
      getComponent: () => this,
      getElement: () => null,
    }));
  }

  @Method()
  async getInst() {
    return this;
  }

  @Element() host: HTMLElement;

  handleClick(_: MouseEvent) {
    this.isOpen = !this.isOpen;
    this.customStateChange.emit({
      open: this.isOpen,
      azwcref: this,
    });
  }

  render() {
    const cls = ['navicon-button', this.type || ''];
    if (this.isOpen && !this.stayclosed) {
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
