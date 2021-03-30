import { Component, State, Event, Element, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'azwc-dialog',
  // styleUrl: 'azwc-dialog.scss',
  shadow: false,
})
export class AzwcDialog {
  static allInstances: { [s : string]: AzwcDialog } = {};

  static open = (id: string) => {
    const inst = AzwcDialog.allInstances[id];
    if (inst) {
      inst.open();
    }
  }

  static close = (id: string) => {
    const inst = AzwcDialog.allInstances[id];
    if (inst) {
      inst.close(null);
    }
  }

  @Prop() dialogid: string;
  registeredId?: string;

  @State() isOpen: boolean = false;

  // Event called 'todoCompleted' that is "composed", "cancellable" and it will bubble up!
  @Event({
    eventName: 'customStateChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) customStateChange: EventEmitter;

  @Element() host: HTMLElement;

  componentDidLoad() {
    if (this.dialogid && !AzwcDialog.allInstances[this.dialogid]) {
      this.registeredId = this.dialogid;
      AzwcDialog.allInstances[this.dialogid] = this;
    }
  }

  disconnectedCallback() {
    if (this.registeredId) {
      delete AzwcDialog.allInstances[this.registeredId];
    }
  }

  open() {
    this.isOpen = true;
    this.customStateChange.emit({
      open: this.isOpen,
      azwcref: this,
    });
  }

  close(e: MouseEvent) {
    if (!e) {
      console.log('e :', e);
    }
    this.isOpen = false;
    this.customStateChange.emit({
      open: this.isOpen,
      azwcref: this,
    });
    // console.log('document.querySelector(".panel") :', document.querySelector('.panel'));
  }

  doBackgroundClose(e: MouseEvent) {
    let back = this.host.querySelector('div');
    if (this.host.shadowRoot) {
      back = this.host.shadowRoot.querySelector('div');
    }
    if (back === e.target) {
      this.close(e);
    }
  }

  render() {
    return (
      <Host>
        <div
          class="modal"
          part="modal"
          onClick={(e) => this.doBackgroundClose(e)}
          style={{ overflowY: 'scroll', display: this.isOpen ? 'block' : 'none' }}
        >
          <slot name="top"></slot>
          <div part="modal-content centered-modal-content" class="modal-content centered-modal-content">
            <slot></slot>
            {/* <span part="close" class="close" onClick={(e) => this.close(e)}>&times;</span> */}
            <slot name="body"></slot>
          </div>
        </div>
      </Host>
    );
  }

}
