const calcFat = ({ basalDay }) => {
  const calorieFat = (basalDay * 20) / 100;
  const fat = calorieFat / 9;
  return Math.ceil(fat);
};

export default calcFat;
