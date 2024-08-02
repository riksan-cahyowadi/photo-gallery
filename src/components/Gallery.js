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
import image7 from '../assets/img7.jpg';
import sticker1 from '../assets/bg1.png';
import sticker2 from '../assets/bg2.png';
import sticker3 from '../assets/bg3.png';
import sticker4 from '../assets/bg4.png';
import sticker5 from '../assets/bg5.png';
import sticker6 from '../assets/bg6.png';
import sticker7 from '../assets/bg7.png';
import sticker8 from '../assets/bg8.png';
import sticker9 from '../assets/bg9.png';
import sticker10 from '../assets/bg10.png';
import CurveBackground from './CurveBackground';
import Note from './Note';
import Footer from './Footer';
import Sticker from './Sticker';

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
  { id: 1, src: image1, alt: 'Image 1', colors: ['#ff6b6b', '#ff9ff3'], stickers: [sticker1, sticker2] },
  { id: 2, src: image2, alt: 'Image 2', colors: ['#4ecdc4', '#45b7d1'], stickers: [sticker3, sticker4] },
  { id: 3, src: image3, alt: 'Image 3', colors: ['#45b7d1', '#5f27cd'], stickers: [sticker5, sticker6] },
  { id: 4, src: image4, alt: 'Image 4', colors: ['#f7b731', '#ff9ff3'], stickers: [sticker7, sticker8] },
  { id: 5, src: image5, alt: 'Image 5', colors: ['#5f27cd', '#4ecdc4'], stickers: [sticker9, sticker10] },
  { id: 6, src: image6, alt: 'Image 6', colors: ['#ff9ff3', '#ff6b6b'], stickers: [sticker1, sticker4] },
  { id: 7, src: image7, alt: 'Image 7', colors: ['#E65353', '#83EF81'], stickers: [sticker3, sticker2] },
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

  const currentColors = photos[currentSlide]?.colors || ['#ff6b6b', '#ff9ff3'];
  const currentStickers = photos[currentSlide]?.stickers || [sticker1, sticker4];

  return (
    <>
      <CurveBackground colors={currentColors} />
      <GalleryContainer>
        <Title color={currentColors[0]}>Happy GF day! My beloved Sabrina</Title>
        <CarouselContainer>
          <Slider {...settings}>
            {photos.map((photo) => (
              <div key={photo.id}>
                <Image src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </Slider>
        </CarouselContainer>
        <Note
          noteColor={currentColors[1]}
          buttonColor={currentColors[0]}
          buttonHoverColor={currentColors[0]}
        />
        <Sticker src={currentStickers[0]} alt="Sticker Left" position="left" />
        <Sticker src={currentStickers[1]} alt="Sticker Right" position="right" />
      </GalleryContainer>
      <Footer />
    </>
  );
};

export default Gallery;
