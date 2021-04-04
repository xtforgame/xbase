import {
  EbEventSenderWrapper,
  EbEventReceiverWrapper,
} from './core';

export class FakeClickSource {
  sender : EbEventSenderWrapper;
  component : any;
  elem: HTMLElement;

  constructor(sender: EbEventSenderWrapper, component: any, elem: HTMLElement) {
    this.sender = sender;
    this.component = component;
    this.elem = elem;
  }

  getRawValueType = () => 'null';

  getValue = <EventValue>(type: string) => {
    return null;
  }

  getComponent = () => {
    return this.component;
  }

  getEventElement = () => {
    return this.elem;
  }

  syncValue = <EventValue>(type: string, v: EventValue) => {

  }
  getSender = <SenderType>(type: string) => {
    return (<any>this.sender) as SenderType;
  }

  addListener = (cb: (e : Event) => any) => {

  }
  removeListener = (cb: (e : Event) => any) => {

  }
}


export class FakeNullDestination {
  receiver : EbEventReceiverWrapper;
  component : any;
  elem: HTMLElement;

  value: boolean;

  constructor(receiver: EbEventReceiverWrapper, component: any, elem: HTMLElement) {
    this.receiver = receiver;
    this.component = component;
    this.elem = elem;
    this.value = false;
  }

  getRawValueType = () => 'null';

  getValue = <EventValue>(type: string) => {
    return (<any>this.value) as EventValue;
  }

  changeValue = <EventValue>(valueType: string, value: EventValue) => {
    console.log('changeValue :', valueType, value);
    this.value = <any>value;
  }

  getComponent = () => {
    return this.component;
  }

  getEventElement = () => {
    return this.elem;
  }

  // watch: <EventValue>(cb : (valueType: string, v: EventValue) => void) => void;
  syncValue = <EventValue>(valueType: string, cb : (valueType: string, v: EventValue) => void) => {

  }

  getReceiver = <ReceiverType>(type: string) => {
    return (<any>this.receiver) as ReceiverType;
  }
}
