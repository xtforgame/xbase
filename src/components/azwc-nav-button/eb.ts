import {
  EbEventSenderWrapper,
  SourceBase,
  SourceDestinationOptions,
} from '../../ex-event-binder';

export class ClickSource extends SourceBase {
  cb: Function;

  constructor(sender: EbEventSenderWrapper, options: SourceDestinationOptions) {
    super(sender, options);
  }

  getRawValueType = () => 'null';

  getValue = <EventValue>(_: string) => {
    return (null as EventValue);
  }

  syncValue = <EventValue>(_: string, __: EventValue) => {

  }
  getSender = <SenderType>(_: string) => {
    return (<any>this.sender) as SenderType;
  }

  addListener = (cb: (e : Event) => any) => {
    this.cb = cb;
    this.getComponent().host.addEventListener('customStateChange', this.callback);
  }

  removeListener = (_: (e : Event) => any) => {
    this.cb = null;
    this.getComponent().host.removeEventListener('customStateChange', this.callback);
  }

  // ================

  callback = (e : Event) => {
    if (this.cb) {
      this.cb(e);
    }
  }
}


export class OnOffSource extends SourceBase {
  cb: Function;

  constructor(sender: EbEventSenderWrapper, options: SourceDestinationOptions) {
    super(sender, options);
  }

  getRawValueType = () => 'boolean';

  getValue = <EventValue>(_: string) => {
    return (<any>this.getComponent().isOpen) as EventValue;
  }

  syncValue = <EventValue>(_: string, v: EventValue) => {
    this.getComponent().isOpen = v;
  }

  getSender = <SenderType>(_: string) => {
    return (<any>this.sender) as SenderType;
  }

  addListener = (cb: (e : Event) => any) => {
    this.cb = cb;
    this.getComponent().host.addEventListener('customStateChange', this.callback);
  }

  removeListener = (_: (e : Event) => any) => {
    this.cb = null;
    this.getComponent().host.removeEventListener('customStateChange', this.callback);
  }

  // ================

  callback = (e : Event) => {
    if (this.cb) {
      this.cb(e);
    }
  }
}
