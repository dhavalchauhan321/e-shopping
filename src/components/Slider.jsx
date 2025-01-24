import React, { useState, useEffect, useRef } from 'react';
import './css/Slider.css'

export default function Slider() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const imagesPerSlide = 4;

  const images = [
    {
      default: 'https://static.wixstatic.com/media/ea26fd_3382c27978064c10aa052f63609cd4b4~mv2_d_2000_2670_s_2.png/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_3382c27978064c10aa052f63609cd4b4~mv2_d_2000_2670_s_2.png',
      hover: 'https://static.wixstatic.com/media/ea26fd_900ca045d37a4f05854143331b092821~mv2_d_2000_2670_s_2.png/v1/fill/w_201,h_268,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_900ca045d37a4f05854143331b092821~mv2_d_2000_2670_s_2.png',
    },
    {
      default: 'https://static.wixstatic.com/media/ea26fd_d746c93540f04fb4ab13f2971d879795~mv2_d_2000_2670_s_2.png/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_d746c93540f04fb4ab13f2971d879795~mv2_d_2000_2670_s_2.png',
      hover: 'https://static.wixstatic.com/media/ea26fd_cc6ccf49e4844acda873a5ee0683b918~mv2_d_2000_2670_s_2.png/v1/fill/w_201,h_268,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_cc6ccf49e4844acda873a5ee0683b918https://static.wixstatic.com/media/ea26fd_cf5389d622b24491b4f72348840f3490~mv2_d_2000_2670_s_2.png/v1/fill/w_201,h_268,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_cf5389d622b24491b4f72348840f3490~mv2_d_2000_2670_s_2.png~mv2_d_2000_2670_s_2.png ',
    },
    {
      default: 'https://static.wixstatic.com/media/ea26fd_10d33543bdbb480aae6af0036f282ee3~mv2_d_2000_2670_s_2.png/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_10d33543bdbb480aae6af0036f282ee3~mv2_d_2000_2670_s_2.png',
      hover: 'https://static.wixstatic.com/media/ea26fd_cf5389d622b24491b4f72348840f3490~mv2_d_2000_2670_s_2.png/v1/fill/w_201,h_268,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_cf5389d622b24491b4f72348840f3490~mv2_d_2000_2670_s_2.png',
    },
    {
      default: 'https://static.wixstatic.com/media/ea26fd_b146385874514c15ac4907fc2d9e1a9a~mv2_d_2000_2670_s_2.png/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_b146385874514c15ac4907fc2d9e1a9a~mv2_d_2000_2670_s_2.png',
      hover: 'https://static.wixstatic.com/media/ea26fd_a3054122eed840088fce718d6b93142b~mv2_d_2000_2670_s_2.png/v1/fill/w_201,h_268,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_a3054122eed840088fce718d6b93142b~mv2_d_2000_2670_s_2.png',
    },
   
  ];

  const [hoveredImages, setHoveredImages] = useState(images.map((img) => img.default));

  const numSlides = Math.ceil(images.length / imagesPerSlide);

  

  

  const handleMouseEnter = (imgIndex) => {
    const newHoveredImages = [...hoveredImages];
    newHoveredImages[imgIndex] = images[imgIndex].hover;
    setHoveredImages(newHoveredImages);
  };

  const handleMouseLeave = (imgIndex) => {
    const newHoveredImages = [...hoveredImages];
    newHoveredImages[imgIndex] = images[imgIndex].default;
    setHoveredImages(newHoveredImages);
  };

  const getSlides = () => {
    const slides = [];
    for (let i = 0; i < images.length; i += imagesPerSlide) {
      slides.push(images.slice(i, i + imagesPerSlide));
    }
    return slides;
  };

  const slides = getSlides();

  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.clientWidth;
      trackRef.current.style.transform = `translateX(-${index * width}px)`;
    }
  }, [index]);

  return (
    <div>
      
    <div className="slider-container">
    <p className='text-4xl text-center mt-10 font-serif'><u>Bestsellers</u></p>
      <div className="slider">
        <div className="slider-track" ref={trackRef}>
          {slides.map((slide, slideIndex) => (
            <div className="slide" key={slideIndex}>
              {slide.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={hoveredImages[slideIndex * imagesPerSlide + imgIndex]}
                  alt={`Slide ${slideIndex + 1} Image ${imgIndex + 1}`}
                  onMouseEnter={() => handleMouseEnter(slideIndex * imagesPerSlide + imgIndex)}
                  onMouseLeave={() => handleMouseLeave(slideIndex * imagesPerSlide + imgIndex)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      
    </div>
    </div>
  );
}
