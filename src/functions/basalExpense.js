const basalExpense = ({ weight, age, height, sex, calorie }, objective) => {
  const percent = 650;
  if (sex === 'man') {
    const basal =
      66 + 13.8 * Number(weight) + 5.0 * Number(height) - 6.8 * Number(age);

    //10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5;
    const totalDaySpent = basal + Number(calorie);

    if (objective === 'slim-down') {
      const basalDay = totalDaySpent - percent;
      return { basal, basalDay };
    }
    if (objective === 'gain') {
      const basalDay = totalDaySpent + percent;
      return { basal, basalDay };
    }
  }
  if (sex === 'woman') {
    const basal =
      //10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) - 161;

      655 + 9.6 * Number(weight) + 1.9 * Number(height) - 4.7 * Number(age);

    const totalDaySpent = basal + Number(calorie);

    if (objective === 'slim-down') {
      const basalDay = totalDaySpent - percent;

      return { basal, basalDay };
    }
    if (objective === 'gain') {
      const basalDay = totalDaySpent + percent;
      return { basal, basalDay };
    }
  }
};
export default basalExpense;
