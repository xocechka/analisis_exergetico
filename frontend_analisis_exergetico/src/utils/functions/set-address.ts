import { Address } from '@/modules/exergia/models/address';

export function stringToAddress(str: string): Address {
  const [number, street, betweenStreets, province, municipality] =
    str.split('.');
  return {
    number: Number.parseInt(number),
    street,
    betweenStreets,
    province,
    municipality,
  };
}

export function addressToString(address: Address) {
  const { number, street, betweenStreets, province, municipality } = address;
  const str = `${number}.${street}.${betweenStreets}.${province}.${municipality}`;
  return str;
}

export function formStringAddress(values: string[]) {
  let stringAddress = '';
  values.forEach((value, index) => {
    stringAddress =
      index === values.length - 1
        ? stringAddress.concat(value)
        : stringAddress.concat(value + '.');
  });

  return stringAddress;
}
