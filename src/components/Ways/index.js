import React from 'react';

import './styled.css';
import imgEmagreciment from '../../images/emagrecimento.jpg';
import imgGanhoMassa from '../../images/massa.png';
import { Link } from 'react-router-dom';
import { Anuncio468x60 } from '../Anuncio';
//import { advertsHorizont } from '../../util/adverts/adverts';

const Ways = function () {
  return (
    <main className="conteiner_ways">
      <section>
        <Anuncio468x60 />
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
        <Anuncio468x60 />
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
