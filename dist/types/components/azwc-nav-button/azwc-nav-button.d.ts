import { EventEmitter } from '../../stencil-public-runtime';
import { ClickSource } from './eb';
import { EbEventSenderWrapper } from '../../ex-event-binder';
export declare class AzwcNavButton {
  static ClickSource: typeof ClickSource;
  type: 'larr' | 'rarr' | 'uarr' | 'darr' | 'x' | 'plus' | '';
  stayclosed: boolean;
  isOpen: boolean;
  customStateChange: EventEmitter;
  senderWrapper: EbEventSenderWrapper;
  constructor();
  getInst(): Promise<this>;
  host: HTMLElement;
  handleClick(_: MouseEvent): void;
  render(): any;
}
