const mathOperations = {
  sum: function (a, b) {
    return a + b;
  },

  diff: function (a, b) {
    return a - b;
  },
  product: function (a, b, c) {
    return a * b * c;
  },
  divide: function (a, b) {
    return a / b;
  },
  printName: function (a) {
    return "My name is "+ a;
  },
};
module.exports = mathOperations;
