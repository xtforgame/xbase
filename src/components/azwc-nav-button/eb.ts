import {
  EbEventSenderWrapper,
} from '../../ex-event-binder';

export class ClickSource {
  sender : EbEventSenderWrapper;
  component : any;
  elem: HTMLElement;
  cb: Function;

  constructor(sender: EbEventSenderWrapper, component: any, elem: HTMLElement) {
    this.sender = sender;
    this.component = component;
    this.elem = elem;
  }

  getRawValueType = () => 'null';

  getValue = <EventValue>(_: string) => {
    return (null as EventValue);
  }

  getComponent = () => {
    return this.component;
  }

  getEventElement = () => {
    return this.elem;
  }

  syncValue = <EventValue>(_: string, __: EventValue) => {

  }
  getSender = <SenderType>(_: string) => {
    return (<any>this.sender) as SenderType;
  }

  addListener = (cb: (e : Event) => any) => {
    this.cb = cb;
    this.component.host.addEventListener('customStateChange', this.callback);
  }

  removeListener = (_: (e : Event) => any) => {
    this.cb = null;
    this.component.host.removeEventListener('customStateChange', this.callback);
  }

  // ================

  callback = (e : Event) => {
    if (this.cb) {
      this.cb(e);
    }
  }
}


export class OnOffSource {
  sender : EbEventSenderWrapper;
  component : any;
  elem: HTMLElement;
  cb: Function;

  constructor(sender: EbEventSenderWrapper, component: any, elem: HTMLElement) {
    this.sender = sender;
    this.component = component;
    this.elem = elem;
  }

  getRawValueType = () => 'boolean';

  getValue = <EventValue>(_: string) => {
    return (<any>this.component.isOpen) as EventValue;
  }

  getComponent = () => {
    return this.component;
  }

  getEventElement = () => {
    return this.elem;
  }

  syncValue = <EventValue>(_: string, v: EventValue) => {
    this.component.isOpen = v;
  }

  getSender = <SenderType>(_: string) => {
    return (<any>this.sender) as SenderType;
  }

  addListener = (cb: (e : Event) => any) => {
    this.cb = cb;
    this.component.host.addEventListener('customStateChange', this.callback);
  }

  removeListener = (_: (e : Event) => any) => {
    this.cb = null;
    this.component.host.removeEventListener('customStateChange', this.callback);
  }

  // ================

  callback = (e : Event) => {
    if (this.cb) {
      this.cb(e);
    }
  }
}
