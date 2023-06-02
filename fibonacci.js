// Iterative fibonacci sequence
function fibs(number, arr = [0, 1]) { 
  if(number < 2) return arr;
  for(let i = 2; i <= number; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}


// Fibonacci position
const fibPos = (num) => num < 2 ? num : fibPos(num - 1) + fibPos(num - 2);


// Recursive fibonacci sequence
function fibsRec(num, arr = [0, 1]) {
  if(num < 2) return arr;
  let [beforeLastNum, lastNum] = arr.slice(-2);
  let results = fibsRec(num - 1, [...arr, beforeLastNum + lastNum]);
  return results;
}


console.log(fibs(7)) // [ 0, 1, 1,  2, 3, 5, 8, 13 ]
console.log(fibsRec(7)) // [ 0, 1, 1,  2, 3, 5, 8, 13 ]
console.log(fibPos(7)) //13