## exercise-10

### Question 1
##### Create Bill Calculator
##### Ask below Questions

##### 1 How many french fries (60rs per piece) do you want to order ?
##### 2 How many burgers (50rs per piece) do you want to order ?
##### 3 How many plates of chowmin (100rs per plate) do you want to order?
##### 4 How many plates of Manchurian (80rs per plate) do you want to order?
##### 5 How many Cokes (50 per piece) do you want to order ?
##### Use can enter any number of quantities. Calculate the bill based on the quantities entered and item prices. If user enteres 0 or negative value then consider item count as 0.

```
let french = Number(prompt('How many french fries (60rs per piece) do you want to order ?'));
let burgers = Number(prompt('How many burgers (50rs per piece) do you want to order ?'));
let chowmin = Number(prompt('How many plates of chowmin (100rs per piece) do you want to order ?'));
let Manchurian = Number(prompt('How many plates of Manchurian (80rs per piece) do you want to order ?'));
let Cokes = Number(prompt('How many Cokes (50rs per piece) do you want to order ?'));

french = french <= 0 ? 0 : french;
burgers = burgers <= 0 ? 0 : burgers;
chowmin = chowmin <= 0 ? 0 : chowmin;
Manchurian = Manchurian <= 0 ? 0 : Manchurian;
Cokes = Cokes <= 0 ? 0 : Cokes;

    let totalFrench = french * 60 ;
    let totalBurgers = burgers * 50 ;
    let totalChowmin =  chowmin * 100 ;
    let totalManchurian = Manchurian * 80 ;
    let totalCokes = Cokes * 50 ;
    let totalCalculate  =+ totalFrench + totalBurgers + totalChowmin + totalManchurian + totalCokes
    console.log(totalCalculate);

```

### Question 2

```
Print below Pattern
$##$##$
$##$##
$##$
$##
$
```
```
let output = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    if (j % 2 == 0) {
      output += "#";
    } else {
      output += "$";
    }
  }
  for (let k = i; k < 5; k++) {
    if (k % 2 == 0) {
      output += "#";
    } else {
      output += "$";
    }
  }
  console.log(output);
  output = "";
}
```

### Question 3 
#### Ask the user question "How many times do you want to print Series". Then print below series. For example below series will print if user enteres 5

 #### 2, 6, 30, 260, 3130 Find the pattern for above series and print accordingly. If the user enters 10 then we will print the same series numbers till 10 times.

```
.............??

```


### Question 4 Using a switch case to do this exercise

#### 1 If number is odd then print Odd
#### 2 If number is even then print Even
#### 3 If number is 100 then print 100
#### 4 Else print 10000

```
let num = 10;

switch (num % 2) {
    case 0:
        console.log("number is even");
        break;
    case 1:
        console.log("number is odd");
        break;
    default:
        console.log(10000);
        break;
}

```

### Question 5
#### Ask user his/her birth year, "What is your birth year?"

#### If user age is greater than 18 then ask user "Do you have valid license number?" If user click on Okay then ask for his license number and finally in the alert show message "User with license number #### is ready to drive."

#### If user age is less than 18 then ask him question in confirm box "Do you have gaurdians ?"" If user says yes then ask his/her Gaurdian name and then in alert show "You are ready to drive with your #### (show gaurdian name here.)" Else show "Sorry visit again please." in alert box


```
let ask = Number(prompt('What is your birth year?'));
let currentYear = new  Date().getFullYear();
let age = currentYear - ask

if (age > 18) {
    let valid = confirm('Do you have valid license number?');
    if (valid) {
        let licenseNumber = prompt('what is your licence number');
        alert(`User with license number ${licenseNumber} is ready to drive.`);
    }
}
else if (age <= 18) {
    let user = confirm('Do you have gaurdians ?');
    if (user) {
        let gaurdianName = prompt('what is  your Gaurdian name ?');
        alert(`You are ready to drive with your ${gaurdianName}`);
    }
    else {
        alert('Sorry visit again please.');
    }
}
```

### Question 6
#### Take any number and take other number as 19. Now check their difference by subtracting each other. If both numbers difference is greater than 19 then print triple their absolute difference else print double their absolute difference.

```
let num1 = parseInt(prompt("Enter a number:"));
let num2 = 19;

let diff = Math.abs(num1 - num2);

if (diff > 19) {
  console.log(diff * 3);
} else {
  console.log(diff * 2);
}
```

### Question 7
#### Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

#### If yes then print sum of both the numbers Else print multiplication of both numbers

```
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
  console.log("The sum of the two numbers is: ", num1 + num2);
} else {
  console.log("The multiplication of the two numbers is: ", num1 * num2);
}
```


### Question 8
#### Write a JavaScript program to check if out of 4 numbers any two numbers are same or not. If yes then print Yes else print No.

```
let num1 = Number(prompt('Enter the first number:'));
let num2 = Number(prompt('Enter the secound number:'));
let num3 = Number(prompt('Enter the third number:'));
let num4 = Number(prompt('Enter the four number:'));

if (num1 === num2 || num1 === num3  || num1 === num4 || num2 === num3  || num2 === num4) {
  console.log('Yes, there are two numbers that are the same.');
}
else{
  console.log("No, there are no two numbers that are the same.");
}

```

### Question 9
#### Write a program to check if a number is palindrome or not. It means 141 and 12221 both are examples of palindrome number. If number is palindrome then print yes else print no

```
let number = prompt('please a number');
let reverseNumber = "";
for (let i = number.length-1; i >=0 ; i--) {
 reverseNumber = reverseNumber + number[i];
  
}
if (number === reverseNumber) {
  console.log(`number is palindrome ${reverseNumber}`);
}
else{
  console.log(`not a number palindrome ${reverseNumber}`);
}

```

### Question 10
#### Take a String and check its length. If string length is greater than 10 then print from 1 to length of the string. else print No

```
let str = "bilal khan pathan";

if (str.length > 10) {
  for (let i = 1; i <= str.length-1; i++) {
    console.log(str[i]);
  }
}
else{
  console.log('no');
}

```

