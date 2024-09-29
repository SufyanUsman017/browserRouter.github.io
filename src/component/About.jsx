import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="about">
        <h1>I am a AboutUs</h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quos
          quo harum repellendus dolor. Similique est labore, laboriosam
          repellat, natus harum dolore minima praesentium rerum consequatur
          nulla omnis, unde consequuntur.
        </h1>

        <div className="center">
          <a href="home/">Home</a>
          <br />
          <a href="contact/">ContactUs</a>
        </div>
      </div>
    </div>
  );
}
