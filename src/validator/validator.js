import { toast } from 'react-toastify';

const validator = (data) => {
  let isValid = true;
  const { name, age, weight, height, sex, calorie, sleep } = data;

  if (sex === '' || sex === undefined || !sex) {
    toast.info('Defina o sexo para o planejamennto ');
    isValid = false;
  }
  if (name.length <= 0 || name.length > 40) {
    toast.info('Nome precisa ter entre 1 e 40 caracteres.');
    isValid = false;
  }
  if (age === 0 || age.length > 3) {
    toast.info('Valor Idade Invalida.');
    isValid = false;
  }
  if (weight === 0 || weight.length > 3) {
    toast.info('Valor Peso Invalido.');
    isValid = false;
  }
  if (height === 0 || height.length > 3) {
    toast.info('Valor Altura Invalida.');
    isValid = false;
  }
  /* if (cintura === 0 || cintura.length > 3) {
    toast.info(' Valor Cinturas Invalida.');
    isValid = false;
  }
  if (pescoco === 0 || pescoco.length > 3) {
    toast.info('Valor Pescoço Invalido.');
    isValid = false;
  }
  if (sex === 'woman' && (quadril === 0 || quadril.length > 3)) {
    toast.info('Valor Quadril Invalido.');
    isValid = false;
  } */
  if (!calorie) {
    toast.info('Valores Invalido.');
    isValid = false;
  }
  if (!sleep) {
    toast.info('Valores Invalido.');
    isValid = false;
  }

  return isValid;
};

export default validator;
