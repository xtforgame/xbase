import { EbEventReceiverWrapper, DestinationBase, SourceDestinationOptions } from '../../ex-event-binder';
export declare class NullDestination extends DestinationBase {
  cb: Function;
  constructor(receiver: EbEventReceiverWrapper, options: SourceDestinationOptions);
  getRawValueType: () => string;
  getValue: <EventValue>(_: string) => EventValue;
  changeValue: <EventValue>(_: string, __: EventValue) => void;
  watch: <EventValue>(cb: (valueType: string, v: EventValue) => void) => void;
  unwatch: <EventValue>(_: (valueType: string, v: EventValue) => void) => void;
  getReceiver: <ReceiverType>(_: string) => ReceiverType;
  callback: (_: Event) => void;
}
export declare class BoolDestination extends DestinationBase {
  cb: Function;
  constructor(receiver: EbEventReceiverWrapper, options: SourceDestinationOptions);
  getRawValueType: () => string;
  getValue: <EventValue>(_: string) => EventValue;
  changeValue: <EventValue>(_: string, value: EventValue) => void;
  watch: <EventValue>(cb: (valueType: string, v: EventValue) => void) => void;
  unwatch: <EventValue>(_: (valueType: string, v: EventValue) => void) => void;
  getReceiver: <ReceiverType>(_: string) => ReceiverType;
  callback: (_: Event) => void;
}
