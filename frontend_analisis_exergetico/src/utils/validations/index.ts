const dot = /^[^.]*$/;
const email =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const fullName = /^[A-Za-z ÁÉÍÓÚÜÇáéíóúüç.-]+$/;
const number = /^[1-9]+[0-9]*$/;
const alphaNumeric = /^[a-z0-9]+$/gi;

function icIsValid(ic: string) {
  const dateString = ic.slice(0, 6);
  const year = dateString.slice(0, 2);
  const month = dateString.slice(2, 4);
  const day = dateString.slice(4, 7);
  const date = Date.parse(`${year}/${month}/${day}`);
  return !isNaN(date) && ic.length === 11;
}

const Rules = {
  EMAIL: (value: string) =>
    email.test(value) || 'El correo electrónico es incorrecto',
  IC: (value: string) =>
    icIsValid(value) || 'El carnet de identidad es incorrecto',
  NOT_DOT: (value: string) => !value.includes('.') || 'No puede contener "."',
  NUMBER: (value: string) => number.test(value) || 'El número no es correcto',
  FULL_NAME: (value: string) =>
    fullName.test(value) || 'El nombre es incorrecto',
  NOT_EMPTY: (value: string) =>
    value.trim() !== '' || 'El campo no puede estar vacío',
  ALPHA_NUMERIC: (value: string) =>
    alphaNumeric.test(value) || 'El campo no puede estar vacío',
};

export default Rules;
