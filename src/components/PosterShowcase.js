import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PosterShowcase.css';
import poster1 from '../materials/Posters/poster1/poster1.png';
import poster2 from '../materials/Posters/poster2/poster2.png';
import poster3 from '../materials/Posters/poster3/poster3.png';
import poster4 from '../materials/Posters/poster4/Poster4_Main.png';
import poster5 from '../materials/Posters/poster5/poster5.png';
import poster6 from '../materials/Posters/poster6/Poster6_Main.png';

const posters = [
    { image: poster1, title: 'Boundless Reach', description: `This poster features the iconic hands from Michelangelo's "The Creation of Adam," symbolizing the divine spark and human potential. The phrase "the world at the tip of my fingers" underscores the immense power and possibilities within our reach. This visual metaphor serves to inspire viewers to recognize and harness their own potential to shape and influence the world around them. The motivation behind this creation is to remind individuals of their inherent ability to create, innovate, and impact their surroundings profoundly.` },
    { image: poster2, title: 'Dream', description: `This poster, adorned with yin-yang inspired graphics, encapsulates the balance and harmony inherent in the concept of dreams. The design symbolizes the interplay between opposites and the unity they create, reflecting how dreams blend aspirations with reality. The motivation behind this artwork is to inspire viewers to find equilibrium in their dreams, encouraging a pursuit of balance in their personal and professional lives.` },
    { image: poster3, title: 'Awwwgust', description:  `The poster, created by AWWGUST GRAPHICS, symbolizes the vibrancy and dynamism of August. It aims to capture the essence of summer's peak, a time of growth, celebration, and creativity. The motivation behind this poster is to evoke a sense of joy and to inspire viewers to embrace the energetic spirit of August in their endeavors.` },
    { image: poster4, title: 'Gojo', description: `This striking poster features Gojo Satoru, prominently labeled as the "Most Wanted" sorcerer. The design highlights his formidable reputation and unparalleled power within the jujutsu world. The poster aims to emphasize Gojo's unmatched abilities, the fear he instills in curses and enemies alike, and the high stakes of being such a powerful figure in a perilous world. It serves to motivate fans by showcasing the intense and thrilling nature of his character and the series.` },
    { image: poster5, title: 'Serendipity', description: `This poster, titled "Serendipity Unveiled," embodies the concept of unexpected and fortunate discoveries. Through vibrant and interconnected graphics, it illustrates the beauty of chance encounters and the magic of finding joy in the unplanned. The motivation behind creating this poster is to remind viewers to embrace the unexpected moments in life, as they often lead to the most delightful and meaningful experiences.` },
    { image: poster6, title: 'Elixier', description: `This poster, adorned with vibrant elixir graphics, symbolizes the magical blend of inspiration and innovation. It represents the boundless potential of creative thinking and the transformative power of imagination. The motivation behind creating this poster is to inspire individuals to tap into their creative essence and unlock new possibilities in their personal and professional lives.` },
];

const PosterShowcase = () => {
    const [currentPoster, setCurrentPoster] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPoster((prev) => {
                const next = (prev + 1) % posters.length;
                sliderRef.current.slickGoTo(next); // Move the slider to the next slide
                return next;
            });
        }, 5000); // Change poster every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        infinite: true,
        beforeChange: (current, next) => setCurrentPoster(next),
        autoplay: false, // We handle autoplay manually
        arrows: false,
    };

    const handleNext = () => {
        setCurrentPoster((currentPoster + 1) % posters.length);
        sliderRef.current.slickNext();
    };

    const handlePrevious = () => {
        setCurrentPoster((currentPoster - 1 + posters.length) % posters.length);
        sliderRef.current.slickPrev();
    };

    return (
        <div className={`poster-showcase`}>
            <div className='overlay-poster'></div>
            <div className='overlay-poster-hover'></div>
            <div 
                className='poster-bg' 
                style={{ 
                    backgroundImage: `url(${posters[currentPoster].image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            ></div>
            <div className="poster-details">
                <p className={`poster-title ${posters[currentPoster].title === 'Boundless Reach' ? 'BoundlessBeach' : ''}`}>{posters[currentPoster].title}</p>
                <p className='poster-description'>{posters[currentPoster].description}</p>
            </div>
            <div className="thumbnail-slider">
                <Slider ref={sliderRef} {...settings}>
                    {posters.map((poster, index) => (
                        <div key={index} className={`thumbnail`} >
                            <img className='poster-image' src={poster.image} alt={poster.title} />
                        </div>
                    ))}
                </Slider>
            </div>
            <button className="previous" onClick={handlePrevious}>&lt;</button>
            <button className="next" onClick={handleNext}>&gt;</button>
        </div>
    );
};

export default PosterShowcase;
