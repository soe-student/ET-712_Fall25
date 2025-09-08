/* Homework 1 - control flow and loops
Soe Kaythi 
*/

console.log("\n-----Program 1: conditional statements-----\n");
//Write JavaScript program that will check the type of data that the user enters in a popup dialog window, using the prompt function. The program starts with asking the user to enter something in the popup dialog window. Depending on the entered data, the program will display in the console:
let userInput = parseInt(prompt("Please enter something:"));
if (userInput > 0) {
  console.log("Think positively!");
}
else if (userInput < 0) {
    console.log("Never have negative balance!");
    }
else if (userInput === 0) {
    console.log("Yin and Yang!");
}
if (userInput === "") {
    console.log("Your answer was blank!");
}

if (userInput === null) {
    console.log("Null and void!");
 }





console.log("\n-----Program 2: For loop and Nested conditional statements-----\n");
let numbers = [];
for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt("Enter number " + (i + 1) + ":"));
  numbers.push(num);
}
console.log("The numbers you entered are: " + numbers);
let count3 = 0;
let count5 = 0;
let count7 = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    count3++;
  }
  if (numbers[i] % 5 === 0) {
    count5++;
  }
  if (numbers[i] % 7 === 0) {
    count7++;
  }
}
console.log("numbers are multiple of 3: " + count3);
console.log("numbers are multiple of 5: " + count5);
console.log("numbers are multiple of 7: " + count7);