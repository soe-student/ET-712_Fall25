/*
Soe kaythi
Lab 3, Loops
Sept 4, 2025
*/
console.log("Soe Kaythi")
console.log(`\n ----example 1: for loop as a counter---- `)
// for loop to print from 0 to 5
for (let x = 0; x <=5; x++){
    console.log(x)
}

console.log(`\n ----example 2: for loop with conditional statement---- `)
// print all even numbers from -20 and 20 (inclusive)
for (let x=-20; x <=20; x++){
    if (x % 2 == 0){
        console.log(x)
    }
}

console.log(`\n ----example 3: for loop as a decrement counter---- `)
// print numbers from 3 to 0 ---> 3,2,1,0
for (let x = 3; x >=0; x--){
    console.log(x)
}

console.log(`\n ----example 4: for loop in an array---- `)
// print all the elements in the array
let cars = ['Toyota', 'Honda', 'Ford', 'Chevy', 'Nissan']
for(let index = 0; index < cars.length; index++){
    console.log(cars[index])
}

console.log(`\n ----for...of loop in an array in different method---- `)
// print all the elements in the array using for...of loop
// print goes through each element in the array


for(let x of cars){
    console.log(x)
}

// works with strings too but not with objects
console.log(`\n ----for...of loop in a string---- `)
for (let char of "Hello World"){
    console.log(char)
}

console.log(`\n ----example 5: application using for loops ---- `)
// find how many car's name has more than 4 characters and print the cars' name
let car_char_counter = 0;
for(let index = 0; index < cars.length; index++){
    if (cars[index].length > 4){
        car_char_counter++;
    }
}
console.log(`There is/are ${car_char_counter} car's name with 4+ characters`);



console.log(`\n ----example 6: application using for loops---- `)
// as the user to guess number between 1 and 9. The user has three tries
let guess = 8
for(let counter = 1; counter <=3; counter++){
    let user_number = parseInt(prompt("Guess a number between 1 and 9: "))
    console.log(`You guessed: ${user_number}`)
    if (user_number === guess){
        console.log("You guessed it right!")
        break
    } else if(user_number > guess){
        console.log("Wrong guess, the number should be lower")
    } else {
        console.log("Wrong guess, the number should be higher")
    }
    if (counter === 3){
        console.log("You have used all your tries, Better luck next time!")
    }
}

console.log(`\n ----example 7: While loop as a counter---- `)
// print from 0 to 5 using while loop
let x = 0
while(x <=5){
    console.log(x)
    x++
}

console.log(`\n ----example 8: Validate an input---- `)
// check if the user enters a valid number between 1 and 9
let num1 = parseInt(prompt("Put a number between 1 and 9: "))
// keep asking until the user enters a valid number
while(num1 <1 || num1 > 9){
    num1 = parseInt(prompt("ERROR: Enter a number between 1 and 9: "))
}
console.log(`The collected number is: ${num1}`)

console.log(`\n ----example 9: simulate a bank transaction ---- `)
let balance = 1000
while(true){
    let user_transaction = parseInt(prompt("Welcome to the Bank, How can I help you today?\nPress 1 for Check Balance\nPress 2 for Deposit\nPress 3 for Withdraw\nPress 4 to Exit\n"))
    
    if (user_transaction < 1 || user_transaction > 2){
        user_transaction = parseInt(prompt("ERROR: Please enter a valid option\nPress 1 for Check Balance\nPress 2 for Deposit\nPress 3 for Withdraw\nPress 4 to Exit\n"))
    }
    switch(user_transaction){
        case 1:
            console.log(`your balance is $${balance}`)
            break
        case 2:
            let deposit = parseInt(prompt("How much would you like to deposit? "))
            balance += deposit
            console.log(`Your new balance is $${balance}`)
            break
        case 3:
            let withdraw = parseInt(prompt("How much would you like to withdraw? "))
            
            if (withdraw > balance){
                console.log("Sorry, you don't havee enough money")
            } else {
                console.log(`You withdrew $${withdraw}`)
            }
            balance -= withdraw
            console.log(`Your currrent balance is $${balance}`)
            break
        
        case 4:
            console.log("Thank you for using QCC bank with us, Have a great day!")
            break
        default:
            console.log("Thank you for using QCC bank with us, Have a great day!")
            break
    }
    break
}



console.log(`--------EXERCISE A--------`)


console.log(`---------EXERCISE B---------`)

let pin = 1234
let attempt = 3
while(true){
    // collect a 4-digit pin from the user
    let user_pin = parseInt(prompt("Enter your 4-digit pin number: "))
    // pin validation
    if (user_pin < 1000 || user_pin > 9999){
        user_pin = parseInt(prompt("ERROR: Please enter a number: "))
        attempt--;
    }
    else{
        console.log("Welcome to your account")
        break
    }
    // attempt reaches to zero
    if (attempt === 0){
        console.log("YOUR ACCOUNT IS LOCKED")
        break
    }
}