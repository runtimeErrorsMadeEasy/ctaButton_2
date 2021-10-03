import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        border-radius: 24px;
        padding: 12px 50px;
        --bose-foreground-color: black;
        --bose-background-color: white;
        --bose-text-color: white;
        cursor: pointer;
      }

      .CtaButton {
        border-radius: 24px;
        padding: 12px 50px;
        color: var(--bose-foreground-color);
        background-color: var(--bose-background-color);
        border: 2px solid var(--bose-foreground-color);
        transition-duration: 0.5s;
        font-family: impact;
        font-size: large;
        cursor: pointer;
      }
      :host([disabled]) {
        opacity: 0.6;
        cursor: not-allowed;
      }
      :host([dark]) {
        --bose-foreground-color: white;
        --bose-background-color: black;
      }

      .CtaButton:hover,
      .CtaButton:active,
      .CtaButton:focus {
        border-radius: 24px;
        --bose-foreground-color: white;
        --bose-background-color: white;
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
          0 17px 50px 0 rgba(0, 0, 0, 0.19);
        cursor: pointer;
      }
      :host([invert]) .CtaButton:hover,
      :host([invert]) .CtaButton:active,
      :host([invert]) .CtaButton:focus {
        --bose-foreground-color: white;
        --bose-background-color: black;
        cursor: pointer;
      }
    `;
  }

  // defines type of variables

  static get properties() {
    return {
      title: { type: String },
      invert: { type: Boolean, reflect: true },
      icon: { type: String },
      link: { type: String },
      iconEnable: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
    };
  }

  // constructor for title and invert change
  constructor() {
    super();
    this.title = 'Bose Button';
    this.invert = true;
    this.icon = 'image:music-note';
    this.link =
      'https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/quietcomfort-headphones-45.html#v=qc45_white_smoke';
    this.iconEnable = false;
    this.disabled = false;
  }

  // get button to go to link on click
  render() {
    return html`
      <a href="${this.link}" @click="${this.link}">
        <button class="CtaButton" ?disabled="${this.disabled}">
          ${this.iconEnable
            ? html`<simple-icon-lite icon="${this.icon}"></simple-icon-lite>`
            : html``}
          ${this.title}
        </button>
      </a>
    `;
  }
}
