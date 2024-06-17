import React from 'react';
import './About2.css';

const About2 = () => {
  return (
    <div className="resume-container section">
      <div className="contacts">
        <h1>CONTACTS</h1>
        <ul>
          <li>
            <span className="icon">📧</span>
            <a href="mailto:kshitijrampal123@gmail.com">kshitijrampal123@gmail.com</a>
          </li>
          <li>
            <span className="icon">🌐</span>
            <a href="https://www.behance.net/kshitijrampal">behance.net/kshitijrampal</a>
          </li>
          <li>
            <span className="icon">📸</span>
            <a href="https://www.instagram.com/dr.scribbles03/">instagram.com/dr.scribbles03</a>
          </li>
        </ul>
      </div>

      <div className="softwares">
        <h1>SOFTWARES</h1>
        <div className="software-icons">
          <span className="icon">Ps</span>
          <span className="icon">Ai</span>
          <span className="icon">Fs</span>
          <span className="icon">Lr</span>
          <span className="icon">Canva</span>
        </div>
      </div>

      <div className="personal-skills">
        <h1>PERSONAL SKILLS</h1>
        <div className="skills">
          <span className="skill">STORY TELLING</span>
          <span className="skill">VISUALISATION</span>
          <span className="skill">ACTIVE LISTENER</span>
          <span className="skill">LEADERSHIP</span>
          <span className="skill">COLLABORATIONS</span>
        </div>
      </div>

      <div className="experience">
        <h1>EXPERIENCE</h1>
        <ul>
          <li>-Freelance Graphic Designer</li>
          <li>-Design Lead at Board of Technical Communication, NIT Agartala</li>
          <li>-Design Lead at Kriptees</li>
        </ul>
      </div>

    </div>
  );
}

export default About2;
