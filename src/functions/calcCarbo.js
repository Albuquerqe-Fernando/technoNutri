const calcCarbo = ({ basalDay }, objective) => {
  if (objective === 'slim-down') {
    //const carbo = weight * 1.8;
    const valueCarbo = (basalDay * 35) / 100;
    const carbo = valueCarbo / 4;

    return Math.ceil(carbo);
  }

  if (objective === 'gain') {
    //const carbo = weight * 2.0;
    const valueCarbo = (basalDay * 40) / 100;
    const carbo = valueCarbo / 4;

    return Math.ceil(carbo);
  }
};
export default calcCarbo;
