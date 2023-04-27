## Exercise

#### Question 1 Take two numbers and take a value which should be the sum of the two numbers plus some other number. Now findout the 3rd number.

```
let a = 50;
let b = 20;
let sum = 100;
console.log(sum -(a + b));

```
#### Question 2 Ask the below questions: What is your English marks in 10th? What is your Science marks in 10th? What is your Math marks in 10th? What is your Hindi marks in 10th? What is your SST marks in 10th? Now calculate percentage by taking all the 5 subjects numbers. 

```
let English = Number(prompt("What is your English marks in 10th?"));
let Science = Number(prompt("What is your Science marks in 10th?"));
let Math = Number(prompt("What is your Math marks in 10th?"));
let Hindi = Number(prompt("What is your Hindi marks in 10th?"));
let SST = Number(prompt("What is your SST marks in 10th?"));

let total = English + Science + Math + Hindi + SST ;
let marks = 500;
let subtotal = total / marks * 100
console.log(subtotal);
```

#### Question 3 In which century were your born? find out by asking birth year. Use Math.floor function to remove decimal portion of the century. let birthYear = Number(prompt('In which century were your born?'));


```
let ans = Math.floor(birthYear/100)+1
console.log(ans);
```
#### Question 4 Add 20 in your name and check value in console. Add true to your name and check output Add 30+"learnjavascript" and check type of the final value.


```
console.log("learnjavascript" + 20);
console.log(true + "learnjavascript");
console.log(30 + "learnjavascript");
```

#### Question 5 Create Reverse Game. Ask any question with 2 possible answers. If user selects first option then show second option in alert and vice versa. For example: Do you drink coffee or tea? and If user says coffee then show Tea in alert and if user says tea then show coffee.

```
 let  drinks = prompt("Do you drink coffee or tea?");    
 if (drinks === "coffee") {
    console.log("tea");
 }
 else if(drinks === "tea") {
    console.log("coffee");
 }
 else{
    console.log("wrong choice");
 }
```
##### . Question 6 Test below conditions using &&, || and not logical operators.  Take any number check if number is even and also check if number is multiple of 4 or not.If both conditions are true then check if number is less than 100 or number is 84 or not.

```
let num = 20;
if (num % 2 ===0 && num % 4 === 0 && (num < 100 || num === 84) ) {
    console.log("yes");
}
else{
    console.log("no");
}
```
#### Question 7  Take city temprature.If temp is less than 10 degree then print very cold.If city temp is less than 30 and greater than equal to 10 then print cold.If temp is between 30 to 40 then print Hot. Else print Very hot

```
let temp = 44;
if (temp < 10) {
    console.log('very cold');
}
else if (temp <  30 && temp >=10){
console.log('cold');
}
else if(temp <= 40 && temp >=  30 ){
  console.log("Hot");
}
else{
    console.log("very hot");
}
```
#### Question 8 Using prompt ask user about his/her age. If user is greater than 18 then show user message "Do you want to open account?" If yes click on Okay button then ask your 4 below questions What is your name ? What is your aaadhar number ? What is your address? What is your mobile number? And print all these details in console. If click on cancel then show message "Sorry, please visit again."
```
let age = Number(prompt("what is your age"));
if (age > 18 ) {
  let ok = confirm("Do you want to open account?");
  if (ok) {
     let name = prompt("What is your name ?");
     let aaadharNumber = Number(prompt("What is your aaadhar Number ?"));
     let address = prompt("What is your address?");
     let mobileNumber = Number(prompt("What is your mobile number?"));
     console.log(name ,aaadharNumber,address,mobileNumber)
  }
}
else{
    confirm("Sorry, please visit again.");
}

```
### Question 9 Create a simple calcultor. Firslty ask your about the operation. Like "What do you want to do?" User can type choice in any way like +,- or plus, minus or add, sub etc. After that ask user about first number and then second number and finally show the desired output.
```
let ans = prompt("What do you want to peform?");
let num1 = Number(prompt("Enter number 1"));
let num2 = Number(prompt("Enter number 2"));
if (ans === "+") {
    console.log(num1 + num2);
}
else if( ans === "-"){
      console.log(num1 - num2);
}
else if ( ans === "*"){
console.log(num1 * num2);
}
else {
    console.log("please try again");
}
```
### Question 10 Who is most intelligent in your family? Ask 10th percentage of each family member and check who got the highest marks. If total family members are more than 4 then you can use Math.max() function
```
let member1 = Number(prompt("what is bilal 10th percentage ?"));
let members2 = Number(prompt("what is altaf 10th percentage ?"));
let members3 = Number(prompt("what is A L 10th percentage ?"));
let members4 = Number(prompt("what is sher mohammad 10th percentage ?"));

let sumMark = Math.max(member1 , members2 , members3 , members4);
console.log(sumMark);
```
