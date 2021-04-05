import { Component, Host, h } from '@stencil/core';
import * as exports from '../../global';
export class AzwcGlobal {
  render() {
    return (h(Host, null));
  }
  static get is() { return "azwc-global"; }
}
AzwcGlobal.exports = exports;
