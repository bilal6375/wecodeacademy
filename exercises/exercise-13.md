### exercise-13

### Question 1
#### Create an array with three elements and print out the second eleme
```
let arr = [1,2,3];
console.log(arr.at(1));
console.log(arr[1]);
```
### Question 2
#### Create an array with five elements and print out the length of the array.
```
let arr = [1,2,3,4,5];
console.log(arr.length);
```
### Question 3
#### Create an array with four elements and print out each element using a for loop.

```
let arr = [1,2,10,4,5];

for (let index = 0; index < arr.length; index++) {
   console.log(arr[index]);   
}

arr.forEach(element => {
    console.log(element);
});
```
### Question 4
#### Create an array with six elements and print out each element using a forEach loop.

```
let arr = [1,2,10,4,5 ,6];
 arr.forEach(test);
 function test(value) {
     console.log(value);
 }

arr.forEach(element => {
    console.log(element);
});
```
### Question 5
#### Create an array with three elements and add a fourth element to the end of the array.
```
let arr = [1,2,3];
arr.push(4);
console.log(arr);
```
### Question 6
#### Create an array with four elements and remove the second element.

```
let arr = [1,2,3,4];
arr.splice(1,1);
console.log(arr);
```

### Question 7
#### Create an array with five elements and remove the last element.

```
let arr = [1,2,3,4,5];
arr.pop();
console.log(arr);
```

### Question 8
#### Create an array with three elements and check if the array includes a specific value.

```
let arr =[1,2,3,4,5];
if (arr.includes(3)) {
    console.log('yes');
}
else{
    console.log('no');
}
```

### Question 9
#### Create an array with five elements and sort the array in ascending order.

```
let arr =[1,2,10,3,4];
arr.sort(sortFunc);
console.log();
function sortFunc(a , b) {
    return a - b;
}

console.log(arr);


let arr =[1,2,10,3,4];
arr.sort((a ,b) =>{
return a -b
});
console.log(arr);

```


### Question 10
#### Create an array with five elements and sort the array in descending order.

```
let arr =[1,23,4,66,5,2];
arr.sort((a ,b)=>{
return b - a;
})
console.log(arr);

```

### Question 11
#### Create two arrays, concatenate them and print out the resulting array.

```
let arr1 = [1,2,3,4];
let arr2 = [13,2,3,4];
let concate = arr1.concat(arr2);
console.log(concate);
```

###  Question 12
#### Create an array with three elements and convert it to a string.
```
let arr1 = [1,2,3,4];

console.log(arr1.toString());

```
### Question 13
#### Create an array with four elements and reverse the order of the elements.
```
let arr = [1,2,3,4];
console.log(arr.reverse());
```

### Question 14
#### Create an array with five elements and find the index of a specific value.

```
let arr = [1,2,3,4];
console.log(arr.indexOf(4));

const arr = [10, 2, 9, 4, 5];
let num = 9;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === num) {
    console.log(i);
  }
}
```

### Question 15
#### Create an array with six elements and slice the array to create a new array with the first three elements.
```

let arr = [1,2,3,4,5,6];
arr.slice(3,6);
let sli = arr.slice(3,6);
console.log(arr);
console.log(sli);
```

### Question 16
#### Create an array with six elements and use the map method to double each element.

```
let arr = [1,2,3,4,5,6];
let mapin = arr.map(test);

function test(value) {
    return value * 2;
}
console.log(mapin);

```

### Question 17
#### Create an array with four elements and use the while loop to calculate the sum of all elements.

```
let arr = [1,2,3,10,5,6];
let i = 0;
let sum = 0;
while ( i < arr.length) {
    console.log(arr[i]);
    sum += arr[i];
    i++;
}
console.log(sum);

```
### Question 18
#### Create an array with five elements and use the filter method to return only the even numbers.

```

let arr = [1,2,3,12,10,5];
let filt = arr.filter(test);
function test(value) {
    return value % 2 === 0;
}
console.log(filt);

```

### Question 19
#### Create an array with three elements and use the join method to concatenate the elements with a dash (-) separator.

```
let arr = [1,2,3,12,10,5];
console.log(arr.join('-'));
```

### Question 20
#### Create two arrays with three elements each and use the concat method to combine them into a new array.

```
let arr1 = [1,2,3,12,10,5];
let arr2 = [33,4,11];
let newArray = arr1.concat(arr2);
console.log(newArray);


```