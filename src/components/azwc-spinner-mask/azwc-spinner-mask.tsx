import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-spinner-mask',
  // styleUrl: 'azwc-spinner-mask.css',
  shadow: false,
})
export class AzwcSpinnerMask {
  @Prop() enabled: string = 'false';

  @Prop() size: string = '20px';

  @Prop({ attribute: 'stroke-width' }) strokeWidth: string = '4px';

  render() {
    const hostStyle : {
      [key: string]: string | undefined;
    } = {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    };
    if (this.enabled === 'false') {
      hostStyle.display = "none";
    }
    return (
      <Host
        style={hostStyle}
      >
        <azwc-spinner
          size={this.size}
          // containerSize={this.size}
          strokeWidth={this.strokeWidth}
        ></azwc-spinner>
      </Host>
    );
  }
}
