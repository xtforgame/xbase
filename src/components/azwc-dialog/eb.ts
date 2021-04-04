import { Component, Method, Event, EventEmitter, Prop, State, Host, h } from '@stencil/core';
import {
  EbEventReceiverWrapper,
} from '../../ex-event-binder';

export class BoolDestination {
  receiver : EbEventReceiverWrapper;
  component : any;
  elem: HTMLElement;
  cb: Function;

  constructor(receiver: EbEventReceiverWrapper, component: any, elem: HTMLElement) {
    this.receiver = receiver;
    this.component = component;
    this.elem = elem;
  }

  getRawValueType = () => 'boolean';

  getValue = <EventValue>(type: string) => {
    return (<any>this.component.isOpen) as EventValue;
  }

  changeValue = <EventValue>(valueType: string, value: EventValue) => {
    // if (this.component.isOpen !== <any>value) {
    //   if (this.component.isOpen) {
    //     this.component.close();
    //   } else {
    //     this.component.open();
    //   }
    // }
    this.component.isOpen = <any>value;
  }

  getComponent = () => {
    return this.component;
  }

  getEventElement = () => {
    return this.elem;
  }

  watch = <EventValue>(cb : (valueType: string, v: EventValue) => void) => {
    this.cb = cb;
    this.component.host.addEventListener('customStateChange', this.callback);
  }
  unwatch = <EventValue>(cb : (valueType: string, v: EventValue) => void) => {
    this.cb = null;
    this.component.host.removeEventListener('customStateChange', this.callback);
  }

  getReceiver = <ReceiverType>(type: string) => {
    return (<any>this.receiver) as ReceiverType;
  }

  // ================

  callback = (e : Event) => {
    if (this.cb) {
      this.cb(e);
    }
  }
}
