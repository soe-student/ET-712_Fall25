console.log("Lab 2 by Soe Kaythi.")
// create an array
console.log("\n---- Example 1: Array ----")

let fruits = ["Apple", "Banana", "Cherry", "Pineapple"]
// access the 3rd element
console.log(`The 3rd fruit = ${fruits[2]}`) 

console.log(`There is/are ${fruits.length}`)

console.log(`Original array: ${fruits}`)
// remove the 1st element in fruits array using shift() method
fruits.shift();
console.log(`Remove the first element: ${fruits}`);

// add elements at the beginning(left) using unshift() method
fruits.unshift(25,"Mango", true);
console.log(`Add 3 elements at the beginning: ${fruits}`)

// add elements at the end(right) using push() method
fruits.push("Peter", 100)
console.log(`Update array after adding 2 elements at the end(right): ${fruits}`)

// find the index of an element
let index_blueberry = fruits.indexOf("Blueberry")
console.log(`What is the index of Blueberry? ${index_blueberry}`)
// if the return index = -1, the element does not exist in the array

let index_peter = fruits.indexOf("Peter")
console.log(`What is the index of Peter? ${index_peter}`)

console.log(`\n---- Example 2: if statement ----`)
let day = true
let night = false
// check if its is daytime or not
if (day) {
    console.log("It's daytime.")
}
console.log(`END`)

let num1 = 10
let num2 = "10"

console.log(`\n---- Example 3: if statement with logical operators ----`)
if (num1 == num2) { 
    console.log(`num1 is equal to num2---- ${num1==num2}`)
    // == operator checks for value equality only, not type
}
console.log(`END2`)

if (num1 === num2) { 
    console.log(`num1 is exactly equal to num2---- ${num1===num2}`)
}
console.log(`END3`)

console.log(`\n---- Example 4: if...else statement(check the number is even or odd) ----`)
// if...else statement ---> check two conditions
let number = 11
if (number % 2 == 0) {
    console.log(`${number} is an even number.`)
}
else {
    console.log(`${number} is an odd number.`)
}

console.log(`\n---- Example 5: check if an input is a string or a number ----`)
let user_input = prompt(`Enter a username : `)
let check_username = isNaN(user_input) 
// isNaN() function checks if the value is Not-a-Number
console.log(`${user_input} is not a number? ${check_username}`)
if(check_username) {
    console.log(`${user_input} is a STRING.`)
}
else {
    console.log(`${user_input} is a NUMBER.`)
}

console.log(`\n---- Example 6: multiway conditional statement ----`)
let n1 = 5
let n2 = 10
if(n1 === n2) {
    console.log(`${n1} is EXACTLY EQUAL to ${n2}`)
}
else if(n1 > n2) {
    console.log(`${n1} is GREATER THAN ${n2}`)
}
else if(n1 < n2) {
    console.log(`${n1} is LESS THAN ${n2}`)
}
else {
    console.log(`ERROR: unable to compare`)
}


console.log(`\n---- Example 7: switch statement ----`)
let gender = prompt('Enter gender: ')

switch(gender){
    case "Female": case "FEMALE": case "F": case "f": case "female":
        console.log(`Selectede gender = FEMALE`)
        break
    case "Male":case "MALE": case "M": case "m": case "male":
        console.log(`Selected gender = MALE`)
        break
    case "Other":case "OTHER": case "other": case "o": case "O":
        console.log(`Selected gender = OTHER`)
        break
    default:
        console.log(`ERROR: Unable to read the selected gender`)
}

console.log(`\n---- EXERCISE 1 ----`)
let user_input1 = prompt(`Enter Value : `)

if(user_input1) {
    console.log(`${user_input} is a STRING.`)
}
else {
    console.log(`${user_input} is a NUMBER.`)
}



console.log(`\n---- EXERCISE 2 ----`)
let colors = ["red", "green", "blue", "yellow", "purple"]
let user_color = prompt(`Enter a color: `).toLowerCase()
let index_color = colors.indexOf(user_color)

switch(user_color) {
    case index_color >= 0:
        console.log(`${user_color} exists in the color list.`);
        break;
    default:
        console.log(`${user_color} does not exist in the list.`);
}