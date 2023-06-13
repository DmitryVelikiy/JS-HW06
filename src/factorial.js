'use strict';

function getFactorial(num){
    if (typeof num !== 'number' || num < 0) {
        return'incorrect number type';
}
if (num === 0) {
    return 1;
  }
  return num * getFactorial(num - 1);
}

console.log(getFactorial(5));
