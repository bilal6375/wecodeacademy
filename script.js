// ## Exercise-15

// 1 .What is an object in JavaScript?
// object litral =>

// let obj ={
//     name:'bilal',
//     address:'merta',
//     number:48749375,
// };

// console.log(obj);
// object new key word

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
//   let myString = Object.entries(person);
//  console.log(myString);


// Question 3
// #### How do you loop through the properties of an object in JavaScript?

// let obj = {
//     name:'bilal',
//     age:23,
//     mobile:233434343
// }
// for (const key in obj) {
//     console.log(key+ ":"+obj[key]);
// }


// Question 4
// What is the difference between an object and an array in JavaScript?


// Question 5
// Write a JavaScript function to convert an object into a list of [key, value] pairs

// function convert(obj) {
// let objvalue = Object.entries(obj)
// return objvalue;
// }
// let value = {"name":"bilal","age":34,"mobile":3334324};
// console.log(convert(value));

// Question 6
// Write a function that takes an object representing a person and returns their full name.

// function fullName(Name){
//     let addName = Name.name + " " + Name.lastName;
//     return addName;
// }
// let obj ={name:'bilal',lastName:'khan'};
// console.log(fullName(obj));

// #### 7. Create an Object with your personal details. Now print all the keys of the object in ascending order.

// function details(kyesOf) {
//     return Object.keys(kyesOf).sort();
// }
// let obj = {
//     name:'bilal',
//     age:23,
//     mobile:233434343
// }
// console.log(details(obj));

// Question 8
// Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.

// function details(personal) {
//     return Object.values(personal).sort((a ,b)=> b - a);
// }

// let obj = {
//     name:'bilal',
//     age:23,
//     mobile:233434343
// }
// console.log(details(obj));



// const recipe = {
//     title: "Mole",
//     servings: 2,
//     ingredients: ["cinnamon", "cumin", "cocoa"]
//   };
  
//   console.log(recipe.title);
//   console.log(`Serves: ${recipe.servings}`);
//   console.log("Ingredients:");
//  recipe.ingredients.forEach((int) => console.log(int));

// Question 10
// Create a JavaScript function inside an object which finds max of 3
//  numbers. Now call this function of the object and print the maximum number.


// let obj = {
//    maxValue:function(a ,b ,c) {
//     let max = a;
//     if (b > max) {
//         max = b;
//     }
//     if (c > max ) {
//         max = c;
//     }
//     return max;
//    }
// }
// console.log(obj.maxValue(20,30,10));


// let obj ={
//     maxValue:function(a,b,c) {
//         return Math.max(a,b,c);
//     }
// };
// console.log(obj.maxValue(20,45,11));