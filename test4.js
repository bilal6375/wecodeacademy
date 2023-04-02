
///////////////////////////////////maping//////////////////////


// let map = new Map();
//  map.set("name","bilal");
//  map.set("mobile",234234 );

//  console.log(map.size);
//  console.log(map.get("name"));
//  console.log(map.has("name"));
//   console.log(map.has("name"));
// for (const value of map) {
//     console.log(value[0] , value[1]);
// }
//  map.forEach(test);
//  function test(value ,key) {
//     console.log(key ,value);
//  }

/////////////////map to arrya//////////////////////////
// let map = new Map();
// map.set("name","bilal");
// map.set("number",2434234);
// map.set("picode",444);
// console.log([...map]);

// let obj = {
//     name: "Wecode",
//     mobile: 54654656,
//     address: {
//       pincode: 302012,
//       city: "Jaipur",
//     },
//   };
//   //Value Update
//   obj.name ="bilal",
//   obj.mobile = 11111111111;
//   obj["mobile"] = 2222222222;
//   obj.address.pincode = 3333333;
//    delete obj.address.pincode, 
//   console.log(obj);



// let map = new Map();
// map.set("name","bilal");
// map.set("email","bilal@gmail.com");
// map.set("password",455345);
// console.log([...map]);

// let arr =[ ["js", 500],
// ["designing", 400],];
// let map =  new Map(arr);
// console.log(map);

// let obj = {
//   name:"bilal",
//   email:"bilal@gmail.com",
//   password:423545,
// }
// let objjjj = new Map(Object.entries(obj));
// console.log(objjjj);


// let arr = [1, 2, 1, 2, 3, 2, 5];
// let map = new Map();
// for (let key of arr) {
//   map.set(key, 1);
// }
// console.log(map);
  

// let arr = [
//     1, 2, 2, 2, 2, 1, 2, 3, 4, 5, 6, 1, 1, 7, 8, 9, 10, 11, 2, 1, 4, 6, 7,
//   ];

//   for (const value of arr) {
//     console.log(value);
//   }

// let arr = [1,2,3,4,5,6]

// console.log(arr.filter((num) => num % 2 === 1).map(num=> num+1).reduce((num1,num2) =>  num2 + num1));
  
// function declerationFun(a , b) {
//     return a + b; 
// }
// console.log(declerationFun(20 ,30));
//  const expreceFun = function(a , b) {
//     console.log(a + b);
//  }
//  expreceFun(20 ,40);

//  const add = function (a, b) {
//     //function expression
//     console.log(a + b);
//   };
//   add(10, 20);


// function decFun(a ,b) {
//     return a + b;
// }
// console.log(decFun(20,40));

// const expreceFun = function(a ,b){
//     return a +b;
// }
// console.log(expreceFun(10,20));

// const arrow = (a ,b) =>{
//      return a + b;
// }
// console.log(arrow(22,23));

// sum(10, 20);
// function sum(a, b) {
//   //function declaration
//   console.log(a + b);
// }
// const add = function (a, b) {
//   //function expression
//   console.log(a + b);
// };
// add(10, 20);
// const plus = (a, b) => {
//   //arrow function
//   console.log(a + b);
// };
// plus(10, 20);

// 11
// 14
// 0
// function decFun(num) {
//     if (num % 2===1) {
//         return "odd number";
//     }
//     else{
//         return "Even Number";
//     }
// }
// let ans = decFun(11);
// console.log(ans);

//  const expFun = function(num){
//        if (num % 2 === 1) {
//         return "Odd Number";
//        }
//        else{
//         return "Even Number";
//        }
//  }
//  let total = expFun(14);
//  console.log(total);

// let arr = [1,2,3,4,5,6,7,7,8,9,10];
// let ans = arr.map((num) => num * 5);
// console.log(ans); 

// let arr = [1,2,3,4,5,6,7,7,8,9,10];
// let ans = arr.filter((num)=>num % 2===1);
// console.log(ans);

// let arr =[1,2,3,4,5,6,7,8,9,10,13];

// let ans = arr.filter((num)=> num % 2==1).map((num)=>num + 1).reduce((value, total)=> value+total ,0);
// console.log(ans);

// let arr = [1, 2, 3, 4, 5];
// let ans = arr.filter(filterFn).map(mapFn).reduce(reduceFn, 0);
// function filterFn(num) {
//   return num % 2 === 1;
// }
// function mapFn(num) {
//   return num + 1;
// }
// function reduceFn(total, value) {
//   return total + value;
// }
// console.log(ans);

// let arr = [1, 2, 3, 4, 5];
// let ans = arr
//   .filter((num) => num % 2 === 1)
//   .map((num) => num + 1)
//   .reduce((total, value) => total + value, 0);
// console.log(ans);

// let arr =[1,2,3,4,5,6,7,8,9,10];
// function Odd(num) {
//     return num % 2=== 1;
// }
// let ans = arr.filter(Odd);
// console.log(ans);

// function oddMap(num) {
//     return num * 2;
// }
// let result = ans.map(oddMap);
// console.log(result);

// function sum(value , total) {
//     return value + total;
// }
// let sums = result.reduce(sum ,0);
// console.log(sums);

// let arr =[1,2,3,4,5,6,7,8,9,10,13];

// let arr = [1, 3, 5, 9, 11 ,5 ,15];
// let len =0;
// let ans = arr.every((num)=> num % 2===1);
// console.log(ans);
// if (ans) {
//     len = arr.filter((num)=> num > 5).length;
// }
// console.log(len);

// let arr = [1, 3, 5, 9, 5 ,13,15,17,23,21];
// let len = 0;
// let ans = arr.every((num) => num % 2 === 1);
// if (ans) {
//   len = arr.filter((num) => num > 5).length;
// }
// console.log(len);

// function oddEven(num = 10) {
//     if (num % 2 ===1) {
//         console.log("odd");
//     }
//     else{
//         console.log("Even");
//     }
// }
// oddEven();


// function printAarray() {
//     for (const value of arguments) {
//         console.log(value);
//     }
// }
// printAarray(1,2,3,4,5);
// setTimeout((setime) =>{
//     console.log("hello ....");
// },1000);


// setTimeout(setime ,1000);
// setInterval(setime ,1000);
// function setime() {
//     console.log("hello ....");
// }

// function test(num,fun1 , fun2) {
//     if (num % 2=== 1) {
//         fun1();
//     }
//     else
//     {
//         fun2();
//     }
// }
// test(13,function(){
//      console.log("odd");
// },function () {
//     console.log("even");
    
// });

// function test(num1 ,num2 , fun1,fun2, fun3 ,fun4) {
//     if (num1 && num2  > 100) {
//         fun1();
//     }
//     else if (num1 > num2 ) {
//         fun2();
//     }
//     else if ( num2 > num1){
//         fun3();
//     }
//     else if (num1 === num2){
//      fun4();
//     }
// }
//  test(10 ,20 , () =>{
//     console.log("fun1");
//  },() =>{
//     console.log("fun2");
//  },() =>{
//     console.log("fun3");
//  },() =>{
//     console.log("fun4");
//  },)


// function oddEven() {
//     return function (num) {
//        if (num % 2=== 1) {
//         return "odd";
//        }
//        else{
//         return "even";

//        }
//     }
// }
// let ans = oddEven();
//  console.log(ans(10));
// oddEven()(11);

// const interval = setInterval(() => {
//   console.log("hello world");
// }, 1000);
// setTimeout(function () {
//   clearInterval(interval);
// }, 10000);

// const interval = setInterval(()=>{
//             document.write("hello world");
// },1000);

// setTimeout (function() {
//     clearInterval(interval);
// },20000);

// const Wecode = setInterval(()=>{
//     console.log("wecode acadmy");
// },1000)

// setTimeout (function() {
//     clearInterval(Wecode);
// },15000);

// function test(){
//     return function (num) {
//         if (num % 2=== 1) {
//             console.log("Number Is Odd");
//         }
//         else{
//             console.log("Number is Even");
//         }
//     }
// }
// let ans = test();
// test()(11);
// ans(10);

// const hello = setInterval(() => {
//     console.log("hello bilal");
// }, 1000);

// setTimeout(()=>{
//       clearTimeout(hello);
// },15000);

// let obj={
//     name:"bilal khan",
//     email:"bilal@gmail.com",
//     addres:"jaipur",
//      allDetails:function(){
//           console.log(`my name is ${this.name} my Email ${this.email} and my addrss ${this.addres }`);
//      }
// };
// obj.allDetails();

// let obj1 ={
//     name:"bilal",
//     collageName:"MDS",
//     address:"jaipur",
// }
// let obj2 ={
//     name:"bilal",
//     collageName:"MDS",
//     address:"jaipur",
   
// }
// function allDetails(date,manth , year) {
//     console.log(`name is ${this.name} collage name ${this.collageName} address name${this.address} biethday ${this.date}`);
    
// }
// allDetails.call(obj1,1995,1,3);
// obj2.allDetails();

// function test(num){
//     if (num % 2 === 1) {
//     return function () {
//             console.log("Number is Odd");
//         }
//     }
//     if (num % 2 === 0) {
//     return function() {
//             console.log("Number is Even");
//         }
//     }
// }
//  test(17)();
//  let ans = test(10);
//  ans();

// let num =0;
// console.log(++num);
// console.log(++num);
// console.log(++num);
// console.log(++num);
// console.log(++num);
// console.log(++num);
// console.log(++num);
// console.log(++num);
// console.log(++num);
// console.log(++num);

// console.log(++num
//     ,++num
//     ,++num
//     ,++num
//     ,++num
//     );

// document.write(++num+"<br>"+ ++num);

// console.log(2 === 2);  // true
// console.log(2 == "2"); // true
// console.log(2 === +"2"); // true
// console.log("learnjavascript" == "learnjavascript"
// ); // true
// console.log("LearnJavascript" == "learnjavascript"); //true
// console.log(0.3 == 0.30); // true
// console.log(1.0 == 1); // true
// console.log(1.0 === 1); // true

// Create 5 variables for your bank account details. It would be better if you use let, const and var all 3

// const bankName="HDFC";
// let accountNumber= 32323434454545;
// var IFCE = 4343345534;
// var holderName = "bilal khan";
// var branchName = "jaipur";

//Write any code and explain that code using multi line comment

// console.log(2 ** 4); 
//  console.log(14 % 10);
//  console.log(5 != "5");
//  console.log(5 !== "5");
//  console.log(10 <= 5);
//  console.log(10 >= 10);

// Create a variable marks and assign any number. If marks are greater than 60 then print Pass else print Fail.
// let marks =61;
// if (marks >= 60) {
//     console.log("Pass");
// }
// else{
//     console.log("fail");
// }

// Take two numbers and check if both numbers are odd or not. If yes then print Odd otherwise print Even
// let num1 = 10;
// let num2 = 12;

// if (num1 % 2 ===1 && num2 % 2===1) {
//     console.log("odd number");
// }
// else{
//     console.log("Even Number");
// }


// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// a = b;
// b = c;
// c = d;
// d = a;
// console.log(a , b ,c,d);

// let obj ={
//     name:"bilal",
//     address:"jaipur",
//     email:"bilal@gmail.com",
//     addharNum:2342353667,
// }

// let obj2 ={
//     name:"imran",
//     address:"merta",
//     email:"imran@gmail.com",
//     addharNum:32444555666,
// }
// function details(date , mouth ,year) {
//      console.log(`my is ${this.name} and my address ${this.address} and my email ${this.email} my addhar number ${this.addharNum} my birthday ${date}/${mouth}/${year}`);
// }
 
// details.call(obj ,21 ,1 ,1995);
// details.apply(obj ,[21 ,1 ,1995]);
// details.bind(obj ,21 ,1 ,1995)();
// details.call(obj2);

// 1 Write a function that uses the call method to print the name of an object.
// let obj ={
//     name:"bilal",
//     address:"jaipur",
//     email:"bilal@gmail.com",
//     panNumber:4234234542,
// }
// function persnolDetails() {
//     console.log(`my name ${this.name} ${this.address} ${this.email} ${this.panNumber}`);
// }

// persnolDetails.call(obj);

// 2 Write a function that uses the apply method to find the minimum value in an array of numbers.


