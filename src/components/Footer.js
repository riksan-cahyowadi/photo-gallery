import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  background: #333;
  color: #fff;
  position: fixed;
   font-family: "Caveat", cursive;
  bottom: 0;
  left: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>💖Everyday is a special day with you 💖</p>
    </FooterContainer>
  );
};

export default Footer;
