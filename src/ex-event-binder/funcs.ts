import {
  SourceBase,
  DestinationBase,
  EbEventSenderWrapper,
  EbEventReceiverWrapper,
  SourceDestinationOptions,
} from './core';

export class FakeClickSource extends SourceBase {
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

  addListener = (_: (e : Event) => any) => {

  }
  removeListener = (_: (e : Event) => any) => {

  }
}


export class FakeNullDestination extends DestinationBase {
  value: boolean;

  constructor(receiver: EbEventReceiverWrapper, options: SourceDestinationOptions) {
    super(receiver, options);
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

  watch = <EventValue>(_ : (valueType: string, v: EventValue) => void) => {

  }
  unwatch = <EventValue>(_ : (valueType: string, v: EventValue) => void) => {

  }

  getReceiver = <ReceiverType>(_: string) => {
    return (<any>this.receiver) as ReceiverType;
  }
}
