## Exercise-17

### Object Questions

### Question 1
#### Write a function that takes an object as an input and returns a new object with the same keys and values, but with all the string values capitalized.
```
let obj = {
    name:"bilal",
    lname:"khan",
    age:28,
}

function capitalizeObjectValues(obj) {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "string") {
        newObj[key] = value.toUpperCase();
      } else {
        newObj[key] = value;
      }
    }
    return newObj;
  }

  console.log(capitalizeObjectValues(obj));

```

### Question 2
#### Write a function that takes two objects as inputs and returns a new object that contains only the keys that are present in both objects, along with their corresponding values from the first object.

```
const obj1 ={
    name:'bilal',
    mobile : 32364773,
    address: 'merta city',
};

const obj2 ={
     bank: 'HDFC',
     account: 86349629833,
     name:'Bilal'
}
function objFucnt(objF, objS) {
    let result ={};
    for (const key in objF) {
        if (objS.hasOwnProperty(key)) {
            result[key] = obj1[key];
        }
    }
    return result;
}
console.log(objFucnt(obj1 , obj2));
```

### Question 3
#### Write a function that takes an array of objects as an input and returns a new array that contains only the objects that have unique values for a specified key. For example, if the input array contains objects with a "name" key, the function should return an array of objects with unique names.

```
function filterUniqueObjects(arr, key) {
  let uniqueValues = new Set();
  let result = [];

  for (let obj of arr) {
    if (!uniqueValues.has(obj[key])) {
      uniqueValues.add(obj[key]);
      result.push(obj);
    }
  }

  return result;
}

let arr = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "Bob", age: 40 }
];

let filteredArr = filterUniqueObjects(arr, "name");
console.log(filteredArr); // Output: [{ name: "Alice", age: 20 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]
```

### Question 4
#### Write a function that takes an object as an input and returns an array of all the keys in the object, sorted alphabetically.

```
const obj2 ={
     bank: 'HDFC',
     account: 86349629833,
     name:'Bilal'
};

function alphabetically(obj) {
   return Object.keys(obj).sort();
}
console.log(alphabetically(obj2));

```
### Question 5
#### Write a function that takes an object and a string as input and returns a new object with all the keys that start with the specified string. The original object should not be modified.

```
my_object = {
    "apple": 1,
    "banana": 2,
    "cherry": 3,
    "kiwi": 4,
    "orange": 5
}
function filterObjectKeys(obj, prefix) {
    const filteredObj = {};
    for (let key in obj) {
      if (key.startsWith(prefix)) {
        filteredObj[key] = obj[key];
      }
    }
    return filteredObj;
  }
  let prefix = 'a'
  console.log(filterObjectKeys(my_object ,prefix));
```

### Array Questions

### Question 1
#### Write a function that takes an array of strings as an input and returns a new array where each string has been capitalized (i.e. the first letter of each word is capitalized).

```
let arr =['bilal','khan','pathan'];
function arrFucn(str) {
  return str.map((value) =>value.charAt(0).toUpperCase() + value.slice(1));
}
console.log(arrFucn(arr));
================step==2==========
let arr =['bilal','khan','pathan'];
function arrFucn(str) {
    let newArray = [];
    for (let i = 0; i < str.length; i++) {
        let capitalized = str[i].slice(0,1).toUpperCase() + str[i].slice(1);
        newArray.push(capitalized);  
    }
    return newArray;
}
console.log(arrFucn(arr));
```

### Question 2
#### Write a function that takes an array of numbers as an input and returns the highest product of any three numbers in the array.

```
============onHold==========
let arr = [21,34,43,56,22,45];
let highest = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
       highest = arr[i];
   }
}
console.log(highest);

```

### Question 3
#### Write a function that takes two arrays as inputs and returns a new array that contains only the elements that are present in both arrays, with no duplicates.

```
 let arr1 = [8,3,4,76,8,9];
  let arr2 = [13,1,7,8,3,3];
  
  function uniqueValues(arrF , arrS) {
      const set1 = new Set(arrF);
     let newArray =[];
    for (let i = 0; i < arrF.length; i++) {
       if (set1.has(arrS[i])) {
           newArray.push(arrS[i]);
           set1.delete(arrS[i]);
       }
    }
    return newArray;
  }
  console.log(uniqueValues(arr1, arr2));

```

### Question 4
#### Write a function that takes an array of strings as an input and returns a new array that contains only the strings that are palindromes (i.e. they are the same forwards and backwards).

```

let arr = ['a','b','cccc'];
console.log(getPalindromes(arr));

function getPalindromes(arr) {
    const palindromes = [];
    for (let i = 0; i < arr.length; i++) {
      const word = arr[i];
      const reversed = word.split('').reverse().join('');
      if (word === reversed) {
        palindromes.push(word);
      }
    }
    return palindromes;
  }

```
### Question 5
#### Write a function that takes an array of numbers as an input and returns a new array where each number has been multiplied by 2 if it is even, or by 3 if it is odd.

```
function multiplied(num) {
    const newArray = [];
    for (let i = 0; i < num.length; i++) {
        
        if (num[i] % 2 === 0) {
          newArray.push(num[i] * 2);
        }
        else{
          newArray.push(num[i] * 3);
        }
    }
    return newArray;
}
let arrs = [1,2,3,4,5,6,7,8,9,10];
console.log(multiplied(arrs));
```

### Set Questions

### Question 1
#### Write a function that takes an array of Sets as an input and returns a new Set that contains only the elements that are present in all of the Sets.

```
================onHold================
function setIntersection(arr) {
    const result = new Set(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      const common = new Set();
      for (const element of arr[i]) {
        if (result.has(element)) {
          common.add(element);
        }
      }
      result.clear();
      for (const element of common) {
        result.add(element);
      }
    }
    return result;
  }

```

### Question 2
#### Write a function that takes an array of numbers as an input and returns a new Set that contains only the numbers that are odd.

```
function add(oddNumb) {
    let set = new Set();
   for (let i = 0; i < oddNumb.length; i++) {
      if (oddNumb[i] % 2 === 0) {
        set.add(oddNumb[i]);
      }
   }
   return set
}
let arr = [1,2,3,4,5,6,7 ,2];
console.log(add(arr));
```

### Question 3
#### Write a function that takes two Sets as inputs and returns a new Set that contains only the elements that are present in the first Set but not the second.

```
function setDifference(set1, set2) {
    const difference = new Set();
    for (const element of set1) {
      if (!set2.has(element)) {
        difference.add(element);
      }
    }
    return difference;
  }
let arr1 = new Set(["book", "car"]);
let arr2 = new Set(["yello", "car"]);
console.log(setDifference(arr1,arr2));

```

### Question 4
#### Write a function that takes an array of Sets as an input and returns a new Set that contains only the unique elements across all of the Sets.

```
function unique(sat1) {
    let newSet = new Set();
  for (const element of sat1) {
    newSet.add(element)
  }
    return newSet;
}
let arr1 = new Set(["book", "car","book","sa"]);

console.log(unique(arr1));
```

### Question 5
#### Write a function that takes two Sets as inputs and returns a new Set that contains only the elements that are present in the first Set and the second Set, but not in both.
```
function unique(sat1, sat2) {
    let newSet = new Set();
    for (const element of sat1) {
        if (!sat2.has(element)) {
          newSet.add(element);
        }
      }
          for (const element of sat2) {
        if (!sat1.has(element)) {
          newSet.add(element);
        }
      }
    return newSet;
}
let arr1 = new Set(["book", "car"]);
let arr2 = new Set(["yello", "car"]);
console.log(unique(arr1,arr2));
```


### Map Questions

### Question 1
#### Write a function that takes two Maps as inputs and returns a new Map that contains only the keys that are present in both Maps, with the corresponding values from the first Map.

```

let fruits = {"a": 1, "b": 2, "c": 3}
let blackFruits = {"b": 4, "c": 5, "d": 6}

function mapIntersection(map1, map2) {
    const intersection = new Map();
      for (const [key, value] of map1) {
      if (map2.has(key)) {
        intersection.set(key, value);
      }
    }
  
    return intersection;
  }
console.log(mapIntersection(fruits,blackFruits));
```
### Question 2: Write a function that takes a Map of numbers as an input and returns a new Map where each key is the square root of the corresponding key in the input Map, and the value is the square of the corresponding value in the input Map.

```
function squareRootMap(map) {
  // Create a new Map to store the square roots of keys and squares of values.
  const result = new Map();

  // Loop through the entries in the input Map.
  for (const [key, value] of map) {
    // Compute the square root of the key and the square of the value.
    const sqrtKey = Math.sqrt(key);
    const squaredValue = value ** 2;

    // Add the square root of the key and the square of the value to the result Map.
    result.set(sqrtKey, squaredValue);
  }

  return result;
}
```

### Question 3: Write a function that takes two Maps as inputs and returns a new Map that contains only the keys that are present in both Maps, with the corresponding values from the second Map.

```
function mapIntersection(map1, map2) {
  // Create a new Map to store the intersection.
  const intersection = new Map();

  // Loop through the entries in the second Map.
  for (const [key, value] of map2) {
    // If the key is in the first Map, add the key-value pair to the intersection Map.
    if (map1.has(key)) {
      intersection.set(key, value);
    }
  }

  return intersection;
}
```

### Question 4: Write a function that takes a Map of numbers as an input and returns the sum of the values of all of the even keys in the Map.

```
function sumEvenKeys(map) {
  let sum = 0;

  // Loop through the entries in the Map.
  for (const [key, value] of map) {
    // If the key is even, add the value to the sum.
    if (key % 2 === 0) {
      sum += value;
    }
  }

  return sum;
}
```

### Question 5: Write a function that takes a Map of strings as an input and returns a new Map where each key is a letter and the value is the number of times that letter appears in the values of the input Map.

```
function letterCount(map) {
  // Create a new Map to store the letter counts.
  const letterCounts = new Map();

  // Loop through the entries in the input Map.
  for (const [key, value] of map) {
    // Loop through the characters in the value string.
    for (const char of value) {
      // If the character is a letter, add it to the letter count for this key.
      if (/[a-zA-Z]/.test(char)) {
        const letter = char.toLowerCase();
        const count = letterCounts.get(letter) || 0;
        letterCounts.set(letter, count + 1);
      }
    }
  }

  return letterCounts;
}
```