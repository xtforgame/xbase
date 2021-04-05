import {
  SourceBase,
  DestinationBase,
  EbEventSenderWrapper,
  EbEventReceiverWrapper,
} from './core';

export class FakeClickSource extends SourceBase {
  component : any;
  elem: HTMLElement;

  constructor(sender: EbEventSenderWrapper, component: any, elem: HTMLElement) {
    super(sender);
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

  addListener = (_: (e : Event) => any) => {

  }
  removeListener = (_: (e : Event) => any) => {

  }
}


export class FakeNullDestination extends DestinationBase {
  component : any;
  elem: HTMLElement;

  value: boolean;

  constructor(receiver: EbEventReceiverWrapper, component: any, elem: HTMLElement) {
    super(receiver);
    this.component = component;
    this.elem = elem;
    this.value = false;
  }

  getRawValueType = () => 'null';

  getValue = <EventValue>(_: string) => {
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

  watch = <EventValue>(_ : (valueType: string, v: EventValue) => void) => {

  }
  unwatch = <EventValue>(_ : (valueType: string, v: EventValue) => void) => {

  }

  getReceiver = <ReceiverType>(_: string) => {
    return (<any>this.receiver) as ReceiverType;
  }
}
