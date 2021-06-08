// https://www.w3schools.com/howto/howto_js_tabs.asp
import { Component, Host, h } from '@stencil/core';
export class AzwcTabs {
  openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks, tabcontents;
    // Get all elements with class="aztabcontents" and remove the class "active"
    tabcontents = document.getElementsByClassName("aztabcontent");
    for (i = 0; i < tabcontents.length; i++) {
      tabcontents[i].className = tabcontents[i].className.replace(" active", "");
    }
    // Get all elements with class="aztablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("aztablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    tabcontent = document.getElementById(cityName);
    tabcontent.className += " active";
    evt.currentTarget.className += " active";
  }
  render() {
    return (h(Host, null,
      h("div", { class: "aztab" },
        h("button", { class: "aztablinks active", onClick: (event) => { this.openCity(event, 'London'); } }, "London"),
        h("button", { class: "aztablinks", onClick: (event) => { this.openCity(event, 'Paris'); } }, "Paris"),
        h("button", { class: "aztablinks", onClick: (event) => { this.openCity(event, 'Tokyo'); } }, "Tokyo")),
      h("div", { id: "London", class: "aztabcontent active" },
        h("h3", null, "London"),
        h("p", null, "London is the capital city of England.")),
      h("div", { id: "Paris", class: "aztabcontent" },
        h("h3", null, "Paris"),
        h("p", null, "Paris is the capital of France.")),
      h("div", { id: "Tokyo", class: "aztabcontent" },
        h("h3", null, "Tokyo"),
        h("p", null, "Tokyo is the capital of Japan."))));
  }
  static get is() { return "azwc-tabs"; }
}
