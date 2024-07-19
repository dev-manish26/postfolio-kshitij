import React from 'react';
import './About2.css';
import psLogo from '../materials/softwareLogos/photoshop-svgrepo-com.svg';
import canvaLogo from '../materials/softwareLogos/canva-svgrepo-com.svg';
import aiLogo from '../materials/softwareLogos/adobe-illustrator-svgrepo-com.svg';
import lrLogo from '../materials/softwareLogos/lightroom-svgrepo-com.svg';
import fsLogo from '../materials/softwareLogos/fuse_11227474 1.svg';
import behance from '../materials/softwareLogos/behance.svg';
import email from '../materials/softwareLogos/email.svg';

const About2 = () => {
  return (
    <div className="resume-container section">
      <div className="contacts">
        <h1>CONTACTS</h1>
        <ul>
          <li>
          <img className='icon' width="32" height="32" src={email} alt="new-post--v1"/>
            <a href="mailto:kshitijranpal123@gmail.com">kshitijrampal123@gmail.com</a>
          </li>
          <li>
          <img className='icon'width="32" height="32" src={behance} alt="behance"/>
            <a href="https://www.behance.net/kshitijranpal">behance.net/kshitijrampal</a>
          </li>
        </ul>
      </div>

      <div className="softwares">
        <h1>SOFTWARES</h1>
        <div className="software-icons">
          <img className='icon' width="64" height="64" src= {psLogo} alt="instagram-new--v1"/>
          <img className='icon' width="64" height="64" src= {fsLogo} alt="instagram-new--v1"/>
          <img className='icon' width="64" height="64" src= {aiLogo} alt="instagram-new--v1"/>
          <img className='icon' width="64" height="64" src= {lrLogo} alt="instagram-new--v1"/>
          <img className='icon' width="64" height="64" src= {canvaLogo} alt="instagram-new--v1"/>
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
          <li>- Freelance Graphic Designer</li>
          <li>- Design Lead at Board of Technical Communication,   NIT Agartala</li>
          <li>- Design Lead at Kriptees</li>
        </ul>
      </div>

    </div>
  );
}

export default About2;
