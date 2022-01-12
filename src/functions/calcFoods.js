export const CalcProteins = (macro = 0, ingestMacro = 0) => {
  const result = Number(ingestMacro) / Number(macro);
  const resulttotal = result * 100;
  return Math.round(resulttotal);
};

export const CalcSalad = (macro = 0, ingestMacro = 0) => {
  const result = Number(macro) / 10;
  const resulttotal = result * Number(ingestMacro);
  return Math.round(resulttotal);
};
export const CalcEggs = (macro = 0, ingestMacro = 0) => {
  const result = Math.ceil(Number(ingestMacro) / Number(macro)) / 2;
  const resulttotal = result + 1;
  return [Math.ceil(result), Math.ceil(resulttotal)];
};

export const CalcCarbo = (macro = 0, vegetables = 0, ingestMacro = 0) => {
  if (Number(vegetables) > 0) {
    const divisionIngest = Number(ingestMacro) / 2;

    const resultCarbo = divisionIngest / Number(macro);
    const resulttotalCarbo = resultCarbo * 100;

    const resultvegetables = divisionIngest / Number(vegetables);
    const resulttotalVegetables = resultvegetables * 100;

    const carboConsumi = Math.round(resulttotalCarbo);
    const vegetable = Math.round(resulttotalVegetables);

    return [carboConsumi, vegetable];
  }
  if (Number(vegetables) === 0) {
    const result = Number(ingestMacro) / Number(macro);
    const resulttotal = result * 100;

    const carboConsumi = Math.round(resulttotal);
    const vegetable = Number(vegetables);

    return [carboConsumi, vegetable];
  }
};
