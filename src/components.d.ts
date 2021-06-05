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
        "labelPlacement": 'left' | 'right';
        "type": 'sign' | 'arrow' | 'angle-bracket' | '';
    }
    interface AzwcDialog {
        "dialogid": string;
        "getInst": () => Promise<this>;
    }
    interface AzwcFileManager {
        "basePath": string;
        "reload": (newPaths?: string[]) => Promise<void>;
        "setApi": (fileApi: any) => Promise<void>;
    }
    interface AzwcGlobal {
    }
    interface AzwcNavButton {
        "getInst": () => Promise<this>;
        "stayclosed": boolean;
        "type": 'larr' | 'rarr' | 'uarr' | 'darr' | 'x' | 'plus' | '';
    }
    interface AzwcNavMenu {
        "showOn": 'left-side' | '';
        "type": 'left-side' | '';
    }
    interface AzwcNavMenuItem {
        "showOn": 'left-side' | '';
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
        "nextSelector": string;
        "paginationSelector": string;
        "prevSelector": string;
        "slideTo": (index: Number, speed?: Number) => Promise<void>;
        "speed": number;
    }
    interface AzwcSwiperNext {
    }
    interface AzwcSwiperPagination {
    }
    interface AzwcSwiperPrev {
    }
    interface AzwcTabContent {
    }
    interface AzwcTabLink {
    }
    interface AzwcTabs {
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
    interface HTMLAzwcGlobalElement extends Components.AzwcGlobal, HTMLStencilElement {
    }
    var HTMLAzwcGlobalElement: {
        prototype: HTMLAzwcGlobalElement;
        new (): HTMLAzwcGlobalElement;
    };
    interface HTMLAzwcNavButtonElement extends Components.AzwcNavButton, HTMLStencilElement {
    }
    var HTMLAzwcNavButtonElement: {
        prototype: HTMLAzwcNavButtonElement;
        new (): HTMLAzwcNavButtonElement;
    };
    interface HTMLAzwcNavMenuElement extends Components.AzwcNavMenu, HTMLStencilElement {
    }
    var HTMLAzwcNavMenuElement: {
        prototype: HTMLAzwcNavMenuElement;
        new (): HTMLAzwcNavMenuElement;
    };
    interface HTMLAzwcNavMenuItemElement extends Components.AzwcNavMenuItem, HTMLStencilElement {
    }
    var HTMLAzwcNavMenuItemElement: {
        prototype: HTMLAzwcNavMenuItemElement;
        new (): HTMLAzwcNavMenuItemElement;
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
    interface HTMLAzwcSwiperNextElement extends Components.AzwcSwiperNext, HTMLStencilElement {
    }
    var HTMLAzwcSwiperNextElement: {
        prototype: HTMLAzwcSwiperNextElement;
        new (): HTMLAzwcSwiperNextElement;
    };
    interface HTMLAzwcSwiperPaginationElement extends Components.AzwcSwiperPagination, HTMLStencilElement {
    }
    var HTMLAzwcSwiperPaginationElement: {
        prototype: HTMLAzwcSwiperPaginationElement;
        new (): HTMLAzwcSwiperPaginationElement;
    };
    interface HTMLAzwcSwiperPrevElement extends Components.AzwcSwiperPrev, HTMLStencilElement {
    }
    var HTMLAzwcSwiperPrevElement: {
        prototype: HTMLAzwcSwiperPrevElement;
        new (): HTMLAzwcSwiperPrevElement;
    };
    interface HTMLAzwcTabContentElement extends Components.AzwcTabContent, HTMLStencilElement {
    }
    var HTMLAzwcTabContentElement: {
        prototype: HTMLAzwcTabContentElement;
        new (): HTMLAzwcTabContentElement;
    };
    interface HTMLAzwcTabLinkElement extends Components.AzwcTabLink, HTMLStencilElement {
    }
    var HTMLAzwcTabLinkElement: {
        prototype: HTMLAzwcTabLinkElement;
        new (): HTMLAzwcTabLinkElement;
    };
    interface HTMLAzwcTabsElement extends Components.AzwcTabs, HTMLStencilElement {
    }
    var HTMLAzwcTabsElement: {
        prototype: HTMLAzwcTabsElement;
        new (): HTMLAzwcTabsElement;
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
        "azwc-global": HTMLAzwcGlobalElement;
        "azwc-nav-button": HTMLAzwcNavButtonElement;
        "azwc-nav-menu": HTMLAzwcNavMenuElement;
        "azwc-nav-menu-item": HTMLAzwcNavMenuItemElement;
        "azwc-spinner": HTMLAzwcSpinnerElement;
        "azwc-spinner-mask": HTMLAzwcSpinnerMaskElement;
        "azwc-swiper": HTMLAzwcSwiperElement;
        "azwc-swiper-next": HTMLAzwcSwiperNextElement;
        "azwc-swiper-pagination": HTMLAzwcSwiperPaginationElement;
        "azwc-swiper-prev": HTMLAzwcSwiperPrevElement;
        "azwc-tab-content": HTMLAzwcTabContentElement;
        "azwc-tab-link": HTMLAzwcTabLinkElement;
        "azwc-tabs": HTMLAzwcTabsElement;
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
        "labelPlacement"?: 'left' | 'right';
        "type"?: 'sign' | 'arrow' | 'angle-bracket' | '';
    }
    interface AzwcDialog {
        "dialogid"?: string;
        "onCustomStateChange"?: (event: CustomEvent<any>) => void;
    }
    interface AzwcFileManager {
        "basePath"?: string;
    }
    interface AzwcGlobal {
    }
    interface AzwcNavButton {
        "onCustomStateChange"?: (event: CustomEvent<any>) => void;
        "stayclosed"?: boolean;
        "type"?: 'larr' | 'rarr' | 'uarr' | 'darr' | 'x' | 'plus' | '';
    }
    interface AzwcNavMenu {
        "showOn"?: 'left-side' | '';
        "type"?: 'left-side' | '';
    }
    interface AzwcNavMenuItem {
        "showOn"?: 'left-side' | '';
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
        "nextSelector"?: string;
        "onSlideChanged"?: (event: CustomEvent<any>) => void;
        "paginationSelector"?: string;
        "prevSelector"?: string;
        "speed"?: number;
    }
    interface AzwcSwiperNext {
    }
    interface AzwcSwiperPagination {
    }
    interface AzwcSwiperPrev {
    }
    interface AzwcTabContent {
    }
    interface AzwcTabLink {
    }
    interface AzwcTabs {
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
        "azwc-global": AzwcGlobal;
        "azwc-nav-button": AzwcNavButton;
        "azwc-nav-menu": AzwcNavMenu;
        "azwc-nav-menu-item": AzwcNavMenuItem;
        "azwc-spinner": AzwcSpinner;
        "azwc-spinner-mask": AzwcSpinnerMask;
        "azwc-swiper": AzwcSwiper;
        "azwc-swiper-next": AzwcSwiperNext;
        "azwc-swiper-pagination": AzwcSwiperPagination;
        "azwc-swiper-prev": AzwcSwiperPrev;
        "azwc-tab-content": AzwcTabContent;
        "azwc-tab-link": AzwcTabLink;
        "azwc-tabs": AzwcTabs;
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
            "azwc-global": LocalJSX.AzwcGlobal & JSXBase.HTMLAttributes<HTMLAzwcGlobalElement>;
            "azwc-nav-button": LocalJSX.AzwcNavButton & JSXBase.HTMLAttributes<HTMLAzwcNavButtonElement>;
            "azwc-nav-menu": LocalJSX.AzwcNavMenu & JSXBase.HTMLAttributes<HTMLAzwcNavMenuElement>;
            "azwc-nav-menu-item": LocalJSX.AzwcNavMenuItem & JSXBase.HTMLAttributes<HTMLAzwcNavMenuItemElement>;
            "azwc-spinner": LocalJSX.AzwcSpinner & JSXBase.HTMLAttributes<HTMLAzwcSpinnerElement>;
            "azwc-spinner-mask": LocalJSX.AzwcSpinnerMask & JSXBase.HTMLAttributes<HTMLAzwcSpinnerMaskElement>;
            "azwc-swiper": LocalJSX.AzwcSwiper & JSXBase.HTMLAttributes<HTMLAzwcSwiperElement>;
            "azwc-swiper-next": LocalJSX.AzwcSwiperNext & JSXBase.HTMLAttributes<HTMLAzwcSwiperNextElement>;
            "azwc-swiper-pagination": LocalJSX.AzwcSwiperPagination & JSXBase.HTMLAttributes<HTMLAzwcSwiperPaginationElement>;
            "azwc-swiper-prev": LocalJSX.AzwcSwiperPrev & JSXBase.HTMLAttributes<HTMLAzwcSwiperPrevElement>;
            "azwc-tab-content": LocalJSX.AzwcTabContent & JSXBase.HTMLAttributes<HTMLAzwcTabContentElement>;
            "azwc-tab-link": LocalJSX.AzwcTabLink & JSXBase.HTMLAttributes<HTMLAzwcTabLinkElement>;
            "azwc-tabs": LocalJSX.AzwcTabs & JSXBase.HTMLAttributes<HTMLAzwcTabsElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
