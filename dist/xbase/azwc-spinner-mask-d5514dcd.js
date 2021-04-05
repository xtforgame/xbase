import { r as registerInstance, h, f as Host } from './index-5ee21963.js';

const AzwcSpinnerMask = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.enabled = 'false';
    this.size = '20px';
    this.strokeWidth = '4px';
  }
  render() {
    const hostStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    };
    if (this.enabled === 'false') {
      hostStyle.display = "none";
    }
    return (h(Host, { style: hostStyle }, h("azwc-spinner", { size: this.size,
      // containerSize={this.size}
      strokeWidth: this.strokeWidth })));
  }
};

export { AzwcSpinnerMask as A };
