import React from 'react';
import PropType from 'prop-types';

import './styled.css';

const WaterComponemt = ({ Water }) => {
  const waterConsumi = Water;

  return (
    <section className="conteiner_water">
      <h1 className="h1_water">
        Consumo ideal de água por dia <p>{waterConsumi} ml</p>
      </h1>
    </section>
  );
};

WaterComponemt.propTypes = {
  Water: PropType.number.isRequired,
};

export default WaterComponemt;
