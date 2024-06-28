import React from 'react';
import poster1 from '../materials/Posters/poster1/poster1.png';
import post1 from '../materials/Posters/poster1/Post1-1.png';
import './PosterDetail.css';



const Poster1Detail = () => {

  
  return (
  <div className='posterDetailPage'>
    <img src={poster1} alt="Boundless Reach" />
    <img src={post1} alt="Boundless Reach" />
  </div>
);
};

export default Poster1Detail;
