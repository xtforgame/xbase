declare type FilePathType = 'file' | 'folder';
declare type ApiArgBase = {
  filename: string;
  params?: {
    options?: {
      paths?: string[];
    };
  };
};
declare type ApiExArg = ApiArgBase & {
  type: FilePathType;
};
declare type FileListItem = {
  type: FilePathType;
  name: string;
  relPath: string;
};
declare type FileApi = {
  getFileList(paths: string[]): Promise<FileListItem[]>;
  createFileOrFolder(arg: ApiArgBase): Promise<any>;
  canCreate(arg: ApiExArg): Promise<string>;
  isFileExists(arg: ApiExArg): Promise<boolean>;
};
export declare class AzwcFileManager {
  basePath: string;
  onNameChanged(newValue: string, oldValue: string): void;
  loading: boolean;
  currentFileList: FileListItem[];
  currentPaths: string[];
  fileApi?: FileApi;
  setApi(fileApi: any): Promise<void>;
  reload(newPaths?: string[]): Promise<void>;
  render(): any;
}
export {};
