// Functions

// Function abcd(){
//     Function declaration/statment
// }

// let abcd= function(){
//     Function expression
// }

// Fat arrow Function  /  Fat means Gool paat like this ()

// let abcd= ()=>{

// }

// =========================

// Parameter / Argument

// 1. Parameter (Definition ke waqt)
// Jab aap koi function banate (define karte) hain, tab brackets ke andar jo variables likhte hain, unhe parameter kehte hain.

// Yeh aik placeholder (khali jagah) ki tarah hote hain jo batate hain ke function ko kis cheez ki zaroorat hai.

// 2. Argument (Call karte waqt)
// Jab aap function ko istamal (call) karte hain, tab jo asli value ya data aap usay dete hain, use argument kehte hain.


// 1. Function banate waqt (Function Definition)
// function greetUser(name) {
// Yahan 'name' aik PARAMETER hai (aik khali jagah / placeholder)
//   console.log("Hello, " + name + "!");
// }

// 2. Function chalate waqt (Function Call)
// greetUser("Ahmed"); 
// Yahan "Ahmed" aik ARGUMENT hai (asli value jo hum ne pass ki)

// Default , rest and spread parameter

// Agar function call karte waqt user koi argument dena bhool jaye ya value na de, to JavaScript automatically wo default value use kar leta hai!

// Yahan hum ne 'name' parameter ko default value "Guest" de di hai
// function greetUser(name = "Guest") {
//   console.log("Hello, " + name + "!");
// }

// 1. Jab hum argument dein:
// greetUser("Ali"); 
// Output: Hello, Ali! (Kyunke hum ne "Ali" argument diya)

// 2. Jab hum koi argument NA dein:
// greetUser(); 
// Output: Hello, Guest! (Kyunke default value use ho gayi)

// Rest/ Spread

// jab argument kai sare ho tu hamain utne hi parameter banane padega, is se bachne ka lia hum rest ka use krte ha ... agar ... function ka parameter space ma lage tu wo rest operator ha and agar wo array and object ma lage tu wo spread operator ha

// ...dost aik rest operator hai jo saare naam aik array me rakh lega
// function inviteFriends(...dost) {
//   console.log("Yeh hain mere dost:", dost);
// }

// inviteFriends("Ali", "Ahmed", "Sara");
// Output: Yeh hain mere dost: [ 'Ali', 'Ahmed', 'Sara' ]


// First class Function --> functions ko values ki tarha treat kr sakte hai 

// Callback function

// practice availbale on chatgpt ( https://chatgpt.com/c/6acf12bc-f110-83e8-b418-0efd96c5d030)

// function greet(name, formatter) {
//   return formatter(name);
// }

// function uppercaseName(str) {
//   return str.toUpperCase();
// }

// console.log(greet("ali", uppercaseName));

// Higher-Order Function

// JavaScript mein Higher-Order Function aisa function hota hai jo:
// 1. Kisi doosre function ko argument ke taur par leta hai, ya
// 2. Kisi doosre function ko return karta hai.

// Asaan alfaaz mein: Jo function kisi function ke saath kaam kare, woh Higher-Order Function ho sakta hai.


// function greet(name) {
//     return "Hello " + name;
// }

// function processUser(callback) {
//     return callback("Konain");
// }

// console.log(processUser(greet));

// Pure vs impure function
// ===============

// asa function jo bahar ki value ko na badle wo ha pure function

// asa function jo bahark i value ko badal de wo ha impure function

let a = 12;

// function abc (){
//   console.log(hyhyhy);            this is pure function

// }

// function abc(){
//   a++;                             this is impure function
// }




// Closures    
// ================
// ek function jo return kare ek or function or return hone wala function hamesha use kare ga parent function ka koi variable.

// function abcd(){
//   let a = 12;
//   return function(){
//     console.log(a);
//   }
// }


// Lexical Scoping
// ==============

// JavaScript mein function apne variables ko uski location ke hisaab se access karta hai. Agar variable current function mein na mile, to JavaScript uske parent scope mein search karta hai.

// function outer() {
//     let city = "Karachi";

//     function inner() {
//         console.log(city);
//     }

//     inner();
// }

// outer(); // Karachi



// function greet() {
//   console.log("Assalamualaikum!");
// }

// function run(callback) {
//     callback();
// }

// run(greet);


// function calculate(num) {
//     console.log(num * 2);
// }

// function process(callback){
// callback(5);
// }

// process(calculate)


// function outer() {
//     return function() {
//         console.log("Hello Konain!");
//     };
// }

// let run= outer();
// run()


// function greet() {
//     console.log("Hello");
// }

// function start(callback) {
//     return function() {
//         console.log("Start");
//         callback();
//     };
// }

// let run = start(greet);
// run()


// function calculate(num) {
//     console.log(num + 5);
// }

// function operation(callback) {
//     return function() {
//         console.log("Result:");
//         callback(10);
//     };
// }


// let result = operation(calculate);
// result();


// function double(num){
// console.log(num * 2);

// }

// function process(num,callback){
//   callback(num);
// }

//  process(7,double);


// function triple (num){
// console.log(num * 3)
// }

// function execute (num, callback){
// callback(num);
// }

// execute(4,triple);


// function square (num){
// console.log(num * num)
// }

// function calculate (num, callback){
// callback(num);
// }

// calculate(5,square);



// function checkNumber (num){
//  if(num%2 ===0){
// console.log("even");

//  }else{
//   console.log("odd");
//  }
// }

// function execute(num,callback){
// callback(num);
// }

// execute(7, checkNumber);


// function showNumber(num){
// console.log(num);

// }

// function processArray(array,callback){
//  for(let i=0 ; i<=2 ; i++){
// callback(array[i]);
//  }
// }

// processArray([2, 4, 6], showNumber)


// 1. First-Class Functions kya hain?
// JavaScript mein functions ko normal values ki tarah use kar sakte hain. Yani function ko:
// - Kisi variable mein store kar sakte hain.

// function greet() {
//   console.log("Hello Konain!");
// }

// let myFunction = greet;

// myFunction();

// - Kisi doosre function ko argument ke taur par de sakte hain.

// function greet() {
//   console.log("Assalamualaikum!");
// }

// function runFunction(callback) {
//   callback();
// }

// runFunction(greet);

// - Kisi function se return kar sakte hain.

// function getFunction() {
//   return function() {
//     console.log("JavaScript is easy!");
//   };
// }

// let result = getFunction();

// result();

// In capabilities ko First-Class Functions kehte hain.

// ==========================


// Question 1/5 — Function ko variable mein store karna
// Topic: First-Class Functions — Use 1

// Task:
// 1. welcome naam ka function banayein jo "Welcome to JavaScript!" print kare.
// 2. Is function ko myFunc naam ke variable mein store karein.
// 3. myFunc ke through function execute karein.

// function welcome(){
// console.log("Welcome to JavaScript!");

// }

// let myFunc = welcome;
// myFunc();


// ========================

// Question 2/5 — Function ko argument mein pass karna
// Topic: First-Class Functions — Use 2

// Task:
// 1. sayHello naam ka function banayein jo "Hello!" print kare.
// 2. runFunction naam ka doosra function banayein jo ek function ko argument mein receive kare.
// 3. runFunction ke andar received function ko execute karein.
// 4. runFunction(sayHello) call karein.


// function sayHello (){
//   console.log("Hello!");

// }

// function runFunction (callback){
// callback();
// }

// runFunction(sayHello);


// =====================


// Question 3/5 — Function se doosra function return karna
// Topic: First-Class Functions — Use 3

// Task:
// 1. outer naam ka function banayein.
// 2. outer ke andar ek function return karein jo "I am returned!" print kare.
// 3. outer() se milne wale function ko result variable mein store karein.
// 4. result() call karein.

// function outer(){
//   return function  (){
//     console.log("I am returned!");

//   }
// }

// let result = outer();
//  result();


// ==========================

// Question 4/5 — HOF: Function ko argument mein receive karna
// Ab HOF par focus karte hain.

// Task:
// 1. multiply function banayein jo ek number receive kare aur usay 3 se multiply karke print kare.
// 2. calculate naam ka HOF banayein jo number aur callback function receive kare.
// 3. calculate ke andar callback ko number ke saath call karein.
// 4. calculate(4, multiply) call karein.


// function multiply (num){
// console.log(num * 3);

// }

// function calculate(num, callback){
// callback(num);
// }

// calculate(4, multiply);

// ======================

// Question 5/5 — HOF: Function return karna
// Ye aakhri question hai. Ismein HOF ka doosra tareeqa practice karenge.

// Task:
// 1. createMessage naam ka function banayein.
// 2. Iske andar ek function return karein jo "Practice makes perfect!" print kare.
// 3. createMessage() se milne wale returned function ko message variable mein store karein.
// 4. message() call karein.

// function createMessage(){
//   return function(){
//     console.log("Practice makes perfect!");

//   }
// }
// let message = createMessage();
// message();

// ===============================================================


// Practice Question 1 — Bina notes dekhe
// Level 1 · First-Class Functions
// Task: Apko 3 kaam karne hain:
// 1. welcome naam ka function banayein jo "I am learning JavaScript" print kare.
// 2. Us function ko myFunc naam ke variable mein store karein.
// 3. myFunc ke zariye function execute karein.


// function welcome (){
//   console.log("I am learning JavaScript");

// }
// let myFunc = welcome;
// myFunc();
// ============

// Practice Question 2 — Thora sa challenge 🧠
// Ab function ko variable mein store nahi karna. Is baar ek function ko doosre function mein argument ke taur par pass karna hai.

// Task:
// 1. sayHello naam ka function banayein jo "Hello Student!" print kare.
// 2. runFunction naam ka function banayein jo callback parameter le.
// 3. runFunction ke andar callback ko execute karein.
// 4. Aakhir mein runFunction ko sayHello pass karein.

// function sayHello (){
//   console.log("Hello Student!");

// }

// function runFunction (callback){
// callback();
// }

// runFunction(sayHello);

// =============


// Practice Question 3 — Function return karna 🧠
// Ab dekhte hain ke apko teesra use yaad hai ya nahi.

// Task: Ek outer function banayein jo apne andar inner function return kare. inner function ye message print kare:
// I will never forget JavaScript!


// Phir returned function ko variable result mein store karke execute karein.

// Hint: Pehle outer() ko call karein, phir result() ko.


// function outer (){
// return function inner(){
//   console.log("I will never forget JavaScript!");

// }
// }

// let result = outer();
// result();

// ==============


// Practice Question 4 — Ab mix karte hain 🧠
// Is baar ek function doosre function ko receive bhi karega aur us callback ko number bhi dega.

// Task:
// - doubleNumber function banayein jo num receive karke uska double print kare.
// - calculate function banayein jo num aur callback receive kare.
// - calculate ke andar callback ko num ke saath call karein.
// - calculate(7, doubleNumber) run karein.


// function doubleNumber (num){
// console.log(num * 2);

// }

// function calculate (num, callback){
//   callback(num);
// }
// calculate(7, doubleNumber);

// ===============

// Practice Question 5 — Thora tricky 🧠
// Ab dekhte hain ke ap HOF jo function return karta hai usko kitna yaad rakhte hain.

// Task: Aisa createMultiplier function banayein jo factor receive kare aur ek naya function return kare. Returned function num receive karke num * factor print kare.


// function createMultiplier (factor){
//   return function(num){
//     console.log(num*factor);

//   }
// }

// let triple = createMultiplier(3);
// triple(5);


// ===============

// Practice Question 6 — Bina hint ke 🧠
// Ab apko khud identify karna hai ke First-Class Function aur HOF kahan use ho rahe hain.

// Task: Neeche diye gaye code ko complete karein:
// - square function number ka square print kare.
// - execute function num aur callback receive kare.
// - execute ke andar callback ko number ke saath call kare.
// - Aakhir mein execute(6, square) chalayein.

// function square(num) {
//   console.log(num * num);

// }

// function execute (num,callback){
// callback(num);
// }
// execute(6, square);
// // ===================
// Practice Question 7 — Ab logic khud lagayein 🧠
// Is baar function ka naam aur output apko khud manage karna hai.

// Task:
// 1. checkNumber function banayein jo number receive kare.
// 2. Agar number even ho to "Even" print kare, warna "Odd" print kare.
// 3. processNumber naam ka HOF banayein jo num aur callback receive kare.
// 4. processNumber ke andar callback ko number ke saath call karein.
// 5. processNumber(9, checkNumber) run karein.


// function checkNumber(number){
//   if(number %2 === 0){
//     console.log("even");

//   }else{
//     console.log("odd");

//   }
// }
// function processNumber(number, callback){
// callback(number);
// }

// processNumber(9, checkNumber)



// function doubleNumber(num){
//   console.log(num * 2);

// }

// function processArray(array, callback){
//   for(let i = 0 ; i< array.length; i++){
// callback(array[i])
//   }
// }

// processArray([2,4,6],doubleNumber)



// function addFive(num){
//   console.log(num  + 5);

// }

// function processArray(array, callback){
//   for(let i = 0 ; i< array.length; i++){
// callback(array[i])
//   }
// }

// processArray([10,20,30],addFive)


// =============

// Practice Question 10 — Ab thora mix karte hain 🧠
// Is baar ek function doosra function return karega.

// Task: createGreeter naam ka function banayein jo ek name receive kare aur ek naya function return kare. Returned function ye message print kare:

// Hello, Konain!

// Phir returned function ko greet variable mein store karke execute karein.

// function createGreeter(name){
// return function(){
//   console.log("Hello"   +  name);
// }
// }

// let greet= createGreeter("saif");
// greet();

// ===========

// Practice Question 11 — Ab multiplier wala question
// Ab apko createMultiplier banana hai.

// Task:
// 1. createMultiplier(factor) function banayein.
// 2. Ye ek naya function return kare jo num receive kare aur num * factor print kare.
// 3. Neeche wali lines run karein:

// function createMultiplier(factor) {
//   return function (num) {
//     console.log(num * factor);
//   }
// }
// let double = createMultiplier(2);
// double(8);

// HOF woh function hota hai jo:
// 1. Kisi doosre function ko argument ke taur par receive kare.

// function greet() {
//   console.log("Hello Konain!");
// }

// function execute(callback) {
//   callback();
// }

// execute(greet);

// 2. Kisi doosre function ko return kare.


// function createGreeting() {
//   return function() {
//     console.log("Welcome!");
//   };
// }

// let greeting = createGreeting();

// greeting();



