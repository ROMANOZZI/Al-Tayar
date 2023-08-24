import React from "react";
import Slider from "@mui/material/Slider";

const filter = () => {
  const [price, setPrice] = React.useState<number[]>([200, 3000]);
  const [Departure, setDeparture] = React.useState([
    {
      from: "00:00",
      to: "06:00",
    },
    {
      from: "06:00",
      to: "12:00",
    },
    {
      from: "12:00",
      to: "18:00",
    },
    {
      from: "18:00",
      to: "24:00",
    },
  ]);
  return (
    <div className="filter-container">
      <p id="filter">Filter</p>
      <p id="Reset">Reset</p>
      <div className="Slider-container">
        <p id="Price">السعر</p>
        <Slider
          value={price}
          onChange={(event, newValue) => {
            setPrice(newValue as number[]);
          }}
          valueLabelDisplay="auto"
          min={200}
          max={3000}
          step={100}
          sx={{
            width: "80%",
            margin: "auto",
          }}
        />
      </div>
      <div className="Min-Max">
        <p id="Min"> {price[0]} </p>ريال
        <p id="Max">{price[1]}</p>ريال
      </div>
      <div className="Departure-container">
        <p id="Departure">أوقات المغادرة</p>
        <div className="Departure">
          {Departure.map((item) => {
            return (
              <div className="Departure-time">
                <button>
                  {item.from} - {item.to}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="back-container">
        <p id="Back">أوقات العودة</p>
        <div className="back">
          {Departure.map((item) => {
            return (
              <div className="back-time">
                <button>
                  {item.from} - {item.to}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default filter;
