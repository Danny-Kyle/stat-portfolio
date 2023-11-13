import "./Skills.css";
import FrontEnd from "../../assets/webdev.png";
import BackEnd from "../../assets/web_development_coding_icon_220553.ico";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">About Me</span>
      <span className="skillDesc">
        I am a skilled and passionate software engineer with experience in
        crafting mesmerizing websites, apps and robust full-stack web
        applications. I excel in making tough decisions, handling stressful
        situations, and accepting feedback. I'm a quick learner, enjoy new
        experiences, and thrive in competitive environments.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={FrontEnd} alt="front" className="skillBarImg" />
          <div className="skillBarText">
            <h2>FrontEnd Development</h2>
            <p>I use modern web technologies like React, NextJS and SolidJs to create beautiful and responsive user interfaces.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={BackEnd} alt="back" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Backend Development</h2>
            <p>I coordinate the development of scalable and secure server-side applications, leveraging my proficiency in languages such as Node.js, Express.js, ASP.Net, and Golang. My expertise extends to database management systems like MongoDB and Prisma, guaranteeing the establishment of high-performance backend systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
