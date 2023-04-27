
// let depositBalance = 0;
// let totalRecord = [];
// // let withdrawalRecord = [];

// function balance(){
//   document.getElementById('amount').innerHTML =`Rs:${depositBalance}`;
// }

// function deposit(){
//    let depositAmount =  Number(prompt('please enter deposit amount'));
//    depositBalance = depositBalance + depositAmount;
//    totalRecord.push(depositAmount);
//    // console.log(totalRecord);
//    balance();
// }

// function withdrawal() {
//    let withdrawalAmount = Number(prompt('please enter withrawal amount'));
//    if (depositBalance >= withdrawalAmount) {
//       depositBalance = depositBalance - withdrawalAmount;
//       totalRecord.push(-withdrawalAmount);
//       console.log(totalRecord);
//       balance();
//    }
//    else{
//       confirm("not a valid blance");
//    }
// }
// function statement() {
//   str ="";
//   for (let value of totalRecord) {
//     str = str + `${value < 0 ? "withdrawal" : "deposit"} : ${value < 0 ? (value * -1) : value } \n`;
//   }
//   document.getElementById('result').innerText = str;
// }
