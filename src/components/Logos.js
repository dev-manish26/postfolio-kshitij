import React from 'react';
import './Logos.css'; 
import logo1 from '../materials/logos/logo1.png';
import logo2 from '../materials/logos/logo2.png';
import logo3 from '../materials/logos/logo3.png';
import logo4 from '../materials/logos/logo4.jpg';
import logo5 from '../materials/logos/logo5.png';
import Marquee from "react-fast-marquee";

const Logos = () => {
  return (
    <div className="logofolio-section section">
      <div className="black-strip">
        <Marquee autoFill='yes'>
        <div className="logofolio-text">logofolio.</div>
        </Marquee>
      </div>
      <div className="logos-container">
        <img src={logo1} title='hello' className="logo logo1" />
        <img src={logo2} alt="Logo 2" className="logo logo2" />
        <img src={logo3} alt="Logo 3" className="logo logo3" />
        <img src={logo4} alt="Logo 4" className="logo logo4" />
        <img src={logo5} alt="Logo 5" className="logo logo5" />
      </div>
    </div>
  );
};

export default Logos;
