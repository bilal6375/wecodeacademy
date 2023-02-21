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
