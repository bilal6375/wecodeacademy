// let str ="Wecode Academy";
// let result = str.toLowerCase();
// console.log(result);
// console.log(str.toLowerCase());


// 1. Take any String with some space before and after. Store string length. Now do below exercises:
//     a. remove space from both end and print new length of the returned string 
//     b. remove space from start and then print new string length 
//     c. remove space from end then print new string length 
// 2. Take any string in lowercase. Now using toUppercase function check if uppercase of the string is equal to uppercase of function or not 
// 3. Introduction about your self. Use concat function 
// 4. Take a big string and split it using below characters/string 
//     a. " "   console.log(ans.length);
//     b. ","
//     c. "is"
//     d. "a"

// a 
// let str =" Wecode Academy ";
// let result = str.trim();
// console.log(result.length);

// // c
// let start =" Wecode Academy ";
// let results = start.trimStart();
// console.log(results.length);

// // c
// let end ="Wecode Academy ";
// let resultend = end.trimEnd();
// console.log(resultend.length)

// // 3

// let strii ="Wecode Academy";
// let striiss = strii.toUpperCase();
// if (striiss === "WECODE ACADEMY") {
//      console.log("yes");
// }
// else{
//     console.log("no");
// }

// let big ="Wecode Academy is very goood";
// let bigdd = strii.split(" ");
// console.log(bigdd);

// let bigdds = strii.split(",");
// console.log(bigdds);

// let bigddsdd = strii.split("is");
// console.log(bigddsdd);

// let trimff = strii.split("a");
// console.log(trimff);
 
// for (let i = 5; i >= 1; i--) {
//   let val = i + "";
//   console.log(val.repeat(i));
// }
//  let moblie = "6375"; //12345***
// console.log(moblie.padEnd(10, "*"));
// let moblieno = "26647"
// console.log(moblieno.padStart(10, "*"));



// $$#$$#$$
// $$#$$#
// $$#$$
// $$#
// $$

// for (let a =5 ; a >=1; a--) {
//    let str ="";
//     for(b = 1; b<=a; b++){
//         if (b %2 !==0) {
//             str = str + "$$";
//         }
//         else{
//             str = str + "#";
//         }
//     }
//     console.log(str);
    
// }


// let big ="Wecode Academy is very goood";
// let bigdd = big.split(" ");
// let bigdds = bigdd.length
// console.log(bigdds);

// 11111
// 2222
// 333
// 44
// 5
// for (let a = 1; a <=5; a++) {
//    console.log(a.repeat(a));
// }

// let arr = "my  name is bilal khan".split(" ");
// for (let value of arr) {
//     console.log(value .toUpperCase());
// }

// let arr = "My name is Arun Kumar".split(" ");
// // console.log(arr);
// let str = "";
// let index = 0;
// for (let val of arr) {
//   if (index % 2 === 0) {
//     str = str + " " + val.toLowerCase();
//   } else {
//     str = str + " " + val.toUpperCase();
//   }
//   index++;
// }
// console.log(str);

// let str = "Wecode";
// if (str.length > 10) {
//   console.log("Hello " + str);
// } else {
//   console.log(str + " World");
// }

// let str = "wecode";
// let str2 = "asfdfcdemy";
// if (str.length > str2.length) {
//   console.log(str + " " + str2);
// } else {
//   console.log(str2 + " " + str);
// }

// let str = "wecode";
// let strlength =str.length;
// console.log(strlength);
//  let b ="";
// for (let i = strlength-1; i >=0; i--) {
//     b +=  str[i];
// }
// console.log(b);

// let str = "Bilal Khan Pathan at Merta City".split(" ");

//   let arr = [2,45,34,100,56,35,76,];
//   let max = arr[0];
//   for(let i =0; i < arr.length; i++){
//     if (max > arr[i]) {
//         max = arr[i];
//     }
//   }
//   console.log(max);


// 1. Function ko 1 number pass krna hai. jo number pass kia hai us number ki table print krni hai. for example 5 
// 5*1=5
// 5*2=10

// 2. Function ko 2 numbers pass krne hai. Numbers ko multiply krna hai 

// 3. Function ko array pass krna hai and array ke sare numbers ko print krna hai 

// 4. Function bnana hai. Function me ek value leni hai. agar value true hai to Yes print kro otherwise No print kro

// 5. Function bnana hai. Function ko 2 numbers pass krne hai min and max. for example 10 and 20 to tume 10 se leke 20 tak print krvana hai 

// 6. function bnana hai. Function ko 1 number pass krna hai. 0 se leke us number tak jitne b Odd numbers hai vo print krne hai.

// 7. function bnana hai. Function ko 1 number pass krna hai. 0 se leke us number tak jitne b Even numbers hai vo print krne hai.

// 8. Ek function bnana hai. Is function ko 2 number pas krne hai. phla number ek number hoga aur dusra number maximum number hoga. fir hume phle number ke multiples max number tak print krne hai.

// for example: 5, 100
// 5 10 15 20 25...... 100

// Q .1
//   function numberTable(num){
//        for (let i = 1; i <= 10; i++) {
//         console.log(`${num}*${i}=${num*i}`);
        
//        }
//   }
//   numberTable(5);

// Q .2
// function multi(a ,b){
//     console.log(a*b);
// }
// multi(10 ,20);

// Q .3 
    // function arrfunc(arr){
    //     for(let i = 0; i < arr.length; i++){
    //         console.log(arr[i]);
    //     }
    // }
    // arrfunc([1,2,3,4,5,6,7,8,9,999,7]);

// Q .4
    // function comm(yess){
    //      if (yess) {
    //         console.log("yes");
    //      }
    //      else{
    //         console.log("no");

    //      }
    // }
    // comm(10);

    // Q .5

    // function comm(a,b){
    // for (let i = a; i <= b; i++) {
    //     console.log(i);
    // }
    // }
    // comm(10,20);

    // Q .6

    //  function comm(a){
    // for (let i = 1; i <= a; i++) {
    //     if (i % 2===1 ) {
    //         console.log(i);
    //     }
    // }
    // }
    // comm(10);

    // Q .8 
    //  function comm(a,b){
    // for (let i = 1; i <= b; i++) {
    //     if (i % a ===0) {
    //         console.log(i);
    //     }
    // }
    // }
    // comm(5,100);



// 1. function oddEven(num) yadi number odd hai to Odd word return kro otherwise Even word return kro 
//  function oddEven(num){
//     if (num % 2===1) {
//         return "Odd word";
//     }
//     else{
//         return "even word";
//     }
//  }    
//  (console.log(oddEven(20)));
//  (console.log(oddEven(11)));

// 2. function max(arr) max number find krke return krna hai

// function arrMax(max){
//     let maxnum = max[0];
//     for (let i = 0; i < max.length; i++) {
//         if (max[i] > maxnum) {
//             maxnum = max[i];
//         }
//     }
//     return maxnum;
// }
//   (console.log(arrMax([1,2,3,4,54,67,7,6])));

// 3. function min(arr) min number find krke return krna hai 
// function arrMin(max){
//     let minnum = max[0];
//     for (let i = 0; i < max.length; i++) {
//         if (max[i] < minnum) {
//             minnum = max[i];
//         }
//     }
//     return minnum;
// }
//   (console.log(arrMin([1,2,3,4,54,67,7,6])));

// 4. function minAndMax(arr) min and max number find krke dono ko plus krke return krna hai 
// function minAndMax(minarrmax){
//     let min = minarrmax[0];
//     let max = minarrmax[0];
// for (let i = 0; i < minarrmax.length; i++) {
//     if (minarrmax[i] < min) {
//         min = minarrmax[i];
//     }
//     if (minarrmax[i] > max) {
//         max = minarrmax[i];
//     }
    
// }
// return   min + max;
// }
// // console.log(sum);
//    console.log(minAndMax([34,56,65,67,76,8,56]));
//    console.log(minAndMax([34,56,65,64,756,8,56]));

// 5. function minAndMaxArr(arr) ek new array bnana hai usme 0 index pr to min number store krna hai and 1 index pr maximum number ko store krvake array ko return krna hai
//  function maxMin(arr) {
//   let min = arr[0];
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return [min, max];
// }
// console.log(maxMin([1, 32, 43, 21, 87, 56, 22]));
// console.log(maxMin([10, 322, 43, 21, 87, 56, 22]));

// 6. function reverseString(str) function ko ek string pass krni hai. is string ko reverse krke return krna hai 
// for example: My name is Wecode 
// output: Wecode is name My 
// function strs(stringss){
//     let sp = stringss.split(" ");
//     let arr ="";
//      for (let i = sp.length -1; i >=0 ; i--) {
//          arr = arr + sp[i]+ " ";
//      }
//     console.log(arr);
// }
//   strs("my name is bilal khan pathan");

// 7. function maskMobile(mobileNumber, start, end, char, total)
// maskMobile(9581894461, yes, false, '*', 5)
// output: ***94461
// maskMobile(9581894461, false, yes, '*', 5)
// output: 95818***
// maskMobile(9581894461, false, false, '*', 5)
// output: 9581894461

// 8. Replace all words in a string 

// function replaceString(str, word, newWord) 

// replaceString("Hello my name is Wecode and is hello test", "is", "are")
// output: Hello my name are Wecode and are hello test

// let arr =[1,2,3,4,5,6,7,8,9,6,23,4,545,65];
// let ans = arr.slice(1 ,-5);
// console.log(ans);
// let arr =[1, 2, 3, 4, 5, 9, 8, 7, 10, 3, 4];
//   let  ans = arr.filter(Oddnum);
//   console.log(ans);
//   function Oddnum(num){
//       return num % 3 === 1;
//   }


//   let arr =[1, 2, 3, 4, 5, 9, 8, 7, 10, 3, 4];
//   let  ans = arr.forEach(Oddnum);
//   console.log(ans);

//   function Oddnum(num){
//       return num * 3;
//   }
    
//   let arr = [1, 20, 3, 40, 5, 9, 8, 7, 10, 3, 4];
//    let newarr=[];
//    arr.forEach(multi);
//    console.log(newarr);
//    function multi(num){
//     newarr.push(num * 2);
//    }
  
//   let arr = [1, 20, 3, 40, 5, 9, 8, 7, 10, 3, 4];
//   let ans =  arr.find(finarr);
//     console.log(ans);
//   function finarr(num) {
//    return num > 10; 
//   }

//   let arr = [1, 20, 3, 40, 5, 9, 8, 7, 10, 3, 4];
//   let ans =  arr.findIndex(finarr);
//     console.log(ans);
//   function finarr(num) {
//    return num > 10; 
//   }

// let arr = [1, 11, 3, 21, 5, 90, 8, 7, 10, 3, 4];
// let ans = arr.some(test);
// function test(num) {
//   return num > 100;
// }
// console.log(ans);

// let arr = [1, 11, 3, 21, 5, 90, 8, 7, 10, 3, 4];
// let ans = arr.every(test);
// function test(num) {
//   return num > 1;
// }
// console.log(ans);

// let arr = "my name is bilal khan";

//  let ans = arr.split(" ");

// console.log(ans.reverse());

// let arr = [1, 11, 3, 21, 5, 90, 8, 7, 10, 3, 4];
//  let ans = arr.map(mapp);
//  console.log(ans);
// function mapp(num) {
//     return num * 2;
// }

// let arr = ["aarif", "firoj", "Jamil", "bilal", "aabid", "harshit", "rafik"];
// console.log(arr.sort());

// let arr = [1, 110, 2, 11, 22, 3, 21, 33];
// arr.sort(sorrt)
// console.log(arr);
// function sorrt(num1 ,num2){
//     return num1 - num2;
// }

//1 2 3 11 21 22 33 110 Wrong
//1 11 110 2 21 22 3 33 Correct