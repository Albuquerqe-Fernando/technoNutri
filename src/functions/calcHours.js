const calcHours = (acordar, dormir) => {
  const hacor = Number(acordar);
  const hdorm = Number(dormir);
  let sleep = 0;
  if (hacor > hdorm) {
    const hReal = hacor - hdorm;
    const calc = hReal;
    sleep = calc;
  } else {
    const hReal = hdorm - hacor;
    const calc = 24 - hReal;
    sleep = calc;
  }

  return sleep;
};

export default calcHours;
