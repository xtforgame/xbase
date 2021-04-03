export type EbComponentWrapper = {
  getComponent: () => any;
  getEventElement: (type: string) => HTMLElement;
}

export type EbEventSource = {
  getValue: <EventValue>(type: string) => EventValue;
  getWrapper: () => EbComponentWrapper;
  syncValue: <EventValue>(type: string, v: EventValue) => void;
  getSender: <SenderType>(type: string) => SenderType;
};

export type EbEventDestination = {
  getValue: <EventValue>(type: string) => EventValue;
  getWrapper: () => EbComponentWrapper;
  watch: <EventValue>(cb : (type: string, v: EventValue) => void) => void;
  getReceiver: <ReceiverType>(type: string) => ReceiverType;
};

export type EbEvent<
  NativeEventType extends Event = Event,
  EventValue = any,
> = {
  nativeEvent: NativeEventType;
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
  callback : EbEventSenderCallback<NativeEventType, EventValue, EbEventType>;
  options: any;

  constructor(
    sourceEventName: string,
    source: EbEventSource,
    destinationEventName: string,
    destination: EbEventDestination,
    callback : EbEventSenderCallback<NativeEventType, EventValue, EbEventType>,
    options: any,
  ) {
    this.sourceEventName = sourceEventName;
    this.source = source;
    this.destinationEventName = destinationEventName;
    this.destination = destination;
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

  addLink<
    NativeEventType extends Event = Event,
    EventValue = any,
    EbEventType extends EbEvent<NativeEventType, EventValue> = EbEvent<NativeEventType, EventValue>,
  >(
    sourceEventName: string,
    destinationEventName: string,
    destination: EbEventDestination,
    cb : EbEventSenderCallback<NativeEventType, EventValue, EbEventType>,
    options: any,
  ) : EbEventLink<NativeEventType, EventValue, EbEventType> {
    if (!this.sources[sourceEventName]) {
      return null;
    }
    const links = this.eventLinksMap[sourceEventName] = this.eventLinksMap[sourceEventName] || [];
    const link = new EbEventLink<NativeEventType, EventValue>(
      sourceEventName, this.sources[sourceEventName], destinationEventName, destination, cb, options
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

  addLink<
    NativeEventType extends Event = Event,
    EventValue = any,
    EbEventType extends EbEvent<NativeEventType, EventValue> = EbEvent<NativeEventType, EventValue>,
  >(
    sourceEventName: string,
    source: EbEventSource,
    destinationEventName: string,
    cb : EbEventSenderCallback<NativeEventType, EventValue, EbEventType>,
    options: any,
  ) : EbEventLink<NativeEventType, EventValue, EbEventType> {
    if (!this.destinations[destinationEventName]) {
      return null;
    }
    const links = this.eventLinksMap[destinationEventName] = this.eventLinksMap[destinationEventName] || {};
    const link = new EbEventLink<NativeEventType, EventValue, EbEventType>(
      sourceEventName, source, destinationEventName, this.destinations[destinationEventName], cb, options
    );
    links[sourceEventName] = link;
    return link;
  }

  removeLink(sourceEventName: string, destinationEventName: string) {
    const links = this.eventLinksMap[destinationEventName] = this.eventLinksMap[destinationEventName] || {};
    delete links[sourceEventName];
  }
}

