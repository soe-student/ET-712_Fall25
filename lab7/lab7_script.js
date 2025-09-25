/*
Soe Kaythi
ET-712
Lab 7 - Intro to DOM
*/
console.log("Soe Kaythi")

// access(select) element by id name
let titlenode = document.querySelector("#title")
console.log(titlenode)

// access(select) element by class name
let desc = document.querySelector(".description")
console.log(desc)

// access(select) element by tag name
// tag name = p, ul, li, h1, h2, div, span, a, img, button, input
let p = document.querySelector("h1")
console.log(p)

// access(select) element by class name
let desc2 = document.querySelectorAll(".description")
console.log(desc2)

console.log("Loop through each element the node list")
for(let i=0; i<desc2.length; i++){
    console.log(`${desc2[i].textContent}`)
}

// collect the button elements
let shape = document.querySelector(".shapeDivision")
let btn_square = document.querySelector(".btn_square")
let btn_circle = document.querySelector(".btn_circle")
let btn_rectangle = document.querySelector(".btn_rectangle")

// add event to the button
btn_square.addEventListener("click", function(){
    shape.className = "square"
    shape.textContent = "Square".toUpperCase()
    shape.style.backgroundColor = "gold"
})

btn_circle.addEventListener("click", function(){
    shape.className = "circle"
    shape.textContent = "Circle".toUpperCase()
    shape.style.fontSize = "1rem"
    shape.style.backgroundColor = "green"
})

btn_rectangle.addEventListener("click", function(){
    shape.className = "rectangle"
    shape.textContent = "Rectangle".toUpperCase()
    shape.style.backgroundColor = "coral"
})