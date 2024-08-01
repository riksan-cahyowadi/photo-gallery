import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';
import image4 from '../assets/img4.jpg';
import image5 from '../assets/img5.jpg';
import image6 from '../assets/img6.jpg';
import CurveBackground from './CurveBackground';
import Note from './Note';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

const CarouselContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  border-radius: 1rem;
  object-fit: cover;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-align: center;
  font-family: "Dancing Script", cursive;
  color: #fff;
`;

const photos = [
  { id: 1, src: image1, alt: 'Image 1', colors: ['#ff6b6b', '#ff9ff3'] },
  { id: 2, src: image2, alt: 'Image 2', colors: ['#4ecdc4', '#45b7d1'] },
  { id: 3, src: image3, alt: 'Image 3', colors: ['#45b7d1', '#5f27cd'] },
  { id: 4, src: image4, alt: 'Image 4', colors: ['#f7b731', '#ff9ff3'] },
  { id: 5, src: image5, alt: 'Image 5', colors: ['#5f27cd', '#4ecdc4'] },
  { id: 6, src: image6, alt: 'Image 6', colors: ['#ff9ff3', '#ff6b6b'] },
];

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <>
      <CurveBackground colors={photos[currentSlide]?.colors} />
      <GalleryContainer>
        <Title>Happy GF day ! My beloved Sabrina</Title>
        <CarouselContainer>
          <Slider {...settings}>
            {photos.map((photo) => (
              <div key={photo.id}>
                <Image src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </Slider>
        </CarouselContainer>
        <Note />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
