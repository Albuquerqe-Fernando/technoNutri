import React from 'react';
import PropType from 'prop-types';

import './styled.css';

const SleepComponemt = ({ sleep }) => {
  const SleepAssessment = () => {
    if (sleep < 7) {
      return (
        <p>O ideal de horas de sono para seu objetivo são entre 7 a 8 horas.</p>
      );
    }
    if (sleep >= 7 || sleep <= 8) {
      return <p>PARABENS, VOCÊ ESTA DORMINDO O NESCESSARIO.</p>;
    }
    if (sleep > 8) {
      return (
        <p>O ideal de horas de sono para seu objetivo são entre 7 a 8 horas.</p>
      );
    }
  };

  return (
    <section className="conteiner_sleep">
      <p>Você tem {sleep} horas de sono por noite.</p>
      <SleepAssessment />
    </section>
  );
};

SleepComponemt.propTypes = {
  sleep: PropType.number.isRequired,
};

export default SleepComponemt;
