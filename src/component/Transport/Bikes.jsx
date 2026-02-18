import React from "react";
import BikeData from "./BikeData.js";

export default function Bikes() {
  return (
    <div>
      <h2>Bike List</h2>

      {BikeData.map((bike, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{bike.name}</h3>
          <p>Color: {bike.color}</p>
          <img
            src={bike.url}
            alt={bike.name}
            width="300"
          />
        </div>
      ))}
    </div>
  );
}
