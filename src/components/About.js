import React from 'react';
import './About.css';
import Image from '../materials/15-Chhitij Ranpal Damai 1.svg'; 

const About = () => {
  return (
    <div className="section about1" id="about">
      <div className="subsection">
        <div className="left-area">
          <img src={Image} alt="author-img" className="profile-image" />
        </div>
        <div className="right-area">
          <div className='heading'>
            <span className="hi-text">HI!</span> This is Chhitij Ranpal Damai
          </div>
          <div className='about-description'>
          Currently pursuing Civil Engineering from National Institute of Technology, Agartala.
          With a keen eye for detail and a knack for storytelling, I bring images to life through my photography, graphic design, and illustration skills.
          My portfolio showcases a diverse range of projects, from logos to stunning graphics to illustrations. Through my artistry, I aim to evoke emotions, spark curiosity, and inspire others. Let's collaborate and bring your vision to life together.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
