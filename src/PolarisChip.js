import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
      date: { type: String },
      month: { type: String },
      day: { type: Number }
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

      .month {
        background-color: #1E407C;
        background-clip: border-box;
        background-origin: padding-box;
        background-size: auto;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        color: white;
        font-size: 12.8px;
        font-weight: 700;
        line-height: 23.04px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 1px;
        padding-bottom: 1px;
        text-transform: uppercase;
      }
      .day {
        background-color: white;
        background-clip: border-box;
        background-origin: padding-box;
        background-size: auto;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        color: #444444;
        font-size: 18px;
        font-weight: 900;
        line-height: 27px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
      }  
    `;
  }

  constructor() {
    super();
    this.name = 'flu shot';
    this.link = 'https://hr.psu.edu/news/university-reminds-employees-flu-covid-19-vaccines-resources-and-policies';
    this.date = '01/01/2001'
    this.month = 'Jan';
    this.day = 1;
  }

  updated(changedProperties) {
    if (changedProperties.has('date')) {
      this.dateToMonth();
      this.dateToDay();
    }
  }

  dateToMonth() {
    const inputDate = new Date(this.date);
    this.month = inputDate.toLocaleDateString('en-us', { month:"short" });
  }

  dateToDay() {
    const inputDate = new Date(this.date);
    this.day = inputDate.toLocaleDateString('en-us', { day:"numeric" });
  }

  render() {
    return html`
    <div class="card">
      <div class="card-header">
        <div class="date-tag">${this.month} ${this.day}</div>
        <img src="https://hr.psu.edu/sites/hr/files/styles/homepage_hero/public/2023-10/ExpandedFamilySick_0.jpg?h=5265ff56&itok=vq6ggXyF" alt="flu" class="card-image"/>
      </div>
      <h1>${this.name}</h1>
      <div class="content">
        <a href="${this.link}" class="link">${this.name}</a>
        <slot></slot>
      </div>
    </div>
    `;
  }
}

customElements.define('polaris-chip', PolarisChip);