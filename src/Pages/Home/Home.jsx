import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Hi,I'm <b>ALTHAF AHMED</b>
        </h1>
        <p>
          <i> Welcome to My Creative Journey!</i>
        </p>
      </div>

      <div className="section">
        <h2>
          <b>SERVICES</b>
        </h2>
        <ul>
          <li>Cinematographer</li>
          <li>Photography</li>
          <li>Event Cordinator</li>
        </ul>
      </div>

      <div className="about">
        <h2>
          <b>ABOUT ME</b>
        </h2>
        <p>
          <i>
            Transforming Ideas into Captivating Visuals | Exploring the Art of
            Crafting Memorable Stories, One Frame at a Time
          </i>
        </p>
      </div>

      <div className="cta">
        <p>
          <b>Want to collaborate? Feel free to reach out!</b>
        </p>
        <a href="/contact" className="contact-btn">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Home;
