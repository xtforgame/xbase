/* xbase custom elements bundle */

import type { Components, JSX } from "../types/components";

interface AzwcAccordion extends Components.AzwcAccordion, HTMLElement {}
export const AzwcAccordion: {
  prototype: AzwcAccordion;
  new (): AzwcAccordion;
};

interface AzwcCanviDrawer extends Components.AzwcCanviDrawer, HTMLElement {}
export const AzwcCanviDrawer: {
  prototype: AzwcCanviDrawer;
  new (): AzwcCanviDrawer;
};

interface AzwcCollapseT1 extends Components.AzwcCollapseT1, HTMLElement {}
export const AzwcCollapseT1: {
  prototype: AzwcCollapseT1;
  new (): AzwcCollapseT1;
};

interface AzwcDialog extends Components.AzwcDialog, HTMLElement {}
export const AzwcDialog: {
  prototype: AzwcDialog;
  new (): AzwcDialog;
};

interface AzwcFileManager extends Components.AzwcFileManager, HTMLElement {}
export const AzwcFileManager: {
  prototype: AzwcFileManager;
  new (): AzwcFileManager;
};

interface AzwcGlobal extends Components.AzwcGlobal, HTMLElement {}
export const AzwcGlobal: {
  prototype: AzwcGlobal;
  new (): AzwcGlobal;
};

interface AzwcNavButton extends Components.AzwcNavButton, HTMLElement {}
export const AzwcNavButton: {
  prototype: AzwcNavButton;
  new (): AzwcNavButton;
};

interface AzwcNavMenu extends Components.AzwcNavMenu, HTMLElement {}
export const AzwcNavMenu: {
  prototype: AzwcNavMenu;
  new (): AzwcNavMenu;
};

interface AzwcNavMenuItem extends Components.AzwcNavMenuItem, HTMLElement {}
export const AzwcNavMenuItem: {
  prototype: AzwcNavMenuItem;
  new (): AzwcNavMenuItem;
};

interface AzwcSpinner extends Components.AzwcSpinner, HTMLElement {}
export const AzwcSpinner: {
  prototype: AzwcSpinner;
  new (): AzwcSpinner;
};

interface AzwcSpinnerMask extends Components.AzwcSpinnerMask, HTMLElement {}
export const AzwcSpinnerMask: {
  prototype: AzwcSpinnerMask;
  new (): AzwcSpinnerMask;
};

interface AzwcSwiper extends Components.AzwcSwiper, HTMLElement {}
export const AzwcSwiper: {
  prototype: AzwcSwiper;
  new (): AzwcSwiper;
};

interface AzwcSwiperNext extends Components.AzwcSwiperNext, HTMLElement {}
export const AzwcSwiperNext: {
  prototype: AzwcSwiperNext;
  new (): AzwcSwiperNext;
};

interface AzwcSwiperPagination extends Components.AzwcSwiperPagination, HTMLElement {}
export const AzwcSwiperPagination: {
  prototype: AzwcSwiperPagination;
  new (): AzwcSwiperPagination;
};

interface AzwcSwiperPrev extends Components.AzwcSwiperPrev, HTMLElement {}
export const AzwcSwiperPrev: {
  prototype: AzwcSwiperPrev;
  new (): AzwcSwiperPrev;
};

interface AzwcTabContent extends Components.AzwcTabContent, HTMLElement {}
export const AzwcTabContent: {
  prototype: AzwcTabContent;
  new (): AzwcTabContent;
};

interface AzwcTabLink extends Components.AzwcTabLink, HTMLElement {}
export const AzwcTabLink: {
  prototype: AzwcTabLink;
  new (): AzwcTabLink;
};

interface AzwcTabs extends Components.AzwcTabs, HTMLElement {}
export const AzwcTabs: {
  prototype: AzwcTabs;
  new (): AzwcTabs;
};

interface MyComponent extends Components.MyComponent, HTMLElement {}
export const MyComponent: {
  prototype: MyComponent;
  new (): MyComponent;
};

/**
 * Utility to define all custom elements within this package using the tag name provided in the component's source. 
 * When defining each custom element, it will also check it's safe to define by:
 *
 * 1. Ensuring the "customElements" registry is available in the global context (window).
 * 2. The component tag name is not already defined.
 *
 * Use the standard [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 
 * method instead to define custom elements individually, or to provide a different tag name.
 */
export declare const defineCustomElements: (opts?: any) => void;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bunding, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  ce?: (eventName: string, opts?: any) => CustomEvent;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;

export type { Components, JSX };

export * from '../types';
