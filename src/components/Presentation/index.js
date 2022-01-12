import React from 'react';

import './styled.css';
import img1 from '../../images/text1.jpg';
import img2 from '../../images/text2.jpg';

const Presentation = function () {
  return (
    <article className="conteiner">
      <div className="conteiner_text">
        <div className="consteiner_img_text">
          <img src={img1} alt="foto" />
          <h2>
            TECHNO NUTRI é uma calculadora que foi desenvolvida para facilitar a
            vida das pessoas que, gostariam de começar uma dieta e não sabem por
            onde começar.
          </h2>
        </div>

        <div className="consteiner_img_text">
          <img src={img2} alt="foto2" />
          <h2>
            A calculadora TECHNO NUTRI da sugestões de refeições, balanceadas de
            acordo com seu objetivo e necessidade, para tornar sua VIDA simples
            e fácil.
          </h2>
        </div>
      </div>
    </article>
  );
};

export default Presentation;
