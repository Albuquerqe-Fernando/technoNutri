import React from 'react';

import PropType from 'prop-types';
import DivSelect from '../DivSelect/inex';

const snack = ['Primeira', 'Segunda', 'Terceira', 'Quarta', 'Quinta', 'Sexta'];

const Select = ({ mealsAmount }) => {
  if (mealsAmount === 4) {
    return (
      <section>
        <DivSelect snack={snack[0]} />
        <DivSelect snack={snack[1]} />
        <DivSelect snack={snack[2]} />
        <DivSelect snack={snack[3]} />
      </section>
    );
  }
  if (mealsAmount === 5) {
    return (
      <section>
        <DivSelect snack={snack[0]} />
        <DivSelect snack={snack[1]} />
        <DivSelect snack={snack[2]} />
        <DivSelect snack={snack[3]} />
        <DivSelect snack={snack[4]} />
      </section>
    );
  }
  if (mealsAmount === 6) {
    return (
      <section>
        <DivSelect snack={snack[0]} />
        <DivSelect snack={snack[1]} />
        <DivSelect snack={snack[2]} />
        <DivSelect snack={snack[3]} />
        <DivSelect snack={snack[4]} />
        <DivSelect snack={snack[5]} />
      </section>
    );
  }
};
Select.propTypes = {
  mealsAmount: PropType.number.isRequired,
};

export default Select;
