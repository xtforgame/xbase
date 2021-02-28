/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AzwcDialog {
    }
    interface AzwcFileManager {
        "basePath": string;
        "reload": () => Promise<void>;
        "setApi": (fileApi: any) => Promise<void>;
    }
    interface AzwcSpinner {
        "containerSize": string;
        "size": string;
        "strokeWidth": string;
    }
    interface AzwcSpinnerMask {
        "enabled": string;
        "size": string;
        "strokeWidth": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
        "togglePadding": () => Promise<void>;
    }
}
declare global {
    interface HTMLAzwcDialogElement extends Components.AzwcDialog, HTMLStencilElement {
    }
    var HTMLAzwcDialogElement: {
        prototype: HTMLAzwcDialogElement;
        new (): HTMLAzwcDialogElement;
    };
    interface HTMLAzwcFileManagerElement extends Components.AzwcFileManager, HTMLStencilElement {
    }
    var HTMLAzwcFileManagerElement: {
        prototype: HTMLAzwcFileManagerElement;
        new (): HTMLAzwcFileManagerElement;
    };
    interface HTMLAzwcSpinnerElement extends Components.AzwcSpinner, HTMLStencilElement {
    }
    var HTMLAzwcSpinnerElement: {
        prototype: HTMLAzwcSpinnerElement;
        new (): HTMLAzwcSpinnerElement;
    };
    interface HTMLAzwcSpinnerMaskElement extends Components.AzwcSpinnerMask, HTMLStencilElement {
    }
    var HTMLAzwcSpinnerMaskElement: {
        prototype: HTMLAzwcSpinnerMaskElement;
        new (): HTMLAzwcSpinnerMaskElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "azwc-dialog": HTMLAzwcDialogElement;
        "azwc-file-manager": HTMLAzwcFileManagerElement;
        "azwc-spinner": HTMLAzwcSpinnerElement;
        "azwc-spinner-mask": HTMLAzwcSpinnerMaskElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface AzwcDialog {
        "onCustomStateChange"?: (event: CustomEvent<any>) => void;
    }
    interface AzwcFileManager {
        "basePath"?: string;
    }
    interface AzwcSpinner {
        "containerSize"?: string;
        "size"?: string;
        "strokeWidth"?: string;
    }
    interface AzwcSpinnerMask {
        "enabled"?: string;
        "size"?: string;
        "strokeWidth"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "azwc-dialog": AzwcDialog;
        "azwc-file-manager": AzwcFileManager;
        "azwc-spinner": AzwcSpinner;
        "azwc-spinner-mask": AzwcSpinnerMask;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "azwc-dialog": LocalJSX.AzwcDialog & JSXBase.HTMLAttributes<HTMLAzwcDialogElement>;
            "azwc-file-manager": LocalJSX.AzwcFileManager & JSXBase.HTMLAttributes<HTMLAzwcFileManagerElement>;
            "azwc-spinner": LocalJSX.AzwcSpinner & JSXBase.HTMLAttributes<HTMLAzwcSpinnerElement>;
            "azwc-spinner-mask": LocalJSX.AzwcSpinnerMask & JSXBase.HTMLAttributes<HTMLAzwcSpinnerMaskElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
