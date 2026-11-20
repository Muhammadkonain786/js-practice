// let studentName = "Konain";

// let englishMarks = 80;
// let mathMarks = 90;
// let computerMarks = 85;

// let totalMarks = englishMarks + mathMarks + computerMarks;

// let percentage = totalMarks/300*100;

// let grade ;

// if (percentage>=80){
// grade="A+";
// }else if (percentage>=70) {
//     grade = "A";
// }else if (percentage>=60) {
//     grade= "B";
// }else if (percentage >= 50 ) {
//     grade="C"
// } else {
//     grade="Fail"
// }

// function showResult() {
//     console.log(studentName);
//     console.log(totalMarks);
//     console.log(grade);  
    
// }

// showResult();

// function showStudentResult(name, marks, studentGrade) {
// console.log(name);
// console.log(marks);
// console.log(studentGrade);
// }
// showStudentResult(studentName, totalMarks, grade)

// function calculatePercentage (callback){
//     return callback / 300 * 100
// }
// let  calculateResult = calculatePercentage;
// console.log(calculateResult(255));


// function calculate(marks, callback){
// return callback(marks)
// }
// function double (marks){
// return marks*2
// }
// console.log(calculate(10,double));

// functilet on calculate (num, callback){
// return callback(num)
// }
// function square(num){
// return num * num
// }

// console.log(calculate(5,square));

// let marks = [ 80, 90, 85]

// let result = marks.reduce((total,marks)=>{
// return total + marks
// },0)

// console.log(result);

// let arr = [ 45, 60, 75, 90];

// let result = arr.some((val)=>{
// return val >= 80
// })
// console.log(result);

// let arr = [ 65, 75, 85, 90];
// let result= arr.every((val)=>{
// return val >=50
// })
// console.log(result);

// let marks = [5, 45, 60, 75, 90, 35]
// let passedStudents = marks.filter((val)=>{
// return val >= 50
// })
// console.log(passedStudents);

// let students = [50, 60, 70, 80, 90];
// let updatedMarks = students.map((val)=>{
// return val + 5
// })

// console.log(updatedMarks);

// let marks = [30, 45, 60, 75, 90, 25];
// let marksfil=marks.filter((val)=>{
// return val >= 50
// })
// let finalMarks = marksfil.map((val)=>{
// return val + 10
// })
// console.log(finalMarks);

// let marks = [30, 50, 60, 80, 90, 40]

// let fil = marks.filter((val)=>{
// return val >=50
// })

// let passedTotal = fil.reduce((total,val)=>{
// return total + val
// },0)

// console.log(passedTotal);

// let marks = [35, 45, 55, 75, 90]
// let firstHighMark = marks.find((val)=>{
// return val >= 70 
// })
// console.log(firstHighMark);

// let marks = [35, 45, 55, 75, 90];
// let index = marks.findIndex((val)=>{
//     return val >=70
// })
// console.log(index);

// let marks = [80, 65, 90, 45, 75];
// marks.forEach((marks)=>{
// console.log(marks);

// })

// let marks = [80, 65, 90, 45, 75];
// marks.push(100)
// console.log(marks);

// let marks = [80, 65, 90, 45, 75];
// marks.pop()
// console.log(marks);

// let marks = [80, 65, 90, 45, 75];
// marks.shift()
// console.log(marks);

// let marks = [80, 65, 90, 45, 75];
// marks.unshift(50)
// console.log(marks);

// let marks = [80, 65, 90, 45, 75];
// marks.splice(1,2)
// console.log(marks);

    // let marks = [80, 65, 90, 45, 75];
    // marks.reverse()
    // console.log(marks);
    
//     let marks = [80, 65, 90, 45, 75];
// let result =marks.slice(1,4)
// console.log(result);

// let marks = [80, 65, 90, 45, 75];

// marks.sort((a,b)=>{
// return a-b
// })
// console.log(marks);


// let marks = [35, 45, 55, 75, 90];
// let index = marks.findIndex((val)=>{
//     return val >=70
// })
// console.log(index);

//  let students = ["Konain", "Ali", "Saif", "Ahmed"];
// let marks = [255, 210, 180, 135];

// for(let i = 0 ; i<students.length ; i++){
//     console.log(students[i]);
// let percentage = (marks[i] / 300) * 100;
// console.log("percentage :" + percentage);
// let grade;
// if (percentage>=80){
// grade="A+";
// }else if (percentage>=70) {
//     grade = "A";
// }else if (percentage>=60) {
//     grade= "B";
// }else if (percentage >= 50 ) {
//     grade="C"
// } else {
//     grade="Fail"
// }
// console.log(grade);

// // console.log(marks[i])

// console.log();
// }




// let marks = [255, 210, 180, 135];
// let students = ["Konain", "Ali", "Saif", "Ahmed"];

// let totalMarks = marks.reduce((total,val)=>{
// return total + val
// },0)
// // console.log(totalMarks);
// let averagePercentage = (totalMarks/(students.length*300))*100
// console.log(averagePercentage);

// let classGrade;
// if (averagePercentage>=80){
// classGrade="A+";
// }else if (averagePercentage>=70) {
//     classGrade = "A";
// }else if (averagePercentage>=60) {
//     classGrade= "B";
// }else if (averagePercentage >= 50 ) {
//     classGrade="C"
// } else {
//     classGrade="Fail"
// }
// console.log(classGrade);



// let students = ["Konain", "Ali", "Saif", "Ahmed"];
// let marks = [255, 210, 180, 135];

// let highestMarks = marks.reduce((total,val)=>{
// if(val>total){
// return val
// }else {
//     return total
// }
// },0)


// let highestindex = marks.findIndex((val) => {
//     return val === highestMarks
// })


// let topStudent = students[highestindex]

// console.log(topStudent);




// let students = ["Konain", "Ali", "Saif", "Ahmed"];
// let marks = [255, 210, 180, 135];

// let lowestMarks = marks.reduce((total,val)=>{
// if(val<total){
// return val
// }else {
//     return total
// }
// },marks[0])


// let lowestIndex = marks.findIndex((val) => {
//     return val === lowestMarks
// })


// let lowestStudent = students[lowestIndex]

// console.log(lowestStudent);

// let marks = [255, 210, 180, 135];

// let passedCount = 0;
// let failedCount = 0;
// for(let i= 0 ; i<4 ; i++){
// if(marks[i] >= 150){
// passedCount++
// }else{
//     failedCount++;
// }
// }

// console.log(passedCount);
// console.log(failedCount);

// let marks = [255, 210, 180, 135];
// let highest = marks[0];

// for(let i = 0 ; i<4; i++){
// if(marks[i] < highest){
// highest = marks[i];
// }
// }

// console.log(highest);


// let highest = 255;
// let lowest = 135;

// let diff = highest-lowest;
// console.log(diff);


// let marks = [255, 210, 180, 135];

// let total = 0;

// for (let i = 0; i < marks.length; i++) {
//     total = total + marks[i];
// }


// let average = total / marks.length;

// let percentage = average/300*100

// let grade ;

// if (percentage>=80){
// grade="A+";
// }else if (percentage>=70) {
//     grade = "A";
// }else if (percentage>=60) {
//     grade= "B";
// }else if (percentage >= 50 ) {
//     grade="C"
// } else {
//     grade="Fail"
// }
// console.log(grade);


// let students = ["Konain", "Ali", "Saif", "Ahmed"];
// let marks = [255, 210, 180, 135];

// for(let i = 0 ; i<students.length; i++){
//     console.log("Student:" + students[i]);
//     console.log("Marks:"+marks[i]);

//     let percentage = marks[i]/300*100
//     console.log("Percentage:"+percentage);

//     let grade ;
//     if (percentage>=80){
// grade="A+";
// }else if (percentage>=70) {
//     grade = "A";
// }else if (percentage>=60) {
//     grade= "B";
// }else if (percentage >= 50 ) {
//     grade="C"
// } else {
//     grade="Fail"
// }
//  console.log("Grade:" + grade);
      
// }

//  let students = ["Konain", "Ali", "Saif", "Ahmed"];
// let marks = [255, 210, 180, 135];
// let totalStudent = students.length
// console.log(totalStudent);


// function showAllResults (students,marks){

// for(let i = 0 ; i<students.length; i++){
//     console.log("Student:" + students[i]);
//     console.log("Marks:"+marks[i]);

//     let percentage = marks[i]/300*100
//     console.log("Percentage:"+percentage);

//     let grade ;
//     if (percentage>=80){
// grade="A+";
// }else if (percentage>=70) {
//     grade = "A";
// }else if (percentage>=60) {
//     grade= "B";
// }else if (percentage >= 50 ) {
//     grade="C"
// } else {
//     grade="Fail"
// }
//  console.log("Grade:" + grade);
      
// }
// }
// showAllResults(students,marks);