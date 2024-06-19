import React from 'react';
import MainSection from './components/MainSection';
import About from './components/About';
import Logofolio from './components/Logofolio';
import Graphics from './components/Graphics';
import Illustrations from './components/Illustrations';
import './styles.css';
import './fonts.css';
import About2 from './components/About2';
import Logos from './components/Logos';
import Kriptees from './components/Kriptees';
import Gallery from './components/Gallery';

const App = () => {
  const navigateToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <MainSection navigateToSection={navigateToSection} />
      <About />
      <About2 />
      <Logofolio />
      <Logos />
      <Graphics />
      <Kriptees/>
      <Illustrations />
      <Gallery />
    </div>
  );
};

export default App;
