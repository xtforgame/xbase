import { EbEvent, EbEventLink, EbEventSenderCallback, EbEventSenderWrapper, EbEventReceiverWrapper } from './core';
export * from './funcs';
export * from './core';
export declare class EbEventBinder {
  senderMap: {
    [id: string]: EbEventSenderWrapper;
  };
  receiverMap: {
    [id: string]: EbEventReceiverWrapper;
  };
  stopReceiveSenderEvent: boolean;
  senderEventLinksMap: {
    [senderId: string]: {
      [eventType: string]: {
        callback: (e: Event) => any;
        links: EbEventLink[];
      };
    };
  };
  receiverEventLinksMap: {
    [receiverId: string]: {
      [eventType: string]: {
        callback: (valueType: string, v: any) => any;
        links: EbEventLink[];
      };
    };
  };
  constructor();
  addSender(id: string, sender: EbEventSenderWrapper): void;
  removeSender(id: string): void;
  addReceiver(id: string, receiver: EbEventReceiverWrapper): void;
  removeReceiver(id: string): void;
  addLinkCore(link: EbEventLink): void;
  addLink<NativeEventType extends Event = Event, EventValue = any, EbEventType extends EbEvent<NativeEventType, EventValue> = EbEvent<NativeEventType, EventValue>>(senderId: string, sourceEventName: string, receiverId: string, destinationEventName: string, valueType: string, cb: EbEventSenderCallback<NativeEventType, EventValue, EbEventType>, options: any): EbEventLink<NativeEventType, EventValue, EbEventType>;
}
