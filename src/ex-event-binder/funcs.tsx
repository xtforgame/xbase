export class ButtonSource {
  component : any;
  button: HTMLElement;

  constructor(component: any, button: HTMLElement ) {
    this.component = component;
    this.button = button;
  }

  getSupportedEvents: () => string[];
  getValue: <EventValue>(type: string) => EventValue;
  getSrcComponent: (type: string) => any;
  getSrcElement: (type: string) => HTMLElement;
  syncValue: <EventValue>(type: string, v: EventValue) => void;
  getSender: <SenderType>(type: string) => SenderType;
}


export type EbEventSource = {
  getSupportedEvents: () => string[];
  getValue: <EventValue>(type: string) => EventValue;
  getSrcElement: (type: string) => HTMLElement;
  syncValue: <EventValue>(type: string, v: EventValue) => void;
  getSender: <SenderType>(type: string) => SenderType;
};