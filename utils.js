function generateRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

module.exports = {
  generateRandomNumber,
  celsiusToFahrenheit,
};
