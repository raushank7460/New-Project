import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h1>Hello, I'm <span>John Doe</span></h1>
        <p>Frontend Developer | React Specialist</p>
        <a className="hero-btn" href="#projects">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
