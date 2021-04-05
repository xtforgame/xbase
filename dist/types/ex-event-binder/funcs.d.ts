import { EbEventSenderWrapper, EbEventReceiverWrapper } from './core';
export declare class FakeClickSource {
  sender: EbEventSenderWrapper;
  component: any;
  elem: HTMLElement;
  constructor(sender: EbEventSenderWrapper, component: any, elem: HTMLElement);
  getRawValueType: () => string;
  getValue: <EventValue>(_: string) => EventValue;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  syncValue: <EventValue>(_: string, __: EventValue) => void;
  getSender: <SenderType>(_: string) => SenderType;
  addListener: (_: (e: Event) => any) => void;
  removeListener: (_: (e: Event) => any) => void;
}
export declare class FakeNullDestination {
  receiver: EbEventReceiverWrapper;
  component: any;
  elem: HTMLElement;
  value: boolean;
  constructor(receiver: EbEventReceiverWrapper, component: any, elem: HTMLElement);
  getRawValueType: () => string;
  getValue: <EventValue>(_: string) => EventValue;
  changeValue: <EventValue>(valueType: string, value: EventValue) => void;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  watch: <EventValue>(_: (valueType: string, v: EventValue) => void) => void;
  unwatch: <EventValue>(_: (valueType: string, v: EventValue) => void) => void;
  getReceiver: <ReceiverType>(_: string) => ReceiverType;
}
