import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At BookMyDoc, we provide a seamless platform where patients can easily book online appointments with trusted doctors, and doctors can efficiently manage and approve these appointments. Our goal is to simplify healthcare by offering a secure, user-friendly experience that saves time and ensures quick access to quality care. Whether you're a patient or a healthcare professional, BookMyDoc makes the appointment process effortless, connecting you with the right care when you need it most.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
