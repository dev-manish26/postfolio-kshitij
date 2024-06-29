
import React ,{useEffect} from 'react';
import './Graphics.css';



const Graphics = () => {
  useEffect(() => {
    const handleScroll = () => {
      const logofolio = document.getElementById('graphics');
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
    <div className="section bgChange2" id="graphics" >
      <div className="graphics-content">
        GRAPHICS
      </div>
    </div>
  );
};

export default Graphics;
