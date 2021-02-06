import MONTHS from '../constants/months';

export default (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
