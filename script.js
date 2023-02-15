// 1 Print 1 to 100

// for (let index = 1; index <= 100; index++) {
//   console.log(index);
// }



//  2 Print all Odd numbers from 1 to 100
// for (let a = 1; a <=100; a++) {
//   if (a % 2 != 0) {
//     console.log(a);
//   }
  
// }


// 3 Print all Even numbers from 1 to 100

// for (let b = 1; b <=100; b++) {
//   if (b % 2 === 0) {
//     console.log(b);
//   }
  
// }


// 4 Print all numbers which are multiple of 5 in 1 to 100

// for (let c = 1; c <=100; c++) {
//   if (c % 5 === 0) {
//     console.log(c);
//   }
  
// }


// 5 Print all numbers which are multiple of 5 and 15 in 1 to 100

// for (let d = 1; d <=100; d++) {
//   if (d % 5 === 0) {
//     console.log(d);
//   }
  
// }


// 6 Print 2's table

// let x = 2;
// for (let i = 1; i <= 10; i++) {
//   console.log(i * x);
// }

// 7.Ask user a question "How manx times do xou want to print Hello World?" and then print Hello World that number of times

// let count = Number(prompt("How many times do you want to print Hello World"));
// for (let i = 1; i <= count; i++) {
//   console.log(i+ " Hello World");
// }

// 8.Calculate sum of all numbers from 1 to 100

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log("The sum of all numbers:", sum);



// 9.Calculate sum of all odd numbers from 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log("The sum of all odd numbers:", sum);


// 10 .Calculate sum of all even numbers from 1 to 100

// let even = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     even  += i;
//   }
// }
//     console.log(even);


// 11.print 1,2,4,8,16,32,64.......upto 2048

// for (let j = 1; j <= 2048; j = j *= 2) {
//   console.log(j);
// }


// 12 .print
// 1,2,3,4,5,6,7,8,9,10
// 11,12,13,14,15,16,17,18,19,20
// .
// .
// ......................99,100

// for (let i = 1; i <=  100; i++) {
//   document.write(i);
//   if (i % 10 === 0) {
//     document.write("<br>");
    
//   }  
// }

// 13 pritn 1 to 100, but with a specific condition. If a number is divisible by both 3 and 5, it logs "fizzbuzz" to the console instead of the number itself.

// for (let k = 1; k <= 100; k++) {
//  if (k % 3 === 0 && k % 5 === 0) {
//   console.log(k+'fizzbuzz');
//  }
// }

// 14 . print 10 table like this

// let x = 2;
// for (i = 1; i <= 10; i = i + 1) {
//   console.log(x + "*" + i + "=" + x * i);
// }


// 15 . Run a loop from 1 to 50

// From 1 to 10 print "A"
// From 11 to 20 print "B"
// From 21 to 30 print "C"
// From 31 to 40 print "D"
// From 41 to 50 print "E"

// for (let m = 1; m <= 50; m++) {
//   if (m <= 10) {
//     console.log(m + " A"); 
//   }
//   else if(m <= 20){
//     console.log(m + " B"); 
//   }
//   else if(m <= 30){
//     console.log(m + " C"); 

//   }
//   else if(m <= 40){
//     console.log(m + " D");     
//   }
//   else if(m <= 50){
//     console.log(m + " E"); 
    
//   }

// }

// 16 Run a loop from 50 to 1
// From 50 to 41 print "A"
// From 40 to 31 print "B"
// From 30 to 21 print "C"
// From 20 to 11 print "D"
// From 10 to 1 print "E"

// for (let a = 50; a >=1; a--) {
//   if (a >= 41) {
//     console.log(a + " A");
//   }
//   else if(a >= 31){
//     console.log(a + " B");
//   }
//   else if(a >= 21){
//     console.log(a + " C");
//   }
//   else if(a >= 11){
//     console.log(a + " D");
//   }
//   else if(a >= 1){
//     console.log(a + " E");
//   }
  
// }


// 17  Print below series
// 5 25 125.. till number is less than equal to 10000

// for (let i = 1; i <= 10000; i = i*= 5) {
//   console.log(i);
// }


// 18.Print below series 3,6,9,12... till number is less than equal to 500
// for (let i = 3; i <= 500; i = i + 3) {
//   console.log(i);
//  }

// 19 print below series

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


// for (let a = 1, j = 20; a <= 10; a++, j++) {
//     console.log(a +""+ j);
// }
// 20 print below series 100 95 90 85 80 ... till 0
// for (let i = 100; i >= 0; i = i - 5) {
//   console.log(i);
// }

// 21 Number 70 is divisible by which numbers till 70? Find out and print those numbers

// for (let i = 1;  i<= 70; i++) {
//     if (70 % i ===0) {
//       console.log(i);
      
//     }
// }

// while loop Exercise/////////////////////////////////////

// 1 Write a while loop that logs the numbers 1 to 10 in the console.
  
    // let w = 1;
    // while(w <=10){
    //    console.log(w);
    //    w++;
    // }

    // 2 .Calculate sum of all numbers from 1 to 10
    
    // let y = 0;
    // let x = 1
    // while(x <=10){
    //   y = y + x;
    //    console.log(y);
    //    x++;
    // }

    // 3 .Counting down from 10 to 1

    // let x = 10
    // while(x >=1){
    //    console.log(x);
    //    x--;
    // }


     // 4 Print 2's table
    //  let x = 1
    // while(x <=10){
    //    console.log(2 + "*" + x + "=" + x * 2 );
    //    x++;
    // }

    // 5 Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times

  // let prom = Number(prompt("How many times do you want to print Hello World?"));
  // let a = 1;
  // while (a <= prom) {
  //   console.log("hello world");
  //   a++;
  // }

// 6 Calculate sum of all even numbers from 1 to 100
// let sum = 0;
// let b = 1;
// while(b <= 100){
//   if (b % 2 === 0) {
//     sum =   sum+ b;
//     console.log(sum);
//   }
//   b++;
// }

// *
// **
// ***
// ****
// *****
// for (let  i= 1;  i<=5; i++) {
//   let ans = "";
//  for (let a = 1; a <=i;  a++) {
//   ans = ans + "*";
//  }
//  console.log(ans);
  
// }


// // *****
// // ****
// // ***
// // **
// // *
// for (let  i= 5;  i>=1; i--) {
//   let ans = "";
//  for (let a = 1; a <=i;  a++) {
//   ans = ans + "*";
//  }
//  console.log(ans);
  
// }

// 12345
// 1234
// 123
// 12
// 1
// for (let  i= 5;  i>=1; i--) {
//   let ans = "";
//  for (let a = 1; a <=i;  a++) {
//   ans = ans + a;
//  }
//  console.log(ans);
  
// }

// 54321
// 4321
// 321
// 21
// 1
// let b =5;
// for (let  i= 1;  i<=5; i++) {
//   let ans = "";
//  for (let a = b; a >=i;  a--) {
//   ans = ans + a;
//  }
//  b--;
//  console.log(ans);
  
// }

// 54321
// 4321
// 321
// 21
// 1
// for (let  i= 4;  i>=4; i++) {
//   let ans = "";
//  for (let a = 1; a <=i;  a++) {
//   ans = ans + "$";
//  }
//  console.log(ans);
  
// }

// let num = 1;
// switch (num) {
//   case 1:
//     console.log("Monday");
//     break;
//     case 2:
//       console.log("Tuesday");
//       break;
//       case 3:
//         console.log("Wednesday");
//         break;
//         case 4:
//           console.log("Thursday");
//           break;
//           case 5:
//             console.log("Friday");
//             break;
//             case 6:
//             console.log("saturday");
//             break;
//             case 7:
//             console.log("sunday");
//             break;
//             default:
//               console.log('sdfsdf');
    
// }


// let fruit = 'apple';
// switch(fruit) {
//     case 'apti':
//     case 'reesning':
//     case 'quant':
//     case 'tringogo':
//         console.log("mathematic");
//         break;
//         case 'kavita':
//           console.log("hindi");
//           break;
//     default:
//         console.log("scince");
//         break;
// }

// for (let  i= 1;  i<=100; i++) {
// if (i >=20 && i <=70) {
//   continue;
// }
// if (i >=85) {
//   break;
// }
//  console.log(i);
  
// }

// let sum = "feb";
// switch (sum) {
//   case "january":
//   case "march":
//   case "may":
//   case "jul":
//   case "august":
//   case "octomber":
//   case "december":
//     console.log("31");
//     break;
//   case "april":
//   case "jun":
//   case "septamber":
//   case "novmber":
//     console.log("30");
//     break;
//   case "feb":
//     console.log("28");
//     default:
//       console.log("-1");
// }


// let a = prompt("what is your name");
// let b = Number(prompt("what is birth  year"));
// let c = Number(prompt("do you how many  sister and borther"));
// let e = Number(prompt("hindi"));
// let f = Number(prompt("english"));
// let g = Number(prompt("math"));

// console.log(`my name  is ${a} i was born in ${b} my current date ${2023 -b} i have ${c} borther and sister ${e+f+g} total mark `);
