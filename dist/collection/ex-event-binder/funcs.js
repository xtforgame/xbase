export class FakeClickSource {
  constructor(sender, component, elem) {
    this.getRawValueType = () => 'null';
    this.getValue = (_) => {
      return null;
    };
    this.getComponent = () => {
      return this.component;
    };
    this.getEventElement = () => {
      return this.elem;
    };
    this.syncValue = (_, __) => {
    };
    this.getSender = (_) => {
      return this.sender;
    };
    this.addListener = (_) => {
    };
    this.removeListener = (_) => {
    };
    this.sender = sender;
    this.component = component;
    this.elem = elem;
  }
}
export class FakeNullDestination {
  constructor(receiver, component, elem) {
    this.getRawValueType = () => 'null';
    this.getValue = (_) => {
      return this.value;
    };
    this.changeValue = (valueType, value) => {
      console.log('changeValue :', valueType, value);
      this.value = value;
    };
    this.getComponent = () => {
      return this.component;
    };
    this.getEventElement = () => {
      return this.elem;
    };
    this.watch = (_) => {
    };
    this.unwatch = (_) => {
    };
    this.getReceiver = (_) => {
      return this.receiver;
    };
    this.receiver = receiver;
    this.component = component;
    this.elem = elem;
    this.value = false;
  }
}
