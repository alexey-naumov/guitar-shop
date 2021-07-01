import {TypeFilterByPrice} from './const';
import {dataMocks} from './mocks';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const splittingDigits = (item) => {
  return (String(item)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1 `);
};

export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const getUppercaseText = (string) => {
  return String(string).toUpperCase();
};

export const getById = (items, id) => {
  return items.slice().find((item) => item.id === id);
};

export const getByType = (items, type) => {
  return items.slice().filter((item) => item.type === type);
};

export const getByStrings = (items, strings) => {
  return items.slice().filter((item) => item.strings === strings);
};

export const getByPrice = (items, {min, max}) => {
  return items.filter((item) => (item.price >= min && item.price <= max));
};

export const sortByType = (data, type, isReverse = false) => {
  const result = data.sort((a, b) => b[type] - a[type]);
  return isReverse ? result.reverse() : result;
};

export const getMinMaxPrice = (data) => {
  let min = data[0].price;
  let max = data[0].price;

  for (let i = 1; i < data.length; i++) {
    min = (data[i].price < min) ? data[i].price : min;
    max = (data[i].price > max) ? data[i].price : max;
  }

  return {min, max};
};

export const getFilteredData = (data, filters) => {
  const currentFilters = Object.keys(filters).filter((key) => filters[key].length);

  return data.filter((item) =>
    currentFilters.reduce((flag, key) =>
      (flag && filters[key].includes(item[key])), true)
  );
};

export const setCurrentValue = (value, min, max, type, callback) => {
  (value < min) ? callback({[type]: min}) :
    (value > max) ? callback({[type]: max}) :
      callback({[type]: value});
};
