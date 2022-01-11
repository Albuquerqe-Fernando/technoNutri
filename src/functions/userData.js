const datasession = JSON.parse(sessionStorage.getItem('usedata'));

const userData = (data, objective, isValid) => {
  if (!isValid) {
    return datasession;
  }

  return [data, objective];
};
export default userData;
