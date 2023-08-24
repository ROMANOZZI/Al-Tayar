import React from "react";
import ResNum from "./ResNum";
import { flights } from "./files/data";
import Cards from "./Cards";
const Results = () => {
  const [Flights, setFlights] = React.useState(flights);
  console.log(Flights);
  return (
    <div className="Flights-container">
      <ResNum flights={Flights}></ResNum>
      <div className="Flights">
        {Flights.map((flight, index) => (
          <Cards flight={flight} key={index}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Results;
