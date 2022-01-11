import React from 'react';

import './styled.css';
import foto from '../../images/abb2.jpg';

const Banner = function () {
  return (
    <header className="banner">
      <section>
        <div className="bannerText">
          <div className="container">
            <h1>Techno Nutri</h1>
            <h2>
              Descubra Aqui A Melhor Maneira De ter
              <br />o CORPO que você DESEJA.
            </h2>
          </div>
        </div>
        <img className="img_baner" src={foto} alt="foto" />
      </section>
    </header>
  );
};

export default Banner;
