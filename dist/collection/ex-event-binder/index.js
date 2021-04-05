import { EbEventLink, } from './core';
export * from './funcs';
export * from './core';
export class EbEventBinder {
  constructor() {
    this.senderMap = {};
    this.receiverMap = {};
    this.senderEventLinksMap = {};
    this.receiverEventLinksMap = {};
    this.stopReceiveSenderEvent = false;
  }
  addSender(id, sender) {
    this.senderMap[id] = sender;
  }
  removeSender(id) {
    delete this.senderMap[id];
  }
  addReceiver(id, receiver) {
    this.receiverMap[id] = receiver;
  }
  removeReceiver(id) {
    delete this.receiverMap[id];
  }
  // =====================
  addLinkCore(link) {
    const senderEventLinks = this.senderEventLinksMap[link.senderId] = this.senderEventLinksMap[link.senderId] || {};
    const sourceLinks = senderEventLinks[link.sourceEventName] = senderEventLinks[link.sourceEventName] || {
      callback: null,
      links: [],
    };
    if (!sourceLinks.callback) {
      sourceLinks.callback = (e) => {
        if (this.stopReceiveSenderEvent) {
          return;
        }
        sourceLinks.links.forEach(({ source, valueType, callback }) => {
          callback({
            nativeEvent: e,
            valueType: valueType,
            value: source.getValue(valueType),
            target: source,
          });
        });
      };
      link.source.addListener(sourceLinks.callback);
    }
    sourceLinks.links.push(link);
    const receiverEventLinks = this.receiverEventLinksMap[link.receiverId] = this.receiverEventLinksMap[link.receiverId] || {};
    const destinationLinks = receiverEventLinks[link.destinationEventName] = receiverEventLinks[link.destinationEventName] || {
      callback: null,
      links: [],
    };
    if (!destinationLinks.callback) {
      destinationLinks.callback = (valueType, v) => {
        this.stopReceiveSenderEvent = true;
        destinationLinks.links.forEach(({ source }) => {
          if (source.getValue(valueType) !== v) {
            source.syncValue(valueType, v);
          }
        });
        this.stopReceiveSenderEvent = false;
      };
      link.destination.watch(destinationLinks.callback);
    }
    destinationLinks.links.push(link);
  }
  addLink(senderId, sourceEventName, receiverId, destinationEventName, valueType, cb, options) {
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
    const callback = (exEvent) => {
      destination.changeValue(exEvent.valueType, exEvent.value);
      cb(exEvent);
    };
    const link = new EbEventLink(senderId, sourceEventName, source, receiverId, destinationEventName, destination, valueType, callback, options);
    this.addLinkCore(link);
  }
}
