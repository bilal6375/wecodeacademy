## excries - 5

#### Question 1 : Create two variables and store some numbers in them. Now do below operations:Addition Multiplication Substraction Divide

```
let num1 =20;
if (num1 % 2=== 1) {
    console.log("odd");
}else{
    console.log("even");
}

```
#### Question 3 Using prompt ask user to enter name and then show the name in alert. 

```
let user = prompt("What is your name?");
alert(user);
```

#### Question 4 Take two numbers if first number is less than second number than print your name,age and mobile number else print your father name, age and mobile number.


```
let a = 2;
let b = 10;
if (a < b) {
  console.log("bilal");
  console.log(32);
  console.log(324343);
} else {
  console.log("Usman Khan");
  console.log(55);
  console.log(988789798);
}
```
#### Question 5 Take two numbers.  Now using && and || operator check if both numbers are divisible of 5 && 10 or not. Also check both numbers are even or not.


```
let num1 = 20;
let num2 = 30;
if (num1 % 5 == 0 && num2 % 10 === 0 ) {
  console.log("Even");
}
else{
    console.log("odd");
}
```

#### Question 6 print Hello world using console.log, window.alert and document.write

```
console.log("Hello world");
window.alert("Hello world");
document.write("Hello world");
```
##### . Question 7 Take all falsy values and check in if condition.

```
if (NaN) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  
  if (0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  
  if ("") {
    console.log("Yes");
  } else {
    console.log("No");
  }
  
  if (null) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  
  if (false) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  
  if (undefined) {
    console.log("Yes");
  } else {
    console.log("No");
  }
```
#### Question 8 Using confirm box ask questions "Do you want to play?".  if user click on Ok then print yes and if user click on Cancel then print No

```
let box = confirm('Do you want to play?');
if (box) {
    console.log("yes");
}
else{
    console.log("no");
}
```
#### Question 9 If total members in your family are more than 5 then print Big Family,  if members are between 3 to 5 then print small family else print very small family
```
let member = 2;
if (member > 5) {
    console.log("big family");
}
else if(member >= 3 && member <=5){
    console.log("small family");
}
else {
    console.log("very small family");
}

```
### Question 10 Using ++, -- print 1 to 10 and then 10 to 
```
let a = 0;
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);
console.log(++a);

console.log(a--);
console.log(a--);
console.log(a--);
console.log(a--);
console.log(a--);
console.log(a--);
```

