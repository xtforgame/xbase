import { SourceBase, } from '../../ex-event-binder';
export class ClickSource extends SourceBase {
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
    this.addListener = (cb) => {
      this.cb = cb;
      this.getComponent().host.addEventListener('customStateChange', this.callback);
    };
    this.removeListener = (_) => {
      this.cb = null;
      this.getComponent().host.removeEventListener('customStateChange', this.callback);
    };
    // ================
    this.callback = (e) => {
      if (this.cb) {
        this.cb(e);
      }
    };
  }
}
export class OnOffSource extends SourceBase {
  constructor(sender, options) {
    super(sender, options);
    this.getRawValueType = () => 'boolean';
    this.getValue = (_) => {
      return this.getComponent().isOpen;
    };
    this.syncValue = (_, v) => {
      this.getComponent().isOpen = v;
    };
    this.getSender = (_) => {
      return this.sender;
    };
    this.addListener = (cb) => {
      this.cb = cb;
      this.getComponent().host.addEventListener('customStateChange', this.callback);
    };
    this.removeListener = (_) => {
      this.cb = null;
      this.getComponent().host.removeEventListener('customStateChange', this.callback);
    };
    // ================
    this.callback = (e) => {
      if (this.cb) {
        this.cb(e);
      }
    };
  }
}
