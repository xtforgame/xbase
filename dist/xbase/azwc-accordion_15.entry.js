import{r as a,h as n,H as e,g as i}from"./index-d1628334.js";import{l as c}from"./azwc-tabs-41650461.js";export{r as azwc_accordion,x as azwc_collapse_t1,s as azwc_dialog,t as azwc_file_manager,o as azwc_nav_button,p as azwc_nav_menu,q as azwc_nav_menu_item,u as azwc_spinner,v as azwc_spinner_mask,w as azwc_swiper,y as azwc_swiper_next,B as azwc_swiper_pagination,z as azwc_swiper_prev,F as azwc_tabs}from"./azwc-tabs-41650461.js";const l=class{constructor(s){a(this,s),this.switchX=!0,this.switchY=!0}static X(){console.log("ssss")}getText(){return c(this.first,this.middle,this.last)}async togglePadding(){this.switchX=!this.switchX}componentWillLoad(){}componentDidLoad(){setInterval((()=>{this.switchY=!this.switchY}),1e3)}disconnectedCallback(){}render(){let s="22px",a="on :";return"Rick"===this.first&&(s="12px"),this.switchX&&(s="0px"),this.switchY||(a="off :"),n(e,null,n("div",{part:"mc-container",class:"mc-container",style:{padding:s}},n("button",null,"XXXXX"),n("slot",{name:"top"}),a,"Hello, World! I'm ",this.getText(),n("slot",{name:"body"})))}get host(){return i(this)}};export{l as my_component}