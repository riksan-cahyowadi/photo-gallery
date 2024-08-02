import React from 'react';
import styled from 'styled-components';

const StickerContainer = styled.div`
  position: fixed;
  bottom: 160px;
  ${({ position }) => position === 'left' ? 'left: 0px;' : 'right: 160px;'}
  width: 80px;
  height: 80px;
  z-index: 10;
`;

const StickerImage = styled.img`
  width: 300%;
  height: 300%;
  object-fit: cover;
`;

const Sticker = ({ src, alt, position }) => (
  <StickerContainer position={position}>
    <StickerImage src={src} alt={alt} />
  </StickerContainer>
);

export default Sticker;
