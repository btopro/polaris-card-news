import { LitElement, html, css } from 'lit';
import "./date-chip.js";

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
      imageSrc: { type: String },
      header: { type: String },
      desc: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        margin: 12px;
        max-width: 300px;
        flex-direction: column;
      }

      :host {
        display: inline-flex;
        margin: 12px;
        max-width: 450px;
        flex-direction: column;
      }

      .cardcontainer {
        display: flex;
        flex-direction: column;
        float: left;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        margin-right: 10px;
        line-height: 20px;
        gap: 0px;
      }

      a.chip {
        position: relative;
        display: block;
        cursor: pointer;
      }

      a.chip::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(30, 64, 124, 0.35); 
        opacity: 0; 
      }

      a.chip:hover::before {
        opacity: 1; 
      }

      a.chip img {
        max-width: 450px;
        height: auto;
      }

      a.chip {
        font-weight: bold;
        text-decoration: none;
        padding: 0px 0px;
        font-size: 16px;
      }

      .imagecontainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center; 
        align-items: center; 
      }

      @media (max-width: 768px) {
        .cardcontainer {
          flex-direction: column;
        }
      }

      .headercontainer {
        display: flex;
        marign-top: 0px;
        margin-bottom: 2px;
        margin-left: -4px;
        margin-right: -8px;
        align-items: center;
        gap: 10px; 
    }
      h3 {
        margin-top: 17px;
        font-size: 22px;
        font-family: sans-serif;

      }

      .cardheader {
        color: rgb(0, 95, 169);
        text-decoration-line: none;
        text-decoration-style: solid;
      }

      .descriptioncontainer {
        padding-left: 2px;
        padding-right: 2px;
        padding-top: 1px;
        padding-bottom: 10px;
        line-height: 24px;
        margin-top: 0px;
      }

      .description {
        font-family: 'Roboto', sans-serif;
        font-size: 19.2px;
        color: #000;
    }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.link = '';
    this.imageSrc = '';
    this.header = '';
    this.desc = '';
  }

  render() {
    return html`
    <div class="cardcontainer">
      <!-- image container -->
      <div class="imagecontainer">
        <a class="chip" href="${this.link}" target="_blank">
          <img src="${this.imageSrc}" alt="${this.name}">
          <slot>${this.name}</slot>
        </a>
      </div>
      <!-- date chip / heading -->
      <div class="headercontainer">
        <date-chip></date-chip>
        <h3>
          <a class="cardheader" href="${this.link}" target="_blank">
            <slot>${this.header}</slot>
          </a> 
        </h3>
      </div>
      <!-- desc -->
      <div class="descriptioncontainer">
        <p class="description">
          <slot>${this.desc}</slot>
        </p>
      </div>
    </div>
    `;
  }
}
