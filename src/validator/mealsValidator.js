import { toast } from 'react-toastify';

const mealsValidator = (meal) => {
  const { meals, proteins, carboDownload } = meal;
  let valid = true;

  if (proteins.value === 0 || proteins.text === undefined) {
    toast.info(`Selecione um tipo de alimento na ${meals} refeição   `);
    valid = false;
  }
  if (carboDownload.value === 0 || carboDownload.text === undefined) {
    toast.info(`Selecione um tipo de alimento na ${meals} refeição   `);
    valid = false;
  }

  return valid;
};

export default mealsValidator;
