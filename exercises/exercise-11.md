## exercise-11

### Question 1
#### Write a JavaScript function to capitalize the first character of the string.
```
for example:
wecodeacademy

output:
Wecodeacademy
```
```
step-1
let str = "wecodeacademy";
let result = str[0].toUpperCase()+str.toLowerCase().slice(1);
console.log(result);
step-2
 let str = "wecodeacademy very good";
let strSplite = str.split(" ");
let result = [];
for (let i = 0; i < strSplite.length; i++) {
         let showResult = strSplite[i].charAt(0).toUpperCase()+strSplite[i].slice(1);
         result.push(showResult);
}
console.log(result.join(''));

```

### Question 2
#### Write a JavaScript function to insert a string within a string at a particular position
```
for example:
We are learning exercises.

now insert the word JavaScript at 14 position so output will be :

We are learning JavaScript exercises.

```
```
let str = 'We are learning exercises'; 
function insertString(str ,index ,addString) {
   return str.slice(0 , index) + " " + addString + str.slice(index);
}

let  index = 15;
let addString = "JavaScript";
let result  = insertString(str ,index ,addString);
console.log(result);

```

### Question 3
#### Write a JavaScript function to count the occurrence of a substring in a string.
```
"My name is wecode academy and my friend name is Arun Kumar."

find count of 'is' in this word is 2.
```

```
let str = "My name is wecode academy and my friend name is Arun Kumar.";
let substr ="is"; 

function countString(str ,substr) {
  let regex = new  RegExp(substr ,'g');
  let matche =  str.match(regex);
  return  matche = matche.length;
}
let subResult = countString(str ,substr);
console.log(subResult);

```

### Question 4
```
Ask user below questions:

What is your name?
What is your mobile number?
What is your account number?
What is your atm card number?
What is your aadhar number?
Now do below tasks:

Mask last 3 digits of the mobile number
Mask middle of 5 numbers of the account
Mask last 8 digit of atm card number
Mask starting 4 digits and last 4 digits of aadhar number
```

```
// Define maskStart and maskEnd functions
function maskStart(str, num) {
  return str.slice(num).padStart(str.length, '*');
}

function maskEnd(str, num) {
  return str.slice(0, -num).padEnd(str.length, '*');
}

// Ask user for input
let name = prompt("What is your name?");
let mobileNumber = prompt("What is your mobile number?");
let accountNumber = prompt("What is your account number?");
let atmCardNumber = prompt("What is your ATM card number?");
let aadhaarNumber = prompt("What is your Aadhaar number?");

// Mask the input values as required
let maskedMobileNumber = maskEnd(mobileNumber, 3);
let maskedAccountNumber = maskStart(maskEnd(accountNumber, 3), 5);
let maskedAtmCardNumber = maskEnd(atmCardNumber, 8);
let maskedAadhaarNumber = maskStart(maskEnd(aadhaarNumber, 4), 4);

// Log the masked values to the console
console.log("Name:", name);
console.log("Mobile number:", maskedMobileNumber);
console.log("Account number:", maskedAccountNumber);
console.log("Aadhaar number:", maskedAadhaarNumber);

```

### Question 5
#### Print below pattern using repeat function
```
     $
    $$$
   $$$$$
  $$$$$$$
 $$$$$$$$$
$$$$$$$$$$$
```

```
for (let i = 1; i <= 6; i++) {
  let spaces = ' '.repeat(6 - i);
  let stars = '$'.repeat(2 * i - 1);
  console.log(spaces + stars);
}

```

### Question 6
#### Ask below questions :

#### 1 What is your name?
#### 2 What is your birth year?
#### 3 What is your address ?
#### 4 What is your country code?
#### 5 What is your mobile number?
#### Now using string template literal syntax show below output based on your answer:

#### My name is Sajid Khan. I was born in 1993 and my current age is 30 years. My address is Jhotwara, Jaipur and my mobile number is +919565465654.

```
function address() {
  return `My name is ${name} i was born in ${birth} and my current age is ${age} years My address is
   ${myAddress} and my mobile number is ${mobileNumber} and my country code is ${countryCode}`;
}

let name = prompt('What is your name?');
let birth = prompt('What is your birth year?');
let myAddress = prompt('What is your address ?');
let countryCode = prompt('What is your country code?');
let mobileNumber = Number(prompt('What is your mobile number'));
let  currentYear = new Date().getFullYear();
 let age = currentYear - birth

console.log(address());

```
### Question 7
#### Divide a string in two part.

#### Now in right side part add Hello in the end In left side of the string add World in starting

#### for example:

```
let str = "Wecode Academy"

output:
Wecode Hello  Academy World
```
```
let str = "Wecode Academy";

function addString(str) {
  return str.slice(0,6)+ " hello "+str.slice(7,14) + " world";
}

console.log(addString(str));
```

### Question 8
#### Guessing Game? Ask user what character is present at particular index in a word.

#### If user guess is right then show him Congrulations message otherwise show Sorry message.

#### for example:

```
Wecode Academy

What is the character you are guessing? A
What is the index? 3

Sorry
```
```
let str = 'Wecode Academy';

let guessCharacter ="W";
let guessIndex = 0;

if (str.indexOf(guessCharacter) === guessIndex) {
  console.log('Congrulations');
}
else{
  console.log('sorry');
}

```
### Question 9
#### Print Pattern using repeat function

```
***********
 *********
  *******
   *****
    ***
     *
```

```
for (let i = 1; i <= 6; i++) {
  let spaces = ' '.repeat(i - 1);
  let stars = '*'.repeat(13 - 2 * i);
  console.log(spaces + stars);
}


```

### Question 10
#### Print below Series using repeat function

```
1 224 3339 44412 555520
```
```
let str = "";
for (let i = 1; i <= 5; i++) {
  let sum = 0;
  for (let j = 1; j <= i; j++) {
    if (i !== 1) {
      sum = sum + i;
    } else {
      sum = "";
    }
  }
  str = str + i.toString().repeat(i) + sum + " ";
}
console.log(str);
```
