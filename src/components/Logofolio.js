import React, {useEffect} from 'react';
import './Logofolio.css';



const LogoFolio = () => {
  useEffect(() => {
    const handleScroll = () => {
      const logofolio = document.getElementById('logofolio');
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
    <div className="section bgChange" id="logofolio" >
      <div className="logo-folio-content">
        <div className="logo">LOGO</div>
        <div className="folio"><span className='folio-text'>FOLIO.</span></div>
      </div>
    </div>
  );
};

export default LogoFolio;
