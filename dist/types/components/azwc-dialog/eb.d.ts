import { Event } from '../../stencil-public-runtime';
import { EbEventReceiverWrapper } from '../../ex-event-binder';
export declare class NullDestination {
  receiver: EbEventReceiverWrapper;
  component: any;
  elem: HTMLElement;
  cb: Function;
  constructor(receiver: EbEventReceiverWrapper, component: any, elem: HTMLElement);
  getRawValueType: () => string;
  getValue: <EventValue>(type: string) => EventValue;
  changeValue: <EventValue>(valueType: string, value: EventValue) => void;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  watch: <EventValue>(cb: (valueType: string, v: EventValue) => void) => void;
  unwatch: <EventValue>(cb: (valueType: string, v: EventValue) => void) => void;
  getReceiver: <ReceiverType>(type: string) => ReceiverType;
  callback: (e: Event) => void;
}
export declare class BoolDestination {
  receiver: EbEventReceiverWrapper;
  component: any;
  elem: HTMLElement;
  cb: Function;
  constructor(receiver: EbEventReceiverWrapper, component: any, elem: HTMLElement);
  getRawValueType: () => string;
  getValue: <EventValue>(type: string) => EventValue;
  changeValue: <EventValue>(valueType: string, value: EventValue) => void;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  watch: <EventValue>(cb: (valueType: string, v: EventValue) => void) => void;
  unwatch: <EventValue>(cb: (valueType: string, v: EventValue) => void) => void;
  getReceiver: <ReceiverType>(type: string) => ReceiverType;
  callback: (e: Event) => void;
}
