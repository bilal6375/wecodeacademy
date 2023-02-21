// Question 1

// let french = prompt("How many french fries (60rs per piece) do you want to order ?");
// let sumFrench = 60;
// let tatolFrench = french* sumFrench

// let burgers = prompt("How many burgers (50rs per piece) do you want to order");
// let sumburgers = 50;
// let tatolburgers = burgers *sumburgers;

// let chowmin = prompt("How many plates of chowmin (100rs per plate) do you want to order?");
// let sumchowmin = 100;
// let tatolchowmin = chowmin *sumchowmin;

// let Manchurian = prompt("How many plates of Manchurian (80rs per plate) do you want to order?");
// let sumManchurian =80;
// let tatolManchurian = Manchurian *sumManchurian;


// let Cokes = prompt("How many Cokes (50 per piece) do you want to order ?");
// let sumCokes =50;
// let tatolCokes = Cokes *sumCokes;

// console.log(tatolFrench);
// console.log(tatolburgers);
// console.log(tatolburgers);
// console.log(tatolManchurian);
// console.log(tatolCokes);

// let total = tatolFrench +tatolburgers+tatolburgers +tatolManchurian +tatolCokes;

// console.log(total);






// Question 4
// let result = 80;
// switch (result) {
//   case 100:
//     console.log("100");
//     break;
//   case result:
//     if (result % 2 === 1) {
//       console.log("its even number");
//     } else if (result % 2 === 0) {
//       console.log("its odd number");
//     }
//     break;
//   default:
//     console.log("1000");
// }



// // Question 10 

// let str = "helllooll00";
// let i = [...str];
// if (i.length > 10) {
//   console.log(i.slice(1));
// } else {
//   console.log("no");
// }


// Question 2 (Marks:10)
// Print below Pattern
// $##$##$
// $##$##
// $##$
// $##
// $

// for (let i = 7; i >= 1; i--) {
//   let a = "";
//   for (let j = 1; j <= i; j++) {
//     if (j % 3 === 1  ) {
//       a += "$";
//     } else {
//       a += "#";
//     }
//   }
//   console.log(a);
// }



// Create Bill Calculator

// Ask below Questions

// How many french fries (60rs per piece) do you want to order ?
// How many burgers (50rs per piece) do you want to order ?
// How many plates of chowmin (100rs per plate) do you want to order?
// How many plates of Manchurian (80rs per plate) do you want to order?
// How many Cokes (50 per piece) do you want to order ?

// Use can enter any number of quantities. Calculate the bill based on the quantities entered and item prices.
//  If user enteres 0 or negative value then consider item count as 0.

//   let french = Number(prompt("How many french fries (60rs per piece) do you want to order ?"));
//   let burgers = Number(prompt("How many burgers (50rs per piece) do you want to order ?"));
//   let chowmin = Number(prompt("How many plates of chowmin (100rs per plate) do you want to order?"));
//   let Manchurian = Number(prompt("How many plates of Manchurian (80rs per plate) do you want to order?"));
//   let Cokes = Number(prompt("How many Cokes (50 per piece) do you want to order ?"));

//   if (french > 0 || burgers > 0 || chowmin > 0 || Manchurian > 0 || Cokes > 0 ) {
//     TotalFrench =      french * 60; 
//     TotalBurgers =     burgers * 50;
//     TotalChowmin =     chowmin  * 100;
//     TotalManchurian =  Manchurian * 80;
//     TotalCokes      =  Cokes * 50 ;

//     let AllTotal = TotalFrench + TotalBurgers + TotalChowmin + TotalManchurian + TotalCokes;
    
//     console.log(AllTotal);
//   }


//   Question 4 (Marks:15)
//   Using a switch case to do this exercise
  
//   If number is odd then print Odd
//   If number is even then print Even
//   If number is 100 then print 100
//   Else print 10000

//  let   numberEven = 10%2;
//  let   numberOdd = 11%2;
//  let   numberOther = 100;
//  let   numberdefoult = 1000;
// switch (numberdefoult) {
//     case 100:
//         document.write(100);
//         break;
//         case 0:
//          document.write("number is even");
//             break;
//         case 1:
//         document.write("number is odd");
//         break;


//     default:
//         document.write(1000);

//         break;
// }


// Question 3 (Marks:5)
// Ask the user question "How many times do you want to print Series". Then print below series. For example below series will print if user enteres 5

// 2, 6, 30, 260, 3130 Find the pattern for above series and print accordingly. If the user enters 10 then we will print the same series numbers till 10 times.

//   let series = Number(prompt("How many times do you want to print Series"));
//   for (let a = 1; a <=series; a++) {
//     console.log(a ** a + a);
//   }
   

// Question 5 (Marks:5)
// Ask user his/her birth year, "What is your birth year?"

// If user age is greater than 18 then ask user "Do you have valid license number?" If user click on Okay 
//then ask for his license number and finally in the alert show message "User with license number #### is ready to drive."

// If user age is less
// than 18 then ask him question in confirm box 
//"Do you have gaurdians ?"" If user says yes then ask his/her Gaurdian name and then in alert show
// "You are ready to drive with your #### (show gaurdian name here.)" Else show "Sorry visit again please." in alert box



// let year = Number(prompt("What is your birth year?"));
// let age = 2023 - year;
// if (age > 18) {
//   let ans = confirm("Do you have valid license number?");
//   if (ans) {
//     let license = prompt("What is your license number?");
//     alert(`User with license number ${license} is ready to drive.`);
//   } else {
//     alert("Sorry, please visit again");
//   }
// } else {
//   let ans = confirm("Do you have gaurdians ?");
//   if (ans) {
//     let gaurdian = prompt("What is your gaurdian name?");
//     alert(`You are ready to drive with ${gaurdian}`);
//   } else {
//     alert("Sorry, please visit again");
//   }
// }


// Question 2 (Marks:10)
// Print below Pattern
// $##$##$
// $##$##
// $##$
// $##
// $

// Question 10 (Marks:5)
// Take a String and check its length. If string length is
//  greater than 10 then print from 1 to length of the string. else print No

// let str = "bilal pathan";
// let lenghsst = str.length;
// if (lenghsst > 10) {
//     for (let a = 1; a <=lenghsst; a++) {
//     console.log(a);
//     }
    
// }
// else{
//  console.log("no");
// }

// Question 8 (Marks:10)
// Write a JavaScript program to check if out of 4 
// numbers any two numbers are same or not. If yes then print Yes else print No.

// let a = 10;
// let b = 10;
// let c = 20;
// let d = 30;
// if (a === b || a === c || a === d || b === c || b === d || c===d ) {
//     console.log("yes");
// }
// else{
//     console.log("not");
// }


// Question 6 (Marks:10)
// Take any number and take other number as 19. Now check their difference by 
// subtracting each other. If both numbers difference is greater than 19 then print triple
//  their absolute difference else print double their absolute difference.


// let any = 50;
// let number = 19;
// let result = any - number;


// if (result > number) {
//     console.log(result * 3);
// }
// else{
//     console.log(result * 2);
// }
  


// let num1 = -10;
// let num2 = 20;
// if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
//   console.log(num1 + num2);
// } else {
//   console.log(num1 * num2);
// }


