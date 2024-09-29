import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="nav">
        <h1>I am from Navbar</h1>
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">ContactUs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
