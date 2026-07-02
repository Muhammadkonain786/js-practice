// Termporal dead zone

// utna area jitna ma js ko pata hai ke variabke exist krta hai pr wo apko valuse nahi de sakta
 
// line number 1 se le kr line number  12 tak variable "a" ka TDZ hai

// let or const ma hota hai but var ma nahi hota




// let a = 12;

// =============================================================

// Hoisting impact per type

// hoisting --> ek variable ko jab js ma banate hai to wo variable do hiso ma toot jata hai and uska declare part uper chale jata hai  and uska initialization part niche reh jata hai

// Jab aap var use karte hain, to JS sirf variable ka naam upar le jata hai, uski value (assignment) ko nahi. Is liye line se pehle use karne par undefined milta hai, error nahi aata.

// Variable ko pehle print kiya
// console.log(naam); // Output: undefined (Error nahi aayega!)

// var naam = "Ali"; 

// console.log(naam); // Output: Ali

// JS engine isse piche kuch is tarah dekhta hai:

// var naam;          // Declaration upar chali gayi (hoist ho gayi)
// console.log(naam); // Isliye yahan undefined aaya
// naam = "Ali";      // Value apni jagah par hi rahi

// let aur const bhi hoist hote hain, lekin JS unhein access karne nahi deta jab tak code unki line par na pohonch jaye. Is zone ko Temporal Dead Zone (TDZ) kehte hain. Agar aap pehle access karenge to ReferenceError aayega.

// console.log(umar); // Error: Cannot access 'umar' before initialization

// let umar = 25;



