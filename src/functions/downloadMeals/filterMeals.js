import { mealsDownload } from '../mealsDownload';

const filterMeals = () => {
  const firstMeals = [
    mealsDownload.filter((meal) => {
      return meal.meals === 'Primeira';
    }),
  ];
  const mondayMeals = [
    mealsDownload.filter((meal) => {
      return meal.meals === 'Segunda';
    }),
  ];
  const thirdMeals = [
    mealsDownload.filter((meal) => {
      return meal.meals === 'Terceira';
    }),
  ];
  const foerthMeals = [
    mealsDownload.filter((meal) => {
      return meal.meals === 'Quarta';
    }),
  ];
  const thursdayMeals = [
    mealsDownload.filter((meal) => {
      return meal.meals === 'Quinta';
    }),
  ];
  const sixthMeals = [
    mealsDownload.filter((meal) => {
      return meal.meals === 'Sexta';
    }),
  ];
  //console.log(sixthMeals[0].length);

  if (thursdayMeals[0].length === 0 && sixthMeals[0].length === 0) {
    return [
      firstMeals[0][0],
      mondayMeals[0][0],
      thirdMeals[0][0],
      foerthMeals[0][0],
    ];
  } else if (sixthMeals[0].length === 0) {
    return [
      firstMeals[0][0],
      mondayMeals[0][0],
      thirdMeals[0][0],
      foerthMeals[0][0],
      thursdayMeals[0][0],
    ];
  } else {
    return [
      firstMeals[0][0],
      mondayMeals[0][0],
      thirdMeals[0][0],
      foerthMeals[0][0],
      thursdayMeals[0][0],
      sixthMeals[0][0],
    ];
  }
};
export default filterMeals;
