import React from 'react';

import './styled.css';
import imgEmagreciment from '../../images/emagrecimento.jpg';
import imgGanhoMassa from '../../images/massa.png';
import { Link } from 'react-router-dom';

const Ways = function () {
  return (
    <main className="conteiner_ways">
      <section>
        <div className="anuncio_mobile_ways" />
        <div className="ways">
          <img src={imgEmagreciment} alt="emagrecimento" />
          <div>
            <h1>Aqui Está A Maneira Número Um De Emagrecer sem Sofrer</h1>
            <Link to="/slimming">
              <h2>
                Você esta Pronto?
                <br /> Clique Aqui
              </h2>
            </Link>
          </div>
        </div>
        <div className="anuncio_mobile_ways" />
        <div className="ways">
          <img src={imgGanhoMassa} alt="ganho-massa" />
          <div>
            <h1>Descubra Hoje Mesmo Como Ganhar Musculos</h1>
            <Link to="/gain-weight">
              <h2>
                Você esta Pronto?
                <br /> Clique Aqui
              </h2>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ways;
