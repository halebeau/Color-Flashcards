import React, { Component } from "react";
import { formatDate } from "../helpers/formatDate";

export default class Card extends Component {
  render() {
    const { title, date, description, color } = this.props.node;

    let cardClass = "card-wrapper";
    switch (color) {
      case "green":
        cardClass = "card-wrapper color--green";
        break;

      case "pink":
        cardClass = "card-wrapper color--pink";
        break;

      case "red":
        cardClass = "card-wrapper color--red";
        break;

      case "orange":
        cardClass = "card-wrapper color--orange";
        break;

      default:
        break;
    }

    return (
      <div className={cardClass}>
        <div className="card">
          <h3 className="card-title">{title}</h3>
          <h6 className='card--date'>Created on {formatDate(date)}</h6>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
