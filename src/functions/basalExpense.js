const basalExpense = ({ weight, age, height, sex, calorie }, objective) => {
  if (sex === 'man') {
    const basal =
      10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) + 5;
    const totalDaySpent = basal + Number(calorie);
    const percent = (totalDaySpent * 0) / 100;

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
      10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age) - 161;
    const totalDaySpent = basal + Number(calorie);
    const percent = (totalDaySpent * 10) / 100;

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
