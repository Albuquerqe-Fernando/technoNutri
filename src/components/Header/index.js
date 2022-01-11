import React from 'react';
import { Link } from 'react-router-dom';

import './styled.css';
import logo from '../../images/newLogo.png';

const Header = function () {
  return (
    <nav className="header">
      <Link to="/">
        <img className="headerImg" src={logo} alt="logo" />
      </Link>
      <div>
        {/*  <a href="/receitas">
          <h1>Receitas</h1>
        </a> */}
      </div>
    </nav>
  );
};

export default Header;
