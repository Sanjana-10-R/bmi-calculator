import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/Car">Cars</Link></li>
        <li><Link to="/Bike">Bikes</Link></li>
        <li><Link to="/Truck">Trucks</Link></li>
      </ul>
    </nav>
  );
}
