import { DestinationBase, } from '../../ex-event-binder';
export class NullDestination extends DestinationBase {
  constructor(receiver, options) {
    super(receiver, options);
    this.getRawValueType = () => 'null';
    this.getValue = (_) => {
      return null;
    };
    this.changeValue = (_, __) => {
      if (!this.getComponent().isOpen) {
        this.getComponent().open();
      }
      else {
        this.getComponent().close();
      }
    };
    this.watch = (cb) => {
      this.cb = cb;
      this.getComponent().host.addEventListener('customStateChange', this.callback);
    };
    this.unwatch = (_) => {
      this.cb = null;
      this.getComponent().host.removeEventListener('customStateChange', this.callback);
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
  }
}
export class BoolDestination extends DestinationBase {
  constructor(receiver, options) {
    super(receiver, options);
    this.getRawValueType = () => 'boolean';
    this.getValue = (_) => {
      return this.getComponent().isOpen;
    };
    this.changeValue = (_, value) => {
      if (this.getComponent().isOpen !== value) {
        if (value) {
          this.getComponent().open();
        }
        else {
          this.getComponent().close();
        }
      }
      // this.getComponent().isOpen = <any>value;
    };
    this.watch = (cb) => {
      this.cb = cb;
      this.getComponent().host.addEventListener('customStateChange', this.callback);
    };
    this.unwatch = (_) => {
      this.cb = null;
      this.getComponent().host.removeEventListener('customStateChange', this.callback);
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
  }
}
