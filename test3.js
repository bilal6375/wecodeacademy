// Question 1
// Create an array with three elements and print out the second element.

// let elemen = [1,2,3];
// let newArr = elemen.slice(1, 2);
// console.log(newArr);

// Question 2
// Create an array with five elements and print out the length of the array.

// let arr = [1,2,3,4,5];
// console.log(arr.length);

// Question 3
// Create an array with four elements and print out each element using a for loop.

// let arr = [1,2,3,4];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

// Question 4
// Create an array with six elements and print out each element using a forEach loop.
 
// let arr = [1,2,3,4,5,6];
// arr.forEach(number => {
//     console.log(number);
// });

// Question 5
// Create an array with three elements and add a fourth element to the end of the array.

//    let arr = [1,2,3];
//     arr.push(4);
//     console.log(arr);

// Question 6
// Create an array with four elements and remove the second element.

// let arr = [1,2,3,4];
//   arr.splice(1,1);
//   console.log(arr);

// Question 7
// Create an array with five elements and remove the last element.

//  let arr = [1,2,3,4,5];
//  arr.pop();
//  console.log(arr);

// Question 8
// Create an array with three elements and check if the array includes a specific value.


// Question 9
// Create an array with four elements and sort the array in ascending order.

//  let arr = [4,2,1,13];
//  arr.sort(asc);
//  console.log(arr);
//  function asc(num1 ,num2){
//      return num1 - num2;
//  }

// Question 10
// Create an array with five elements and sort the array in descending order.

//  let arr = [4,2,1,13,19];
//  arr.sort(asc);
//  console.log(arr);
//  function asc(num1 ,num2){
//      return   num2 -num1;
//  }


// Question 11
// Create two arrays, concatenate them and print out the resulting array.

//  let a = [1,2,3,4,5];
//  let b = [6,7,8,9,10];
//  let c = a.concat(b);
//  console.log(c);

// Question 12
// Create an array with three elements and convert it to a string.

//  let a = [1,2,3];
//    a.toString();
//    console.log(a);

// Question 13
// Create an array with four elements and reverse the order of the elements.

//  let arr = [1,2,3,4];
//    arr.reverse();
//    console.log(arr);

// Question 14
// Create an array with five elements and find the index of a specific value.

//  let arr = [1,2,3,4,5];
//    console.log(arr.indexOf(4));

// Question 15
// Create an array with six elements and slice the array to create a new array with the first three elements.

// let arr = [4,2,3,4,5,6];
// let newarray = arr.slice(0,3);

// console.log(newarray);

// Question 16
// Create an array with six elements and use the map method to double each element.

// let arr = [4,2,3,4,5,6];
// let newarr = arr.map(maap);
// console.log(newarr);
// function maap(num) {
//     return num * 2;
// }


// Question 17
// Create an array with four elements and use the while loop to calculate the sum of all elements.

// let i = 0;
// let arr = [1, 15,13, 10];
// let sum = 0;
// while (i < arr.length) {
//   sum = sum + arr[i];
//   i++;
// }
// console.log(sum);

// Question 18
// Create an array with five elements and use the filter method to return only the even numbers.

// let arr = [2, 5, 8, 7, 10];
// console.log(arr.filter(even));
// function even(num) {
//   return num % 2 === 0;
// }

// Question 19
// Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.

// let arr = [1, 5, 7];
// let arrnew = arr.join("-");
// console.log(arrnew);

// Question 20
// Create two arrays with three elements each and use the concat method to combine them into a new array.
// let arr = [1,2,3];
// let arr2 = [4, 5, 6];
// let arrconcat = arr.concat(arr2);
// console.log(arrconcat);

// Set Exercise

// 1. Create an empty set called mySet.
// let mySet = new Set();
// console.log(mySet);

// 2. Add the values 1, 2, and 3 to mySet.

// let mySet = new Set();
//     mySet.add(1);
//     mySet.add(2);
//     mySet.add(3);
// console.log(mySet);

// 3. Check if mySet contains the value 2.
//  let mySet = new Set();
//     mySet.add(1);
//     mySet.add(2);
//     mySet.add(3);
// console.log(mySet.has(2));

// 4. Remove the value 3 from mySet.
// let mySet = new Set([1,2,3]);
//     mySet.delete(3);
// console.log(mySet);

// 5. Find the size of mySet.
// let mySet = new Set([1,2,3,4]);
// console.log(mySet.size);


// 6. Create a new set called otherSet containing the values 2, 3, and 4.
// let otherSet = new Set([2,3,4]);
// console.log(otherSet);

// 7. Find the intersection of mySet and otherSet.
//   let mySet = new Set([1,2,3,8,5,6]);
//   let otherSet = new Set([1,2,3,4,7,6]);
//   let intss = [];
//   for (const value of mySet) {
//     if (otherSet.has(value)) {
//         intss.push(value);
//     }
//   }
//   console.log(intss);
// 8. Find the union of mySet and otherSet.

//   let mySet = new Set([1,2,3,8,5,6]);
//   let otherSet = new Set([1,2,3,4,7,6]);
//   let newArr = new Set([...mySet,...otherSet]);
//   console.log(newArr);
  
// let set = new Set([1, 2, 3, 6]);
// let otherSet = new Set([2, 3, 4, 5]);
// // Duplicate
// let newArray = [...set, ...otherSet];
// console.log(newArray);
// //Unique
// let uniqueSet = new Set([...set, ...otherSet]);
// console.log(uniqueSet);
// 9. Find the difference of mySet and otherSet.
// let  mySet = new Set([1,2,3,8,4,6,]);
// let otherSet = new Set([1,2,3,4,5,9]);
// // answr 8 6
// let newArray =[];
// for (const vlaue of mySet) {
//     if (!otherSet.has(vlaue)) {
//         newArray.push(vlaue);
//     }
// }
// console.log(newArray);

// 10. Find the symmetric difference of mySet and otherSet.
// let set = new Set([1, 2, 3, 6]);
// let otherSet = new Set([2, 3, 4, 5]);
// let newArray = [];
// for (let value of otherSet) {
//   if (!set.has(value)) {
//     newArray.push(value);
//   }
// }
// for (let value of set) {
//   if (!otherSet.has(value)) {
//     newArray.push(value);
//   }
// }
// console.log(newArray);
// 11. Create an array called myArray containing the values 1, 2, 2, and 3.

// 12. Convert myArray to a set called mySet2.

// 13. Check if mySet2 contains the value 2.

// 14. Remove all duplicate values from myArray and store the result in a new array called uniqueArray.

// 15. Convert uniqueArray to a set called uniqueSet.

// 16. Add the value 4 to uniqueSet.

// 17. Remove the value 3 from uniqueSet.

// 18. Check if uniqueSet is a subset of mySet.

// 19. Check if mySet is a superset of uniqueSet.

// 20. Find the difference between mySet and uniqueSet.


// 1. Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.
// let fruits = ["apple", "banana", "orange"];
// let check = fruits.includes("orange");
// if (check) {
//     console.log("yes orange is in array");
// }
// else{
//     console.log("no orange is in array");

// }

// 2.Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

// let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// function sum(arr) {
//     let total =0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 ==0) {
//             total += arr[i];  
//         }
//     }
//     return total;
    
// }
// console.log(sum(arr));

// 3.Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.
// let arr1 = [1, 2, 3,4,5];
// let arr2 = [2, 3, 4,6,9];
// function uniq(num1,num2){
//     let newArr =[];
//     for (let i = 0; i < arr1.length; i++) {
//         if (!num2.includes(arr1[i])) {
//             newArr.push(arr1[i]);
//         } 
//     }
//     for (let j = 0; j < arr2.length; j++) {
//        if (!num1.includes(arr2[j])) {
//         newArr.push(arr2[j]);
//        }
//     }
// return newArr;
// }

// console.log(uniq(arr1,arr2));

//.4 Given an array of strings, write a function that returns the longest string in the array.

// let arr = ["apple", "bananashek", "orange"];
// function longestOfstr(num) {
//    let longestValue ="";
//     for (let i = 0; i < num.length; i++) {
//         if (num[i].length > longestValue.length ) {
//             longestValue = num[i];
//         }
//     }
//     return longestValue
    
// }
// console.log(longestOfstr(arr));
 
// . 5 Write a function that takes an array of numbers and returns the largest number in the array.

// let arrNumber =[2,3,4,6,5,8,9,11,7,1];
// function largestNumber(Num1) {
//     let numberValue =0;
//       for (let i = 0; i < Num1.length; i++) {
//         if (Num1[i] > numberValue ) {
//             numberValue = Num1[i];
//         }
//       }
//       return numberValue;
// }
// console.log(largestNumber(arrNumber));

//. 6 Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.

// let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// function EvenNumber(number) {
//     let arrEven =[];
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] % 2 ==0 ) {
//             arrEven.push(number[i]);
//         } 
//     }
//     return arrEven;
// }
// console.log(EvenNumber(arr));
// let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//   anss = arr.filter(Even); 
// console.log(anss);
// function Even(num) {
//     return num % 2 ==0;
// }

// 7.Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.

// let arr = ["bilal","khan","pathan","fsdfsdf"];
// function arrStr(array) {
//     let newArray =[];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length  > 5) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }
// console.log(arrStr(arr));

// 8 .Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).

// let array1 = [1,7,2,3,4,11,8];
// let array2 = [1,2,3,4,5,6,7,4,9];

// function intersec(number) {
//     let newArr =[];
//     for (let i = 0; i < number.length; i++) {
//        if (array1.includes(number[i])) {
//         newArr.push(number[i]);
//        }
        
//     }
//     return newArr;
// }
// console.log(intersec(array2));

// 9. Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

// let arr =[1,2,3,4,5,6,7,8,9,10];
// function square(squareNumber) {
//     let newArr =[];
//     for (let i = 0; i < squareNumber.length; i++) {
//         newArr.push(squareNumber[i] * squareNumber[i]);
//     }
//     return newArr;
// }
// console.log(square(arr));

// 10 . Write a function that takes an array of numbers and returns the average of all the numbers in the array.
// let arr =[1,2,3,4,5,6,7,8,9,10];

// 11 .Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function
// let arr =[1,2,3,4,5,6,7,8,9,10];
//  let result =  arr.filter(arrFun);
//  function arrFun(number) {
//      return   number > 5;
//     }
//     console.log(result);

// 12 . Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function

// let arr =[1,2,3,4,5,6,7,8,9,10];
// let result = arr.map(maping);
// function maping(number) {
//     return number + 1;
// }
// console.log(result);

// 13 . Write a function that takes an array of numbers and returns a new array that contains only the unique numbers using reduce.


// 14 .Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.

//  let arr = ["abc", "bance", "bancdd", "bandas","dummy"];
//  let ans = arr.reduce(sum,0);
//  console.log(ans);
// function sum(total ,value) {
//     return total + value.length;
    
// }

// 15 .Write a function that takes an array of strings and sorts them by their length in ascending order.

// let strings = ["apple", "banana", "cherry", "date"];
//  let ans = strings.sort(sortt);
//  console.log(ans);
//  function sortt(val1,val2) {
//     return val1.length - val2.length;
//  }


// .17 Write a function that takes an array of numbers and returns a new array with all the unique numbers.
// let arr =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7];
// let newArr = new Set(arr);
// console.log([...newArr])


// 19 Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// let arr =[1,4,6,8,5,2];
// let ans = arr.sort(asc);
// console.log(ans);
// function asc(numb1 ,numb2) {
//     return numb1 - numb2;
// }

// 20 .Write a function that takes an array of strings and flattens each string into an array of characters, then flattens the result into a single array.

// let arr = ['hello', 'world'];
// function flattenS(numb) {
//     return numb.split("");
// }
// console.log(flattenS(arr.toString()));






