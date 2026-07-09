// Data Types
// data ka type

// Primitives---> aisi sari value jinko copy krna pr tumhe ek real copy mil jai.
// String, number, boolean, null, undefined, symbol, bigint


// Reference---> inko copy krna pr real copy nahi mila gi but apko reference mila ga parent ka
// arrays, object, functions
// [],{},()
// ================

// String, number, boolean, null, undefined, symbol, bigint
// arrays, object, functions

// String
// '' - single quotes
// "" - double quotes
// `` - backickes

// Number
// 12 number
// 13.4 number

// Boolean
//   ture and false
// let a = true;
// let b = false;

// Null
// null ka matlab hai apna jan pooj kr koi value nahi di
// let a = null
// let b = null

// undefined
// undefined ka matlab hai apna ek variable banaya or usay value nahi di to jo value by defualt mila gi wo undefined hogi
// let a;


// Symbol --> uniqye immutable value

// future ma hum koi libraries use kare ga ab is case ma un libraries main kai bar kuch feild hoti hai jinse similer hum bhi bana deta hai  or galti se hamari banai hoi feild us libraries ki original feild ko change kr deta hai.

// 1. Strings ko hamesha quotes (" ") mein likhein
// let employ = {
//     name: "konain", 
//     age: 19,
//     id: 12
// };

// let idSymbol = Symbol("1d2");  confusion na ho

// // 3. Object mein Symbol ko add kiya
// employ[idSymbol] = "90";

// console.log(employ);

// bigint
// JavaScript mein jo aam Number type hoti hai, uski ek hadd (limit) hoti hai. Agar aap us limit se bada number likhenge, to JavaScript pagal ho jata hai aur sahi calculation nahi kar pata. Usi limit ko khatam karne ke liye BigInt ka istemal hota hai.


// let badaNumber = 9007199254740991;

// console.log(badaNumber + 1); // Output: 9007199254740992 (Sahi hai)
// console.log(badaNumber + 2); // O
// utput: 9007199254740992 (❌ Galt! Answer 993 hona chahiye tha)

// BigInt banane ke do aasan tariqe hain:

// let badaNumber = 9007199254740991n;
// console.log(badaNumber + 5n); 
// Output: 9007199254740996n



