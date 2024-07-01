import React, {useEffect} from 'react';
import './Illustrations.css';


const Illustrations = () => {
  useEffect(() => {
    const handleScroll = () => {
      const logofolio = document.getElementById('illustrations');
      const rect = logofolio.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        logofolio.classList.add('fade-in');
      } else {
        logofolio.classList.remove('fade-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="section bgChange3" id="illustrations" >
      <div className="illustration-content">
        <div className="illustration">illustration</div>
        <div className="gallery">gallery.</div>
      </div>
    </div>
  );
};

export default Illustrations;
