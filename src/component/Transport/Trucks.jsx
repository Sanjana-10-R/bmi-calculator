import React from "react";
import TruckData from "./TruckData";

export default function Trucks() {
  return (
    <div>
      <h2>Truck List</h2>

      {TruckData.map((truck, index) => (
        <div key={index}>
          <h3>{truck.name}</h3>
          <p>Color: {truck.color}</p>
          <img src={truck.url} alt={truck.name} width="300" />
        </div>
      ))}
    </div>
  );
}