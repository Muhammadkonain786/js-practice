// 1. var (Sab kuch khula chhoot hai)
// ===================

// var a;          // ✅ Declaration
// a = 10;         // ✅ Initialization
// a = 20;         // ✅ Re-assignment (Allowed)
// var a = 30;     // ✅ Re-declaration (Allowed - koi error nahi aayega)

// 2. let (Ahtiyaat ke saath)
// ===================
// let b;          // ✅ Declaration
// b = 10;         // ✅ Initialization
// b = 20;         // ✅ Re-assignment (Allowed)

// // let b = 30;  // ❌ Re-declaration (Error: 'b' has already been declared)

// 3. const (Ziddi / Fixed)
// ==================
// const c;     // ❌ Error: Missing initializer (Banaate waqt value na di to error)

// const c = 100;  // ✅ Declaration + Initialization (Ek saath zaroori hai)

// c = 200;     // ❌ Re-assignment (Error: Assignment to constant variable)
// const c = 300; // ❌ Re-declaration (Error: 'c' has already been declared)



// Hosting

// ================

// var ke saath Hoisting:
// var jab top par hoist hota hai, to JavaScript usko shuru mein hi undefined value de deta hai.

// console.log(a); // Output: undefined (Error nahi aayega!)
// var a = 10;

// JavaScript is code ko andar se aise dekhta hai:
// var a;           <- Hoist ho kar top par chala gaya (Value default: undefined)
// console.log(a);  <- Print hua undefined
// a = 10;          <- Value baad mein assign hui


// 2. TDZ - Temporal Dead Zone (Khatre Ka Ilaka)
// =======================
// let aur const bhi hoist hote hain, lekin JavaScript unhein pehle se undefined ki value nahi deta.

// Scope ke shuru hone se le kar, jab tak code mein let ya const ki line execute nahi ho jati, us beech ke time period ko Temporal Dead Zone (TDZ) kehte hain. Is zone ke dauran agar aapne variable ko access karne ki koshish ki, to JavaScript ReferenceError de dega.

// { // <-- Scope Shuru hua (TDZ Start)
  
//   // console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization
//   // console.log(y); // ❌ ReferenceError

//   let x = 20; // <-- TDZ End (Yahan x initialize ho gaya)
//   const y = 30;

//   console.log(x); // ✅ 20 (Ab TDZ khatam ho chuka hai)
// }