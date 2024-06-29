import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainSection from './components/MainSection';
import About from './components/About';
import Logofolio from './components/Logofolio';
import Graphics from './components/Graphics';
import Illustrations from './components/Illustrations';
import './styles.css';
import './fonts.css';
import './FadeOnScroll.css';
import './components/PosterDetail.css';
import About2 from './components/About2';
import Logos from './components/Logos';
import Kriptees from './components/Kriptees';
import Gallery from './components/Gallery';
import PosterShowcase from './components/PosterShowcase';
import Poster1Detail from './components/Poster1Detail';
import Poster2Detail from './components/Poster2Detail';
import Poster3Detail from './components/Poster3Detail';
import Poster4Detail from './components/Poster4Detail';
import Poster5Detail from './components/Poster5Detail';
import Poster6Detail from './components/Poster6Detail';

const App = () => {
  const navigateToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <MainSection navigateToSection={navigateToSection} />
            <About />
            <About2 />
            <Logofolio />
            <Logos />
            <Graphics />
            <Kriptees />
            <PosterShowcase />
            <Illustrations />
            <Gallery />
          </div>
        } />
        <Route path="/poster/1" element={<Poster1Detail />} />
        <Route path="/poster/2" element={<Poster2Detail />} />
        <Route path="/poster/3" element={<Poster3Detail />} />
        <Route path="/poster/4" element={<Poster4Detail />} />
        <Route path="/poster/5" element={<Poster5Detail />} />
        <Route path="/poster/6" element={<Poster6Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
