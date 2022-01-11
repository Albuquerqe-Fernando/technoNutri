import React from 'react';
import { BsInstagram } from 'react-icons/bs';

import './styled.css';
import logo from '../../images/newLogo.png';
import { Link } from 'react-router-dom';

const Footer = function () {
  return (
    <footer className="footer">
      <Link className="footerImg" to="/">
        <img className="footerImg" src={logo} alt="logo" />
      </Link>
      <div>
        <a className="insta" href="https://www.instagram.com/aj_nando/">
          <BsInstagram className="iconinsta" color="white" />
          <p>Instagram</p>
        </a>
      </div>
      <Link className="privat_footer" to="/privat">
        <h2>
          Politica de <br />
          privacidade
        </h2>
      </Link>
    </footer>
  );
};

export default Footer;
