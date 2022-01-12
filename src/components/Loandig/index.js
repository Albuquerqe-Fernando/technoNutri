import React from 'react';
import { Anuncio320x50 } from '../Anuncio';

import './styled.css';

const Loandig = function () {
  return (
    <section className="loandig">
      <div className="box_loading">
        <div className="box_h1">
          <h1 className="h1_animation">Carregando...</h1>
        </div>
        <Anuncio320x50 />
        <div className="container_loading">
          <div className="progress_bar"></div>
        </div>
      </div>
    </section>
  );
};

export default Loandig;
