var numeral = function(array) {
  const ones = ["X","V","I"];
  const tens = ['C','L','X'];
  const hundreds = ['M', 'D', 'C'];
  const thousands = ['*', '*', 'M'];
  const places = [thousands, hundreds, tens, ones];

  var handleDigit = function(digit, letterArray) {
    if (digit === 0) {
      return '';
    } else if (digit === 9) {
      return letterArray[1] + letterArray[0];
    } else if (digit >= 5) {
      return letterArray[1] + letterArray[2].repeat(digit - 5);
    } else if (digit === 4) {
      return letterArray[2] + letterArray[1];
    } else if (digit > 0){
      return letterArray[2].repeat(digit);
    }
  }
  var result = '';

  places.forEach(function(place, i) {
    result += handleDigit(array[i], place);
  })

  return result;
}

var prepAndRun = function(str) {
  str = parseInt(str);
  if (str >= 4000) return "TOO BIG!!!";
  str = str.toString();
  var array = str.split('');
  var numArray = array.map(n => parseInt(n));
  while (numArray.length < 4) {
    numArray.unshift(0);
  }
  return numeral(numArray);
}

var tests = [
  [0,5,9,3], // XXIII
  [1,9,0,1], // MI
];

var newTests = [
  "593",
  "1901",
  "0000035",
  "5500"
];


var tester = function(tests) {
  newTests.forEach(function(test) {
    console.log(prepAndRun(test));
  })
}

tester(tests);
