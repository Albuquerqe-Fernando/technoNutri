import React from 'react';

import './styled.css';

const frame = (
  <script src="//www.effectivedisplaycontent.com/fec29dbebffcde2959861237fca1c4df/invoke.js"></script>
);
const Anuncio = () => {
  return <iframe src={frame} />;
};

export default Anuncio;
