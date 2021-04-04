import { Component, Method, Event, EventEmitter, Prop, State, Host, h } from '@stencil/core';
import {
  EbEventSenderWrapper,
} from '../../ex-event-binder';

export class ClickSource {
  sender : EbEventSenderWrapper;
  component : any;
  elem: HTMLElement;

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
}
