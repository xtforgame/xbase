'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cbad13bb.js');
require('./azwc-collapse-t1-32739bb6.js');
require('./global-d6685f58.js');
require('./azwc-canvi-drawer-c9fe5477.js');
const appGlobals = require('./app-globals-33402fbe.js');

/*
 Stencil Client Patch Esm v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["azwc-canvi-drawer.cjs",[[4,"azwc-canvi-drawer"]]],["azwc-global.cjs",[[0,"azwc-global"]]],["azwc-accordion_9.cjs",[[4,"azwc-file-manager",{"basePath":[1,"base-path"],"loading":[32],"currentFileList":[32],"currentPaths":[32],"fileApi":[32],"setApi":[64],"reload":[64]}],[4,"azwc-accordion"],[4,"azwc-collapse-t1",{"collapseid":[1],"active":[4]}],[4,"azwc-dialog",{"dialogid":[1],"isOpen":[32],"getInst":[64]}],[0,"azwc-nav-button",{"type":[1],"stayclosed":[4],"isOpen":[32],"getInst":[64]}],[4,"azwc-swiper",{"loop":[4],"speed":[2],"slideTo":[64],"getSwiper":[64]}],[4,"my-component",{"first":[1],"middle":[1],"last":[1],"switchX":[32],"switchY":[32],"togglePadding":[64]}],[0,"azwc-spinner-mask",{"enabled":[1],"size":[1],"strokeWidth":[1,"stroke-width"]}],[0,"azwc-spinner",{"size":[1],"containerSize":[1,"container-size"],"strokeWidth":[1,"stroke-width"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
