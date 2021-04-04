import { Component, Method, Event, EventEmitter, Prop, State, Host, h } from '@stencil/core';
import {
  EbEventSenderWrapper,
} from '../../ex-event-binder';

export class ClickSource {
  sender : EbEventSenderWrapper;
  component : any;
  elem: HTMLElement;
  cb: Function;

  constructor(sender: EbEventSenderWrapper, component: any, elem: HTMLElement) {
    this.sender = sender;
    this.component = component;
    this.elem = elem;
  }

  getRawValueType = () => 'null';

  getValue = <EventValue>(type: string) => {
    return null;
  }

  getComponent = () => {
    return this.component;
  }

  getEventElement = () => {
    return this.elem;
  }

  syncValue = <EventValue>(type: string, v: EventValue) => {

  }
  getSender = <SenderType>(type: string) => {
    return (<any>this.sender) as SenderType;
  }

  addListener = (cb: (e : Event) => any) => {
    this.cb = cb;
    this.component.host.addEventListener('customStateChange', this.callback);
  }

  removeListener = (cb: (e : Event) => any) => {
    this.cb = null;
    this.component.host.removeEventListener('customStateChange', this.callback);
  }

  // ================

  callback = (e : Event) => {
    if (this.cb) {
      this.cb(e);
    }
  }
}
