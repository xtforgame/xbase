import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-5ee21963.js';
import { E as EbEventSenderWrapper } from './index-49cf4a50.js';

class ClickSource {
  constructor(sender, component, elem) {
    this.getRawValueType = () => 'null';
    this.getValue = (type) => {
      return null;
    };
    this.getComponent = () => {
      return this.component;
    };
    this.getEventElement = () => {
      return this.elem;
    };
    this.syncValue = (type, v) => {
    };
    this.getSender = (type) => {
      return this.sender;
    };
    this.addListener = (cb) => {
      this.cb = cb;
      this.component.host.addEventListener('customStateChange', this.callback);
    };
    this.removeListener = (cb) => {
      this.cb = null;
      this.component.host.removeEventListener('customStateChange', this.callback);
    };
    // ================
    this.callback = (e) => {
      if (this.cb) {
        this.cb(e);
      }
    };
    this.sender = sender;
    this.component = component;
    this.elem = elem;
  }
}
class OnOffSource {
  constructor(sender, component, elem) {
    this.getRawValueType = () => 'boolean';
    this.getValue = (type) => {
      return this.component.isOpen;
    };
    this.getComponent = () => {
      return this.component;
    };
    this.getEventElement = () => {
      return this.elem;
    };
    this.syncValue = (type, v) => {
      this.component.isOpen = v;
    };
    this.getSender = (type) => {
      return this.sender;
    };
    this.addListener = (cb) => {
      this.cb = cb;
      this.component.host.addEventListener('customStateChange', this.callback);
    };
    this.removeListener = (cb) => {
      this.cb = null;
      this.component.host.removeEventListener('customStateChange', this.callback);
    };
    // ================
    this.callback = (e) => {
      if (this.cb) {
        this.cb(e);
      }
    };
    this.sender = sender;
    this.component = component;
    this.elem = elem;
  }
}

const AzwcNavButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.customStateChange = createEvent(this, "customStateChange", 7);
    this.isOpen = false;
    this.senderWrapper = new EbEventSenderWrapper();
    this.senderWrapper.addSource('click', new ClickSource(this.senderWrapper, this, null));
    this.senderWrapper.addSource('onoff', new OnOffSource(this.senderWrapper, this, null));
  }
  async getInst() {
    return this;
  }
  handleClick(e) {
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
    return (h(Host, null, h("a", { class: classes, onClick: (e) => this.handleClick(e) }, h("div", { class: "navicon" }))));
  }
  get host() { return getElement(this); }
};
AzwcNavButton.ClickSource = ClickSource;

export { AzwcNavButton as A };
