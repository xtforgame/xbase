import { DestinationBase, } from '../../ex-event-binder';
export class NullDestination extends DestinationBase {
  constructor(receiver, component, elem) {
    super(receiver);
    this.getRawValueType = () => 'null';
    this.getValue = (_) => {
      return null;
    };
    this.changeValue = (_, __) => {
      if (!this.component.isOpen) {
        this.component.open();
      }
      else {
        this.component.close();
      }
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
    this.unwatch = (_) => {
      this.cb = null;
      this.component.host.removeEventListener('customStateChange', this.callback);
    };
    this.getReceiver = (_) => {
      return this.receiver;
    };
    // ================
    this.callback = (_) => {
      const valueType = this.getRawValueType();
      if (this.cb) {
        this.cb(valueType, this.getValue(valueType));
      }
    };
    this.component = component;
    this.elem = elem;
  }
}
export class BoolDestination extends DestinationBase {
  constructor(receiver, component, elem) {
    super(receiver);
    this.getRawValueType = () => 'boolean';
    this.getValue = (_) => {
      return this.component.isOpen;
    };
    this.changeValue = (_, value) => {
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
    this.unwatch = (_) => {
      this.cb = null;
      this.component.host.removeEventListener('customStateChange', this.callback);
    };
    this.getReceiver = (_) => {
      return this.receiver;
    };
    // ================
    this.callback = (_) => {
      const valueType = this.getRawValueType();
      if (this.cb) {
        this.cb(valueType, this.getValue(valueType));
      }
    };
    this.component = component;
    this.elem = elem;
  }
}
