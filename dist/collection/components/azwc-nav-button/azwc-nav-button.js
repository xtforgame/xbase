import { Component, Element, Method, Event, Prop, State, Host, h } from '@stencil/core';
import { ClickSource, OnOffSource } from './eb';
import { EbEventSenderWrapper, } from '../../ex-event-binder';
export class AzwcNavButton {
  constructor() {
    this.isOpen = false;
    this.senderWrapper = new EbEventSenderWrapper();
    this.senderWrapper.addSource('click', new ClickSource(this.senderWrapper, this, null));
    this.senderWrapper.addSource('onoff', new OnOffSource(this.senderWrapper, this, null));
  }
  async getInst() {
    return this;
  }
  handleClick(_) {
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
    return (h(Host, null,
      h("a", { class: classes, onClick: (e) => this.handleClick(e) },
        h("div", { class: "navicon" }))));
  }
  static get is() { return "azwc-nav-button"; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'larr' | 'rarr' | 'uarr' | 'darr' | 'x' | 'plus' | ''",
        "resolved": "\"\" | \"darr\" | \"larr\" | \"plus\" | \"rarr\" | \"uarr\" | \"x\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false
    },
    "stayclosed": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "stayclosed",
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
AzwcNavButton.ClickSource = ClickSource;
