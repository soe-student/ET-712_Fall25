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
    shape.style.fontSize = "2rem"
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
    shape.style.fontSize = "2rem"
})

// sep 30 2025
// event handler

let btnpress = document.querySelector(".btnpress")
btnpress.onclick = function(){alert(`function()${new Date()}`)}


// mouse events
let x = document.querySelector(".x")
let circle_paragraph = document.querySelector(".circle_paragraph")
x.onmouseover = function(){circle_paragraph.textContent += "- CIRCLE -"}

// event listener
// collect the button element
let box_color = document.querySelector(".box_color")
// function to randomly pick a color as rgb format
const randomRGB = function(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red}, ${green}, ${blue})`
}
box_color.addEventListener("mouseout", function(){
    box_color.style.backgroundColor = randomRGB()
})

// keyboard event
let input_text = document.querySelector(".input_text")
let username_paragraph = document.querySelector(".username_paragraph")
input_text.addEventListener("keydown", function(){
    username_paragraph.textContent = `Username must have at least 3 characters`
})

// LAB Exercise
// EXERCISE
// note: use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
// add a mouseout event to change the text content to "STUDENT'S FULL NAME"


// search for the second p with class ps2
// add a click event to the ps2 to change the font-size to 25px  and color to olive when is clicked


// search for the first div with class divs2
// add a click event to change the background color to indigo


// search for the second div with class divs3
// add a keydown event to change the width of divs3 to 300px


// use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
// add a mouseout event to change the text content to "STUDENT'S FULL NAME"


let ps1 = document.querySelector(".ps1")
ps1.addEventListener("mouseout", function(){
    ps1.textContent = "SOE KAYTHI"
})

let ps2 = document.querySelector(".ps2")
ps2.addEventListener("click", function(){
    ps2.style.fontSize = "25px"
    ps2.style.color = "olive"
})

let divs2 = document.querySelector(".divs2")
divs2.addEventListener("click", function(){
    divs2.style.backgroundColor = "indigo"
})

let divs3 = document.querySelector(".divs3")
divs3.addEventListener("keydown", function(){
    divs3.style.width = "300px"
})

