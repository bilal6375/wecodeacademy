## Exercise

## 1. Create an array called fruits that contains the following elements: "apple", "banana", "orange". Now check if "orange" is in the fruits array.

```let fruits = ["apple", "banana", "orange"];
let check = fruits.includes("orange");
if (check) {
    console.log("yes orange");
}
else{
    console.log("no orange");

}
```
## 2.Given an array of numbers, write a function that returns the sum of all the even numbers in the array.

```let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function sum(arr) {
    let total =0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 ==0) {
            total += arr[i];  
        }
    }
    return total;
    
}
console.log(sum(arr));
```

## 3.Given two arrays of numbers, write a function that returns a new array that contains only the unique elements from both arrays.

```let arr1 = [1, 2, 3,4,5];
let arr2 = [2, 3, 4,6,9];
function uniq(num1,num2){
    let newArr =[];
    for (let i = 0; i < arr1.length; i++) {
        if (!num2.includes(arr1[i])) {
            newArr.push(arr1[i]);
        } 
    }
    for (let j = 0; j < arr2.length; j++) {
       if (!num1.includes(arr2[j])) {
        newArr.push(arr2[j]);
       }
    }
return newArr;
}
```
## .4 Given an array of strings, write a function that returns the longest string in the array.

```let arr = ["apple", "bananashek", "orange"];
function longestOfstr(num) {
   let longestValue ="";
    for (let i = 0; i < num.length; i++) {
        if (num[i].length > longestValue.length ) {
            longestValue = num[i];
        }
    }
    return longestValue
    
}
console.log(longestOfstr(arr));
```

## 5 Write a function that takes an array of numbers and returns the largest number in the array.

```let arrNumber =[2,3,4,6,5,8,9,11,7,1];
function largestNumber(Num1) {
    let numberValue =0;
      for (let i = 0; i < Num1.length; i++) {
        if (Num1[i] > numberValue ) {
            numberValue = Num1[i];
        }
      }
      return numberValue;
}
console.log(largestNumber(arrNumber));
```
### . 6 Write a function that takes an array of numbers and returns a new array that only contains the even numbers from the original array.
```
let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function EvenNumber(number) {
    let arrEven =[];
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 ==0 ) {
            arrEven.push(number[i]);
        } 
    }
    return arrEven;
}
console.log(EvenNumber(arr));
let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  anss = arr.filter(Even); 
console.log(anss);
function Even(num) {
    return num % 2 ==0;
}
```
### 7.Write a function that takes an array of strings and returns a new array that only contains strings with more than 5 characters.
```
let arr = ["bilal","khan","pathan","fsdfsdf"];
function arrStr(array) {
    let newArray =[];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length  > 5) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(arrStr(arr));
```
### 8 .Write a function that takes two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays).
```
let array1 = [1,7,2,3,4,11,8];
let array2 = [1,2,3,4,5,6,7,4,9];

function intersec(number) {
    let newArr =[];
    for (let i = 0; i < number.length; i++) {
       if (array1.includes(number[i])) {
        newArr.push(number[i]);
       }
        
    }
    return newArr;
}
console.log(intersec(array2));

```

### 9. Write a function that takes an array of numbers and returns a new array where each element is the square of the original element

```
let arr =[1,2,3,4,5,6,7,8,9,10];
function square(squareNumber) {
    let newArr =[];
    for (let i = 0; i < squareNumber.length; i++) {
        newArr.push(squareNumber[i] * squareNumber[i]);
    }
    return newArr;
}
console.log(square(arr));
```
### 10 . Write a function that takes an array of numbers and returns the average of all the numbers in the array.
```
let arr =[1,2,3,4,5,6,7,8,9,10];
11 .Write a function that takes an array of numbers and returns a new array that only contains numbers that are greater than 5. Use filter function
let arr =[1,2,3,4,5,6,7,8,9,10];
 let result =  arr.filter(arrFun);
 function arrFun(number) {
     return   number > 5;
    }
    console.log(result);
```

### 12 . Write a function that takes an array of numbers and returns a new array where each element is the original element plus 1. use map function

```
let arr =[1,2,3,4,5,6,7,8,9,10];
let result = arr.map(maping);
function maping(number) {
    return number + 1;
}
console.log(result);
```
###  14 .Write a function that takes an array of strings and returns the total number of characters in all the strings using reduce.

```
 let arr = ["abc", "bance", "bancdd", "bandas","dummy"];
 let ans = arr.reduce(sum,0);
 console.log(ans);
function sum(total ,value) {
    return total + value.length;
    
}
```
### 15 .Write a function that takes an array of strings and sorts them by their length in ascending order.

```
let strings = ["apple", "banana", "cherry", "date"];
 let ans = strings.sort(sortt);
 console.log(ans);
 function sortt(val1,val2) {
    return val1.length - val2.length;
 }
 ``` 
 ### .17 Write a function that takes an array of numbers and returns a new array with all the unique numbers.
 ```
let arr =[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7];
let newArr = new Set(arr);
console.log([...newArr])
```
### 19 Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
```
let arr =[1,4,6,8,5,2];
let ans = arr.sort(asc);
console.log(ans);
function asc(numb1 ,numb2) {
    return numb1 - numb2;
}
```

### 20 .Write a function that takes an array of strings and flattens each string into an array of characters, then flattens the result into a single array.
```
let arr = ['hello', 'world'];
function flattenS(numb) {
    return numb.split("");
}
console.log(flattenS(arr.toString()));
```

