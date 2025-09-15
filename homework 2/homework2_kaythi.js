/*
Soe Kaythi
ET 712
Homework 2 - functions, loops and conditional statement
*/

console.log("Exercise 1")
let names = [ "Kaythi", "John", "Jane", "Alex", "Bob", "Alice"]
function name_counting(nameArray) {
    let count = 0
    for (let i = 0; i < nameArray.length; i++) {
        if (nameArray[i].length < 5) {
            count++
        }
    }
    return count
}   
console.log("Number of names with less than 5 characters: " + name_counting(names))

console.log("Exercise 2")
function checkNum() {
    let num
    while (true) {
        num = prompt("Please enter a number:")
        if (num === null || num.trim() === "" || isNaN(num)) {
            console.log("Invalid input. Please enter a valid number.")
        } else {
            num = parseInt(num)
            return num % 2 === 0
        }
    }
}
console.log("Is the entered number even? " + checkNum())