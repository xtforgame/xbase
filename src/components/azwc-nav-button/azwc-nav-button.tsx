import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'azwc-nav-button',
  // styleUrl: 'azwc-nav-button.scss',
  shadow: false,
})
export class AzwcNavButton {

  render() {
    return (
      <Host>
        <a class="navicon-button larr">
          <div class="navicon"></div>
        </a>
        <a class="navicon-button rarr">
          <div class="navicon"></div>
        </a>
        <a class="navicon-button uarr">
          <div class="navicon"></div>
        </a>
        <a class="navicon-button darr">
          <div class="navicon"></div>
        </a>
        <a class="navicon-button x">
          <div class="navicon"></div>
        </a>
        <a class="navicon-button plus">
          <div class="navicon"></div>
        </a>
        <a class="navicon-button">
          <div class="navicon"></div>
        </a>
      </Host>
    );
  }

}
