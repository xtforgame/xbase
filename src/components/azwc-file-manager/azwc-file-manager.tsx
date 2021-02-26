import { Component, Host, h } from '@stencil/core';
import { useShadow } from '../../utils/env';

@Component({
  tag: 'azwc-file-manager',
  // styleUrl: 'azwc-file-manager.scss',
  shadow: useShadow,
})
export class AzwcFileManager {

  render() {
    return (
      <Host>
        <azwc-dialog></azwc-dialog>
        <slot></slot>
      </Host>
    );
  }

}
