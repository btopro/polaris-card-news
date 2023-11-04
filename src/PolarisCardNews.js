import { LitElement, html, css } from 'lit';
import "./date-chip.js";

export class PolarisCardNews extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.link = '';
    this.image = '';
    this.desc = '';
    this.date = '';
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      image: { type: String },
      desc: { type: String },
      date: { type: String },
    };
  }

  static get styles() {
    return css`
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

      .image-link {
        position: relative;
        display: block;
        cursor: pointer;
      }

      .image-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(30, 64, 124, 0.35); 
        opacity: 0; 
      }

      .image-link:hover::before {
        opacity: 1; 
      }

      .image-link img {
        max-width: 450px;
        height: auto;
      }

      .image-link {
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

      .headercontainer {
        display: flex;
        margin: 10px 0;
        align-items: stretch;
        gap: 10px; 
      }

      h3 {
        font-size: 20.8px;
        font-family: sans-serif;
        margin-block-start: 0em;
        margin-block-end: 0em;
        font-weight: 400;

      }

      .cardheader {
        color: rgb(0, 95, 169);
        text-decoration-line: none;
        text-decoration-style: solid;
      }

      .descriptioncontainer {
        padding-left: -2px;
        padding-right: 1px;
        padding-top: 0em;
        padding-bottom: 10px;
        line-height: 24px;
        margin-top: 0px;
      }

      .description {
        font-family: 'Roboto', sans-serif;
        font-size: 19.2px;
        color: #000;
        font-weight: 150;
      }
      @media (max-width: 768px) {
        .cardcontainer {
          flex-direction: column;
        }
      }
    `;
  }

  render() {
    return html`
    <div class="cardcontainer">
      <!-- image container -->
      <div class="imagecontainer">
        <a class="image-link" href="${this.link}">
          <img src="${this.image}" alt="" />
        </a>
      </div>
      <!-- date chip / heading -->
      <div class="headercontainer">
        <date-chip date="${this.date}"></date-chip>
        <a class="cardheader" href="${this.link}">
          <h3>
            <slot name="header">${this.title}</slot>
          </h3>
        </a> 
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
