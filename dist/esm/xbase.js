import { p as promiseResolve, b as bootstrapLazy } from './index-54a7a200.js';
import './azwc-collapse-t1-6d7e01ca.js';
import './global-50da02e1.js';
import './azwc-canvi-drawer-f7c49426.js';
import { g as globalScripts } from './app-globals-e9048a8f.js';

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["azwc-canvi-drawer",[[4,"azwc-canvi-drawer"]]],["azwc-global",[[0,"azwc-global"]]],["azwc-accordion_9",[[4,"azwc-file-manager",{"basePath":[1,"base-path"],"loading":[32],"currentFileList":[32],"currentPaths":[32],"fileApi":[32],"setApi":[64],"reload":[64]}],[4,"azwc-accordion"],[4,"azwc-collapse-t1",{"collapseid":[1],"active":[4],"type":[1]}],[4,"azwc-dialog",{"dialogid":[1],"isOpen":[32],"getInst":[64]}],[0,"azwc-nav-button",{"type":[1],"stayclosed":[4],"isOpen":[32],"getInst":[64]}],[4,"azwc-swiper",{"loop":[4],"speed":[2],"slideTo":[64],"getSwiper":[64]}],[4,"my-component",{"first":[1],"middle":[1],"last":[1],"switchX":[32],"switchY":[32],"togglePadding":[64]}],[0,"azwc-spinner-mask",{"enabled":[1],"size":[1],"strokeWidth":[1,"stroke-width"]}],[0,"azwc-spinner",{"size":[1],"containerSize":[1,"container-size"],"strokeWidth":[1,"stroke-width"]}]]]], options);
});
