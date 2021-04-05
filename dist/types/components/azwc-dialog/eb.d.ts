import { EbEventReceiverWrapper, DestinationBase } from '../../ex-event-binder';
export declare class NullDestination extends DestinationBase {
  component: any;
  elem: HTMLElement;
  cb: Function;
  constructor(receiver: EbEventReceiverWrapper, component: any, elem: HTMLElement);
  getRawValueType: () => string;
  getValue: <EventValue>(_: string) => EventValue;
  changeValue: <EventValue>(_: string, __: EventValue) => void;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  watch: <EventValue>(cb: (valueType: string, v: EventValue) => void) => void;
  unwatch: <EventValue>(_: (valueType: string, v: EventValue) => void) => void;
  getReceiver: <ReceiverType>(_: string) => ReceiverType;
  callback: (_: Event) => void;
}
export declare class BoolDestination extends DestinationBase {
  component: any;
  elem: HTMLElement;
  cb: Function;
  constructor(receiver: EbEventReceiverWrapper, component: any, elem: HTMLElement);
  getRawValueType: () => string;
  getValue: <EventValue>(_: string) => EventValue;
  changeValue: <EventValue>(_: string, value: EventValue) => void;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  watch: <EventValue>(cb: (valueType: string, v: EventValue) => void) => void;
  unwatch: <EventValue>(_: (valueType: string, v: EventValue) => void) => void;
  getReceiver: <ReceiverType>(_: string) => ReceiverType;
  callback: (_: Event) => void;
}
