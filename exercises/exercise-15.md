## Exercise-15

### Question 1
#### What is an object in JavaScript?
```
object ak datastructure hain. jiska use hum data store karne me karte hain.object me data key value ki form me store hoti hian.

Yadi hum same kam array se kar na chahye to kar skte hain. lakin array me humye index mainten kar ne padyegi.index yad kar pana kafi tuff hota hain.isleye hum index ki jgha key ka use karte hain. issye key humasa same rahate hain.par value change ho skte hain.

Object literal syntax

var obj={
    name:"learnjavascript"
}

object using new key word

var obj=new object();

```

### Question 2
#### What is the difference between dot notation and bracket notation for accessing object properties?

```
dot annotation me hum actual key ka name likna hota hain.iske leye hum koi variable etc use nahi kar skte hain.pr brecket annotationme hum variable bhi use kar skte hain. variable ki jo value hogi vo value object ke andr key ke form me search hogi or vahi answer hoga.
```
### Question 3
#### How do you loop through the properties of an object in JavaScript?
```
let obj = {
    name:'bilal',
    age:23,
    mobile:233434343
}
for (const key in obj) {
    console.log(key+ ":"+obj[key]);
}
```

### Question 4
#### What is the difference between an object and an array in JavaScript?
```
In JavaScript, an object is a collection of key-value pairs, where the keys are strings and the values can be any valid JavaScript data type, including arrays. Objects are often used to represent real-world entities, such as a person or a car, and can have methods, which are functions that can be called on the object.

On the other hand, an array is a collection of values, which can be any valid JavaScript data type, including objects. Arrays are used to represent ordered lists of data, such as a list of numbers or a list of names. Arrays have numeric indices, which start at 0, and can be accessed using bracket notation.

In summary, the main difference between objects and arrays is that objects use named keys to access their values, while arrays use numeric indices. Additionally, objects can have methods, while arrays cannot.

```

### Question 5
#### Write a JavaScript function to convert an object into a list of [key, value] pairs

```
function convert(obj) {
let objvalue = Object.entries(obj)
return objvalue;
}
let value = {"name":"bilal","age":34,"mobile":3334324};
console.log(convert(value));
```

### Question 6
#### Write a function that takes an object representing a person and returns their full name.

```
function fullName(Name){
    let addName = Name.name + " " + Name.lastName;
    return addName;
}
let obj ={name:'bilal',lastName:'khan'};
console.log(fullName(obj));
```

### Question 7
#### Create an Object with your personal details. Now print all the keys of the object in ascending order.

```
function details(kyesOf) {
    return Object.keys(kyesOf).sort();
}
let obj = {
    name:'bilal',
    age:23,
    mobile:233434343
}
console.log(details(obj));
```
### Question 8
#### Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.

```

function details(personal) {
    return Object.values(personal).sort((a ,b)=> b - a);
}

let obj = {
    name:'bilal',
    age:23,
    mobile:233434343
}
console.log(details(obj));

```

### Question 9
#### Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). On separate lines (one console.log statement for each), log the recipe information so it looks like: Mole Serves: 2 Ingredients: cinnamon cumin cocoa

```
const recipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log(recipe.title);
console.log(`Serves: ${recipe.servings}`);
console.log("Ingredients:");
recipe.ingredients.forEach(ingredient => console.log(ingredient));
```

### Question 10
#### Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.

```
let obj = {
   maxValue:function(a ,b ,c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max ) {
        max = c;
    }
    return max;
   }
}
console.log(obj.maxValue(20,30,10));

let obj ={
    maxValue:function(a,b,c) {
        return Math.max(a,b,c);
    }
};
console.log(obj.maxValue(20,45,11));
```

