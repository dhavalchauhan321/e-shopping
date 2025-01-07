import React, { useState, useEffect, useRef } from 'react';
import './css/Slider.css'

export default function Slider() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const imagesPerSlide = 4;

  const images = [
    {
      default: 'https://static.wixstatic.com/media/ea26fd_3382c27978064c10aa052f63609cd4b4~mv2_d_2000_2670_s_2.png/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_3382c27978064c10aa052f63609cd4b4~mv2_d_2000_2670_s_2.png',
      hover: 'https://media-hosting.imagekit.io//8c3bdadf135448f8/1.png?Expires=1735280744&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yi6oaew8JrI4vqlV-xEGacDmgypVD-nfPQoUA8QWF1ZjYWSAAtBaILNz3wl-aogpDJjO93fIGY1o7lLqlbQL6RvxYkePyoeARndEUWsL7YM73jqVmC5cA9kGpK4p9LTWx9FZ1JhTwt7mSyZcq5-VM~uL7ntghwRs1JOvHb6zmkg0PXbfNVTfgmkYRLB-e5M9dPWCGiKYcLsYkDHkp0HlQ~EyDWAP58lWHHGHqNlNO~Rtd-ORRuO8mKiMKHELWR~upLe2nCd3ydRQEb9o74--hid07C7PRhSFT5ocJmpGui1HBDpeq1a0nLbVxmkMUIS~pioZxJ~YPkfuvpstKNQEYA__',
    },
    {
      default: 'https://static.wixstatic.com/media/ea26fd_d746c93540f04fb4ab13f2971d879795~mv2_d_2000_2670_s_2.png/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_d746c93540f04fb4ab13f2971d879795~mv2_d_2000_2670_s_2.png',
      hover: 'https://i.postimg.cc/QM2DLptz/Your-paragraph-text-1.png',
    },
    {
      default: 'https://static.wixstatic.com/media/ea26fd_10d33543bdbb480aae6af0036f282ee3~mv2_d_2000_2670_s_2.png/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_10d33543bdbb480aae6af0036f282ee3~mv2_d_2000_2670_s_2.png',
      hover: 'https://media-hosting.imagekit.io//5c241159858e453a/3.png?Expires=1735280744&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oTjheVRGJ2xjmidarVTdF22zLyAh6tanDQlr6TFUh1xCZwBXJISELNHqDJ05Ao8r0SEK~voY29VOIv-O5pM~T~CElozXI5uiKzf8K4S3sncBUWx1rI65ofgPfVXGS0oV41afH7c921x6OM9i6BcOELe1rCHHdgW0581jWeGhotYnIYVhl21YOzCxN9KYcHAtGEA4H8SUZaX~rwM1VmeC87VxdFtbzt-zY69ITo5Sso~fllemDNk6rsx1-Nuyx6i25X8oWXIslrwKv2EuirYWpH4Pr8asIv8nCa5U0XdOtCzI2HdKeq7gZQQoAbk7kLhkUWCqEN2fXpLFE~i0fsZzUQ__',
    },
    {
      default: 'https://static.wixstatic.com/media/ea26fd_b146385874514c15ac4907fc2d9e1a9a~mv2_d_2000_2670_s_2.png/v1/fill/w_500,h_667,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_b146385874514c15ac4907fc2d9e1a9a~mv2_d_2000_2670_s_2.png',
      hover: 'https://media-hosting.imagekit.io//0cfd94a9861d4346/4.png?Expires=1735280744&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hPYz02SnkAHzuxhKXBeTaLIRRbmBNQnZYZJXYo~XcWgpCSRvO~fAo2R~W6v9YhVMJTKqRmMYoD5X1eFTatCBPEMvc4OowncKmx52fjnLR0ycmhvyev1LehKXSq7gvOmpH~evgYYi7DC199k1LRNTLiUVYwG524Ns0Dy7YXSQqWKQfQIJh3FeUz05b6qwU-huUyY3-cbAHDsigN3vj2GOYG2lLVSrQwbCiIDt8LyUYIoObxfbobh7NZ~MdqeucXSJ75hKTU9J2OGksjzmy-KP~MVjRNjJTmFLdDWrwkR8A2KvC2TRZHuSpV48QuuOBPcCkXMbiRCXJ18xAHASK8g3kQ__',
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
