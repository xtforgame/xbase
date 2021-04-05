import { Component, Method, State, Event, Element, Host, Prop, h } from '@stencil/core';
import { NullDestination, BoolDestination } from './eb';
import { EbEventReceiverWrapper, } from '../../ex-event-binder';
export class AzwcDialog {
  constructor() {
    this.isOpen = false;
    this.receiverWrapper = new EbEventReceiverWrapper();
    this.receiverWrapper.addDestination('toggle-dialog', new NullDestination(this.receiverWrapper, {
      getComponent: () => this,
      getElement: () => null,
    }));
    this.receiverWrapper.addDestination('dialog-state', new BoolDestination(this.receiverWrapper, {
      getComponent: () => this,
      getElement: () => null,
    }));
  }
  async getInst() {
    return this;
  }
  componentDidLoad() {
    // if (this.dialogid && !AzwcDialog.allInstances[this.dialogid]) {
    if (this.dialogid) {
      if (AzwcDialog.allInstances[this.dialogid]) {
        AzwcDialog.allInstances[this.dialogid].registeredId = undefined;
      }
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
  close(e) {
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
  doBackgroundClose(e) {
    let back = this.host.querySelector('div');
    if (this.host.shadowRoot) {
      back = this.host.shadowRoot.querySelector('div');
    }
    if (back === e.target) {
      this.close(e);
    }
  }
  render() {
    return (h(Host, null,
      h("div", { class: "modal", part: "modal", onClick: (e) => this.doBackgroundClose(e), style: { overflowY: 'scroll', display: this.isOpen ? 'block' : 'none' } },
        h("slot", { name: "top" }),
        h("div", { part: "modal-content centered-modal-content", class: "modal-content centered-modal-content" },
          h("slot", null),
          h("slot", { name: "body" })))));
  }
  static get is() { return "azwc-dialog"; }
  static get properties() { return {
    "dialogid": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "dialogid",
      "reflect": false
    }
  }; }
  static get states() { return {
    "isOpen": {}
  }; }
  static get events() { return [{
      "method": "customStateChange",
      "name": "customStateChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "getInst": {
      "complexType": {
        "signature": "() => Promise<this>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<this>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
}
AzwcDialog.allInstances = {};
AzwcDialog.open = (id) => {
  const inst = AzwcDialog.allInstances[id];
  if (inst) {
    inst.open();
  }
};
AzwcDialog.close = (id) => {
  const inst = AzwcDialog.allInstances[id];
  if (inst) {
    inst.close(null);
  }
};
