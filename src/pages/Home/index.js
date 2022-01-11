import React from 'react';

import './styled.css';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Presentation from '../../components/Presentation';
import Ways from '../../components/Ways';
import Footer from '../../components/Footer';

const Home = function () {
  return (
    <>
      <Header />
      <section className="container_home">
        <Banner />
        <Presentation />
        <Ways />
      </section>
      <Footer />
    </>
  );
};

export default Home;
