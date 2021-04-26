'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cbad13bb.js');
require('./azwc-collapse-t1-46b6fbe7.js');
require('./global-2882229b.js');
require('./azwc-canvi-drawer-c9fe5477.js');
const appGlobals = require('./app-globals-c758db36.js');

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
  return index.bootstrapLazy([["azwc-canvi-drawer.cjs",[[4,"azwc-canvi-drawer"]]],["azwc-global.cjs",[[0,"azwc-global"]]],["azwc-accordion_11.cjs",[[4,"azwc-file-manager",{"basePath":[1,"base-path"],"loading":[32],"currentFileList":[32],"currentPaths":[32],"fileApi":[32],"setApi":[64],"reload":[64]}],[4,"azwc-nav-menu-item",{"showOn":[1,"show-on"]}],[4,"azwc-accordion"],[4,"azwc-collapse-t1",{"collapseid":[1],"active":[4],"type":[1],"labelPlacement":[1,"label-placement"]}],[4,"azwc-dialog",{"dialogid":[1],"isOpen":[32],"getInst":[64]}],[0,"azwc-nav-button",{"type":[1],"stayclosed":[4],"isOpen":[32],"getInst":[64]}],[4,"azwc-swiper",{"loop":[4],"speed":[2],"slideTo":[64],"getSwiper":[64]}],[4,"my-component",{"first":[1],"middle":[1],"last":[1],"switchX":[32],"switchY":[32],"togglePadding":[64]}],[0,"azwc-spinner-mask",{"enabled":[1],"size":[1],"strokeWidth":[1,"stroke-width"]}],[4,"azwc-nav-menu",{"type":[1],"showOn":[1,"show-on"]}],[0,"azwc-spinner",{"size":[1],"containerSize":[1,"container-size"],"strokeWidth":[1,"stroke-width"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
