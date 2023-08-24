import React from "react";
type flightData = {
  destination: string;
  from: string;
  time: string;
  backTime: string;
  fee: number;
  refundable: boolean;
  company: string;
  seatLeft: number;
  transitsNumber: number;
  seatClass: string;
};
const Cards = ({ flight }) => {
  return (
    <div className="card-container" key={flight.time}>
      <div className="company-container" key={flight.time}>
        <p className="company-name" key={flight.time}>
          {" "}
          {flight.company}
        </p>
        <img
          className="company-logo"
          src={`../../Assets/${flight.logo}`}
          alt="company logo"
          key={flight.time}
        />
        <p className="remaining">باقي {`${flight.seatsLeft}`} مقعد</p>
      </div>
      <br />
      <p className="seat">مستوى {" : " + flight.seatClass}</p>
      <div className="time-container">
        <p className="time">{flight.time}</p>
        {"  "}
        {"إلى"}

        <p className="time">{flight.backTime}</p>
        {"  "}
        <p className="price"> {flight.fee}</p>
      </div>
      <p className="transit">{flight.transitsNumber} transits</p>
      <div className="Refundable">
        <button className="refundable-button">
          {flight.refundable ? "قابل للاسترداد" : "غير قابل للاسترداد"}
        </button>
      </div>
      <button className="book-button">احجز الآن</button>
    </div>
  );
};

export default Cards;
