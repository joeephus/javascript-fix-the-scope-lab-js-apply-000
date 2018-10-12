function myAnimal() {
  var animal = 'dog';
  return animal;
}

var yourAnimal = function(animal) {
  return animal;
};

function add2(n) {
  const two = 2;
  return n + two;

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction;

add2(837);
myAnimal();
yourAnimal();
theFunk();