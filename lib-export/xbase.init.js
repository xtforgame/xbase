;(function (windowSelf) {
  /* eslint-disable no-underscore-dangle */
  if (!windowSelf.__azwc_export) {
    windowSelf.__azwc_export_resolve_func = null;
    windowSelf.__on_azwc_init = (exportData) => {
      if (windowSelf.__azwc_export_resolve_func) {
        windowSelf.__azwc_export_resolve_func(exportData);
      }
    };
    windowSelf.__azwc_export_promise = new Promise((resolve, reject) => {
      if (windowSelf.__azwc_export) {
        resolve(windowSelf.__azwc_export);
      } else {
        windowSelf.__azwc_export_resolve_func = resolve;
      }
    });
  }

  windowSelf.__azgjsRunOnceFuncs = [];
  windowSelf.__azgjsRunOnceFuncMap = {};
  windowSelf.azgjsRunOnce = (key, func) => {
    if (!windowSelf.__azgjsRunOnceDone) {
      if (windowSelf.__azgjsRunOnceFuncMap[key] == null) {
        windowSelf.__azgjsRunOnceFuncMap[key] = func;
        windowSelf.__azgjsRunOnceFuncs.push({ key, func });
      }
    } else if (windowSelf.waitAzwcLoaded) {
      if (windowSelf.__azgjsRunOnceFuncMap[key] == null) {
        windowSelf.__azgjsRunOnceFuncMap[key] = func;
        windowSelf.waitAzwcLoaded(func);
      }
    }
  };
  windowSelf.__azgjsRunOnceDone = false;
  const azgjsRunOnceFunc = (azwc_export) => {
    if (windowSelf.__azgjsRunOnceDone) {
      return;
    }
    // console.log('azwc_export :', azwc_export);
    const { AzwcSwiper } = azwc_export;
    const { Swiper } = azwc_export.thirdParty;
    AzwcSwiper.componentDidLoad = (inst) => {
      // console.log('inst :', inst);
      // console.log('inst.host.id :', inst.host.id);
    };
    AzwcSwiper.createSwiper = inst => new Swiper(inst.container, Object.assign({}, AzwcSwiper.getDefaultOptions(inst), {
      effect: 'fade',
      // direction: 'vertical',
      mousewheel: true,
    }));
    windowSelf.__azgjsRunOnceFuncs.forEach(({ func }) => func({ azwc_export }));
    windowSelf.__azgjsRunOnceDone = true;
  };

  windowSelf.waitAzwcLoaded = (cb) => {
    if (windowSelf.__azwc_export) {
      azgjsRunOnceFunc(windowSelf.__azwc_export);
      cb(windowSelf.__azwc_export);
    } else {
      windowSelf.__azwc_export_promise.then(() => {
        azgjsRunOnceFunc(windowSelf.__azwc_export);
        cb(windowSelf.__azwc_export);
      });
    }
  };
}(window || self));
