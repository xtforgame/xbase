import { EventEmitter } from '../../stencil-public-runtime';
import { EbEventReceiverWrapper, DestinationInfoMapType } from '../../ex-event-binder';
export declare class AzwcDialog {
  static allInstances: {
    [s: string]: AzwcDialog;
  };
  static DestinationInfoMap: DestinationInfoMapType;
  static open: (id: string) => void;
  static close: (id: string) => void;
  dialogid: string;
  registeredId?: string;
  isOpen: boolean;
  customStateChange: EventEmitter;
  host: HTMLElement;
  getInst(): Promise<this>;
  receiverWrapper: EbEventReceiverWrapper;
  constructor();
  componentDidLoad(): void;
  disconnectedCallback(): void;
  open(): void;
  close(e: MouseEvent): void;
  doBackgroundClose(e: MouseEvent): void;
  render(): any;
}
