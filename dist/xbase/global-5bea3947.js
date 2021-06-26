import{S as t,D as i,E as s,a as n,b as e,c as o,V as a,K as h,M as c,N as r,P as l,d,e as u,Z as v,L as p,C as w,A as f,H as b,f as m,g as A,h as y,i as C,j as _,k as z,T as E,l as k,m as g,n as N,o as I,p as O,q as S,r as T,s as j,t as V,u as x,v as B,w as M,x as D,y as F,z as L,B as P,F as R}from"./azwc-tabs-317e62af.js";import{A as W}from"./azwc-tab-link-9a7a1b0d.js";import{A as H}from"./azwc-tab-content-e37343de.js";import{A as Z}from"./azwc-canvi-drawer-dafb0ce8.js";const q=Object.freeze({__proto__:null,EbEventBinder:class{constructor(){this.senderMap={},this.receiverMap={},this.senderEventLinksMap={},this.receiverEventLinksMap={},this.stopReceiveSenderEvent=!1}addSender(t,i){this.senderMap[t]=i}removeSender(t){delete this.senderMap[t]}addReceiver(t,i){this.receiverMap[t]=i}removeReceiver(t){delete this.receiverMap[t]}addLinkCore(t){const i=this.senderEventLinksMap[t.senderId]=this.senderEventLinksMap[t.senderId]||{},s=i[t.sourceEventName]=i[t.sourceEventName]||{callback:null,links:[]};s.callback||(s.callback=t=>{this.stopReceiveSenderEvent||s.links.forEach((({source:i,valueType:s,callback:n})=>{n({nativeEvent:t,valueType:s,value:i.getValue(s),target:i})}))},t.source.addListener(s.callback)),s.links.push(t);const n=this.receiverEventLinksMap[t.receiverId]=this.receiverEventLinksMap[t.receiverId]||{},e=n[t.destinationEventName]=n[t.destinationEventName]||{callback:null,links:[]};e.callback||(e.callback=(t,i)=>{this.stopReceiveSenderEvent=!0,e.links.forEach((({source:s})=>{s.getValue(t)!==i&&s.syncValue(t,i)})),this.stopReceiveSenderEvent=!1},t.destination.watch(e.callback)),e.links.push(t)}addLink(t,i,n,e,o,a,h){const c=this.senderMap[t];if(!c)return null;const r=c.sources[i];if(!r)return null;const l=this.receiverMap[n];if(!l)return null;const d=l.destinations[e];if(!d)return null;const u=new s(t,i,r,n,e,d,o,(t=>{d.changeValue(t.valueType,t.value),a(t)}),h);this.addLinkCore(u)}},FakeClickSource:class extends t{constructor(t,i){super(t,i),this.getRawValueType=()=>"null",this.getValue=()=>null,this.syncValue=()=>{},this.getSender=()=>this.sender,this.addListener=()=>{},this.removeListener=()=>{}}},FakeNullDestination:class extends i{constructor(t,i){super(t,i),this.getRawValueType=()=>"null",this.getValue=()=>this.value,this.changeValue=(t,i)=>{console.log("changeValue :",t,i),this.value=i},this.watch=()=>{},this.unwatch=()=>{},this.getReceiver=()=>this.receiver,this.value=!1}},EbEventLink:s,EbEventSenderWrapper:n,EbEventReceiverWrapper:e,SourceBase:t,DestinationBase:i}),X=Object.freeze({__proto__:null,Swiper:o,default:o,Virtual:a,Keyboard:h,Mousewheel:c,Navigation:r,Pagination:l,Scrollbar:d,Parallax:u,Zoom:v,Lazy:p,Controller:w,A11y:f,History:b,HashNavigation:m,Autoplay:A,EffectFade:y,EffectCube:C,EffectFlip:_,EffectCoverflow:z,Thumbs:E}),$=Object.freeze({__proto__:null,format:k,createRamdomUniqueId:g,createRamdomUniqueIdForElement:N});class K{constructor(t={}){this.options=Object.assign({speed:"0.3s",width:"300px",isDebug:!1,position:"left",pushContent:!0,navbar:".canvi-navbar",content:".canvi-content",openButton:".canvi-open-button"},t),this.isOpen=!1,this.body=document.querySelector("body"),this.transitionEvent=this._whichTransitionEvent(),this.navbar=document.querySelector(this.options.navbar),this.content=document.querySelector(this.options.content),this.openButton=document.querySelector(this.options.openButton),this.listeners={open:()=>this.open(),close:()=>this.close(),responsiveWidth:()=>this._responsiveWidth(),transitionOpenEnd:t=>this._transitionOpenEnd(t),transitionCloseEnd:t=>this._transitionCloseEnd(t)},this.init()}init(){this.options.isDebug&&(console.log("%c %s","color: #e01a51; font-style: italic;","CANVI: Init is running..."),this._objectLog()),this._buildMarkup(),this._initializeMainEvents(),this._triggerCanviEvent("canvi.init"),this.navbar.setAttribute("inert",""),this.navbar.setAttribute("aria-hidden","true")}open(){this.isOpen||(this.options.isDebug&&console.log("%c %s","color: #e01a51; font-style: italic;","CANVI: Open is running..."),this._triggerCanviEvent("canvi.before-open"),this._buildOverlay(),this._setZindex(),this.content.classList.add("is-canvi-open"),this.body.classList.add("is-canvi-open"),this.navbar.classList.add("is-canvi-open"),this._responsiveWidth(),(this.options.pushContent?this.content:this.navbar).addEventListener(this.transitionEvent,this.listeners.transitionOpenEnd),this.navbar.removeAttribute("inert"),this.navbar.removeAttribute("aria-hidden"),this.isOpen=!0)}close(){this.isOpen&&(this.options.isDebug&&console.log("%c %s","color: #e01a51; font-style: italic;","CANVI: Close is running..."),this._triggerCanviEvent("canvi.before-close"),this.overlay.classList.add("canvi-animate-out"),this.content.style.transform="translateX(0)",this.body.classList.remove("is-canvi-open"),this.navbar.classList.remove("is-canvi-open"),(this.options.pushContent?this.content:this.navbar).addEventListener(this.transitionEvent,this.listeners.transitionCloseEnd),this.navbar.setAttribute("inert",""),this.navbar.setAttribute("aria-hidden","true"),this.isOpen=!1)}toggle(){this.options.isDebug&&console.log("%c %s","color: #e01a51; font-style: italic;","CANVI: Toggle is running..."),this.isOpen?this.close():this.open()}_buildMarkup(){this.options.isDebug&&console.log("%c %s","color: #ccc; font-style: italic;","CANVI: Build markup..."),this.options.position&&(this.navbar.setAttribute("data-position",this.options.position),this.navbar.setAttribute("data-push-content",this.options.pushContent)),this.navbar.style.width=this.options.width,this.body.classList.add("is-canvi-ready")}_responsiveWidth(){this.navbar.classList.contains("is-canvi-open")&&window.matchMedia("(min-width: 0px)").matches&&(this.navbar.style.width=this.options.width,this._responsiveWidthHelper(this.options.width)),this.navbar.classList.contains("is-canvi-open")&&Array.isArray(this.options.responsiveWidths)&&this.options.responsiveWidths.length>-1&&this.options.responsiveWidths.forEach((t=>{window.matchMedia(`(min-width: ${t.breakpoint})`).matches&&(this.navbar.style.width=t.width,this._responsiveWidthHelper(t.width))}))}_responsiveWidthHelper(t){this.options.pushContent&&(this.content.style.transform="left"===this.options.position?`translateX(${t})`:`translateX(-${t})`)}_buildOverlay(){this.options.isDebug&&console.log("%c %s","color: #32da94; font-style: italic;","CANVI: Build overlay..."),this.content.querySelector(".canvi-overlay")||(this.overlay=document.createElement("div"),this.overlay.className="canvi-overlay",this.content.appendChild(this.overlay)),this.overlay.addEventListener("click",this.listeners.close),this._setTransitionSpeed()}_removeOverlay(){this.options.isDebug&&console.log("%c %s","color: #32da94; font-style: italic;","CANVI: Remove overlay..."),this.overlay&&(this.content.removeChild(this.overlay),this.overlay.removeEventListener("click",this.listeners.close))}_initializeMainEvents(){this.options.isDebug&&(console.log("%c %s","color: #ccc; font-style: italic;","CANVI: Init main events..."),console.log("%c %s","color: #999; font-style: italic;","---------")),this.body.addEventListener("keyup",(t=>{this.isOpen&&27==t.keyCode&&this.close()})),this.openButton&&this.openButton.addEventListener("click",this.listeners.open),window.addEventListener("resize",this.listeners.responsiveWidth)}_transitionOpenEnd(t){this.isOpen&&"transform"===t.propertyName&&(this.options.isDebug&&(console.log("%c %s","color: #ff7600; font-style: italic;","CANVI: Open transition end..."),console.log("%c %s","color: #999; font-style: italic;","---------")),this._triggerCanviEvent("canvi.after-open"),(this.options.pushContent?this.content:this.navbar).removeEventListener(this.transitionEvent,this.listeners.transitionOpenEnd))}_transitionCloseEnd(t){this.isOpen||"transform"!==t.propertyName||(this.options.isDebug&&console.log("%c %s","color: #ff7600; font-style: italic;","CANVI: Close transition end..."),this._triggerCanviEvent("canvi.after-close"),this._removeOverlay(),this._resetZindex(),(this.options.pushContent?this.content:this.navbar).removeEventListener(this.transitionEvent,this.listeners.transitionCloseEnd),this.content.classList.remove("is-canvi-open"))}_setTransitionSpeed(){this.navbar.style.transitionDuration=this.options.speed,this.content.style.transitionDuration=this.options.speed,this.overlay.style.animationDuration=this.options.speed}_setZindex(){this.navbar.style.zIndex=this.options.pushContent?20:1032,this.content.style.zIndex=this.options.pushContent?40:5}_resetZindex(){this.navbar.style.zIndex=1,this.content.style.zIndex=5}_whichTransitionEvent(){let t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(let s in i)if(void 0!==t.style[s])return i[s]}_triggerCanviEvent(t){this.body.dispatchEvent(new CustomEvent(t,{details:{navbar:this.navbar,openButton:this.openButton,content:this.content}}))}_objectLog(){console.groupCollapsed("Canvi Object"),console.log("Open Button: ",this.openButton),console.log("Navbar: ",this.navbar),console.log("Content: ",this.content),console.groupEnd()}}const U={version:"v1.0.0"},G={AzwcNavButton:I,AzwcNavMenu:O,AzwcNavMenuItem:S,AzwcAccordion:T,AzwcDialog:j,AzwcFileManager:V,AzwcSpinner:x,AzwcSpinnerMask:B,AzwcSwiper:M,AzwcCollapseT1:D,AzwcCanviDrawer:Z,AzwcSwiperNext:F,AzwcSwiperPrev:L,AzwcSwiperPagination:P,AzwcTabs:R,AzwcTabLink:W,AzwcTabContent:H},J=()=>Object.assign(Object.assign({Components:G},G),{thirdParty:{swiperlib:X,Swiper:o,Canvi:K},utils:$,eventBinder:q,versionInfo:U}),Q=J();async function Y(){const t=J();window.__azwc_classes=t,window.__azwc_export=t,window.__on_azwc_init&&window.__on_azwc_init(t,{})}const tt=Object.freeze({__proto__:null,getExportData:J,exportData:Q,default:Y});export{Y as a,tt as e}