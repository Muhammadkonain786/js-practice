// Dynamic typing --> js ma static typing nahi hai and yaha pr hai dynamic typring jis ka matlab hai ap data ko change kr sakte ho kionka yaha pr dynamic data types hai


// typeof quirks (eg typeof null ==='object')
// hama jis bhi data type ki type maloom karna hogi tu typeof likh kr uski value aga likh do wo uski type bata dega (ke ye String, number,boolean etc kia hai)

// Type coercion (== vs ===) ---> jisma apka ek type authomalicaly convert jo jay ga.
// Plus Operator (+) aur String: Agar aap kisi number ko string ke sath + karenge, to JS number ko bhi string bana dega aur dono ko jod (concatenate kar) dega.
// let result = 5 + "5"; 
// console.log(result); // Output: "55" (Yeh ek string ban gayi)

// Baqi Operators (-, *, /): Agar aap plus ke ilawa koi aur math operator use karenge, to JS string ko number ma convert karne ki koshish karega.
// let result = "10" - 2;
// console.log(result); // Output: 8 (JS ne "10" ko number 10 bana diya)
// ===========================================
// Truthy vs falsy values
// Boolean Coercion (If statements ma): Jab aap if condition ma koi value dalte hain, to JS use automatically true ya false ma convert karta hai (jise truthy aur falsy values kehte hain).
// if ("hello") {
    // console.log("Yeh chalega!"); // Kyun ke khali string ke ilawa baqi strings 'truthy' hoti hain
// }

