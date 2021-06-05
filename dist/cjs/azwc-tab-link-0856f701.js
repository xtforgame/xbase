'use strict';

const index = require('./index-f961ad80.js');

const AzwcTabLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};

exports.AzwcTabLink = AzwcTabLink;
