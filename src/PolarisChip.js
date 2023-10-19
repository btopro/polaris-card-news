import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 16px 16px 0;
      }
      .link:focus,
      .link:hover,
      :host([active]) .link {
        background-color: #e4e5e7;
        color: #005fa9;
        border: 2px solid #eaefec;
        border-radius: 2px;
        cursor: pointer;
        text-decoration: underline;
      }

       .link {
        font-weight: bold;
        text-decoration: none;
        padding: 8px 4px;
        border: 2px solid #444;
        color: #444;
        font-size: 16px;
      }  
    `;
  }


  constructor() {
    super();
    this.name = 'Football';
    this.link = 'https://www.psu.edu/research/';
  }

  render() {
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></a>`;
  }
}