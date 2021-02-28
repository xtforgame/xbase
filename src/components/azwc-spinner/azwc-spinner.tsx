import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-spinner',
  // styleUrl: 'azwc-spinner.css',
  shadow: false,
})
export class AzwcSpinner {

  @Prop() size: string = '1em';

  @Prop({ attribute: 'container-size' }) containerSize: string = '';

  @Prop({ attribute: 'stroke-width' }) strokeWidth: string = '2px';

  render() {
    const containerStyle : {
      [key: string]: string | undefined;
    } = {};
    if (this.containerSize) {
      containerStyle.width = this.containerSize;
      containerStyle.height = this.containerSize;
    }
    return (
      <Host
        style={containerStyle}
      >
        <span
          part="base"
          class="spinner"
          aria-busy="true"
          aria-live="polite"
          style={{
            width: this.size,
            height: this.size,
            borderWidth: this.strokeWidth,
          }}
        ></span>
      </Host>
    );
  }
}
