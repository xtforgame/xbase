import { SourceBase, DestinationBase, } from './core';
export class FakeClickSource extends SourceBase {
  constructor(sender, component, elem) {
    super(sender);
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
    this.component = component;
    this.elem = elem;
  }
}
export class FakeNullDestination extends DestinationBase {
  constructor(receiver, component, elem) {
    super(receiver);
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
    this.component = component;
    this.elem = elem;
    this.value = false;
  }
}
