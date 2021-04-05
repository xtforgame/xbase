export type EbEventSource = {
  getRawValueType: () => string;
  getValue: <EventValue>(valueType: string) => EventValue;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  syncValue: <EventValue>(valueType: string, v: EventValue) => void;
  getSender: <SenderType>(valueType: string) => SenderType;
  addListener: (cb: (e : Event) => any) => any;
  removeListener: (cb: (e : Event) => any) => any;
};

export type EbEventDestination = {
  getRawValueType: () => string;
  getValue: <EventValue>(valueType: string) => EventValue;
  changeValue: <EventValue>(valueType: string, value: EventValue) => any;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  watch: <EventValue>(cb : (valueType: string, v: EventValue) => void) => void;
  unwatch: <EventValue>(cb : (valueType: string, v: EventValue) => void) => void;
  getReceiver: <ReceiverType>(valueType: string) => ReceiverType;
};

export type EbEvent<
  NativeEventType extends Event = Event,
  EventValue = any,
> = {
  nativeEvent: NativeEventType;
  valueType: string;
  value: EventValue;
  target: EbEventSource;
};

export type EbEventSenderCallback<
  NativeEventType extends Event = Event,
  EventValue = any,
  EbEventType extends EbEvent<NativeEventType, EventValue> = EbEvent<NativeEventType, EventValue>,
> = (exEvent: EbEventType) => void;

export class EbEventLink<
  NativeEventType extends Event = Event,
  EventValue = any,
  EbEventType extends EbEvent<NativeEventType, EventValue> = EbEvent<NativeEventType, EventValue>,
> {
  senderId: string;
  sourceEventName: string;
  source: EbEventSource;
  receiverId: string;
  destinationEventName: string;
  destination: EbEventDestination;
  valueType: string;
  callback : EbEventSenderCallback<NativeEventType, EventValue, EbEventType>;
  options: any;

  constructor(
    senderId: string,
    sourceEventName: string,
    source: EbEventSource,
    receiverId: string,
    destinationEventName: string,
    destination: EbEventDestination,
    valueType: string,
    callback : EbEventSenderCallback<NativeEventType, EventValue, EbEventType>,
    options: any,
  ) {
    this.senderId = senderId;
    this.sourceEventName = sourceEventName;
    this.source = source;
    this.receiverId = receiverId;
    this.destinationEventName = destinationEventName;
    this.destination = destination;
    this.valueType = valueType;
    this.callback = callback;
    this.options = options;
  }
}

export class EbEventSenderWrapper {
  sources: { [eventType: string]: EbEventSource };
  eventLinksMap: { [eventType: string]: EbEventLink[] };

  constructor() {
    this.sources = {};
    this.eventLinksMap = {};
  }

  addSource(id: string, source: EbEventSource) {
    this.sources[id] = source;
  }

  removeSource(id: string) {
    delete this.sources[id];
  }
}

export class EbEventReceiverWrapper {
  destinations: { [eventType: string]: EbEventDestination };
  eventLinksMap: { [eventType: string]: { [eventType: string]: EbEventLink } };

  constructor() {
    this.destinations = {};
    this.eventLinksMap = {};
  }

  addDestination(id: string, destination: EbEventDestination) {
    this.destinations[id] = destination;
  }

  removeDestination(id: string) {
    delete this.destinations[id];
  }
}

// =======================

export type SourceDestinationOptions = {
  getComponent?: () => any;
  getElement?: () => any;
}

export class SourceBase {
  sender : EbEventSenderWrapper;
  options: SourceDestinationOptions

  constructor(sender: EbEventSenderWrapper, options: SourceDestinationOptions) {
    this.sender = sender;
    this.options = options || {};
    this.options.getComponent = this.options.getComponent || (() => null);
    this.options.getElement = this.options.getElement || (() => null);
  }

  getComponent = () => {
    return this.options.getComponent!();
  }

  getEventElement = () => {
    return this.options.getElement!();
  }
}

export type SourceEventInfoMapType = {
  [s : string]: {
    Class: { new(sender: EbEventSenderWrapper, options: SourceDestinationOptions): SourceBase },
  }
};

export class DestinationBase {
  receiver : EbEventReceiverWrapper;
  options: SourceDestinationOptions

  constructor(receiver: EbEventReceiverWrapper, options: SourceDestinationOptions) {
    this.receiver = receiver;
    this.options = options || {};
    this.options.getComponent = this.options.getComponent || (() => null);
    this.options.getElement = this.options.getElement || (() => null);
  }

  getComponent = () => {
    return this.options.getComponent!();
  }

  getEventElement = () => {
    return this.options.getElement!();
  }
}

export type DestinationInfoMapType = {
  [s : string]: {
    Class: { new(receiver: EbEventReceiverWrapper, options: SourceDestinationOptions): DestinationBase },
  }
};
