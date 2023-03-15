
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


//Array
//Size automatically increase hoti hai
//Ek ya ek se jyada values store krva skte hain
// let str = "";
// let arr = ["Shoyab 101", "Wecode", 4, "Jaipur", "rashid", 10.5, 34545];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[7]);

//  let arr = ['bilal',63546474,'usman khan','merta city',341510];
//  console.log("my name is",arr[0],"and my mobile number",arr[1],"my father name ",arr[2],'addres',arr[3],"pencode",arr[4]);

// let arr = [10,30,40,50];
// for(let i = arr.length-1; i>= 0; i--){
//   console.log(arr[i]);
// }

// 1. Find max number from array 
// 2. find min number from array 
// 3. Find total duplicate count of a number 
// 4. find middle element of the array 
// 5. find last element of the array 
// 6. find first element of the array 
// 7. find if a number is present more than 3 times in the array or not ?
// 8. Find total count of odd numbers in array 
// 9. Find total count of even numbers in array 
// 10. Find average of the array

// 1. Find max number from array
// let arr = [1, 20, 3, 44, 5, 69, 7, 80, 9, 10];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// 2. find min number from array 
//  let arr = [8, 20, 3, 44, 5, 69, 7, 80, 9, 10];
//  let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   } 
// }
// console.log(min);
             
//  let arr = [8, 20, 3, 44, 5, 69, 7, 80, 9, 10];

//  for (let a = arr.length-1; a >= 0 ; a--) {
//   console.log(arr[a]);
  
//  }

// Find total duplicate count of a number
// let arr =[22,89,20,47,65,83,20,45,39];
// let dup = {};
// for (let a = 0; a < arr.length; a++) {
//   if (arr[a] == dup[a]) {
//     dup = arr[a];
//   }
// }
// console.log(dup);

  // Find total duplicate count of a number
// let  arr =[1,2,3,4,5,6,2,7,8,9,2,];
// let count = 0;
// for (let a = 0; a < arr.length; a++) {
//     for(let i=a+1; i <arr.length; i++){
//       if (arr[a] === arr[i]) {
//         count ++;
//         // console.log(arr[a])
//       }
//     }
// } 
// console.log(count);

// find last element of the array 
// let arr = [12,14,15,16,64,543,675];
// let len = arr.length-1;
// console.log(arr[len]);

  // const arr = [2, 3, 4, 2, 5, 2, 7, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];
  //       const num = arr[0];
  //       let count = 0;
  //       for (let i = 0; i < arr.length; i++) {
  //           if (arr[i] === num) {
  //               count++;
  //           }
  //       }
  //       console.log(`${arr[0]} number are`, count)



//   const arr = [1, 99, 2, 1212, 3, 99, 15, 98, 6, 7,14, 7];
//  let arrs =[arr.length-1];
//   console.log(arr[arrs/2 +0.5]);
   // let arr = [1, 2, 3, 4, 5, 23, 23, 24, 234, 2, 34, 234, 234, 34534534];
        // let fristElement = arr[0];
        // console.log(fristElement)


        // const arr = [4, 5, 1, 2, 10, 121, 5, 4, 5, 8, 2, , 2342, 2342, 32342, 34234, 22];
        // const middleIndex = (arr.length - 1) / 2;
        // console.log(middleIndex, "-------");
        // const middleElement = arr[middleIndex];
        // console.log(middleElement);

        // let arr =[1,2,3,4,5,6,3,7,8,9,2];
        // let cout =0;
        // for(let i =0; i <=arr.length-1; i++){
        //   for(let j=i+1; j<arr.length;j++){
        //      if (arr[j] ==arr[i]) {
        //       cout++
        //   console.log(arr[j]);
        //       }
        //     } 
        //   }

           
//  let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
//   for(let i = 0;i<arr.length; i++){
//      if (arr[i] % 2 == 1) {
//        console.log(arr[i]);
//      }
//   }

  // let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  // for(let i = 0;i<arr.length; i++){
  //    if (arr[i] % 2 == 0) {
  //      console.log(arr[i]);
  //    }
  // }

  //  let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  //  let sum =0;
  // for(let i = 0;i<arr.length; i++){
  //    if (arr[i] % 2 == 1) {
  //      sum +=arr[i];
  //    }
  // }
  // console.log(sum);

//    let arr =[1,2,3,4,5,6,7,8,9,60,65,11,12,13,14,15,16];
//  let sum =0;
//   for(let i = 0;i<arr.length; i++){
//      if (arr[i] >50 ) {
//        sum +=arr[i];
//      }
//   }
//   console.log(sum);

//   let arr =[1,2,3,4,5,6,7,8,9,60,5,500,11,12,13,14,15,16];
//  let sum =0;
//   for(let i = 0;i<arr.length; i++){
//      if (arr[i] < 100 ) {
//        sum +=arr[i];
//      }
//   }
//   console.log(sum);

//   let arr =[1,2,3,4,5,6,7,8,9,60,5,500,11,12,13,14,15,16];
//  let sum =1;
//   for(let i = 0;i<arr.length; i++){
//        sum =  sum*=arr[i];
//   }
//   console.log(sum);

// let student = 10;
// let studentAverage = student * 45;
// let totalStudentAvergae = (student + 1) * 52;
// let teacherWeigth = totalStudentAvergae - studentAverage;
// console.log(teacherWeigth); // 122

// 2. Array me 3 new numbers push krne hai 
//    1 number unshift krna hai 
//    2 shift krne hai 
//    2 pop krne hai 
// Aur fir result check krna hai 

// let arr = []; 
//   arr.unshift(1,2,3,4,5,6,7,8);
//   arr.shift();
//   arr.pop();
//  console.log(arr);

//  Array ko reverse krke use ** se join krna hai 
// let arr = [1,2,3,4,5,6,7,8,9,10]; 
//  arr.reverse();
//  console.log(arr.join("**"));

// Write a program to reverse the array using for loop
// let arr = [1,2,3,4,5,6,7,8,9,10]; 
// for (let index = arr.length; index >=0; index--) {
//   console.log(arr[index]);
// }

// swaping

// let a = 20;
// let b = 10;
// let c = a;
//  a = b;
//  b = c;
// console.log(a,b);

// 1. Function ko 1 number pass krna hai. jo number pass kia hai us number ki table print krni hai. for example 5

// function multiple(a, b) {
//   console.log(a * b);
// }

// multiple(4, 2);


// let arr = ["My Name id wecode academy"];

// let anns = arr.reduce();
// console.log(anns);
// const arr = "My Name id wecode academy";
// let ans = arr.split(" ");
// let finaltest = ans.reduce(test,0);
 
// function test(prvValue, curValue) {
//   if (curValue.length % 2 === 1) {
//     return prvValue++;
//   }
// }
// console.log(finaltest);
// let arr = [1,2,3,4,5,6,7,8,9,10];
//   let ans = arr.filter(test);

// function test(num){
//   return  num % 2 === 1;
// }
// let result = ans.map(test1);
// function test1(num){
//   return  num * 2;
   
// }
// console.log(result);

// let arr = [1,2,3,4,5,6,7,8,9,10];
//  let ans = arr.filter();
//  function tes(num){
//    return 
//  }

// let str = "My naMe is weCoDe acadeMy";
// let ans = str.split(" ");
// let finaltest = ans.reduce(test,"");
// function test(total ,val){
// let fistvalue = val.slice(0,1).toUpperCase();
// let secoundvalue = val.slice(1).toLowerCase();
// total = total + fistvalue +  secoundvalue + " ";
// return total;
// }
//  console.log(finaltest);

// let obj ={
//   name: "bilal",
//   mobile: 6574637284,
//   address: "japur",
//   brother: ["al","bilal","altaf"],
//   fun :function(a, b){
//      console.log(a + b);
//   },
  
// };
// console.log(obj);
// key and values print
// let  obj ={
// name : "bilal",
// mobile: 34245345345,
// address: "japur",
//  bank: {
//     bankName: "hdfc",
//     bankAccount: 5345345345,
//      ifcCode: 245534,
//     bankAddress:{
//       country: "india",
//       state: "rajsthan",
//       city: "jaipur",
//     },
// },
// };
// console.log(obj["name"],obj["bank"]["bankName"],obj["bank"]["bankAddress"]["country"]);


// key and values print
// let  obj ={
//   name : "bilal",
//   mobile: 34245345345,
//   address: "japur",
//   };
//   let arr = Object.entries(obj);
//   for (let i = 0; i <arr.length; i++) {
//    document.write(arr[i][0]+ " " +arr[i][1]+"<br>");
//   }

// let obj = {
//   name: "vakeel",
//   mobile: 6375164100,
//   address: "karkwal merta city",
// };
// let arr = Object.keys(obj);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], obj[arr[i]]);
// }

// object to object 

// let obj = {
//   name: "vakeel",
//   mobile: 6375164100,
//   address: "karkwal merta city",
//   bankaccount: {
//     accountname: "harshit sharma",
//     accountnumber: 87687585875858,
//   },
// };
// let entries = Object.entries(obj);
// for (let i = 0; i < entries.length; i++) {
//   // console.log(entries[i][0],entries[i][1]);
//   if (typeof entries[i][1] === "object") {
//     let otherEntires = Object.entries(entries[i][1]);
//     for (let j = 0; j < otherEntires.length; j++) {
//       console.log(otherEntires[j][0], otherEntires[j][1]);
//     }
//   }
// }

let arr =[1,2,3,4,5,6,1,3,5];
let set = new Set(arr);
set.add(15);
set.add(16);
set.delete(5);

// set.forEach(test)
//   function test(num){
// console.log(num)
// }
for (const value of set) {
  console.log(value);
}
