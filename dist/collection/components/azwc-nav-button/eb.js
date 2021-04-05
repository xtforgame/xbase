import { SourceBase, } from '../../ex-event-binder';
export class ClickSource extends SourceBase {
  constructor(sender, component, elem) {
    super(sender);
    this.getRawValueType = () => 'null';
    this.getValue = (_) => {
      return null;
    };
    this.getComponent = () => {
      return this.component;
    };
    this.getEventElement = () => {
      return this.elem;
    };
    this.syncValue = (_, __) => {
    };
    this.getSender = (_) => {
      return this.sender;
    };
    this.addListener = (cb) => {
      this.cb = cb;
      this.component.host.addEventListener('customStateChange', this.callback);
    };
    this.removeListener = (_) => {
      this.cb = null;
      this.component.host.removeEventListener('customStateChange', this.callback);
    };
    // ================
    this.callback = (e) => {
      if (this.cb) {
        this.cb(e);
      }
    };
    this.component = component;
    this.elem = elem;
  }
}
export class OnOffSource {
  constructor(sender, component, elem) {
    this.getRawValueType = () => 'boolean';
    this.getValue = (_) => {
      return this.component.isOpen;
    };
    this.getComponent = () => {
      return this.component;
    };
    this.getEventElement = () => {
      return this.elem;
    };
    this.syncValue = (_, v) => {
      this.component.isOpen = v;
    };
    this.getSender = (_) => {
      return this.sender;
    };
    this.addListener = (cb) => {
      this.cb = cb;
      this.component.host.addEventListener('customStateChange', this.callback);
    };
    this.removeListener = (_) => {
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
