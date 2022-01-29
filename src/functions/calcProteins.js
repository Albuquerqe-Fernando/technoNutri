const calcProteins = ({ basalDay }, objective) => {
  if (objective === 'slim-down') {
    //const proteins = weight * 2.0;
    const valueproteins = (basalDay * 40) / 100;
    const proteins = valueproteins / 4;

    return Math.ceil(proteins);
  }

  if (objective === 'gain' && Number(basalDay) < 2500) {
    // const proteins = weight * 1.8;
    const valueproteins = (basalDay * 35) / 100;
    const proteins = valueproteins / 4;

    return Math.ceil(proteins);
  }
};
export default calcProteins;
