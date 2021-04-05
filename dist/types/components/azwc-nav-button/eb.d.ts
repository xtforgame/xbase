import { Event } from '../../stencil-public-runtime';
import { EbEventSenderWrapper } from '../../ex-event-binder';
export declare class ClickSource {
  sender: EbEventSenderWrapper;
  component: any;
  elem: HTMLElement;
  cb: Function;
  constructor(sender: EbEventSenderWrapper, component: any, elem: HTMLElement);
  getRawValueType: () => string;
  getValue: <EventValue>(type: string) => any;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  syncValue: <EventValue>(type: string, v: EventValue) => void;
  getSender: <SenderType>(type: string) => SenderType;
  addListener: (cb: (e: Event) => any) => void;
  removeListener: (cb: (e: Event) => any) => void;
  callback: (e: Event) => void;
}
export declare class OnOffSource {
  sender: EbEventSenderWrapper;
  component: any;
  elem: HTMLElement;
  cb: Function;
  constructor(sender: EbEventSenderWrapper, component: any, elem: HTMLElement);
  getRawValueType: () => string;
  getValue: <EventValue>(type: string) => any;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  syncValue: <EventValue>(type: string, v: EventValue) => void;
  getSender: <SenderType>(type: string) => SenderType;
  addListener: (cb: (e: Event) => any) => void;
  removeListener: (cb: (e: Event) => any) => void;
  callback: (e: Event) => void;
}
