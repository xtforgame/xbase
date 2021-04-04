import {
  EbEvent,
  EbEventLink,
  EbEventSource,
  EbEventDestination,
  EbEventSenderCallback,
  EbEventSenderWrapper,
  EbEventReceiverWrapper,
} from './core';

export * from './funcs';
export * from './core';

export class EbEventBinder {
  senderMap: { [id : string]: EbEventSenderWrapper };
  receiverMap: { [id : string]: EbEventReceiverWrapper };

  senderEventLinksMap: {
    [senderId: string]: {
      [eventType: string]: EbEventLink[],
    },
  };

  constructor() {
    this.senderMap = {};
    this.receiverMap = {};
  }

  addSender(id: string, sender: EbEventSenderWrapper) {
    this.senderMap[id] = sender;
  }

  removeSender(id: string) {
    delete this.senderMap[id];
  }

  addReceiver(id: string, receiver: EbEventReceiverWrapper) {
    this.receiverMap[id] = receiver;
  }

  removeReceiver(id: string) {
    delete this.receiverMap[id];
  }

  // =====================

  addLink<
    NativeEventType extends Event = Event,
    EventValue = any,
    EbEventType extends EbEvent<NativeEventType, EventValue> = EbEvent<NativeEventType, EventValue>,
  >(
    senderId: string,
    receiverId: string,
    sourceEventName: string,
    source: EbEventDestination,
    destinationEventName: string,
    destination: EbEventDestination,
    valueType: string,
    cb : EbEventSenderCallback<NativeEventType, EventValue, EbEventType>,
    options: any,
  ) : EbEventLink<NativeEventType, EventValue, EbEventType> {
    if (!this.senderMap[sourceEventName]) {
      return null;
    }
    // const links = this.eventLinksMap[sourceEventName] = this.eventLinksMap[sourceEventName] || [];
    // const link = new EbEventLink<NativeEventType, EventValue>(
    //   sourceEventName, this.sources[sourceEventName], destinationEventName, destination, valueType, cb, options
    // );
    // links.push(link);
    // return link;
  }
}
