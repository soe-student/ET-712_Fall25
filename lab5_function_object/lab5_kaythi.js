/*
Soe Kaythi
lab5_function_object
Sep 11, 2025
*/
console.log("Soe Kaythi")
// EXAMPLE 1
// anonymous function in a variable
let greet = function(username){
    console.log(`Welcome ${username} to ET-712!`)
}
// arrow function in a variable
let greetArrow = (username) => {
    console.log(`Welcome ${username} to ET-712!`)
}
// calling the functions
greet("Soe Kaythi")
greetArrow("Soe Kaythi")

// EXAMPLE 2 : default parameters
// randomly generate a number between 1 and 9
// function pass by reference
function randomNumber(x){
    for(let n=1; n<=9; n++){
        let num= Math.ceil(Math.random()*9)
        console.log(num)
    }   
}

// EXAMPLE 3 : spread syntax
numbers = [1,2,3,4,5,6,7,8,9]
let max_num = Math.max(...numbers)
// ... means that it will spread the array into individual elements
console.log(`The maximum number is ${max_num}`)

// EXAMPLE 4 : object literal
// Create an object 'car' with properties and methods
const car = {
    // properties
    type: "Fiat",
    model: "500",
    color: "white",

    // method
    car_description: function() {
        return `Car type: ${this.type}, model: ${this.model}, color: ${this.color}`;
    }
}

// EXAMPLE 5
// Create an object 'myMath' with properties and methods that will calculate the area and perimeter of a rectangle
const myMath = {

    // method to calculate area and perimeter
    perimeter: function(w, l) {
        return 2 * (w + l);
    }
    
    // method to calculate area
    , area: function(w, l) {
        return w * l;
    }
}

// EXAMPLE 6 : arrow function in an object method
const cat = {
    // properties
    type: "Bengal",
    color: "BrownBlack with white spots",
    breed: "Short hair",

    // method using arrow function
    meow: () => {console.log("Meowwwwwwwwwwwwwwww!")}
}

// EXAMPLE 7
const hen = {
    // properties
    name: "Helen",
    eggCount: 0,

    // method
    layAnEgg (){
        this.eggCount++;
        return `Egg count: ${this.name}`;
    },
    resetEggCount(){
        this.eggCount = 0;
        return `${this.name} 's egg count is: ${this.eggCount}`;
    }
}

// EXAMPLE 8: try-catch

function yell(msg=""){
    try{
        console.log(msg.toUpperCase().repeat(3))
    }
    catch(error){
        console.log(error)
        console.log(`Error: ${msg} is not a string!`)
    }
    finally{
        console.log("End of program")
    }
}


// EXERCISE 1
console.log("EXERCISE 1")
const myCalculator = {
    // properties
    message: "Hello from myCalculator",
    side: 2,
    // method to calculate area_square
    area_square: function(side){
        return Math.pow(side, 2);
    },
    // method to calculate volume_cube
    volume_cube: function(side){
        return Math.pow(side, 3);
    }
}


// EXERCISE 2
console.log("EXERCISE 2")
const obj = {
    prop : "Hello from obj",
    readProperty(propName){
        try{
            console.log(this.prop)
        }
        catch(error){
            console.log(error)
        }
        finally{
            console.log("End of program")
        }
    }
    
}



