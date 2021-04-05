import { EbEventSenderWrapper, EbEventReceiverWrapper } from './core';
export declare class FakeClickSource {
  sender: EbEventSenderWrapper;
  component: any;
  elem: HTMLElement;
  constructor(sender: EbEventSenderWrapper, component: any, elem: HTMLElement);
  getRawValueType: () => string;
  getValue: <EventValue>(type: string) => any;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  syncValue: <EventValue>(type: string, v: EventValue) => void;
  getSender: <SenderType>(type: string) => SenderType;
  addListener: (cb: (e: Event) => any) => void;
  removeListener: (cb: (e: Event) => any) => void;
}
export declare class FakeNullDestination {
  receiver: EbEventReceiverWrapper;
  component: any;
  elem: HTMLElement;
  value: boolean;
  constructor(receiver: EbEventReceiverWrapper, component: any, elem: HTMLElement);
  getRawValueType: () => string;
  getValue: <EventValue>(type: string) => EventValue;
  changeValue: <EventValue>(valueType: string, value: EventValue) => void;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  watch: <EventValue>(cb: (valueType: string, v: EventValue) => void) => void;
  unwatch: <EventValue>(cb: (valueType: string, v: EventValue) => void) => void;
  getReceiver: <ReceiverType>(type: string) => ReceiverType;
}
