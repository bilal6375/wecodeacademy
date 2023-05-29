### exercise-20

### 1. Write a function that takes a string and returns a new string with all the words reversed using the spread operator.

```
function reversed(str) {
  return [...str.split(' ')].map(word => word.split('').reverse().join('')).join(' ');
}
console.log(reversed('Hello world'));
```
### 2. Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.

```
function remove(...value) {
  const [, ...rest] =value;
 console.log(rest);
}
remove(1,2,3,4,5,6);
```
### 3. Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array

```
 function flatten(...value) {
  let newArra = [].concat(...value);
  console.log(newArra);
 }

 flatten([1,2],[3,4],[5,6]);
```

### 4 Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining)
```
function getPropertyX(obj) {
  return obj?.x ?? null;
}
// Example usage:
getPropertyX({ x: 5 }) // 5
getPropertyX({ y: 10 }) // null

==============step-2=================
const val1 ={
  x:5,
  y:19
}
function getProperty(obj) {
  return obj ?.x ?? null;
}
console.log(getProperty(val1));
```

### 5 Write a function which takes in an array and create two separate arrays for odd numbers and even numbers and finally merge them in the order that all odd numbers will move to the left of the array and all even numbers to right of the array.
```
let arr1 = [1,2,3,4,5,6,7,8,9,10]; 
//output [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

function oddEven(arr){  
   let odd = arr.filter((num)=>num % 2 === 1);
   let even = arr.filter((num)=>num % 2 === 0);
   return [...odd ,...even]
}

console.log(oddEven(arr1));
```
### 6 Create an array of numbers. Now change the position of each element with their next element.
```
For example : [1,2,3,4,5,6,7]
Output : [2,1,4,3,6,5,7]

============solution================

let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr = [];
for (let i = 0; i < arr.length; i = i + 2) {
  if (i === arr.length - 1) {
    newArr.push(arr[i]);
  } else {
    newArr.push(arr[i + 1]);
    newArr.push(arr[i]);
  }
}
console.log(newArr);
// Example usage:
// [2, 1, 4, 3, 6, 5, 7]

```

### 7. Ask user below questions
```
What is your age  : 12
What is your mobile : 9581894461
What is your address : Jaipur


Now create an object and use enhanced object literal property computation to create below object

{
    age12 : 12
    9581894461 : 'Mobile',
    Jaipur12Address : 'Jaipur'
}


============solution================
const age = 12;
const mobile = 2342423423;
const address = 'jaipur';
const obj = {
    [`age${age}`]:age,
    [mobile]:"mobile",
    [`${address}${age}Address`]:address
    
}
console.log(obj);
```


### 8. Using enhanced object literal function, create a function sum which takes an array as parameter and return sum of all the numbers in the array.

```
const x = [23,43,65,67] ;
const obj =  {
sum(data) {
    return data.reduce((a ,b)=>a + b,0);
   }
}
console.log(obj.sum(x));
```

### 9. Take a number and check if number is greater than 80 or not. If yes then assign 100 to number else assign 200. Use short circuiting whereever possible.

```
let num = 90;
let result =  num > 80 &&  100 || 200;
console.log(result);
```
### 10 : Create an array of 10 numbers. Now create a new array of 0 and 1 using Array destructring based on if number is odd then 1 else 0
```
let arr = [1,2,3,4,5,6,7,8,9,10];
function dest(value) {
   return value.map((num)=> num % 2 === 0 ? 0 : 1)
}
console.log(dest(arr));

==============step-2=============

let arr = [1,2,3,4,5,6,7,8,9,10];
let dest = [];
for (let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 === 1) {
      dest.push(1);
   }
   else{
      dest.push(0);
   }
}
console.log(dest);
```

### 11. Given an array of price, use map function to return a new array where each price is converted to new price including tax, which is the price with a 10% tax added.

```
const prices = [10.00, 20.00, 30.00, 40.00, 50.00];
function add(value) {
   return value.map((num)=>num / 10 + num);
}
console.log(add(prices));
```

### 12. Given an array of strings, use reduce to return the total number of characters in all the strings.

```
let arrStr = ["appel","orange" ,"banana","pinepale"];
function str(val) {
   return val.reduce((total,cal)=>total + cal.length,0);
}
console.log(str(arrStr));
```


### 13. Given an array of strings, use map and reduce to return the total number of characters in all the strings with a length less than 5.

```
const strings = ['hell', 'world', 'javascript', 'reduce', 'map', 'filter'];

const totalCharacters = strings
  .filter(str => str.length < 5) // filter strings with length less than 5
  .map(str => str.length) // map each string to its length
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0); // sum the lengths of all the strings

console.log(totalCharacters);

================step-2========================
let arrStr = ["appl","or","banana","pinepale"];
function Strigns(num) {
    return num.filter((nums) => nums.length < 5).reduce((oldValue,currentVal) => oldValue + currentVal.length,0);
}
console.log(Strigns(arrStr));
```


### 14 Given an array of numbers, use map, filter, and reduce to return the sum of all the odd numbers multiplied by 3

```
let arr = [1,2,3,4,5,6,7,8,9,10];

function sum(actul) {
    return actul.filter((odd)=>odd % 2 == 1)
    .map((multi)=>multi * 3)
    .reduce((accumulator ,currentVal)=>{
       return accumulator + currentVal
    },0);
}
console.log(sum(arr));
```

### 15 Given a string, reverse the order of the words in the string. For example, "the quick brown fox" becomes "fox brown quick the".

```
let arrStr = "the quick brown fox";
function reverse(str) {
    let spl =  str.split(" ");
    return spl.reverse().join(" ");
}
console.log(reverse(arrStr));
```










