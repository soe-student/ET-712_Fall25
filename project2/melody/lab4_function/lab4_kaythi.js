/*
Soe Kaythi
lab 4, function
Sept 9, 2025
*/
console.log("Soe Kaythi");
// define a function to print a message
function msg(){
    console.log("----Example 1----")
    console.log("Hello World");
}
// call the function by msg() in console

// increment a count from 1 to 3
function printCount(){
    console.log("----Example 2----")
    for(let i=1; i <= 3; i++){
        console.log(i)
    }
}
// decrement a count from 3 to 1
function printCountReverse(){
    console.log("----Example 2a----")
    for(let i=3; i >= 1; i--){
        console.log(i)
    }
}

// define a function that passed a username
function greeting(username){
    console.log("----Example 3----")
    console.log(`Welcome to Javascript ${username}`);
}
// define a function passes a username and print it in uppercase
function uppercaseName(message){
    console.log("----Example 4----")
    console.log(message.toUpperCase());
}

// define a function to simulate a snake eyes game.
// pass two numbers to the function, if both numbers are 1, print "Snake Eyes!"

function isSnakeEyes(num1, num2){
    console.log("----Example 5----")
    if(num1 === 1 && num2 === 1){
        console.log("Snake Eyes!");
    }
    else{
        console.log("Not Snake Eyes!");
    }
}
// define a function that returns the area of a rectangle
function areaRectangle(length, width){
    console.log("----Example 6----")
    return length * width;
}

// define a function to check temperature.
function checkTemperature(temp){
    console.log("----Example 7----")
    if(temp >= 75){
        return true;
    }
    else{
        return false;
    }
}
//EXERCISE
function checkName(name){
    console.log("----Exercise----")
    let username = "";

    while(true){
        username = prompt("Enter a name:");

        if(username === null || username.trim() === ""){
            console.log("You forgot to enter a name. Please enter a name again.");
            continue;
        }
        if(!isNaN(username)){
            console.log(`${username} is invalid! Please enter a valid name.`);
            continue;
        }

        if(username === name){
            console.log(`Welcome, ${username.toUpperCase()} to the class!`);
            break;  
        } else {
            console.log(`Sorry, ${username}, Please enter a valid name.`);
        }
    }
}
