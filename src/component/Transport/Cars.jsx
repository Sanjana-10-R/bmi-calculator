import React from "react";
import CarData from "./CarData.js";

export default function Cars() {
  return (
    <div>
      <h2>Cars List</h2>

      {CarData.map((car, index) => (
        <div key={index}>
          <h3>{car.name}</h3>
          <p>Color: {car.color}</p>
          <img src={car.url} alt={car.name} width="300" />
        </div>
      ))}
    </div>
  );
}
