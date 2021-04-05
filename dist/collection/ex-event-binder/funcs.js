import { SourceBase, DestinationBase, } from './core';
export class FakeClickSource extends SourceBase {
  constructor(sender, options) {
    super(sender, options);
    this.getRawValueType = () => 'null';
    this.getValue = (_) => {
      return null;
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
  }
}
export class FakeNullDestination extends DestinationBase {
  constructor(receiver, options) {
    super(receiver, options);
    this.getRawValueType = () => 'null';
    this.getValue = (_) => {
      return this.value;
    };
    this.changeValue = (valueType, value) => {
      console.log('changeValue :', valueType, value);
      this.value = value;
    };
    this.watch = (_) => {
    };
    this.unwatch = (_) => {
    };
    this.getReceiver = (_) => {
      return this.receiver;
    };
    this.value = false;
  }
}
