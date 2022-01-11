const mealTable = (meals) => {
  const table = [
    [
      {
        text: 'Sua ' + meals.meals + ' Refeição',
        alignment: 'center',
        fontSize: 18,
        background: '#4b0082',
        style: 'header',
      },

      {
        text: 'Quantidade',
        alignment: 'center',
        fontSize: 18,
        style: 'header',
      },
    ],

    [
      {
        text: meals.carboDownload.text,
        alignment: 'center',
        bold: true,
      },
      {
        text: meals.carboDownload.value + ' g',
        alignment: 'center',
        bold: true,
      },
    ],
    [
      { text: meals.proteins.text, alignment: 'center', bold: true },
      {
        text: meals.proteins.value + ' g',
        alignment: 'center',
        bold: true,
      },
    ],
    [
      {
        text: meals.vegetablesDownload.text,
        alignment: 'center',
        bold: true,
      },
      {
        text: meals.vegetablesDownload.value + ' g',
        alignment: 'center',
        bold: true,
      },
    ],
    [
      { text: meals.saladDownload.text, alignment: 'center', bold: true },
      {
        text: meals.saladDownload.value + ' g',
        alignment: 'center',
        bold: true,
      },
    ],
  ];

  return table;
};

export default mealTable;
