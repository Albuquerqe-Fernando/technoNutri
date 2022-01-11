const fatPercentage = (waist, neck, hip = 0, sex, height) => {
  if (sex === 'woman') {
    const fat =
      163.205 * Math.log(10)(waist + hip - neck) -
      97.684 * Math.log(10)(height) -
      104.912;
    console.log(fat);
    return fat;
  }
  if (sex === 'man') {
    const fat =
      86.01 * Math.log(10)(waist - neck) - 70.041 * Math.log(10)(height) + 30.3;
    console.log(fat);
    return fat;
  }
};

export default fatPercentage;
