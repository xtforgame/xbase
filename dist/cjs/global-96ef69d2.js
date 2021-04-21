'use strict';

const azwcCollapseT1 = require('./azwc-collapse-t1-b54e5a48.js');
const azwcCanviDrawer = require('./azwc-canvi-drawer-c9fe5477.js');

class FakeClickSource extends azwcCollapseT1.SourceBase {
  constructor(sender, options) {
    super(sender, options);
    this.getRawValueType = () => 'null';
    this.getValue = (_) => {
      return null;
    };
    this.syncValue = (_, __) => {
    };
    this.getSender = (_) => {
      return this.sender;
    };
    this.addListener = (_) => {
    };
    this.removeListener = (_) => {
    };
  }
}
class FakeNullDestination extends azwcCollapseT1.DestinationBase {
  constructor(receiver, options) {
    super(receiver, options);
    this.getRawValueType = () => 'null';
    this.getValue = (_) => {
      return this.value;
    };
    this.changeValue = (valueType, value) => {
      console.log('changeValue :', valueType, value);
      this.value = value;
    };
    this.watch = (_) => {
    };
    this.unwatch = (_) => {
    };
    this.getReceiver = (_) => {
      return this.receiver;
    };
    this.value = false;
  }
}

class EbEventBinder {
  constructor() {
    this.senderMap = {};
    this.receiverMap = {};
    this.senderEventLinksMap = {};
    this.receiverEventLinksMap = {};
    this.stopReceiveSenderEvent = false;
  }
  addSender(id, sender) {
    this.senderMap[id] = sender;
  }
  removeSender(id) {
    delete this.senderMap[id];
  }
  addReceiver(id, receiver) {
    this.receiverMap[id] = receiver;
  }
  removeReceiver(id) {
    delete this.receiverMap[id];
  }
  // =====================
  addLinkCore(link) {
    const senderEventLinks = this.senderEventLinksMap[link.senderId] = this.senderEventLinksMap[link.senderId] || {};
    const sourceLinks = senderEventLinks[link.sourceEventName] = senderEventLinks[link.sourceEventName] || {
      callback: null,
      links: [],
    };
    if (!sourceLinks.callback) {
      sourceLinks.callback = (e) => {
        if (this.stopReceiveSenderEvent) {
          return;
        }
        sourceLinks.links.forEach(({ source, valueType, callback }) => {
          callback({
            nativeEvent: e,
            valueType: valueType,
            value: source.getValue(valueType),
            target: source,
          });
        });
      };
      link.source.addListener(sourceLinks.callback);
    }
    sourceLinks.links.push(link);
    const receiverEventLinks = this.receiverEventLinksMap[link.receiverId] = this.receiverEventLinksMap[link.receiverId] || {};
    const destinationLinks = receiverEventLinks[link.destinationEventName] = receiverEventLinks[link.destinationEventName] || {
      callback: null,
      links: [],
    };
    if (!destinationLinks.callback) {
      destinationLinks.callback = (valueType, v) => {
        this.stopReceiveSenderEvent = true;
        destinationLinks.links.forEach(({ source }) => {
          if (source.getValue(valueType) !== v) {
            source.syncValue(valueType, v);
          }
        });
        this.stopReceiveSenderEvent = false;
      };
      link.destination.watch(destinationLinks.callback);
    }
    destinationLinks.links.push(link);
  }
  addLink(senderId, sourceEventName, receiverId, destinationEventName, valueType, cb, options) {
    const sender = this.senderMap[senderId];
    if (!sender) {
      return null;
    }
    const source = sender.sources[sourceEventName];
    if (!source) {
      return null;
    }
    const receiver = this.receiverMap[receiverId];
    if (!receiver) {
      return null;
    }
    const destination = receiver.destinations[destinationEventName];
    if (!destination) {
      return null;
    }
    const callback = (exEvent) => {
      destination.changeValue(exEvent.valueType, exEvent.value);
      cb(exEvent);
    };
    const link = new azwcCollapseT1.EbEventLink(senderId, sourceEventName, source, receiverId, destinationEventName, destination, valueType, callback, options);
    this.addLinkCore(link);
  }
}

const eventBinder = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EbEventBinder: EbEventBinder,
  FakeClickSource: FakeClickSource,
  FakeNullDestination: FakeNullDestination,
  EbEventLink: azwcCollapseT1.EbEventLink,
  EbEventSenderWrapper: azwcCollapseT1.EbEventSenderWrapper,
  EbEventReceiverWrapper: azwcCollapseT1.EbEventReceiverWrapper,
  SourceBase: azwcCollapseT1.SourceBase,
  DestinationBase: azwcCollapseT1.DestinationBase
});

/**
 * Swiper 6.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 5, 2021
 */

const swiperlib = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Swiper: azwcCollapseT1.Swiper,
  'default': azwcCollapseT1.Swiper,
  Virtual: azwcCollapseT1.Virtual,
  Keyboard: azwcCollapseT1.Keyboard,
  Mousewheel: azwcCollapseT1.Mousewheel,
  Navigation: azwcCollapseT1.Navigation,
  Pagination: azwcCollapseT1.Pagination,
  Scrollbar: azwcCollapseT1.Scrollbar,
  Parallax: azwcCollapseT1.Parallax,
  Zoom: azwcCollapseT1.Zoom,
  Lazy: azwcCollapseT1.Lazy,
  Controller: azwcCollapseT1.Controller,
  A11y: azwcCollapseT1.A11y,
  History: azwcCollapseT1.History,
  HashNavigation: azwcCollapseT1.HashNavigation,
  Autoplay: azwcCollapseT1.Autoplay,
  EffectFade: azwcCollapseT1.EffectFade,
  EffectCube: azwcCollapseT1.EffectCube,
  EffectFlip: azwcCollapseT1.EffectFlip,
  EffectCoverflow: azwcCollapseT1.EffectCoverflow,
  Thumbs: azwcCollapseT1.Thumbs
});

const utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  format: azwcCollapseT1.format,
  createRamdomUniqueId: azwcCollapseT1.createRamdomUniqueId,
  createRamdomUniqueIdForElement: azwcCollapseT1.createRamdomUniqueIdForElement
});

// https://github.com/conedevelopment/canvi
class Canvi {
  constructor(options = {}) {
    this.options = Object.assign({
      speed: '0.3s',
      width: '300px',
      isDebug: false,
      position: 'left',
      pushContent: true,
      navbar: '.canvi-navbar',
      content: '.canvi-content',
      openButton: '.canvi-open-button',
    }, options);

    this.isOpen = false;
    this.body = document.querySelector('body');
    this.transitionEvent = this._whichTransitionEvent();
    this.navbar = document.querySelector(this.options.navbar);
    this.content = document.querySelector(this.options.content);
    this.openButton = document.querySelector(this.options.openButton);

    this.listeners = {
      open: () => this.open(),
      close: () => this.close(),
      responsiveWidth: () => this._responsiveWidth(),
      transitionOpenEnd: event => this._transitionOpenEnd(event),
      transitionCloseEnd: event => this._transitionCloseEnd(event),
    };

    this.init();
  }

  init() {
    if (this.options.isDebug) {
      console.log('%c %s', 'color: #e01a51; font-style: italic;', 'CANVI: Init is running...');
      this._objectLog();
    }

    this._buildMarkup();
    this._initializeMainEvents();
    this._triggerCanviEvent('canvi.init');

    this.navbar.setAttribute('inert', '');
    this.navbar.setAttribute('aria-hidden', 'true');
  }

  open() {
    if (this.isOpen) {
      return;
    }

    if (this.options.isDebug) {
      console.log('%c %s', 'color: #e01a51; font-style: italic;', 'CANVI: Open is running...');
    }

    this._triggerCanviEvent('canvi.before-open');
    this._buildOverlay();
    this._setZindex();

    this.content.classList.add('is-canvi-open');
    this.body.classList.add('is-canvi-open');
    this.navbar.classList.add('is-canvi-open');

    this._responsiveWidth();

    (this.options.pushContent ? this.content : this.navbar)
      .addEventListener(this.transitionEvent, this.listeners.transitionOpenEnd);

    this.navbar.removeAttribute('inert');
    this.navbar.removeAttribute('aria-hidden');

    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) {
      return;
    }

    if (this.options.isDebug) {
      console.log('%c %s', 'color: #e01a51; font-style: italic;', 'CANVI: Close is running...');
    }

    this._triggerCanviEvent('canvi.before-close');

    this.overlay.classList.add('canvi-animate-out');
    this.content.style.transform = 'translateX(0)';
    this.body.classList.remove('is-canvi-open');
    this.navbar.classList.remove('is-canvi-open');

    (this.options.pushContent ? this.content : this.navbar)
      .addEventListener(this.transitionEvent, this.listeners.transitionCloseEnd);

    this.navbar.setAttribute('inert', '');
    this.navbar.setAttribute('aria-hidden', 'true');

    this.isOpen = false;
  }

  toggle() {
    if (this.options.isDebug) {
      console.log('%c %s', 'color: #e01a51; font-style: italic;', 'CANVI: Toggle is running...');
    }

    this.isOpen ? this.close() : this.open();
  }

  _buildMarkup() {
    if (this.options.isDebug) {
      console.log('%c %s', 'color: #ccc; font-style: italic;', 'CANVI: Build markup...');
    }

    if (this.options.position) {
      this.navbar.setAttribute('data-position', this.options.position);
      this.navbar.setAttribute('data-push-content', this.options.pushContent);
    }

    this.navbar.style.width = this.options.width;
    this.body.classList.add('is-canvi-ready');
  }

  _responsiveWidth() {
    if (this.navbar.classList.contains('is-canvi-open') && window.matchMedia('(min-width: 0px)').matches) {
      this.navbar.style.width = this.options.width;
      this._responsiveWidthHelper(this.options.width);
    }

    if (this.navbar.classList.contains('is-canvi-open') && Array.isArray(this.options.responsiveWidths) && this.options.responsiveWidths.length > -1) {
      this.options.responsiveWidths.forEach(element => {
        if (window.matchMedia(`(min-width: ${element.breakpoint})`).matches) {
          this.navbar.style.width = element.width;
          this._responsiveWidthHelper(element.width);
        }
      });
    }
  }

  _responsiveWidthHelper(width) {
    if (this.options.pushContent) {
      this.content.style.transform = this.options.position === 'left'
        ? `translateX(${width})`
        : `translateX(-${width})`;
    }
  }

  _buildOverlay() {
    if (this.options.isDebug) {
      console.log('%c %s', 'color: #32da94; font-style: italic;', 'CANVI: Build overlay...');
    }

    if (!this.content.querySelector('.canvi-overlay')) {
      this.overlay = document.createElement('div');
      this.overlay.className = 'canvi-overlay';
      this.content.appendChild(this.overlay);
    }

    this.overlay.addEventListener('click', this.listeners.close);

    this._setTransitionSpeed();
  }

  _removeOverlay() {
    if (this.options.isDebug) {
      console.log('%c %s', 'color: #32da94; font-style: italic;', 'CANVI: Remove overlay...');
    }

    if (this.overlay) {
      this.content.removeChild(this.overlay);
      this.overlay.removeEventListener('click', this.listeners.close);
    }
  }

  _initializeMainEvents() {
    if (this.options.isDebug) {
      console.log('%c %s', 'color: #ccc; font-style: italic;', 'CANVI: Init main events...');
      console.log('%c %s', 'color: #999; font-style: italic;', '---------');
    }

    this.body.addEventListener('keyup', event => {
      if (this.isOpen && event.keyCode == 27) {
        this.close();
      }
    });

    if (this.openButton) {
      this.openButton.addEventListener('click', this.listeners.open);
    }

    window.addEventListener('resize', this.listeners.responsiveWidth);
  }

  _transitionOpenEnd(event) {
    if (!this.isOpen || event.propertyName !== 'transform') {
      return;
    }

    if (this.options.isDebug) {
      console.log('%c %s', 'color: #ff7600; font-style: italic;', 'CANVI: Open transition end...');
      console.log('%c %s', 'color: #999; font-style: italic;', '---------');
    }

    this._triggerCanviEvent('canvi.after-open');

    (this.options.pushContent ? this.content : this.navbar)
      .removeEventListener(this.transitionEvent, this.listeners.transitionOpenEnd);
  }

  _transitionCloseEnd(event) {
    if (this.isOpen || event.propertyName !== 'transform') {
      return;
    }

    if (this.options.isDebug) {
      console.log('%c %s', 'color: #ff7600; font-style: italic;', 'CANVI: Close transition end...');
    }

    this._triggerCanviEvent('canvi.after-close');
    this._removeOverlay();
    this._resetZindex();

    (this.options.pushContent ? this.content : this.navbar)
      .removeEventListener(this.transitionEvent, this.listeners.transitionCloseEnd);

    this.content.classList.remove('is-canvi-open');
  }

  _setTransitionSpeed() {
    this.navbar.style.transitionDuration = this.options.speed;
    this.content.style.transitionDuration = this.options.speed;
    this.overlay.style.animationDuration = this.options.speed;
  }

  _setZindex() {
    this.navbar.style.zIndex = this.options.pushContent ? 20 : 1032;
    this.content.style.zIndex = this.options.pushContent ? 40 : 5;
  }

  _resetZindex() {
    this.navbar.style.zIndex = 1;
    this.content.style.zIndex = 5;
  }

  _whichTransitionEvent() {
    let el = document.createElement('fakeelement'),
      transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };

    for (let t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  _triggerCanviEvent(name) {
    this.body.dispatchEvent(new CustomEvent(name, {
      details: {
        navbar: this.navbar,
        openButton: this.openButton,
        content: this.content
      }
    }));
  }

  _objectLog() {
    console.groupCollapsed('Canvi Object');
    console.log('Open Button: ', this.openButton);
    console.log('Navbar: ', this.navbar);
    console.log('Content: ', this.content);
    console.groupEnd();
  }
}

const Components = {
  AzwcNavButton: azwcCollapseT1.AzwcNavButton,
  AzwcAccordion: azwcCollapseT1.AzwcAccordion,
  AzwcDialog: azwcCollapseT1.AzwcDialog,
  AzwcFileManager: azwcCollapseT1.AzwcFileManager,
  AzwcSpinner: azwcCollapseT1.AzwcSpinner,
  AzwcSpinnerMask: azwcCollapseT1.AzwcSpinnerMask,
  AzwcSwiper: azwcCollapseT1.AzwcSwiper,
  AzwcCollapseT1: azwcCollapseT1.AzwcCollapseT1,
  AzwcCanviDrawer: azwcCanviDrawer.AzwcCanviDrawer,
};
const getExportData = () => (Object.assign(Object.assign({ Components }, Components), { thirdParty: {
    swiperlib,
    Swiper: azwcCollapseT1.Swiper,
    Canvi,
  }, utils,
  eventBinder }));
const exportData = getExportData();
async function appGlobalScript () {
  const exportData = getExportData();
  window.__azwc_classes = exportData;
  window.__azwc_export = exportData;
  if (window.__on_azwc_init) {
    window.__on_azwc_init(exportData, {});
  }
}

const exports$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getExportData: getExportData,
  exportData: exportData,
  'default': appGlobalScript
});

exports.appGlobalScript = appGlobalScript;
exports.exports = exports$1;
