## Exercise-16

#### 1.Question Write a JavaScript program to check whether a string "Code" presents at 5th (index 4) position in a given string, if "Code" presents in the string return the string without "Code" otherwise return the original one.

```
function checkString(str) {
  if (str.length >= 8 && str.slice(4, 8) === "Code") {
    return str.slice(0, 4) + str.slice(8);
  } else {
    return str;
  }
}

// Example usage
console.log(checkString("HelloCodeWorld")); // Output: HelloWorld
console.log(checkString("HelloWorld")); // Output: HelloWorld
```
#### 2.Write a JavaScript program to capitalize the first letter of each word of a given string.


```
function capiStr(str) 
{
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
    return str.join(" ");
}

console.log(capiStr("the quick brown fox"));

step-----2

function capitalize(str) {
    let word = str.split(" ");
    let capitalizeWord = "";
    for (let i = 0; i < word.length; i++) {
       let  leng = word[i].slice(0,1).toUpperCase()+ word[i].slice(1)+" ";
       capitalizeWord += leng;
    }
    return  capitalizeWord;
}
let Stringng = "bilal khan pathan";
console.log(capitalize(Stringng));
```

#### 3.Write a JavaScript program to check whether all the digits in a given number are the same or not.


```
function same(num) {
  var first = num % 10;
  while (num) {
    if (num % 10 !== first) return "number is not some";
       num = Math.floor(num / 10);
  }
  return "number is some"
}
console.log(same(1234));
console.log(same(222));

step ------ 2


function checkSameDigits(num) {
    let numStr = num.toString();
    for (let i = 1; i < numStr.length; i++) {
      if (numStr[i] == numStr[0]) {
        return 'yes';
      }
    }
    return 'no';
  }
  console.log(checkSameDigits(111111)); // true
  console.log(checkSameDigits(123456)); // false
  console.log(checkSameDigits(444444)); // true
```
#### .4 Write a JavaScript function that reverse a number.


```
let number = 123456789;
function reverse(num)
{
	 num = num +"";
	return  num.split("").reverse().join("");
}
console.log(Number(reverse(number)));
```

#### 5 Write a JavaScript function to extract unique characters from a string.


```
let string = "thequickbrownfoxjumpsoverthelazydog"
function UniqueStr(str){
  let unique = "";
  for(let i = 0; i < str.length; i++){
    if(!unique.includes(str[i])){
      unique += str[i]
    }
  }
  return unique;
}

console.log(UniqueStr(string));

step ---- 2

function unique(str) {
    let set = new Set(str);
    
    return [...set].join("");
}
console.log(unique('bilal khan'));
```
##### . 6 Write a JavaScript function to chop a string into chunks of a given length. Test Data :

```
doubt.......................

function Chop(str){
     let chunk = [];
for (let i = 0; i < str.length; i += 3) {
    chunk.push(str.substring(i, i + 3));
}
return chunk;
}
console.log(Chop('w3resource'));
console.log(Chop('w3resource',2));
console.log(Chop('w3resource',3));
```
#### 7.Write a JavaScript function to find a word within a string. Test Data :

```
function findW(text, word){
    
  var x = 0, y=0;
 
  for (i=0;i< text.length;i++)
      {
      if(text[i] == word[0])
          {
          for(j=i;j< i+word.length;j++)
             {
              if(text[j]==word[j-i])
                {
                  y++;
                }
              if (y==word.length){
                  x++;
              }
          }
          y=0;
      }
  }
 return "'"+word+"' was found "+x+" times.";
}
console.log(findW('The quick brown fox', 'fox'));
console.log(findW('aa, bb, cc, dd, aa', 'aa'));
```
#### 8 Create an array of numbers. Now filter out all the numbers from the array where number is in between 30-50. After filtering the numbers, add 20 to each number and finally print the sum of all numbers using reduce function.

```
let arr =[1,2,70,40,50,6,7,8,9,35];
let fil = arr.filter((num) => num > 30 && num <=50)
.map((add)=> add + 20).reduce((a,b)=> a + b);
console.log(fil);

step ------2
function findSum(arrValue) {
    let fil = arrValue.filter((num) => num > 30 && num <=50)
    .map((add)=> add + 20).reduce((a,b)=> a + b);
    return fil;
}

console.log(findSum(arr));

```

#### 9. Convert below array[[1,2], [3,4], [5,6], [7,8], [9,10]] to [3,7,11,15,19]
```

let  arr =[[1,2], [3,4], [5,[2],6], [7,8], [9,10]];
console.log(arr.flat(Infinity));
```

### Question 10
### Print below pattern
```
1 2 3 4 5
 2 3 4 5
  3 4 5
   4 5
    5

    for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5 - i + 1; j++) {
    row += (i + j - 1) + " ";
  }
  console.log(" ".repeat(i - 1) + row);
}
```
