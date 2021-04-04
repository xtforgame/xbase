/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AzwcAccordion {
    }
    interface AzwcCanviDrawer {
    }
    interface AzwcCollapseT1 {
        "active": boolean;
        "collapseid": string;
    }
    interface AzwcDialog {
        "dialogid": string;
    }
    interface AzwcFileManager {
        "basePath": string;
        "reload": (newPaths?: string[]) => Promise<void>;
        "setApi": (fileApi: any) => Promise<void>;
    }
    interface AzwcNavButton {
        "getInst": () => Promise<this>;
        "type": 'larr' | 'rarr' | 'uarr' | 'darr' | 'x' | 'plus' | '';
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
    interface AzwcSwiper {
        "getSwiper": () => Promise<any>;
        "loop": boolean;
        "slideTo": (index: Number, speed?: Number) => Promise<void>;
        "speed": number;
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
    interface HTMLAzwcAccordionElement extends Components.AzwcAccordion, HTMLStencilElement {
    }
    var HTMLAzwcAccordionElement: {
        prototype: HTMLAzwcAccordionElement;
        new (): HTMLAzwcAccordionElement;
    };
    interface HTMLAzwcCanviDrawerElement extends Components.AzwcCanviDrawer, HTMLStencilElement {
    }
    var HTMLAzwcCanviDrawerElement: {
        prototype: HTMLAzwcCanviDrawerElement;
        new (): HTMLAzwcCanviDrawerElement;
    };
    interface HTMLAzwcCollapseT1Element extends Components.AzwcCollapseT1, HTMLStencilElement {
    }
    var HTMLAzwcCollapseT1Element: {
        prototype: HTMLAzwcCollapseT1Element;
        new (): HTMLAzwcCollapseT1Element;
    };
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
    interface HTMLAzwcNavButtonElement extends Components.AzwcNavButton, HTMLStencilElement {
    }
    var HTMLAzwcNavButtonElement: {
        prototype: HTMLAzwcNavButtonElement;
        new (): HTMLAzwcNavButtonElement;
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
    interface HTMLAzwcSwiperElement extends Components.AzwcSwiper, HTMLStencilElement {
    }
    var HTMLAzwcSwiperElement: {
        prototype: HTMLAzwcSwiperElement;
        new (): HTMLAzwcSwiperElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "azwc-accordion": HTMLAzwcAccordionElement;
        "azwc-canvi-drawer": HTMLAzwcCanviDrawerElement;
        "azwc-collapse-t1": HTMLAzwcCollapseT1Element;
        "azwc-dialog": HTMLAzwcDialogElement;
        "azwc-file-manager": HTMLAzwcFileManagerElement;
        "azwc-nav-button": HTMLAzwcNavButtonElement;
        "azwc-spinner": HTMLAzwcSpinnerElement;
        "azwc-spinner-mask": HTMLAzwcSpinnerMaskElement;
        "azwc-swiper": HTMLAzwcSwiperElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface AzwcAccordion {
    }
    interface AzwcCanviDrawer {
    }
    interface AzwcCollapseT1 {
        "active"?: boolean;
        "collapseid"?: string;
    }
    interface AzwcDialog {
        "dialogid"?: string;
        "onCustomStateChange"?: (event: CustomEvent<any>) => void;
    }
    interface AzwcFileManager {
        "basePath"?: string;
    }
    interface AzwcNavButton {
        "onCustomStateChange"?: (event: CustomEvent<any>) => void;
        "type"?: 'larr' | 'rarr' | 'uarr' | 'darr' | 'x' | 'plus' | '';
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
    interface AzwcSwiper {
        "loop"?: boolean;
        "onSlideChanged"?: (event: CustomEvent<any>) => void;
        "speed"?: number;
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
        "azwc-accordion": AzwcAccordion;
        "azwc-canvi-drawer": AzwcCanviDrawer;
        "azwc-collapse-t1": AzwcCollapseT1;
        "azwc-dialog": AzwcDialog;
        "azwc-file-manager": AzwcFileManager;
        "azwc-nav-button": AzwcNavButton;
        "azwc-spinner": AzwcSpinner;
        "azwc-spinner-mask": AzwcSpinnerMask;
        "azwc-swiper": AzwcSwiper;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "azwc-accordion": LocalJSX.AzwcAccordion & JSXBase.HTMLAttributes<HTMLAzwcAccordionElement>;
            "azwc-canvi-drawer": LocalJSX.AzwcCanviDrawer & JSXBase.HTMLAttributes<HTMLAzwcCanviDrawerElement>;
            "azwc-collapse-t1": LocalJSX.AzwcCollapseT1 & JSXBase.HTMLAttributes<HTMLAzwcCollapseT1Element>;
            "azwc-dialog": LocalJSX.AzwcDialog & JSXBase.HTMLAttributes<HTMLAzwcDialogElement>;
            "azwc-file-manager": LocalJSX.AzwcFileManager & JSXBase.HTMLAttributes<HTMLAzwcFileManagerElement>;
            "azwc-nav-button": LocalJSX.AzwcNavButton & JSXBase.HTMLAttributes<HTMLAzwcNavButtonElement>;
            "azwc-spinner": LocalJSX.AzwcSpinner & JSXBase.HTMLAttributes<HTMLAzwcSpinnerElement>;
            "azwc-spinner-mask": LocalJSX.AzwcSpinnerMask & JSXBase.HTMLAttributes<HTMLAzwcSpinnerMaskElement>;
            "azwc-swiper": LocalJSX.AzwcSwiper & JSXBase.HTMLAttributes<HTMLAzwcSwiperElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
