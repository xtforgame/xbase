export type EbEventSource = {
  getRawValueType: () => string;
  getValue: <EventValue>(valueType: string) => EventValue;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  syncValue: <EventValue>(valueType: string, v: EventValue) => void;
  getSender: <SenderType>(valueType: string) => SenderType;
};

export type EbEventDestination = {
  getValue: <EventValue>(valueType: string) => EventValue;
  getComponent: () => any;
  getEventElement: () => HTMLElement;
  watch: <EventValue>(cb : (valueType: string, v: EventValue) => void) => void;
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
  sourceEventName: string;
  source: EbEventSource;
  destinationEventName: string;
  destination: EbEventDestination;
  valueType: string;
  callback : EbEventSenderCallback<NativeEventType, EventValue, EbEventType>;
  options: any;

  constructor(
    sourceEventName: string,
    source: EbEventSource,
    destinationEventName: string,
    destination: EbEventDestination,
    valueType: string,
    callback : EbEventSenderCallback<NativeEventType, EventValue, EbEventType>,
    options: any,
  ) {
    this.sourceEventName = sourceEventName;
    this.source = source;
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

  addLink<
    NativeEventType extends Event = Event,
    EventValue = any,
    EbEventType extends EbEvent<NativeEventType, EventValue> = EbEvent<NativeEventType, EventValue>,
  >(
    sourceEventName: string,
    destinationEventName: string,
    destination: EbEventDestination,
    valueType: string,
    cb : EbEventSenderCallback<NativeEventType, EventValue, EbEventType>,
    options: any,
  ) : EbEventLink<NativeEventType, EventValue, EbEventType> {
    if (!this.sources[sourceEventName]) {
      return null;
    }
    const links = this.eventLinksMap[sourceEventName] = this.eventLinksMap[sourceEventName] || [];
    const link = new EbEventLink<NativeEventType, EventValue>(
      sourceEventName, this.sources[sourceEventName], destinationEventName, destination, valueType, cb, options
    );
    links.push(link);
    return link;
  }

  removeLink<
    NativeEventType extends Event = Event,
    EventValue = any,
    EbEventType extends EbEvent<NativeEventType, EventValue> = EbEvent<NativeEventType, EventValue>,
  >(sourceEventName: string, link : EbEventLink<NativeEventType, EventValue, EbEventType>) {
    const links = this.eventLinksMap[sourceEventName] = this.eventLinksMap[sourceEventName] || [];
    const l = links.indexOf(link);
    if (l !== -1) {
      links.splice(l, 1);
    }
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

  addLink<
    NativeEventType extends Event = Event,
    EventValue = any,
    EbEventType extends EbEvent<NativeEventType, EventValue> = EbEvent<NativeEventType, EventValue>,
  >(
    sourceEventName: string,
    source: EbEventSource,
    destinationEventName: string,
    valueType: string,
    cb : EbEventSenderCallback<NativeEventType, EventValue, EbEventType>,
    options: any,
  ) : EbEventLink<NativeEventType, EventValue, EbEventType> {
    if (!this.destinations[destinationEventName]) {
      return null;
    }
    const links = this.eventLinksMap[destinationEventName] = this.eventLinksMap[destinationEventName] || {};
    const link = new EbEventLink<NativeEventType, EventValue, EbEventType>(
      sourceEventName, source, destinationEventName, this.destinations[destinationEventName], valueType, cb, options
    );
    links[sourceEventName] = link;
    return link;
  }

  removeLink(sourceEventName: string, destinationEventName: string) {
    const links = this.eventLinksMap[destinationEventName] = this.eventLinksMap[destinationEventName] || {};
    delete links[sourceEventName];
  }
}

