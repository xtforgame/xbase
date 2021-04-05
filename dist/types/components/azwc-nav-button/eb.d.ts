import { EbEventSenderWrapper, SourceBase, SourceDestinationOptions } from '../../ex-event-binder';
export declare class ClickSource extends SourceBase {
  cb: Function;
  constructor(sender: EbEventSenderWrapper, options: SourceDestinationOptions);
  getRawValueType: () => string;
  getValue: <EventValue>(_: string) => EventValue;
  syncValue: <EventValue>(_: string, __: EventValue) => void;
  getSender: <SenderType>(_: string) => SenderType;
  addListener: (cb: (e: Event) => any) => void;
  removeListener: (_: (e: Event) => any) => void;
  callback: (e: Event) => void;
}
export declare class OnOffSource extends SourceBase {
  cb: Function;
  constructor(sender: EbEventSenderWrapper, options: SourceDestinationOptions);
  getRawValueType: () => string;
  getValue: <EventValue>(_: string) => EventValue;
  syncValue: <EventValue>(_: string, v: EventValue) => void;
  getSender: <SenderType>(_: string) => SenderType;
  addListener: (cb: (e: Event) => any) => void;
  removeListener: (_: (e: Event) => any) => void;
  callback: (e: Event) => void;
}
