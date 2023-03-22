## object

#### 1. What is an object in JavaScript?
``` 
object ek datastructure hain. jiska use data store krane ke liye kiya jata hain.
data store key or value ki form me huti he
```
#### 2.What is the difference between dot notation and bracket notation for accessing object properties?

```
dot notation:- esme hum value . likhe ke nikalte for example : obj.keyname
bracket notation:-esme hum valu [] se nikalte he for example : obj.['key'name]
```
 #### 3 How do you loop through the properties of an object in JavaScript ?
```
let obj = {
    f_name: "bilal",
    l_name: "khan",
    mobile: 234234254,
    emai: "bilal@gmail.com",
};
type 1
let val = Object.entries(obj);
for (let i = 0; i < val.length; i++) {
    console.log(val[i][0] ," ", val[i][1]);
}
type 2
for (const key in obj) {
  console.log(`${key}  ${obj[key]}`);
}
```

#### 4.What is the difference between an object and an array in JavaScript?
```
array:-
       array ek datastructure jiska use data store kervane ke kiye kiya jata hain.emse value ko index se nikalte he.
object:-
object bhi  ek datastructure jiska use data store kervane ke kiye kiya jata hain.emse hum value key pairs se nikalte he
```

####  5 Write a JavaScript function to convert an object into a list of [key, value] pairs.
```
let obj ={
    f_name: "bilal",
    l_name: "khan",
    mobile: 234234254,
    emai: "bilal@gmail.com",
   address:{
        picode:3232,
        addhar:323245,
        place:"karkwal",
    }
}
console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));

function pairs(objs) {
    let newObj =[];
    for (const key in objs) {
        newObj.push([key, objs[key]])
    }
    return newObj;
}
console.log(pairs(obj));
```

#### 6 Write a function that takes an object representing a person and returns their full name.

```
let obj ={
    named:"bilal",
    l_name:"khan",
}
function person(newObj) {
    let {named ,l_name} = newObj
     return `${named}  ${l_name}`;
}
console.log(person(obj));
```

#### 7 Create an Object with your personal details. Now print all the keys of the object in ascending order.

```
let obj ={
    f_name: "bilal",
    l_name: "khan",
    mobile: 234234254,
    emai: "bilal@gmail.com",
   address:{
        picode:3232,
        addhar:323245,
        place:"karkwal",
    }
};
let ans = Object.entries(obj);
console.log(ans.sort());
for (const value of ans) {
    console.log(value[0], value[1]);
}
document.write(ans);
```

#### 8 . Create an Object with your personal details. Now filter out all the values of the object and show them in descending order.
```
let personalDetails = {
  name: "bilal",
  mobile: 6375164100,
  fatherName: "usman khan",
  village: "karkwal",
};
let key = Object.values(personalDetails);
let ans = key.sort(sorting);
console.log(ans);
function sorting(val1, val2) {
  return val2.length - val1.length;
}
```

#### 9 . Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).On separate lines (one console.log statement for each), log the recipe information so it looks like:   Mole Serves: 2 Ingredients: cinnamon cumin cocoa
```

```


#### 10 . Create a JavaScript function inside an object which finds max of 3 numbers. Now call this function of the object and print the maximum number.

```


```

