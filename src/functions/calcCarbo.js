const calcCarbo = ({ basalDay }, objective, weight) => {
  if (objective === 'slim-down' && Number(basalDay) < 2500) {
    const carbo = weight * 1.8;

    return Math.ceil(carbo);
  }
  if (objective === 'slim-down' && Number(basalDay) >= 2500) {
    const carbo = weight * 2.0;

    return Math.ceil(carbo);
  }
  if (objective === 'gain' && Number(basalDay) < 2500) {
    const carbo = weight * 2.0;

    return Math.ceil(carbo);
  }
  if (objective === 'gain' && Number(basalDay) >= 2500) {
    const carbo = weight * 2.4;

    return Math.ceil(carbo);
  }
};
export default calcCarbo;
