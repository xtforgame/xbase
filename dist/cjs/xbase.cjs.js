'use strict';

const index = require('./index-f961ad80.js');
require('./azwc-tabs-b08ef25b.js');
require('./global-b3a11928.js');
require('./azwc-tab-link-0856f701.js');
require('./azwc-tab-content-76c31820.js');
require('./azwc-canvi-drawer-37d22825.js');
const appGlobals = require('./app-globals-0e0a47b7.js');

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('xbase.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["azwc-canvi-drawer.cjs",[[4,"azwc-canvi-drawer"]]],["azwc-global.cjs",[[0,"azwc-global"]]],["azwc-tab-content.cjs",[[1,"azwc-tab-content"]]],["azwc-tab-link.cjs",[[1,"azwc-tab-link"]]],["azwc-accordion_15.cjs",[[4,"azwc-file-manager",{"basePath":[1,"base-path"],"loading":[32],"currentFileList":[32],"currentPaths":[32],"fileApi":[32],"setApi":[64],"reload":[64]}],[4,"azwc-nav-menu-item",{"showOn":[1,"show-on"]}],[4,"azwc-accordion"],[4,"azwc-collapse-t1",{"collapseid":[1],"active":[4],"type":[1],"labelPlacement":[1,"label-placement"]}],[4,"azwc-dialog",{"dialogid":[1],"isOpen":[32],"getInst":[64]}],[0,"azwc-nav-button",{"type":[1],"stayclosed":[4],"isOpen":[32],"getInst":[64]}],[4,"azwc-swiper",{"loop":[4],"speed":[2],"nextSelector":[1,"next-selector"],"prevSelector":[1,"prev-selector"],"paginationSelector":[1,"pagination-selector"],"slideTo":[64],"getSwiper":[64]}],[4,"azwc-swiper-next"],[0,"azwc-swiper-pagination"],[4,"azwc-swiper-prev"],[0,"azwc-tabs"],[4,"my-component",{"first":[1],"middle":[1],"last":[1],"switchX":[32],"switchY":[32],"togglePadding":[64]}],[0,"azwc-spinner-mask",{"enabled":[1],"size":[1],"strokeWidth":[1,"stroke-width"]}],[4,"azwc-nav-menu",{"type":[1],"showOn":[1,"show-on"]}],[0,"azwc-spinner",{"size":[1],"containerSize":[1,"container-size"],"strokeWidth":[1,"stroke-width"]}]]]], options);
});
