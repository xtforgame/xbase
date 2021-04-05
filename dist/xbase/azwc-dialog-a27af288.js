import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-5ee21963.js';
import { a as EbEventReceiverWrapper } from './index-49cf4a50.js';

class BoolDestination {
  constructor(receiver, component, elem) {
    this.getRawValueType = () => 'boolean';
    this.getValue = (type) => {
      return this.component.isOpen;
    };
    this.changeValue = (valueType, value) => {
      if (this.component.isOpen !== value) {
        if (value) {
          this.component.open();
        }
        else {
          this.component.close();
        }
      }
      // this.component.isOpen = <any>value;
    };
    this.getComponent = () => {
      return this.component;
    };
    this.getEventElement = () => {
      return this.elem;
    };
    this.watch = (cb) => {
      this.cb = cb;
      this.component.host.addEventListener('customStateChange', this.callback);
    };
    this.unwatch = (cb) => {
      this.cb = null;
      this.component.host.removeEventListener('customStateChange', this.callback);
    };
    this.getReceiver = (type) => {
      return this.receiver;
    };
    // ================
    this.callback = (e) => {
      const valueType = this.getRawValueType();
      if (this.cb) {
        this.cb(valueType, this.getValue(valueType));
      }
    };
    this.receiver = receiver;
    this.component = component;
    this.elem = elem;
  }
}

const AzwcDialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.customStateChange = createEvent(this, "customStateChange", 7);
    this.isOpen = false;
    this.receiverWrapper = new EbEventReceiverWrapper();
    this.receiverWrapper.addDestination('dialog-state', new BoolDestination(this.receiverWrapper, this, null));
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
    return (h(Host, null, h("div", { class: "modal", part: "modal", onClick: (e) => this.doBackgroundClose(e), style: { overflowY: 'scroll', display: this.isOpen ? 'block' : 'none' } }, h("slot", { name: "top" }), h("div", { part: "modal-content centered-modal-content", class: "modal-content centered-modal-content" }, h("slot", null), h("slot", { name: "body" })))));
  }
  get host() { return getElement(this); }
};
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

export { AzwcDialog as A };
