import React from 'react';
import './MainSection.css';

const MainSection = ({ navigateToSection }) => {
  return (
    <div className="main-section">
      <div className="overlay"></div>
      <div className="content">
        <div className="header-container">
          <div className="year">2024</div>
          <div className="portfolio-container">
            <div className="portfolio">PORTFOLIO</div>
            <div className="signature">kr_scribbles</div>
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => navigateToSection('about')}>ABOUT</button>
          <button onClick={() => navigateToSection('logofolio')}>LOGOFOLIO</button>
          <button onClick={() => navigateToSection('graphics')}>GRAPHICS</button>
          <button onClick={() => navigateToSection('illustrations')}>ILLUSTRATIONS</button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
