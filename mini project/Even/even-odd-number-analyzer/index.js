// let number = +(prompt("enter a number"));

// function checkEvenOdd(num){
//     if( num % 2 === 0 ){
//         console.log("its even");

//     }else {
//         console.log("its odd ");

//     }
// }
// checkEvenOdd(number)

// function checkPositiveNegative(num){
//     if (num> 0){
// console.log("its Positive number");

//     }else if  (num < 0) {
//         console.log("its negative number");

//     } else {
//         console.log("zero");

//     }
// }
// checkPositiveNegative(number)

// =====================================

// let number = +(prompt("Enter your table number"))
// function printTable(num){
// for(let i = 1 ; i <= 10 ; i++){
// console.log(num  + "x" + i + "=" + num * i );
// }
// }
// printTable(number)

// ========================================

// let num = +(prompt("enter number"))
// function adder(num){
// let sum =0;
// for(let i = 1; i<=num; i++ ){
// sum = sum + i;
// }
// return sum
// }
// console.log(adder(num));

// ====================================

// let num = +(prompt("enter number"))

// function countNumbers(num){
// for (let i=1; i<=num ; i++){
// console.log(i);

// }
// }
// countNumbers(num)
// ============================

// let num = +(prompt("enter number"))
// function printEvenNumbers(num){
// for(let i=1 ; i<=num ; i++){
// if( i % 2 === 0){
// console.log(i);

// }

// }
// }
// printEvenNumbers(num)
// ==================================


// let num = +(prompt("enter number"))
// function printOddNumbers(num){
// for(let i=1 ; i<=num ; i++){
// if( i % 2 !== 0){
// console.log(i);
// }

// }
// }
// printOddNumbers(num)
// ==============================


// let num = +(prompt("enter number"))
// function factorial(num){
// let mul = 1;
// for(let i = 1; i<=num; i++ ){
// mul = mul * i;
// }
// return mul
// }
// console.log(factorial(num));

// ==========================

// let num = + (prompt("enter number"))
// function checkPrime(num) {
//     let isPrime = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;

//         }
//     }
//     if (isPrime === true) {
//         console.log("Prime Number");
//     } else {
//         console.log("Not Prime");
//     }
// }
// checkPrime(num)

// =============================


// let num = +(prompt("enter number"));

// function countDigits(num){
// let count  = 0;
// while(num>0){
// num = Math.floor(num / 10);
// count++
// }
// return count;
// }
// console.log(countDigits(num))

// ==============================


    let num = +(prompt("enter number"));

    function reverseNumber(num) {
        let reverse = 0;
    while (num > 0) {
    let digit = num % 10
    reverse = reverse * 10 + digit
   num = Math.floor(num/10)  
    }
    return reverse
    }
    console.log(reverseNumber(num));