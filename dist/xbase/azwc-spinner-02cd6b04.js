import { r as registerInstance, h, f as Host } from './index-5ee21963.js';

const AzwcSpinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = '1em';
    this.containerSize = '';
    this.strokeWidth = '2px';
  }
  render() {
    const containerStyle = {};
    if (this.containerSize) {
      containerStyle.width = this.containerSize;
      containerStyle.height = this.containerSize;
    }
    return (h(Host, { style: containerStyle }, h("span", { part: "base", class: "spinner", "aria-busy": "true", "aria-live": "polite", style: {
        width: this.size,
        height: this.size,
        borderWidth: this.strokeWidth,
      } })));
  }
};

export { AzwcSpinner as A };
