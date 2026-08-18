// if else else if 
// switch case
// early return pattern
 
// early return parctice question
// =========================
// function calculateCart(cartTotal, isVIPMember) {
//   // 1. Guard Clause: Validation (0 ya negative bill)
//   if (cartTotal <= 0) {
//     return "Invalid cart amount";
//   }

//   // 2. VIP Member Check (Sab se pehle VIP ko handle kar liya)
//   if (isVIPMember) {
//     return "20% discount + FREE shipping";
//   }

//   // 3. Non-VIP: 100 ya us se zyada bill
//   if (cartTotal >= 100) {
//     return "10% discount + FREE shipping";
//   }

//   // 4. Non-VIP: 50 se 99 tak bill
//   // (Pehle hi >= 100 upar return ho chuka hai, toh yahan sirf >= 50 kafi hai)
//   if (cartTotal >= 50) {
//     return "Koi discount nahi + $10 shipping charge.";
//   }

//   // 5. Default Case: 50 se kam bill
//   return "Koi discount nahi + $20 shipping charge";
// }

// // Function Calls (Test cases):
// console.log(calculateCart(0, false));     // Output: Invalid cart amount
// console.log(calculateCart(40, true));     // Output: 20% discount + FREE shipping (VIP)
// console.log(calculateCart(120, false));   // Output: 10% discount + FREE shipping
// console.log(calculateCart(75, false));    // Output: Koi discount nahi + $10 shipping charge.
// console.log(calculateCart(30, false));    // Output: Koi discount nahi + $20 shipping charge


// switch case practice question
// ========================
// function getTrafficSignalAction(lightColor) {
//   switch (lightColor) {
//     case "red":
//       return "Stop immediately";
//     case "yellow":
//       return "Prepare to stop";
//     case "green":
//       return "Go ahead";
//     case "blinking_yellow":
//       return "Proceed with caution";
//     default:
//       return "Signal Malfunction: Call Traffic Control";
//   }
// }

// // Test cases:
// console.log(getTrafficSignalAction("red"));             // Output: Stop immediately
// console.log(getTrafficSignalAction("yellow"));          // Output: Prepare to stop
// console.log(getTrafficSignalAction("green"));           // Output: Go ahead
// console.log(getTrafficSignalAction("blinking_yellow")); // Output: Proceed with caution
// console.log(getTrafficSignalAction("blue"));            // Output: Signal Malfunction: Call Traffic Control
// if else practice 
// =======================
// function gym (age,membership){

//     if(age<18){
//         return "price : 20%"
//     }else if(age>=18 && age<=50){
//         if (membership==="vip") {
//             return 50;
//         } else {
//             return 30;
//         } 

//     }else{
//             return 25;
//         }
// }

// console.log(gym(26,"vip"))

//  switch case practice
// ========================
// function trafic(lightColor){
//     switch(lightColor){
//         case"red":
//         return "Stop immediately";
//         break;
//         case "yellow":
//             return "Prepare to stop";
//         break;
//         case"green":
//         return "Go ahead";
//         break;
//         case"blinking_yellow":
//         return "Proceed with caution";
//         break;
//         default:
//             "Signal Malfunction: Call Traffic Control"
//     }
// }

// console.log(trafic("yellow"))

// function score (number){
// if(number>0 || number<100){return "Error: Invalid Score!";}
// if (number >= 90) return "Grade A+ (Feedback: Excellent Performance!)";
//   if (number >= 80) return "Grade A (Feedback: Very Good!)";
//   if (number >= 70) return "Grade B (Feedback: Good effort!)";
//   if (number >= 60) return "Grade C (Feedback: Needs Improvement)";
// return "Grade F (Feedback: Failed. Try again!)";
// }

// console.log(score(90))

