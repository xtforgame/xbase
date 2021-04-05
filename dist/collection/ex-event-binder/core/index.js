export class EbEventLink {
  constructor(senderId, sourceEventName, source, receiverId, destinationEventName, destination, valueType, callback, options) {
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
  constructor() {
    this.sources = {};
    this.eventLinksMap = {};
  }
  addSource(id, source) {
    this.sources[id] = source;
  }
  removeSource(id) {
    delete this.sources[id];
  }
}
export class EbEventReceiverWrapper {
  constructor() {
    this.destinations = {};
    this.eventLinksMap = {};
  }
  addDestination(id, destination) {
    this.destinations[id] = destination;
  }
  removeDestination(id) {
    delete this.destinations[id];
  }
}
// =======================
export class SourceBase {
  constructor(sender) {
    this.sender = sender;
  }
}
export class DestinationBase {
  constructor(receiver) {
    this.receiver = receiver;
  }
}
