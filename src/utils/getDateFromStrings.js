export default (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getDay();
  const year = date.getFullYear();

  return {
    day,
    month,
    year,
  };
};
