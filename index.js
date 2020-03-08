var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  // appends a kitten to the end of the array
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  // prepends a kitten to the beginning of the kittens array
 kittens.unshift(name);
 return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
 return [name, ...kittens]; 
}

function removeLastKitten() {
  
}

function removeFirstKitten() {
  
}