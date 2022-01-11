import React from 'react';
import PropType from 'prop-types';

import './styled.css';
import SelectMeals from '../SelectMeals/inex';

const SelectDiet = ({ carbo, proteins, fat, mealsAmount }) => {
  return (
    <section className="conteiner_select">
      <h1>Crie seu diário alimentar</h1>
      <SelectMeals
        carbo={carbo}
        proteins={proteins}
        fat={fat}
        mealsAmount={mealsAmount}
      />
    </section>
  );
};

SelectDiet.propTypes = {
  carbo: PropType.number.isRequired,
  proteins: PropType.number.isRequired,
  fat: PropType.number.isRequired,
  mealsAmount: PropType.number.isRequired,
};

export default SelectDiet;
