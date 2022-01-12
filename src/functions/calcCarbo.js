const calcCarbo = ({ basalDay }, objective) => {
  if (objective === 'slim-down') {
    const calorieCarob = (basalDay * 30) / 100;
    const carbo = calorieCarob / 4;

    return Math.ceil(carbo);
  }

  if (objective === 'gain') {
    const calorieCarob = (basalDay * 35) / 100;
    const carbo = calorieCarob / 4;
    return Math.ceil(carbo);
  }
};
export default calcCarbo;
