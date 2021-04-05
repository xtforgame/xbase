import {
  EbEventReceiverWrapper,
  DestinationBase,
  SourceDestinationOptions,
} from '../../ex-event-binder';

export class NullDestination extends DestinationBase {
  cb: Function;

  constructor(receiver: EbEventReceiverWrapper, options: SourceDestinationOptions) {
    super(receiver, options);
  }

  getRawValueType = () => 'null';

  getValue = <EventValue>(_: string) => {
    return (null as EventValue);
  }

  changeValue = <EventValue>(_: string, __: EventValue) => {
    if (!this.getComponent().isOpen) {
      this.getComponent().open();
    } else {
      this.getComponent().close();
    }
  }

  watch = <EventValue>(cb : (valueType: string, v: EventValue) => void) => {
    this.cb = cb;
    this.getComponent().host.addEventListener('customStateChange', this.callback);
  }
  unwatch = <EventValue>(_: (valueType: string, v: EventValue) => void) => {
    this.cb = null;
    this.getComponent().host.removeEventListener('customStateChange', this.callback);
  }

  getReceiver = <ReceiverType>(_: string) => {
    return (<any>this.receiver) as ReceiverType;
  }

  // ================

  callback = (_: Event) => {
    const valueType = this.getRawValueType();
    if (this.cb) {
      this.cb(valueType, this.getValue(valueType));
    }
  }
}
export class BoolDestination extends DestinationBase {
  cb: Function;

  constructor(receiver: EbEventReceiverWrapper, options: SourceDestinationOptions) {
    super(receiver, options);
  }

  getRawValueType = () => 'boolean';

  getValue = <EventValue>(_: string) => {
    return (<any>this.getComponent().isOpen) as EventValue;
  }

  changeValue = <EventValue>(_: string, value: EventValue) => {
    if (this.getComponent().isOpen !== <any>value) {
      if (value) {
        this.getComponent().open();
      } else {
        this.getComponent().close();
      }
    }
    // this.getComponent().isOpen = <any>value;
  }

  watch = <EventValue>(cb : (valueType: string, v: EventValue) => void) => {
    this.cb = cb;
    this.getComponent().host.addEventListener('customStateChange', this.callback);
  }
  unwatch = <EventValue>(_ : (valueType: string, v: EventValue) => void) => {
    this.cb = null;
    this.getComponent().host.removeEventListener('customStateChange', this.callback);
  }

  getReceiver = <ReceiverType>(_: string) => {
    return (<any>this.receiver) as ReceiverType;
  }

  // ================

  callback = (_ : Event) => {
    const valueType = this.getRawValueType();
    if (this.cb) {
      this.cb(valueType, this.getValue(valueType));
    }
  }
}
