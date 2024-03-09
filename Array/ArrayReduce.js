//Example 1
const array = [1, 2, 3, 4];

const initialValue = 0;

const sumWithInitial = array.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  initialValue
);

console.log(sumWithInitial);

// Example 2, Here initial value is 10 which is first index of numbers array

const numbers = [10, 20, 30, 40, 50];

let sum = numbers.reduce((previousValue, currentvalue, index, array)=> {
  return previousValue + currentvalue
})
console.log(sum)

