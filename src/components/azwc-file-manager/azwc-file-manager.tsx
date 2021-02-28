import { Component, Method, Prop, State, Watch, Host, h } from '@stencil/core';

type FileApi = {
  listDir() : Promise<any>;
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
  @State() fileApi?: FileApi = null;

  @Method()
  async setApi(fileApi : any) {
    const f = fileApi as FileApi;
    this.fileApi = f;
    this.loading = true;
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    })
    .then(() => {
      this.loading = false;
    });
  }

  @Method()
  async reload() {
    this.loading = true;
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    })
    .then(() => {
      this.loading = false;
    });
  }

  render() {
    let enableMask = 'false';
    if (!this.fileApi || this.loading) {
      enableMask = 'true';
    }
    return (
      <Host>
        <azwc-spinner-mask enabled={enableMask}></azwc-spinner-mask>
        {Array.from({ length: 18 }).map((_, i) => {
          return (
            <div key={i}>
              Name:
              {i}
              : wvewve
            </div>
          );
        })}
        <slot></slot>
      </Host>
    );
  }

}
