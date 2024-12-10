import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Just a Click Away!
        </h1>
        <p>
        <b>Welcome to BookMyDoc</b><br/><br/>



Your health and well-being are our top priorities. At BookMyDoc, we are committed to making healthcare accessible, convenient, and secure for everyone. Whether you need expert medical advice, want to book a consultation with a specialist, or simply need a seamless way to manage your health, we’ve got you covered.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
