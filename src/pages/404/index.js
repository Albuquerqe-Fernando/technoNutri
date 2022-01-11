import React from 'react';
import { Link } from 'react-router-dom';

import './styled404.css';

const Erro404 = function () {
  return (
    <div className="Page404">
      <div className="center">
        <h1>404</h1>

        <p>PAGE NOT FOUND.</p>
        <Link className="home" to="/">
          HOME
        </Link>
      </div>
    </div>
  );
};

export default Erro404;
