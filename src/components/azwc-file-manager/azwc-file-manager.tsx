import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-file-manager',
  // styleUrl: 'azwc-file-manager.scss',
  shadow: false,
})
export class AzwcFileManager {
  render() {
    return (
      <Host>
        {Array.from({ length: 18 }).map(
          (_, i) => <azwc-dialog key={i}></azwc-dialog>
        )}
        <slot></slot>
      </Host>
    );
  }

}
