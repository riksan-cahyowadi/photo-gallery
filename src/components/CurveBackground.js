import React from 'react';
import styled from 'styled-components';

const CurveContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const CurveBackground = ({ colors = ['#0099ff', '#007acc'] }) => (
  <CurveContainer>
    <SVG viewBox="0 0 1440 800" preserveAspectRatio="none">
      <defs>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#ffffff" fillOpacity="0.3" />
        </pattern>
      </defs>
      
      {/* Top curves */}
      <path
        fill={colors[0]}
        fillOpacity="0.4"
        d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      
      <path
        fill={colors[1]}
        fillOpacity="0.3"
        d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,234.7C672,213,768,171,864,165.3C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
      
      {/* Bottom curves */}
      <path
        fill={colors[0]}
        fillOpacity="0.4"
        d="M0,704L48,688C96,672,192,640,288,613.3C384,587,480,565,576,586.7C672,608,768,672,864,672C960,672,1056,608,1152,586.7C1248,565,1344,587,1392,597.3L1440,608L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
      />
      
      <path
        fill={colors[1]}
        fillOpacity="0.3"
        d="M0,640L48,624C96,608,192,576,288,560C384,544,480,544,576,565.3C672,587,768,629,864,634.7C960,640,1056,608,1152,597.3C1248,587,1344,597,1392,602.7L1440,608L1440,800L1392,800C1344,800,1248,800,1152,800C1056,800,960,800,864,800C768,800,672,800,576,800C480,800,384,800,288,800C192,800,96,800,48,800L0,800Z"
      />
      
      {/* Dot pattern overlay */}
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
    </SVG>
  </CurveContainer>
);

export default CurveBackground;
