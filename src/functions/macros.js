//import { Navigate } from 'react-router-dom';
import basalExpense from './basalExpense';
import calcCarbo from './calcCarbo';
import calcFat from './calcFat';
import calcProteins from './calcProteins';
import calcWater from './calcWater';
//import fatPercentage from './fatPercentage';

const macros = (data, objective) => {
  const { weight, sleep } = data;
  //const bodyFat = fatPercentage(waist, neck, hip, sex, height);

  const basalCalorie = basalExpense(data, objective);

  const carbo = calcCarbo(basalCalorie, objective, weight);
  const proteins = calcProteins(basalCalorie, objective, weight);
  const fat = calcFat(basalCalorie);
  const Water = calcWater(weight);

  return { carbo, proteins, fat, Water, sleep };
};

export default macros;
