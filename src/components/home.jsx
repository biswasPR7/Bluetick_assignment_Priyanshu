import React from "react";


import { useTypewriter } from "react-simple-typewriter";

import sidepic from "./bgIMG.png";

function Home() {
  const [typeEffect] = useTypewriter({
    words: ["Transforming Enterprises"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="home">
      <div>
        <div>
          <h1 style={{ lineHeight: 1.9, color: "blue" }}>{typeEffect}</h1>
          <h2>
            <p>with cutting-edge, scalable,</p> <p>privacy-focused Generative AI </p><p>Solutions</p>
          </h2>
        </div>
        <div style={{  marginTop: "10%" ,marginBottom:"10%"}}>
          <p>
            Founded in 2017, Bluetick Consultants is a technology-driven firm
            that has made a significant impact in the Indian and US startup
            ecosystems.
          </p>
        </div>
        <button style={{marginLeft: "30px"}}>
          <a
            href="https://www.bluetickconsultants.com/generative-ai.html"
            style={{ color: "white", textDecoration: "none" }}
          >
            know more{" "}
          </a>
        </button>
      </div>

      <div>
        <img id="photo" src={sidepic} alt="coder" />
      </div>
    </div>
  );
}

export default Home;
