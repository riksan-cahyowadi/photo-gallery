import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Gallery from './components/Gallery';
import CurveBackground from './components/CurveBackground';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <CurveBackground />
      <Gallery />
    </>
  );
};

export default App;