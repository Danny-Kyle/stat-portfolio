import React from "react";
import "./Intro.css";
import hero from "../../assets/hero.png"
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
     <div className="introContent">
      <span className="hello"></span>
      <span className="introText">I'm <span className="introName">Daniel,</span> <br />A Fullstack Developer</span>
      <p className="introPara">I have experience with both Front and Back end Projects </p>
      <Link><button className="btn">Hire Me</button></Link>
     </div>
      <img src={hero} alt="" className="bg" />
    </section>
  );
};

export default Intro;
