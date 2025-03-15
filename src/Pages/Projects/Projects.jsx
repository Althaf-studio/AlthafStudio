import React from "react";
import "./Projects.css";
import ravicover from "../../assets/RaviCover.png";
import doublexl from "../../assets/doublexl.jpg";

function Projects() {
  return (
    <div className="list">
      <h1>
        <b>My Projects</b>
      </h1>
      <br/>
      <ul>
        <li>
          <b>Photography - Ravi Jewellers</b>
        </li>
        <a
          href="https://www.behance.net/gallery/210522601/Ravi-Jewellers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ravicover} alt="Ravi Jewellers" className="image" />
        </a>
        <li>
          <b>Cinematographer - Event Coverage Breeze & Blooms</b>
        </li>
        <a
          href="https://www.behance.net/gallery/221214947/Freedom-Collection"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={doublexl} alt="Breeze & Blooms" className="image" />
        </a>
      </ul>
    </div>
  );
}

export default Projects;
