## exercise-12

### Question 4
#### Using a switch case to do this exercise

#### Ask user a question "Do you drink tea/coffee" ?

#### 1. If user says tea print tea
#### 2. If user says coffee then print coffee
#### 3, If users say anything else then print water

```
let str = prompt('Do you drink tea/coffee ?');

switch (str) {
    case 'tea':
        console.log('tea');
        
        break;
        case 'coffee':
            console.log('coffee');
            break;

    default:
        console.log('water');
        break;
}

```
### Question 5
```
Ask user his/her age, "What is your age?"

If user age is greater than 18 and less than 50 then ask user "Would you like to have a coffee?" If user click on Okay then ask for his/her choice with questions "What type of coffee you want to have?" and finally in the alert show message "Hello Sir/Mam, here is your coffee ###"

If user age is less than 18 then ask him question in confirm box "Would you like to have tea?" If user says yes then ask "What type of tea do you want?" and then in alert show "Hello Sir/Mam, here is your ### tea." Else show "Sorry visit again please." in alert box
```

```
let age = prompt("What is your age?");

if (age > 18 && age < 50) {
    let conf = confirm('Would you like to have a coffee?');
    if (conf) {
        let choice = prompt('What type of coffee you want to have?');
        alert(`Hello Sir/Mam, here is your coffee ${choice}`);
    }
}
 else if (age < 18 ){
   let tea =   confirm('Would you like to have tea?');
   if (tea) {
     let askUser = prompt('What type of tea do you want?');
     alert(`Hello Sir/Mam, here is your ${askUser} tea.`);
   }
   else{
    alert('Sorry visit again please.');
 }
 }

```

### Question 6
#### Take any number and take other number as 39. Now check their difference by subtracting each other. If both numbers difference is greater than 40 then print double their absolute difference else print triple their absolute difference.

```
let num1 = Number(prompt("Enter first number:"));
let num2 = 39;

let diff = Math.abs(num1 - num2);

if (diff > 40) {
  console.log(diff * 2);
} else {
  console.log(diff * 3);
}

```

### Question 7
#### Write a JavaScript program to check from two given integers, whether one is greater than 18 and another one is less than 10.

#### If yes then print sum of both the numbers Else print multiplication of both numbers

```
let num1 = Number(prompt('Enter first number'));
let num2 = Number(prompt('Enter Second number'))
if (num1 > 18 && num2 < 10) {

    console.log( num1 + num2 );
}
else{
    console.log( num1 * num2);
}
```

### Question 8
#### Write a JavaScript program to check if out of 5 numbers any two numbers are same or not. If yes then print Yes else print No.

```
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));
let num4 = Number(prompt("Enter fourth number:"));
let num5 = Number(prompt("Enter fifth number:"));

if (num1 == num2 || num1 == num3 || num1 == num4 || num1 == num5 || num2 == num3 || num2 == num4 || num2 == num5 || num3 == num4 || num3 == num5 || num4 == num5) {
  console.log("Yes");
} else {
  console.log("No");
}

```
### Question 9
#### Write a program to check if a number is divisible by 10 && 20 or not. If yes then multiply the number by 51 else multiply the number by 59 and print.

```
let num1 = prompt('enter a number');

if (num1 % 10 === 0 && num1 % 20 === 0) {
    console.log(num1 * 51);
}
else{
    console.log(num1 * 59);
}

```

### Question 10
#### Take a String and check its length. If string length is greater than 15 then print 2's table till the length of the string else print No

```
let str = prompt("Enter a string:");

if (str.length > 15 ) {
  for (let i = 0; i < str.length; i++) {
    console.log(2 * i);
  }
}
else{
    console.log('no');
}

```

### Question 11
#### How do you reverse a given string in place

```
let str = prompt('please enter a string');
let result =""; 
for (let i = str.length-1; i >=0 ; i--) {
//    console.log(str[i]);
   result = result + str[i];
    
}
console.log(result);

```

### Question 12
#### How do you print duplicate characters from a string

```
on hold
```

### Question 13
#### How do you find duplicate characters in a given string
```
on hold
```

### Question 14
#### How do you count a number of vowels and consonants in a given string

```
let str = "hello world";
let vowels = 0;
let consonants = 0;

// Loop through the string and check if each character is a vowel or a consonant
for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowels++;
  } else if (char >= "a" && char <= "z") {
    consonants++;
  }
}

// Print the number of vowels and consonants
console.log("Number of vowels: " + vowels);
console.log("Number of consonants: " + consonants);
```

### Question 15
#### How do you check if a given string is a palindrome
```
let str = 'aba';
let result ="";
for (let i = str.length-1; i >=0; i--) {
    result = result + str[i]
}
if (str === result) {
    console.log('string is palindrome');
}
else{
    console.log('not a palindrome');
}

```

### Question 16
#### Given string str, How do you find the longest palindromic substring in string?

```
function longestPalindrome(str) {
  const n = str.length;
  const dp = new Array(n).fill(null).map(() => new Array(n).fill(false));
  let maxLength = 1;
  let start = 0;

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check for substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    if (str[i] === str[i+1]) {
      dp[i][i+1] = true;
      maxLength = 2;
      start = i;
    }
  }

  // Check for substrings of length 3 or greater
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      if (str[i] === str[j] && dp[i+1][j-1]) {
        dp[i][j] = true;
        maxLength = len;
        start = i;
      }
    }
  }

  return str.substr(start, maxLength);
}
```

### Question 17
#### How to remove the duplicate character from String

```
function removeDuplicate(str) {
    return [...new Set(str)].join("");
}
 let remove =  removeDuplicate('hello');
 console.log(remove);

 ////////////////////////step-2//////////////////////

let set = new Set('bilal');
console.log([...set].join(""));

```

### Question 18
#### Write a program to count the number of characters in a string.

```
const str = 'Hello, world!';
let count = 0;
for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (char !=="," && char !==" " && char !=="!") {
        count++;
    }
    
}
console.log(count);
```

### Question 19
#### Write a program to check if a given string is a palindrome (reads the same backwards and forwards).

```
function isPalindrome(str) {
     const result = str.split('').reverse('').join('');
     return str ==  result ;
}

const str1 = 'racecar';
console.log(`${str1} is a palindrome: ${isPalindrome(str1)}`);

const str2 = 'hello';
console.log(`${str2} is a palindrome: ${isPalindrome(str2)}`);

```

### Question 20
#### Write a program to reverse a string.

```
function reverseStr(str) {
    return str.split('').reverse('').join('');
}

const char = "hello world";
console.log(reverseStr(char));

```

### Question 21
#### Write a program to find the first non-repeated character in a string.

```
function firstNonRepeatedChar(str) {
  let freq = {};

  // loop through string and count frequency of each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    freq[char] = (freq[char] || 0) + 1;
  }

  // loop through string again and return first character with frequency of 1
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freq[char] === 1) {
      return char;
    }
  }

  // if no non-repeated character found, return null
  return null;
}

console.log(firstNonRepeatedChar('hello')); // output: "h"
console.log(firstNonRepeatedChar('aabbc')); // output: "c"
console.log(firstNonRepeatedChar('aabbcc')); // output: null
```

### Question 22
#### Write a program to remove all vowels from a string.
```
function vowels(str) {
 return str.replace(/[aeiou]/gi, '');
}
console.log(vowels('hello'));
```

### Question 23
#### Write a program to check if a given string contains only numeric characters.
```
function isNumeric(str) {
    return /^\d+$/.test(str);
  }
  console.log(isNumeric('12345'));
```

### Question 24
#### Write a program to find the largest word in a string.

```
let str = "bilal khan pathan";
let largest = str.split(" ");
let word ="";
for (let i = 0; i < largest.length; i++) {
    const element = largest[i];
    if (element.length > word.length) {
       word = element;
    }
    
}
console.log(word);
```

### Question 25
#### Write a program to remove all occurrences of a particular character from a string.

```
let str = "Hello world! This is a test string.";
let removeOccure = "l";

let newstr = str.replace(new RegExp(removeOccure, "g" ), '')
console.log(newstr);
```

### Question 26
#### Write a program to capitalize the first letter of each word in a sentence.

```
step-1

let sentence = "this is a sample sentence.";
let spl = sentence.split(" ");
let wordCapitalize =[];
for (let i = 0; i < spl.length; i++) {
    let sum = spl[i].slice(0 , 1).toUpperCase()+spl[i].slice(1);
    wordCapitalize.push(sum);
}
console.log(wordCapitalize.join(" "));

step-2
function capitalize(str) {
    let sum = str.split(" ").map(value=> value.charAt(0).toUpperCase()+value.slice(1))
    return sum;
}

console.log(capitalize('this is a sample sentence.').join(" "));

```

### Question 27
#### Write a program to find the most frequently occurring character in a string.

```
  function findMostFrequentChar(str) {
    let charMap = {};
    let maxChar = '';
    let maxCount = 0;
  
    // loop through the string and count the frequency of each character
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
      // update maxChar and maxCount if a new character with higher frequency is found
      if (charMap[char] > maxCount) {
        maxChar = char;
        maxCount = charMap[char];
      }
    }
  
    return maxChar;
  }
  
  // example usage
  let str = 'hello world';
  let mostFrequentChar = findMostFrequentChar(str);
  console.log(`The most frequent character in '${str}' is '${mostFrequentChar}'.`);
```
