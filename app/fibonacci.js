function Counter(value) {
  const index = value || 0;
  let number = 0;
  let counter = 1;
  let i = 0;
  while (i < index) {
    counter += number;
    number = counter - number;
    i++;
  }
  return {
  	index,
  	number
  };
}

module.exports = Counter;