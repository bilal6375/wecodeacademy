
// Question 1
// Write a JavaScript function to capitalize the first character of the string.

// let i = 'wecodeacademy';
// let x = i.charAt(0).toUpperCase() + i.slice(1);
// console.log(x);

// Question 2
// Write a JavaScript function to insert a string within a string at a particular position

// let a = "We are learning exercises";
// let b = " JavaScript";
// let posi = 14;
// let result = [a.slice(0, posi), b, a.slice(posi)].join('');
// console.log(result);

// Question 3
// Write a JavaScript function to count the occurrence of a substring in a string.

// let str = "My name is wecode academy and my friend name is Arun Kumar.";
// console.log(str.split("is").length - 1);


// Question 4
// Ask user below questions:

// What is your name?
// What is your mobile number?
// What is your account number?
// What is your atm card number?
// What is your aadhar number?

//  let nam = prompt("What is your name?");
//    console.log(nam);

//  let str = prompt("What is your mobile number?"); 
//  let strEnd = str.slice(0, str.length - 3).padEnd(str.length, '*');
//   console.log(strEnd);

  // What is your atm card number?
//    let atmm = prompt("What is your atm card number"); 
//    let stratm = atmm.slice(0, atmm.length - 8).padEnd(atmm.length, '*');
//     console.log(stratm);

// What is your aadhar number?
// let adhar = prompt("What is your atm card number"); 
// let stradhar = adhar.slice(4).padStart(adhar.length, '*');
// let stratm = adhar.slice(0, adhar.length - 4).padEnd(adhar.length, '*');
// let total = stradhar + stratm
//  console.log(total);

// Question 6
// Ask below questions :

// What is your name?
// What is your birth year?
// What is your address ?
// What is your country code?
// What is your mobile number?

// let nam = prompt("what is your name?");
// let birth = (prompt("What is your birth year?"));
// let address = prompt("What is your address ?");
// let countrycode = prompt("What is your country code?");
// let Mnumber = (prompt("What is your mobile number?"));
// let age = 2023 - birth;
// console.log(`My name is ${nam}I was born in ${birth}and my current age is ${age}years My address is ${address}and my mobile number is ${countrycode} ${Mnumber}`);
 

  
// Question 7
// Divide a string in two part.

// Now in right side part add Hello in the end In left side of the string add World in starting

// var str = "Wecode Academy";
// let  result = str.split(' ').join(' Hello World ')
// console.log(result)
