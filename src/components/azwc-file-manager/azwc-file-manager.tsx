import { Component, Method, Prop, State, Watch, Host, h } from '@stencil/core';

type FilePathType = 'file' | 'folder';

type ApiArgBase = {
  filename: string;
  params?: {
    options?: {
      paths?: string[];
    };
  };
}

type ApiExArg = ApiArgBase & {
  type: FilePathType;
}

type FileListItem = {
  type: FilePathType;
  name: string;
  relPath: string;
}

type FileApi = {
  getFileList(paths : string[]) : Promise<FileListItem[]>;
  createFileOrFolder(arg : ApiArgBase) : Promise<any>;
  canCreate(arg : ApiExArg) : Promise<string>;
  isFileExists(arg : ApiExArg) : Promise<boolean>;
}

@Component({
  tag: 'azwc-file-manager',
  // styleUrl: 'azwc-file-manager.scss',
  shadow: false,
})
export class AzwcFileManager {
  @Prop({ attribute: 'base-path' }) basePath: string = '';

  @Watch('basePath') 
  onNameChanged(newValue: string, oldValue: string) {
    console.log('newValue, oldValue :', newValue, oldValue);
    this.reload();
  }

  @State() loading: boolean = false;

  @State() currentFileList: FileListItem[] = [];

  @State() currentPaths: string[] = [];

  @State() fileApi?: FileApi = null;

  @Method()
  async setApi(fileApi : any) {
    const f = fileApi as FileApi;
    console.log('f :', f);
    if (!f) {
      return;
    }
    this.fileApi = f;
    this.reload();
  }

  @Method()
  async reload(newPaths? : string[]) {
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
    return (
      <Host>
        <azwc-spinner-mask enabled={enableMask}></azwc-spinner-mask>
        {paths.map((p, i) => {
          return (
            <div key={`${currentPath}/${p}`} style={{ display: 'inline-block' }}>
              <button onClick={() => { this.reload(this.currentPaths.slice(0, i)) }}>
                {p}
              </button>
              {i !== paths.length - 1 && '/'}
            </div>
          );
        })}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'black', margin: '20px' }}></div>
        {this.currentFileList.map((v) => {
          if (v.type === 'folder') {
            return (
              <div key={`${currentPath}/${v.name}`}>
                Name:
                <button onClick={() => { this.reload(this.currentPaths.concat([v.name])) }}>
                  {v.name}({v.type})
                </button><br />
                {v.relPath}
              </div>
            );
          }
          return (
            <div key={`${currentPath}/${v.name}`}>
              Name:
              {v.name}({v.type})<br />
              {v.relPath}
              <div innerHTML="<img height='20px' src='https://shoelace.style/assets/images/wordmark.svg' />" /> 
            </div>
          );
        })}
        <slot></slot>
      </Host>
    );
  }

}
