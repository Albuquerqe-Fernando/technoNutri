import React from 'react';

import './styled.css';

const Loandig = function () {
  return (
    <section className="loandig">
      <div className="box_loading">
        <div className="box_h1">
          <h1 className="h1_animation">Carregando...</h1>
        </div>
        <div className="anuncio_loading" />
        <div className="container_loading">
          <div className="progress_bar"></div>
        </div>
      </div>
    </section>
  );
};

export default Loandig;
