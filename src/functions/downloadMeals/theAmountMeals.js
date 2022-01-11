import mealTable from './mealTable';

const theAmountsMeals = (meals) => {
  if (meals.length === 4) {
    const first = mealTable(meals[0]);
    const monday = mealTable(meals[1]);
    const third = mealTable(meals[2]);
    const foerth = mealTable(meals[3]);

    return [...first, ...monday, ...third, ...foerth];
  }
  if (meals.length === 5) {
    const first = mealTable(meals[0]);
    const monday = mealTable(meals[1]);
    const third = mealTable(meals[2]);
    const foerth = mealTable(meals[3]);
    const thursday = mealTable(meals[4]);

    return [...first, ...monday, ...third, ...foerth, ...thursday];
  }
  if (meals.length === 6) {
    const first = mealTable(meals[0]);
    const monday = mealTable(meals[1]);
    const third = mealTable(meals[2]);
    const foerth = mealTable(meals[3]);
    const thursday = mealTable(meals[4]);
    const sixth = mealTable(meals[5]);

    return [...first, ...monday, ...third, ...foerth, ...thursday, ...sixth];
  }
  console.log(meals);
};

export default theAmountsMeals;
