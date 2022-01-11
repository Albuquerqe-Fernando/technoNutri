import { salads } from './nutritionalTable';

export const optionSalad = salads.map((salads, ind) => {
  return (
    <option value={salads.weight} key={ind}>
      {salads.name}
    </option>
  );
});
