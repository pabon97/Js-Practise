//A function that receives another function as an argument or that returns a new function or both is called Higher-order function. Higher-order functions are only possible because of the First-class function.

//Callback function passes as an parameter to higher order function
function Callback() {
  console.log("I am callback");
}

function HigherOrder(fn) {
  console.log("I am higher Order function");
  fn();
}

HigherOrder(Callback);

const greet = function (name) {
    console.log(name)
  return function (m) {
  console.log(m)
  };
};

const greet_message = greet('ABC')
greet_message('Welcome to Js')