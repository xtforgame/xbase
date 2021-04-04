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
      [eventType: string]: {
        callback: (e: Event) => any,
        links: EbEventLink[],
      },
    },
  };

  receiverEventLinksMap: {
    [receiverId: string]: {
      [eventType: string]: EbEventLink[],
    },
  };

  constructor() {
    this.senderMap = {};
    this.receiverMap = {};
    this.senderEventLinksMap = {};
    this.receiverEventLinksMap = {};
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

  addLinkCore(link: EbEventLink) {
    const senderEventLinks = this.senderEventLinksMap[link.senderId] = this.senderEventLinksMap[link.senderId] || {};
    const sourceLinks = senderEventLinks[link.sourceEventName] = senderEventLinks[link.sourceEventName] || {
      callback: null,
      links: [],
    };
    if (!sourceLinks.callback) {
      sourceLinks.callback = (e: Event) => {
        sourceLinks.links.forEach(({ source, valueType, callback }) => {
          console.log('sourceLinks.links.forEach');
          callback({
            nativeEvent: e,
            valueType: valueType,
            value: source.getValue(valueType),
            target: source,
          });
        });
      }
      link.source.addListener(sourceLinks.callback);
    }
    sourceLinks.links.push(link);

    const receiverEventLinks = this.receiverEventLinksMap[link.receiverId] = this.receiverEventLinksMap[link.receiverId] || {};
    const destinationLinks = receiverEventLinks[link.destinationEventName] = receiverEventLinks[link.destinationEventName] || [];
    destinationLinks.push(link);
  }

  addLink<
    NativeEventType extends Event = Event,
    EventValue = any,
    EbEventType extends EbEvent<NativeEventType, EventValue> = EbEvent<NativeEventType, EventValue>,
  >(
    senderId: string,
    sourceEventName: string,
    receiverId: string,
    destinationEventName: string,
    valueType: string,
    cb : EbEventSenderCallback<NativeEventType, EventValue, EbEventType>,
    options: any,
  ) : EbEventLink<NativeEventType, EventValue, EbEventType> {
    const sender = this.senderMap[senderId];
    if (!sender) {
      return null;
    }
    const source = sender.sources[sourceEventName];
    if (!source) {
      return null;
    }
    const receiver = this.receiverMap[receiverId];
    if (!receiver) {
      return null;
    }
    const destination = receiver.destinations[destinationEventName];
    if (!destination) {
      return null;
    }
    const link = new EbEventLink<NativeEventType, EventValue>(
      senderId,
      sourceEventName,
      source,
      receiverId,
      destinationEventName,
      destination, valueType, cb, options
    );
    this.addLinkCore(link);
  }
}
