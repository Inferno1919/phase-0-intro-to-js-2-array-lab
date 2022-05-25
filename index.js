// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){

cats.push("Ralph");

}
function destructivelyPrependCat(){

cats.unshift("Bob");

}
function destructivelyRemoveLastCat(){

cats.pop();

}
function destructivelyRemoveFirstCat(){

cats.shift();

}

function appendCat(){

const appendCat = cats.slice();
appendCat.push("Broom")
return appendCat;

}
prependCat();
function prependCat(){

const prependCat = cats.slice();
prependCat.unshift("Arnold");
return prependCat;

}
function removeFirstCat(){

const removeFirstCat = cats.slice(1);
return removeFirstCat; 

}
function removeLastCat(){

const removeLastCat = cats.slice(0,2);
return removeLastCat;

}
