export declare type EbEventSource = {
  getRawValueType: () => string;
  getValue: <EventValue>(valueType: string) => EventValue;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  syncValue: <EventValue>(valueType: string, v: EventValue) => void;
  getSender: <SenderType>(valueType: string) => SenderType;
  addListener: (cb: (e: Event) => any) => any;
  removeListener: (cb: (e: Event) => any) => any;
};
export declare type EbEventDestination = {
  getRawValueType: () => string;
  getValue: <EventValue>(valueType: string) => EventValue;
  changeValue: <EventValue>(valueType: string, value: EventValue) => any;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  watch: <EventValue>(cb: (valueType: string, v: EventValue) => void) => void;
  unwatch: <EventValue>(cb: (valueType: string, v: EventValue) => void) => void;
  getReceiver: <ReceiverType>(valueType: string) => ReceiverType;
};
export declare type EbEvent<NativeEventType extends Event = Event, EventValue = any> = {
  nativeEvent: NativeEventType;
  valueType: string;
  value: EventValue;
  target: EbEventSource;
};
export declare type EbEventSenderCallback<NativeEventType extends Event = Event, EventValue = any, EbEventType extends EbEvent<NativeEventType, EventValue> = EbEvent<NativeEventType, EventValue>> = (exEvent: EbEventType) => void;
export declare class EbEventLink<NativeEventType extends Event = Event, EventValue = any, EbEventType extends EbEvent<NativeEventType, EventValue> = EbEvent<NativeEventType, EventValue>> {
  senderId: string;
  sourceEventName: string;
  source: EbEventSource;
  receiverId: string;
  destinationEventName: string;
  destination: EbEventDestination;
  valueType: string;
  callback: EbEventSenderCallback<NativeEventType, EventValue, EbEventType>;
  options: any;
  constructor(senderId: string, sourceEventName: string, source: EbEventSource, receiverId: string, destinationEventName: string, destination: EbEventDestination, valueType: string, callback: EbEventSenderCallback<NativeEventType, EventValue, EbEventType>, options: any);
}
export declare class EbEventSenderWrapper {
  sources: {
    [eventType: string]: EbEventSource;
  };
  eventLinksMap: {
    [eventType: string]: EbEventLink[];
  };
  constructor();
  addSource(id: string, source: EbEventSource): void;
  removeSource(id: string): void;
}
export declare class EbEventReceiverWrapper {
  destinations: {
    [eventType: string]: EbEventDestination;
  };
  eventLinksMap: {
    [eventType: string]: {
      [eventType: string]: EbEventLink;
    };
  };
  constructor();
  addDestination(id: string, destination: EbEventDestination): void;
  removeDestination(id: string): void;
}
export declare class SourceBase {
  sender: EbEventSenderWrapper;
  constructor(sender: EbEventSenderWrapper);
}
export declare class DestinationBase {
  receiver: EbEventReceiverWrapper;
  constructor(receiver: EbEventReceiverWrapper);
}
