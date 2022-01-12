import React from 'react';

import './styled.css';

const frame =
  '//www.effectivedisplaycontent.com/watchnew?key=fec29dbebffcde2959861237fca1c4df/invoke.js';
const Anuncio = () => {
  return <iframe className="anuncio" src={frame} />;
};

export default Anuncio;
