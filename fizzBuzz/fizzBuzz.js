for (var i = 0; i < 100; i++) {
  var number = i + 1;
  var result = '';
  if (number % 3 == 0) {
    result = 'Fizz';
  }
  if (number % 5 == 0) {
    result += 'Buzz';
  }
  if (!result) {
    result = i + 1;
  }
  console.log(result);
}
