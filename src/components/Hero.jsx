import React, { useEffect } from "react";
import "./Hero.css";
import "tiny-slider/dist/tiny-slider.css";
import { tns } from "tiny-slider/src/tiny-slider";

function Hero() {
  useEffect(() => {
    
    tns({
      container: ".hero-slide", 
      items: 1, 
      slideBy: "page", 
      autoplay: true, 
      autoplayButtonOutput: false, 
      nav: false, 
      controls: false, 
      mouseDrag: true, 
      
    });
  }, []); 

  return (
    <div className="hero">
      <div className="hero-slide">
        <div
          className="img overlay"
          style={{ backgroundImage: "url(images/hero_bg_3.jpg)" }}
        ></div>
        <div
          className="img overlay"
          style={{ backgroundImage: "url(images/hero_bg_2.jpg)" }}
        ></div>
        <div
          className="img overlay"
          style={{ backgroundImage: "url(images/hero_bg_1.jpg)" }}
        ></div>
      </div>
      <div className="container">
      </div>
    </div>
  );
}

export default Hero;