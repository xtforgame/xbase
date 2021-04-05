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
export class SourceBase {
  constructor(sender, options) {
    this.getComponent = () => {
      return this.options.getComponent();
    };
    this.getEventElement = () => {
      return this.options.getElement();
    };
    this.sender = sender;
    this.options = options || {};
    this.options.getComponent = this.options.getComponent || (() => null);
    this.options.getElement = this.options.getElement || (() => null);
  }
}
export class DestinationBase {
  constructor(receiver, options) {
    this.getComponent = () => {
      return this.options.getComponent();
    };
    this.getEventElement = () => {
      return this.options.getElement();
    };
    this.receiver = receiver;
    this.options = options || {};
    this.options.getComponent = this.options.getComponent || (() => null);
    this.options.getElement = this.options.getElement || (() => null);
  }
}
