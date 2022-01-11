import { vegetables } from './nutritionalTable';

export const optionVegetables = vegetables.map((vegetable, ind) => {
  return (
    <option value={vegetable.carbo} key={ind}>
      {vegetable.name}
    </option>
  );
});
