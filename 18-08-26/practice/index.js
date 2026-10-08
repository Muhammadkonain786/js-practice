// 1-- print numbers from 1-10 using for loop.

// for(let i=1; i<11; i++){
// console.log(i)
// }

// 2-- print numbers from 10-1 using for whileloop.

// for(let i=10; i>0; i--){
// console.log(i)
// }
// ======
// let i = 10
// while(i>0){
//     console.log(i)
//     i--
// }

// 3-- print even number from 1 to 20 using a for loop

// for(let i=1; i<21; i++){
//  if(i%2 == 0){
// console.log(i)
//  }
// }

// 4-- print odd number from 1 to 15 using a for whileloop

// let i=1
// while(i<16){
//     if(i%2 ===1){
// console.log(i)
//     }
//     i++
// }

// 5-- Print the multipication table of 5 

// for(let i = 1; i<11; i++){
// console.log(`5 X ${i} = ${i*5}`)

// }
    

// 6-- Find the sum of number from 1-100 using loop

// let sum= 0
// for(let i=1; i<101; i++){
//     sum= sum + i;
// }
// console.log(sum)

// 7-- Print all number between 1 to 50  that are divisible by 3.

// for( let i=1; i<51 ;i++){
//     if(i%3 === 0){
//         console.log(i)
//     }
// }

// 8-- Ask the user for a number and print whether each number from 1 to that number is even or odd.

// let val = prompt("given number")

// for(let i=1; i<=val ; i++){

//     if(i%2 ===0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`)
//     }
// }

// 9-- Count how many numbers between 1 to 100 are divisible by both 3 and 5

// for(let i = 1; i<101 ; i++){
//  if(i%3 ===0 && i%5 === 0){
//     console.log(i)
//  }
// }

// Break Question

// 10-- Stop at First Multiple of 7 
// Write a loop from 1 to 100 that:
// 1- Prints each number 
// 2- Stops completely when it finds the first number divisible by 7

// for (let i = 1; i<101 ; i++){
//     if(i%7 ===0){
//         break;
//     }
//     console.log(i)
// }

// Continue Question

// 11-- Skip multiples of 3
// Write a loop from 1 to 20 that :
// 1- Skip number divisible by 3 
// 2- Print all others

// Use continue
// Expected output:
// 1 2 4 5 7 8 10 ......(no 3, 6, 9, etc)

// for(let i=1; i<20; i++){
//     if(i%3 ===0){
//         continue;
//     }
//     console.log(i)
// }

// 12-- Print First 5 odd number only 
// Write a loop from 1 to 100 that:
// 1- Print only 5 odd number
// 2- Then stop the loop

// Use Both if, continue, and a couter + break
// Expected output:
// 1 3 5 7 9

// let count = 0

//     for(let i=1; i<101; i++ ){
//         if(i%2 ===1){
//             count++;
//             console.log(i);
//         }
// if(count === 5)break;
//     }


// chatgpt practice question

// 1 se 50 tak sirf even numbers ka sum calculate karo.
// let sum = 0
// for(let i=1 ; i<=50; i++){
// if(i%2===0){
//     sum=sum+i
// }
// }

// 1 se 50 tak sirf odd numbers ka sum calculate karo.

// let sum = 0
// for(let i=1 ; i<=50; i++){
// if(i%2===1){
//     sum=sum+i
// }
// }

// 1 se 100 tak count karo ke 3 ke kitne multiples hain

// let count = 0;
// for (let i = 1; i<=100 ; i++){
//     if(i%3 === 0){
//         count=count +1
//     }
//     console.log(count)
// }

// Find the Largest Number

// let numbers = [12, 45, 7, 89, 23, 56];

// let largest = numbers[0];

// for (let i = 0; i < numbers.length; i++) {

//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }

// }

// console.log(largest);


// Reverse an Array

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
 
// for(let i =3 ; i>=0; i--){

//     console.log(fruits[i])

// }

    // let numbers = [-2, 5, -8, 10, 3, -1, 7];
    // var count = 0;

    // for(let i = 0; i < numbers.length; i++){
    //     if(numbers[i]>0){
    //         count++
    //     }
    // }
    // console.log(count)




    // for (let i = 1; i <= 5; i++) {

    // let stars = "";

    // for (let j = 1; j <= i; j++) {
    //     stars = stars + "*";
    // }

    // console.log(stars);
// }