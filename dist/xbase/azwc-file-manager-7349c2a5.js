import { r as registerInstance, h, f as Host } from './index-5ee21963.js';

const AzwcFileManager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.basePath = '';
    this.loading = false;
    this.currentFileList = [];
    this.currentPaths = [];
    this.fileApi = null;
  }
  onNameChanged(newValue, oldValue) {
    console.log('newValue, oldValue :', newValue, oldValue);
    this.reload();
  }
  async setApi(fileApi) {
    const f = fileApi;
    console.log('f :', f);
    if (!f) {
      return;
    }
    this.fileApi = f;
    this.reload();
  }
  async reload(newPaths) {
    if (!this.fileApi) {
      return;
    }
    if (newPaths) {
      this.currentPaths = newPaths;
    }
    this.loading = true;
    return this.fileApi.getFileList(this.currentPaths)
      .then((list) => {
      this.currentFileList = list;
      this.loading = false;
    });
  }
  render() {
    let enableMask = 'false';
    if (!this.fileApi || this.loading) {
      enableMask = 'true';
    }
    const currentPath = this.currentPaths.join('/');
    const paths = ['Root'].concat(this.currentPaths);
    return (h(Host, null, h("azwc-spinner-mask", { enabled: enableMask }), paths.map((p, i) => {
      return (h("div", { key: `${currentPath}/${p}`, style: { display: 'inline-block' } }, h("button", { onClick: () => { this.reload(this.currentPaths.slice(0, i)); } }, p), i !== paths.length - 1 && '/'));
    }), h("div", { style: { width: '100%', height: '1px', backgroundColor: 'black', margin: '20px' } }), this.currentFileList.map((v) => {
      if (v.type === 'folder') {
        return (h("div", { key: `${currentPath}/${v.name}` }, "Name:", h("button", { onClick: () => { this.reload(this.currentPaths.concat([v.name])); } }, v.name, "(", v.type, ")"), h("br", null), v.relPath));
      }
      return (h("div", { key: `${currentPath}/${v.name}` }, "Name:", v.name, "(", v.type, ")", h("br", null), v.relPath, h("div", { innerHTML: "<img height='20px' src='https://shoelace.style/assets/images/wordmark.svg' />" })));
    }), h("slot", null)));
  }
  static get watchers() { return {
    "basePath": ["onNameChanged"]
  }; }
};

export { AzwcFileManager as A };
