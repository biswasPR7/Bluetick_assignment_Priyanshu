import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBuilding, faHandshake,faGears,faRobot } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <div className="about" id="about_id">
      <div className="cards">
        <header style={{  fontWeight: "bold" }}>
          <FontAwesomeIcon
            icon={faBuilding}
            size="2x"
            style={{ marginTop: "15px", marginBottom: "15px" }}
          />
          <p>  AI Opportunities for Your Enterprise</p>
        </header>
        <main style={{  marginTop: "40%" }}>
          Unlock the potential of generative AI by identifying tailored
          opportunities for integration within your organization, ensuring a
          strategic and efficient approach to AI implementation.
        </main>
      </div>
      <div className="cards">
        <header style={{  fontWeight: "bold" }}>
          <FontAwesomeIcon
            icon={faHandshake}
            size="2x"
            style={{ marginTop: "20px", marginBottom: "10px" }}
          />
          <p> Design AI Trust Layer</p>
        </header>
        <main style={{  marginTop: "40%" }}>
          Prioritize data security and build trust in generative AI applications
          with a dedicated trust layer, emphasizing privacy-focused solutions
          that safeguard both organizational and customer data.
        </main>
      </div>
      <div className="cards">
        <header style={{  fontWeight: "bold" }}>
          <FontAwesomeIcon
            icon={faGears }
            size="2x"
            style={{ marginTop: "20px", marginBottom: "10px" }}
          />
          <p> Scalability-Focused Solutions</p>
        </header>
        <main style={{  marginTop: "40%" }}>
          Streamline and optimize business processes with comprehensive workflow
          automation, ensuring seamless integration of AI technologies from
          inception to execution for increased efficiency and productivity.
        </main>
      </div>
      <div className="cards">
        <header style={{  fontWeight: "bold" }}>
          <FontAwesomeIcon
            icon={faRobot}
            size="2x"
            style={{ marginTop: "20px", marginBottom: "10px" }}
          />
          <p> Scalable Solutions</p>
        </header>
        <main style={{  marginTop: "40%" }}>
          Streamline and optimize business processes with comprehensive workflow
          automation, ensuring seamless integration of AI technologies from
          inception to execution for increased efficiency and productivity.
        </main>
      </div>
    </div>
  );
}

export default About;
