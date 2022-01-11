import React from 'react';
import { carbo } from './nutritionalTable';

export const optionCarbo = carbo.map((carbo, ind) => {
  return (
    <option value={carbo.carbo} name={carbo.name} key={ind}>
      {carbo.name}
    </option>
  );
});
