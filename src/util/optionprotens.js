import { proteins } from './nutritionalTable';

export const optionproteins = proteins.map((protein, ind) => {
  return (
    <option value={protein.protein} key={ind}>
      {protein.name}
    </option>
  );
});
