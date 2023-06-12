'use strict';

function getFactorial(num){
    if (num === 1) return num;
    return num * getFactorial(num - 1);
}
console.log(getFactorial(10));