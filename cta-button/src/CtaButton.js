import { html, css, LitElement } from 'lit';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border-radius: 48px;
        padding: 25px;
        --bose-foreground-color: darkGreen;
        --bose-background-color: #006400;
  }
 
  

  .ctaButton {
        border-radius: 48px;
        padding: 12px 50px;
        color: var(--bose-foreground-color);
        background-color: var(--bose-background-color);
        border: 2px solid var(--bose-foreground-color);
        transition-duration: 0.5s;
        font-family: impact;
        font-size: large;
  }

  

  .CtaButton:hover {
    border-radius: 48px;
        --bose-foreground-color: #006400;
        --bose-background-color: darkGreen;
        box-shadow: 0 12px 16px 0 rgba(0, 100, 0),
          0 17px 50px 0 rgba(0, 100, 0);
      }
      :host([invert]) .ctaButton:hover,
      :host([invert]) .ctaButton:focus {
        --bose-foreground-color: #006400;
        --bose-background-color: darkGreen;
      }
    `;
  }

  //defines type of variables

  static get properties() {
    return {
      title: { type: String },
      invert: { type: Boolean, reflect: true},
    };
  }

  // constructor for title and invert change
  constructor() {
    super();
    this.title = 'Bose Button';
    this.invert = false;
  }

  //method for link
  _myLink() {
    window.open(
      'https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/quietcomfort-headphones-45.html#v=qc45_white_smoke'
    );
  }
  
  //get button to go to link on click
  render() {
    return html`
      <button class="CtaButton" id="GenericButton" @click="${this._myLink}">
      ${this.title}
      </button>
      `;
  }
}
