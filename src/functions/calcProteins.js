const calcProteins = ({ basalDay }, objective, weight) => {
  if (objective === 'slim-down' && Number(basalDay) < 2500) {
    const proteins = weight * 2.0;

    return Math.ceil(proteins);
  }
  if (objective === 'slim-down' && Number(basalDay) >= 2500) {
    const proteins = weight * 2.2;

    return Math.ceil(proteins);
  }
  if (objective === 'gain' && Number(basalDay) < 2500) {
    const proteins = weight * 1.8;

    return Math.ceil(proteins);
  }
  if (objective === 'gain' && Number(basalDay) >= 2500) {
    const proteins = weight * 2.0;

    return Math.ceil(proteins);
  }
};
export default calcProteins;
