const amountMeals = (sleep) => {
  const amountMeals = (24 - Number(sleep)) / 3;

  return Math.floor(amountMeals);
};

export default amountMeals;
