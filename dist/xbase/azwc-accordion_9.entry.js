import{r as a,h as e,H as n,g as c}from"./index-54a7a200.js";import{l as i}from"./azwc-collapse-t1-f2b38e55.js";export{p as azwc_accordion,v as azwc_collapse_t1,q as azwc_dialog,r as azwc_file_manager,o as azwc_nav_button,s as azwc_spinner,t as azwc_spinner_mask,u as azwc_swiper}from"./azwc-collapse-t1-f2b38e55.js";const l=class{constructor(s){a(this,s),this.switchX=!0,this.switchY=!0}static X(){console.log("ssss")}getText(){return i(this.first,this.middle,this.last)}async togglePadding(){this.switchX=!this.switchX}componentWillLoad(){}componentDidLoad(){setInterval((()=>{this.switchY=!this.switchY}),1e3)}disconnectedCallback(){}render(){let s="22px",t="on :";return"Rick"===this.first&&(s="12px"),this.switchX&&(s="0px"),this.switchY||(t="off :"),e(n,null,e("div",{part:"mc-container",class:"mc-container",style:{padding:s}},e("button",null,"XXXXX"),e("slot",{name:"top"}),t,"Hello, World! I'm ",this.getText(),e("slot",{name:"body"})))}get host(){return c(this)}};export{l as my_component}