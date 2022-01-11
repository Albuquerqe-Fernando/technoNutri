import mealsValidator from '../validator/mealsValidator';
import downloadMeals from './downloadMeals/downloadMeals';
import filterMeals from './downloadMeals/filterMeals';

export const handlecarbo = (e, setCarbo) => {
  const valueCarbo = Number(e.target.selectedOptions[0].value);
  const textCarbo = e.target.selectedOptions[0].innerText;

  setCarbo({ value: valueCarbo, text: textCarbo });
};
export const handleProtein = (e, setProtein) => {
  const valueProtein = Number(e.target.selectedOptions[0].value);
  const textProtein = e.target.selectedOptions[0].innerText;

  setProtein({ value: valueProtein, text: textProtein });
};
export const handlevegetable = (e, setsaVegetables) => {
  const valueVegetables = Number(e.target.selectedOptions[0].value);
  const textVegetable = e.target.selectedOptions[0].innerText;

  setsaVegetables({ value: valueVegetables, text: textVegetable });
};
export const handleSalad = (e, setsalad) => {
  const valueSalad = Number(e.target.selectedOptions[0].value);
  const textSalad = e.target.selectedOptions[0].innerText;

  setsalad({ value: valueSalad, text: textSalad });
};

export const handleDownload = () => {
  const meals = filterMeals();

  const isvalidFirst = mealsValidator(meals[0]);
  if (!isvalidFirst) return;

  const isvalidmonday = mealsValidator(meals[1]);
  if (!isvalidmonday) return;

  const isvalidthird = mealsValidator(meals[2]);
  if (!isvalidthird) return;

  const isvalidfoerth = mealsValidator(meals[3]);
  if (!isvalidfoerth) return;

  if (meals.length === 5) {
    const isvalidthursday = mealsValidator(meals[4]);
    if (!isvalidthursday) return;
  }
  if (meals.length === 6) {
    const isvalidsixth = mealsValidator(meals[4]);
    if (!isvalidsixth) return;
  }

  downloadMeals(meals);
};
