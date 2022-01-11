import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import moment from 'moment';
import theAmountsMeals from './theAmountMeals';

const downloadMeals = (meals) => {
  const tableMeals = theAmountsMeals(meals);

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const date = moment().format('DD/MM/YYYY');

  const reportTitle = [
    {
      text: `Diario alimentar  ${date} `,
      fontSize: 30,
      bold: true,
      margin: [50, 15, 0, 10],
    },
  ];

  const details = [
    {
      text: `Diario alimentar  ${date} `,
      fontSize: 35,
      alignment: 'center',
      margin: [0, 20, 0, 15],
    },
    {
      style: 'tableExample',
      table: {
        widths: [350, 150],
        heights: 22,

        body: [...tableMeals],
      },
    },
  ];

  const footer = [
    {
      text: '1 ',
      fontSize: 30,
      bold: true,
      margin: [50, 10, 25, 5],
    },
  ];

  const docDefinitios = {
    pageSize: 'A4',
    pageMargins: [40, 40, 40, 30],

    info: {
      title: 'DIARIO ALIMENTAR',
    },
    header: [reportTitle],
    content: [details],
    footer: [footer],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        fillColor: '#4b0082',
      },
    },
  };

  pdfMake.createPdf(docDefinitios).download();
};

export default downloadMeals;
