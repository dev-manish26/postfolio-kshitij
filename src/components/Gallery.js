import React from 'react';
import './Gallery.css';
import il1 from '../materials/Il-gallery/20230712143927693.png';
import il2 from '../materials/Il-gallery/Chhitij Ranpal Damai.png';
import il3 from '../materials/Il-gallery/Untitled .jpg';
import il4 from '../materials/Il-gallery/guitar.png';
import il5 from '../materials/Il-gallery/hug.jpg';

const Gallery = () => {
  return (
    <div className='section last-section'>
      <div className="il-gallery ">
        <div className='col1'>
        <img src={il2} alt='il2' />
            <img src={il4} alt='il4' />
            <img src={il5} alt='il5' />            
        </div>
        <div className='col2'>
            <img src={il1} alt='il1' />
            <img src={il3} alt='il3' />            
        </div>
        
        
    </div>
    </div>
   
  );
};

export default Gallery;
