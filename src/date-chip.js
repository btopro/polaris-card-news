import { LitElement, html, css } from 'lit';

export class DateChip extends LitElement {

  constructor() {
    super();
    this.date = null;
    this.month = null;
    this.day = null;
  }

  static get tag() {
    return "date-chip";
  }

  static get properties() {
    return {
      date: { type: String },
      month: { type: String },
      day: { type: Number }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .container {
        display: flex;
        flex-direction: column;
        float: left;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        width: 100%;
        height: 100%;
        margin-right: 10px;
        margin-top: 0em;
        margin-left: -6px;
        line-height: 24px;
        text-align: center;
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
        font-size: 14px;
        font-weight: 700;
        line-height: 23.04px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 2px;
        padding-bottom: 1px;
        text-transform: uppercase;
      }

      .day {
        background-color: #f3f3f3;
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

  updated(changedProperties) {
    if (changedProperties.has('date')) {
      this.dateToMonth();
      this.dateToDay();
    }
  }


  dateToMonth() {
    var inputDate = new Date(this.date);
    this.month = inputDate.toLocaleDateString('en-us', { month:"short" });
  }


  dateToDay() {
    var inputDate = new Date(this.date);
    this.day = inputDate.toLocaleDateString('en-us', { day:"numeric" });
  }

  render() {
    return html`
    <div class="container">
      <span class="month">${this.month}</span>
      <span class="day">${this.day}</span>
    </div>
    `;
  }
}

customElements.define(DateChip.tag, DateChip);