### exercise-19
### Call/Apply/Bind Questions

### Question 1 Write a function that uses the call method to print the name of an object.

```
const Obj = {
    name:"bilal",
    lastName:"khan",
    age:24,
}
function fullName(name) {
return this.name + " " + this.lastName
}
console.log(fullName.call(Obj))
```

### Question 2 Write a function that uses the apply method to find the minimum value in an array of numbers.

```
function minimums() {
  let min = Math.min.apply(null , this);
  console.log(min);
}
let arr = [55,32,34,65,11,39,30];
minimums.apply(arr);
```

### Question 3 Write a function that uses the bind method to create a new function that always has a specific "this" value.


### Question 4 Write a function that uses the call method to add two numbers together.

```
function add(value) {
  return this + value
}
console.log(add.call(1,5));

========================step-2==================
function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers.call(null, 5, 3); // prints 8
```

### Question 5 Write a function that uses the apply method to concatenate two arrays.
```
let arr1 = [1,2,3,4,5];
let arr2 = [8,9,10];

function concatenate(arrOne , arrSec) {
  return [...arrOne ,...arrSec];
}
console.log(concatenate.apply(null,[[1, 2], [3, 4]]));
```
### Question 6 Write a function that uses the bind method to create a new function that multiplies a number by a specified value.
```
function multiplyBy(value, num) {
  return this * value * num;
}
const triple = multiplyBy.bind(3, 2);
console.log(triple(5));
```

### Question 7 Write a function that uses the call method to find the length of a string.

```
let str = "bilal";
function lengthFind() {
  console.log(this.length);
}
lengthFind.call(str);
```

### Question 8 Write a function that uses the apply method to find the sum of all numbers in an array.

```
let arr =[1,2,3,4,5];
function sum() {
return  this.reduce((a,b)=> a+b);
}
console.log(sum.apply(arr));
```

### Question 9 Write a function that uses the bind method to create a new function that logs a message with a specific prefix.

```
function addStr(massage) {
  console.log(`${massage}: ${this}`);
}
let str = 'Something went wrong!';
let addBind = addStr.bind(str,'error');
addBind();
```

### Question 10 Write a function that uses the call method to convert a string to uppercase.

```
let str = "bilal khan";
function uppercase() {
  console.log(this.toUpperCase());
}
uppercase.call(str);
```

### Question 11 Create a function sum that takes in two numbers and returns their sum. Use call to invoke sum with an array [2, 3] as the context and log the result to the console.

```
function sum(a ,b) {
  console.log(a +b);
}

let resut = sum.call([2, 3], ...[2, 3]);
```

### Question 12 Create an object person with a property name set to your name. Create a function sayHello that logs "Hello, !". Use bind to create a new function sayHi that logs "Hi, !" and use it to greet yourself.
```
let obj ={
  name:'bilal'
}
function sayHello() {
  console.log(`Hello ${this.name}`);
}
let sayHi  = sayHello.bind(obj);
sayHi();
```
### Question 13 Write a function greet that takes in a string name and logs "Hello, !". Use apply to pass in an array ["Alice"] as the context and invoke the function.

```
function greet(name) {
  console.log(`Hello ${name}`);
}
greet.apply(null,['Alice']);
```

### Question 14 Create a function multiply that takes in two numbers and returns their product. Use bind to create a new function double that always doubles its argument, and use it to multiply 5 by 2.

```
function multiply(a , b) {
  return a * b;
}
let result = multiply.bind(null,2);
console.log(result(5));
```

### Question 15 Create a function square that takes in a number and returns its square. Use map and square to create a new array squares that contains the squares of the numbers in an array [1, 2, 3, 4, 5].

```
function square(value) {
  return value.map((num)=>num * num);
}
console.log(square([1,2,3,4,5]));
```