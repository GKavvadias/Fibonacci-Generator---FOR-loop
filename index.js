function fibonacciGenerator(n) {
  var fibonacciNumbers = [];
  for (var i = 1; i <= n; i++) {
    if (i == 1) {
      fibonacciNumbers.push(i - 1);
    } else if (i == 2) {
      fibonacciNumbers.push(i - 1);
    } else {
      fibonacciNumbers.push(fibonacciNumbers[i - 2] + fibonacciNumbers[i - 3]);
    }
  }
  return fibonacciNumbers;
}
