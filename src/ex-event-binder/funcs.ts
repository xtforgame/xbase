import {
  EbEventSenderWrapper,
} from './core';

export class ClickSource {
  sender : EbEventSenderWrapper;
  component : any;
  elem: HTMLElement;

  constructor(sender: EbEventSenderWrapper, component: any, elem: HTMLElement) {
    this.sender = sender;
    this.component = component;
    this.elem = elem;
  }

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
    return this.sender;
  }
}
