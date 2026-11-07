// Array

// let array = [10,20,30,40,50]  this is array
// let array = new Array [1,2,3,4 ,5] this is also array

// ===================

// Array methods 
// ================

// push : Array ma last ma add krta ha

// pop : Array ka last ma remove krta ha

// shift : Array ka start se value remove krta ha


// unshift : Array ka start ma add krta ha

// Splice : Array ka bich se value remove krni ha ( isma first value ai gi index number kaha se hatani ha and 2nd value ma kaha tak hatani ha)  eg ; arr.splice ( 2,3)

// slice : Array ka value remove krta ha or ek new array return krta ha old array ma changes nahi krta    ( eg : arr.slice(0,4)  iska matlab he ye 0 index se ka kr 3 index tak ek new array return kr deta )

// reverse : Array ki value reverse kr dega means nicha ki value upper kr dega or upper ki value nicha kr dega

// sort : accending and deccending ma kam ata ha isma ek function use hota ha a-b ka matlab ha accending or b-a ka matlab ha deccending eg:
// Array.sort(function(a,b){
//     return a-b
// })

// =============================================================

// Iteration Methods

// ===================

// Foreach()

// JavaScript mein forEach() array ke har element par ek function execute karta hai.

// Yani agar array mein 5 values hain, toh forEach() har value par ek baar chalega.

// let fruits = ["Apple", "Mango", "Banana"];

// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });


// ===================

// Map()

// JavaScript mein map() array ke har element par operation perform karta hai aur ek naya array return karta hai.

// Yani forEach() ki tarah har element par chalta hai, lekin map() result ka naya array bana deta hai.
// Example:

// let numbers = [10, 20, 30, 40];

// let result = numbers.map(function(num) {
//     return num * 2;
// });

// console.log(result);

// output

// [20, 40, 60, 80]

// ===================


                                        // Differentiate

// forEach()                                                     map()
// Har element par chalta hai	                          Har element par chalta hai
// Naya array return nahi karta	                          Naya array return karta hai
// Mostly actions perform karne ke liye	                  Naya array banane ke liye


// =================

// Filter

// JavaScript mein filter() array mein se sirf woh elements select karta hai jo hamari condition ko true karte hain.

// Yani condition match karne wale elements ka naya array return karta hai.

// Example 1: Even Numbers Filter Karna

// let numbers = [1, 2, 3, 4, 5, 6];

// let result = numbers.filter(function(num) {
//     return num % 2 === 0;
// });

// console.log(result);

// Output:

// [2, 4, 6]
// ==================

// JavaScript mein reduce() array ke tamam elements ko combine karke ek single value mein convert karta hai.

// Iska mostly use array ka sum, total, average ya koi combined result calculate karne ke liye hota hai.
// Example: Array ka Total Nikalna

// let numbers = [10, 20, 30, 40];

// let result = numbers.reduce(function(total, num) {
//     return total + num;
// }, 0);

// console.log(result);

// Output:

// 100

// ==================

// Find

// JavaScript mein find() array mein se pehla element return karta hai jo hamari condition ko true karta hai.

// Yani condition match hone wala sirf pehla element milta hai, uske baad searching stop ho jati hai.

// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.find(function(num) {
//     return num > 20;
// });

// console.log(result);

// Output: 30

// ===================

// Some

// JavaScript mein some() check karta hai ke array mein kam az kam ek element hamari condition ko true karta hai ya nahi.

// Ye hamesha true ya false return karta hai.

// JavaScript mein some() check karta hai ke array mein kam az kam ek element hamari condition ko true karta hai ya nahi.

// Ye hamesha true ya false return karta hai.

// Example:

// let numbers = [10, 20, 30, 40];

// let result = numbers.some(function(num) {
//     return num > 25;
// });

// console.log(result);

// Output: true

// ===============

// Every

// JavaScript mein every() check karta hai ke array ke saare elements hamari condition ko true karte hain ya nahi.

// Ye hamesha true ya false return karta hai.

// Example:

// let numbers = [10, 20, 30, 40];

// let result = numbers.every(function(num) {
//     return num > 5;
// });

// console.log(result);

// Output: true