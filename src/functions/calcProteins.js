const calcProteins = ({ basalDay }, objective) => {
  if (objective === 'slim-down') {
    const calcProteins = (basalDay * 40) / 100;
    const proteins = calcProteins / 4;

    return Math.ceil(proteins);
  }

  if (objective === 'gain') {
    const calcProteins = (basalDay * 35) / 100;
    const proteins = calcProteins / 4;
    return Math.ceil(proteins);
  }
};
export default calcProteins;
