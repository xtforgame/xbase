'use strict';

const index = require('./index-cbad13bb.js');

const AzwcCanviDrawer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};

exports.AzwcCanviDrawer = AzwcCanviDrawer;
