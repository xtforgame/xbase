import { Component, Host, h } from '@stencil/core';
import * as exports from '../../global';

@Component({
  tag: 'azwc-global',
  // styleUrl: 'azwc-global.css',
  shadow: false,
})
export class AzwcGlobal {
  static exports = exports;
  render() {
    return (
      <Host></Host>
    );
  }

}
