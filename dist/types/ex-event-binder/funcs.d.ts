import { SourceBase, DestinationBase, EbEventSenderWrapper, EbEventReceiverWrapper, SourceDestinationOptions } from './core';
export declare class FakeClickSource extends SourceBase {
  constructor(sender: EbEventSenderWrapper, options: SourceDestinationOptions);
  getRawValueType: () => string;
  getValue: <EventValue>(_: string) => EventValue;
  syncValue: <EventValue>(_: string, __: EventValue) => void;
  getSender: <SenderType>(_: string) => SenderType;
  addListener: (_: (e: Event) => any) => void;
  removeListener: (_: (e: Event) => any) => void;
}
export declare class FakeNullDestination extends DestinationBase {
  value: boolean;
  constructor(receiver: EbEventReceiverWrapper, options: SourceDestinationOptions);
  getRawValueType: () => string;
  getValue: <EventValue>(_: string) => EventValue;
  changeValue: <EventValue>(valueType: string, value: EventValue) => void;
  watch: <EventValue>(_: (valueType: string, v: EventValue) => void) => void;
  unwatch: <EventValue>(_: (valueType: string, v: EventValue) => void) => void;
  getReceiver: <ReceiverType>(_: string) => ReceiverType;
}
