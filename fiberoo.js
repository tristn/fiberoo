function fib() {
  const array = [];
  array[0] = 0;
  array[1] = 1;
  for (let i = 2; i < 50; i++) {
    array[i] = array[i - 2] + array[i - 1];
  }
  return array;
}

console.log(fib());

function numsToStrings(array) {
  return _.map(array, function (num) { return num.toString(); });
}
console.log(numsToStrings(fib()));

function numEvenNums(array) {
  const filteredArray = _.filter(array, function (num) { return num % 2 === 0; });
  return filteredArray.length;
}
console.log(numEvenNums(fib()));
