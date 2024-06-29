import React from 'react';
import Marquee from "react-fast-marquee";
import './Kriptees.css';
import Tee1 from '../materials/Tee/Firefly scene featuring 100- white oversized t-shirts, front and back side of the same t-shirt, surr.png'
import Tee2 from '../materials/Tee/TEE 1 BLACK BACK.png'
import Tee3 from '../materials/Tee/TEE 6 BLACK BACK.png'
import Tee4 from '../materials/Tee/alchemy_refiner_alchemy_magic_0_9fcf7a97-058e-4e4a-8faf-30d01613d62e_0.png'
import Tee5 from '../materials/Tee/mockup 2.png'
import Tee6 from '../materials/Tee/tee 10 black back.png'
import Tee7 from '../materials/Tee/tee 3 black back.png'
import Tee8 from '../materials/Tee/tee 8 orange front.png'
import skateGirl from '../materials/Tee/skatefirl.svg'
import ktLogo from '../materials/logos/logo2.png'

const Kriptees = () => {
  return (
    <div className="kriptees-container section">
      <div className='skateGirl-wrapper'>
        <img className='skateGirl' src={skateGirl} alt='skateGirl' />
      </div> 
      <div className='kt-wrapper'>
        <img className='kt-logo' src={ktLogo} alt='KT' />
      </div>      
      <div className="left-section">
        <h1 className="title">KRIPTEES</h1>
        <p className="description">
          Kriptees is all about celebrating your love for anime with stylish, high-quality t-shirts. Our passion for anime shines through in every design, making each piece a perfect blend of fandom and fashion. Whether you're into classic series or new hits, Kriptees offers unique, comfy shirts that let you wear your favorite characters and moments with pride. Join us in sharing the joy of anime, one awesome t-shirt at a time.
        </p>
        
      </div>
      <div className="right-section">
        <div className="marquee-wrapper">
          <Marquee gradient='true' gradientColor='black' gradientWidth={150} speed={200}>
            <img className="tshirt-image" src={Tee1} alt="T-Shirt 1" />
            <img className="tshirt-image" src={Tee2} alt="T-Shirt 2" />
            <img className="tshirt-image" src={Tee3} alt="T-Shirt 3" />
            <img className="tshirt-image" src={Tee4} alt="T-Shirt 4" />
            <img className="tshirt-image" src={Tee5} alt="T-Shirt 5" />
            <img className="tshirt-image" src={Tee6} alt="T-Shirt 6" />
            <img className="tshirt-image" src={Tee7} alt="T-Shirt 7" />
            <img className="tshirt-image" src={Tee8} alt="T-Shirt 8" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Kriptees;
