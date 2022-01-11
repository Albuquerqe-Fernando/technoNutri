import React from 'react';

import './styled.css';
import Radios from '../../components/Radios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Slimming = function () {
  const objective = 'slim-down';
  return (
    <>
      <Header />
      <Radios objective={objective} />
      <Footer />
    </>
  );
};

export default Slimming;
