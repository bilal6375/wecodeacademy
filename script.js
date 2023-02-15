// Question 1

let french = prompt("How many french fries (60rs per piece) do you want to order ?");
let sumFrench = 60;
let tatolFrench = french* sumFrench

let burgers = prompt("How many burgers (50rs per piece) do you want to order");
let sumburgers = 50;
let tatolburgers = burgers *sumburgers;

let chowmin = prompt("How many plates of chowmin (100rs per plate) do you want to order?");
let sumchowmin = 100;
let tatolchowmin = chowmin *sumchowmin;

let Manchurian = prompt("How many plates of Manchurian (80rs per plate) do you want to order?");
let sumManchurian =80;
let tatolManchurian = Manchurian *sumManchurian;


let Cokes = prompt("How many Cokes (50 per piece) do you want to order ?");
let sumCokes =50;
let tatolCokes = Cokes *sumCokes;

console.log(tatolFrench);
console.log(tatolburgers);
console.log(tatolburgers);
console.log(tatolManchurian);
console.log(tatolCokes);

let total = tatolFrench +tatolburgers+tatolburgers +tatolManchurian +tatolCokes;

console.log(total);



// Question 4
let result = 80;
switch (result) {
  case 100:
    console.log("100");
    break;
  case result:
    if (result % 2 === 1) {
      console.log("its even number");
    } else if (result % 2 === 0) {
      console.log("its odd number");
    }
    break;
  default:
    console.log("1000");
}



// Question 10 

let str = "helllooll00";
let i = [...str];
if (i.length > 10) {
  console.log(i.slice(1));
} else {
  console.log("no");
}




