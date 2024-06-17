import React from 'react';
import './About.css';
import Image from '../materials/15-Chhitij Ranpal Damai 1.svg'; 

const About = () => {
  return (
    <div className="section" id="about">
      <div className="subsection">
        <div className="left-area">
          <img src={Image} alt="author-img" className="profile-image" />
        </div>
        <div className="right-area">
          <h2>
            <span className="hi-text">HI!</span> This is Chhitij Ranpal Damai
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget urna a est pulvinar 
            ultrices. Cras ac eros eu ipsum vulputate congue. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
