## Exercise

#### 1.Question 1Write a JavaScript program to check whether a string "Code" presents at 5th (index 4) position in a given string, if "Code" presents in the string return the string without "Code" otherwise return the original one.

```function stringF(str)
{
  if (str.length < 4) {
    return str;
  }
  let ans_str = str;
  if (str.substring(10, 6) == 'Code') 
    {
   ans_str = str.substring(0, 4)
  }
  return ans_str;
}
console.log(stringF("WeacadCode"));
```
#### 2.Write a JavaScript program to capitalize the first letter of each word of a given string.


```function capiStr(str) 
{
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
    return str.join(" ");
}

console.log(capiStr("the quick brown fox"));
```

#### 3.Write a JavaScript program to check whether all the digits in a given number are the same or not.


```function same(num) {
  var first = num % 10;
  while (num) {
    if (num % 10 !== first) return "number is not some";
       num = Math.floor(num / 10);
  }
  return "number is some"
}
console.log(same(1234));
console.log(same(222));
```
#### .4 Write a JavaScript function that reverse a number.


```let number = 123456789;
function reverse(num)
{
	 num = num +"";
	return  num.split("").reverse().join("");
}
console.log(Number(reverse(number)));
```

#### 5 Write a JavaScript function to extract unique characters from a string.


```let string = "thequickbrownfoxjumpsoverthelazydog"
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
```
##### . 6 Write a JavaScript function to chop a string into chunks of a given length. Test Data :

```function Chop(str){
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

```function findW(text, word){
    
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
####  Convert below array[[1,2], [3,4], [5,6], [7,8], [9,10]] to [3,7,11,15,19]
```
let a = [[1,2], [3,4], [5,6], [7,8], [9,10]];
let newArr = [];
for (let i = 0; i < a.length; i++) {
  let sum = a[i][0] + a[i][1];
  newArr.push(sum);
}
console.log(newArr);

```