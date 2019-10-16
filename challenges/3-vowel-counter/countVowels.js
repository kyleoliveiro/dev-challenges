export default (str) => {
  const regex = /[aeiou]/g;
  const match = str.toLowerCase().match(regex);
  return match ? match.length : 0;
};
