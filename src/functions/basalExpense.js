const basalExpense = ({ weight, age, height, sex, calorie }, objective) => {
  if (sex === 'man') {
    const basal =
      66 + (13, 7 * Number(weight)) + 5 * Number(height) - (6, 8 * Number(age));
    const totalDaySpent = basal + Number(calorie);
    const percent = (totalDaySpent * 20) / 100;

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
      65 +
      (9, 6 * Number(weight)) +
      (1, 8 * Number(height)) -
      (4, 7 * Number(age));
    const totalDaySpent = basal + Number(calorie);
    const percent = (totalDaySpent * 20) / 100;

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
