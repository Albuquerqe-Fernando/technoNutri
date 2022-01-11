import React from 'react';
import PropType from 'prop-types';

import './styled.css';
import Select from '../Select/inex';

const SelectMeals = ({ mealsAmount }) => {
  return (
    <section className="conteiner_meals">
      <Select mealsAmount={mealsAmount} />
    </section>
  );
};

SelectMeals.propTypes = {
  carbo: PropType.number.isRequired,
  proteins: PropType.number.isRequired,
  fat: PropType.number.isRequired,
  mealsAmount: PropType.number.isRequired,
};

export default SelectMeals;
