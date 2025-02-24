// Student: David Comeau
// ID: W0158668
// Class: PROG2700 - Client Side Programming
// Instructor: Nadia Gouda
// Date: February 23, 2025

/*

Incorrect Code Template

student_name = Nadia;
studentAge == "20";
isEnrolled = True; 

document.write("<h2>Student Info</h2>")
document.write("Name: " + studentName + <br>); 
document.write("Age: " + student_age); 
document.write("Enrolled: " + isEnrolled) 

let ageString = String(studentAge)
document.write("Age Type: " typeof ageString); 

num1 = prompt("Enter first number");
num2 = prompt("Enter second number");
total = num1 + num2; 

document.write("Sum: " + total)

userAge = prompt("Enter your age");
if (userAge = 18) { 
    document.write("You can vote!"); 
} else (userAge < 18) { 
    document.write("Sorry, you can't vote."); 
}

for (i = 1; i < 10; i++) 
    document.write(i)

while num < 10 
    num = prompt("Enter a number greater than 10")

*/

// Corrected Code

let student_name = "Nadia";
let studentAge = "20";
let isEnrolled = true;

document.write("<h2>Student Info</h2>");
document.write("Name: " + student_name + "<br>");
document.write("Age: " + studentAge + "<br>");
document.write("Enrolled: " + isEnrolled + "<br>");

let ageString = String(studentAge);
document.write("Age Type: " + typeof ageString + "<br>");

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let total = num1 + num2;
document.write("Sum: " + total + "<br>");

let userAge = Number(prompt("Enter your age"));
if (userAge === 18) {
    document.write("You can vote!");
} else if (userAge < 18) {
    document.write("Sorry, you can't vote.");
}

for (let i = 1; i < 10; i++) {
    document.write(i);
}

let num = 0;
while (num < 10) {
    num = Number(prompt("Enter a number greater than 10"));
}
