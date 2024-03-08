const array = [1, 2, 3, 4];

const initialValue = 0;

const sumWithInitial = array.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  initialValue
);

console.log(sumWithInitial);

