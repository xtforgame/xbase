import { EbEventSenderWrapper } from '../../ex-event-binder';
export declare class ClickSource {
  sender: EbEventSenderWrapper;
  component: any;
  elem: HTMLElement;
  cb: Function;
  constructor(sender: EbEventSenderWrapper, component: any, elem: HTMLElement);
  getRawValueType: () => string;
  getValue: <EventValue>(_: string) => EventValue;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  syncValue: <EventValue>(_: string, __: EventValue) => void;
  getSender: <SenderType>(_: string) => SenderType;
  addListener: (cb: (e: Event) => any) => void;
  removeListener: (_: (e: Event) => any) => void;
  callback: (e: Event) => void;
}
export declare class OnOffSource {
  sender: EbEventSenderWrapper;
  component: any;
  elem: HTMLElement;
  cb: Function;
  constructor(sender: EbEventSenderWrapper, component: any, elem: HTMLElement);
  getRawValueType: () => string;
  getValue: <EventValue>(_: string) => EventValue;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  syncValue: <EventValue>(_: string, v: EventValue) => void;
  getSender: <SenderType>(_: string) => SenderType;
  addListener: (cb: (e: Event) => any) => void;
  removeListener: (_: (e: Event) => any) => void;
  callback: (e: Event) => void;
}
