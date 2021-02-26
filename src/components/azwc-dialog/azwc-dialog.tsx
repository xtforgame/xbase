import { Component, State, Event, Element, EventEmitter, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-dialog',
  // styleUrl: 'azwc-dialog.scss',
  shadow: false,
})
export class AzwcDialog {

  @State() isOpen: boolean = false;

  // Event called 'todoCompleted' that is "composed", "cancellable" and it will bubble up!
  @Event({
    eventName: 'customStateChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) customStateChange: EventEmitter;

  @Element() host: HTMLElement;

  doOpen() {
    this.isOpen = true;
    this.customStateChange.emit({
      open: this.isOpen,
      azwcref: this,
    });
  }

  doClose(e: MouseEvent) {
    if (!e) {
      console.log('e :', e);
    }
    this.isOpen = false;
    this.customStateChange.emit({
      open: this.isOpen,
      azwcref: this,
    });
  }

  doBackgroundClose(e: MouseEvent) {
    let back = this.host.querySelector('div');
    if (this.host.shadowRoot) {
      back = this.host.shadowRoot.querySelector('div');
    }
    if (back === e.target) {
      this.doClose(e);
    }
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.doOpen()}>Open Modal</button>
        <div
          class="modal"
          part="modal"
          onClick={(e) => this.doBackgroundClose(e)}
          style={{ display: this.isOpen ? 'block' : 'none' }}
        >
          <slot name="top"></slot>
          <div part="modal-content centered-modal-content" class="modal-content centered-modal-content">
            <slot></slot>
            <span part="close" class="close" onClick={(e) => this.doClose(e)}>&times;</span>
            <slot name="body">Some text in the Modal..</slot>
          </div>
        </div>
      </Host>
    );
  }

}
