// exercise-07
// Question.1 Print 1 to 100
// let ans = 100;
// for (let i = 1; i <ans; i++) {
//     console.log(i);
// }

// Question.2 Print all Odd numbers from 1 to 100

// let arr =[1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
    
// }

// Question.3 Print all Even numbers from 1 to 100

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 ===0) {
//         console.log(i);
//     } 
// }

// Question.4 Print all numbers which are divisible of 5 in 1 to 100
// for (let i = 0; i <=100; i++) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
    
// }

// Question.5 Print all numbers which are divisible of 5 and 15 in 1 to 100

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0 && i % 15 === 0) {
//         console.log(i);
//     };
    
// }

// Question.6 Print 2's table

// for (let i = 0; i <= 100; i++) {
//     console.log(i * 2);
    
// }

// Question.7 Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times

// let ask = Number(prompt('How many times do you want to print Hello World?'));
// for (let i = 1; i <= ask; i++) {
//    console.log(i+ 'hello world');
    
// }

// Question.8 Calculate sum of all numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <=100; i++) {
//    sum += i;
// }
// console.log("all sum of number",sum);

// Question.9 Calculate sum of all odd numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <=100; i++) {
//     if (i % 2 !== 0 ) {
//         sum += i;
//     }  
// }
// console.log(sum);

// Question.10  Calculate sum of all even numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <=100; i++) {
//     if (i % 2 === 0 ) {
//         sum += i;
//     }  
// }
// console.log(sum);

// Question.11  Print 1,2,4,8,16,32,64.......upto 2048
// for (let i = 1; i <= 2048; i = i *= 2) {
//     console.log(i);
// }

// Question.12  Print
// 1,2,3,4,5,6,7,8,9,10
// 11,12,13,14,15,16,17,18,19,20
// .
// .
// ......................99,100

// for (let i = 1; i <=100; i++) {
//     document.write(i);
//    if (i % 10 === 0 ) {
//     document.write('<br>');
// }
    
// }

// Question.13 Print 1 to 100, but with a specific condition. If a number is divisible by both 3 and 5, it logs "fizzbuzz" to the console instead of the number itself.
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0 ) {
//         console.log(i +  " " +  'fizzbuzz');
//     } 
    
// }

// Question 14 print 10 table like this

// 2*1=2
// 2*2=4
// 2*3=6
// 2*4=8
// 2*5=10
// .
// .
// .
// 2*10=20
// let x = 2;
// for (let i = 1; i <= 10; i++) {
//     console.log(x +  '*' + i + '='+ i * x);
// }

// Question 15 Run a loop from 1 to 50

// From 1 to 10 print "A"
// From 11 to 20 print "B"
// From 21 to 30 print "C"
// From 31 to 40 print "D"
// From 41 to 50 print "E"

// for (let i = 1; i <=50; i++) {
//   if (i <= 10) {
//      console.log(i + 'A');
//   }
//   else if( i <= 20){
//     console.log(i + 'B');
//   }
//   else if( i <= 30){
//     console.log(i + 'C');
//   }
//   else if( i <= 40){
//     console.log(i + 'D');
//   }
//   else if( i <= 50){
//     console.log(i + 'E');
//   }
    
// }

// Question.17 Print below series 5 25 125.. till number is less than equal to 10000
// for (let i = 5; i <= 10000; i = i *=5) {
//    console.log(i);
// }

// Question.18 Print below series 3,6,9,12... till number is less than equal to 500
// for (let i = 3; i <= 500; i = i+3) {
//    console.log(i);
// }

// Question.19 print below series
// 120
// 221
// 322
// 423
// 524
// 625
// 726
// 827
// 928
// 1029

// for (let i = 120; i <= 1029; i++) {
//        console.log(i);
//        i = i + 100
// }

// for (let i = 1, j = 20; i <= 10; i++ , j++) {
//     console.log(i +""+j);
// }


// Question.20 print below series 100 95 90 85 80 ... till 0
// for (let i = 100; i >=0 ; i = i-5) {
// console.log(i);    
// }


// Question.21 Number 70 is divisible by which numbers till 70? Find out and print those numbers

// for (let i = 1; i <= 70; i++) {
//     if (i % 7 === 0  ) {
//         console.log(i);
//     }
    
// }

// while loop Exercise


// Question.22 Write a while loop that logs the numbers 1 to 10 in the console.

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// Question.23 Calculate sum of all numbers from 1 to 10

// let i = 1;
// let sum = 0;
// while (i <= 10) {
//     sum = sum +i;
//     i++;
// }
// console.log(sum);

// Question.24 Counting down from 10 to 1
// let  i = 10;
// while (i >= 1 ) {
//     console.log(i);
//     i--;
// }


//Question.25 Print 2's table
// let i =1;
// while (i <= 10) {
//     console.log(i*2);
//     i++;
// }

// Question.26 Calculate sum of all odd numbers from 1 to 100

// let i =1;
// let sum = 0;
// while (i <= 100) {
//     if (i % 2 === 1) {
//        sum = sum + i;
//     }
//     i++;
// }
// console.log(sum);


// do while loop Exercise

// Question.27 Write a do...while loop that logs the numbers 1 to 5 in the console
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// Question.28 Counting down from 10 to 1

// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i >= 1);

// Question.29 Calculate sum of all numbers from 1 to 10

// let  i = 1;
// let sum = 0;
// do {
//     sum = sum + i;
//     i++;
// } while (i <= 10);
// console.log(sum);

// Question.30 Print 2's table

// let i = 1;
// let x = 2;
// do {
//     console.log(i * x);
//     i++;
// } while (i <= 10);

// Question.31 Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times

// let i = 1;
// let ask = Number(prompt('How many times do you want to print Hello World?'));
//   do {
//       console.log(i + " " + "hello world");
//       i++;
//  } while (ask >=i );

// Question.32 Calculate sum of all even numbers from 1 to 100

// let i = 1;
// let sum = 0;
// do {
//     if (i % 2 === 0) {
//         sum = sum + i;
//     }
//     i++;
// } while (i <=  100);
// console.log(sum);