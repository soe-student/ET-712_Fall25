/*
Soe Kaythi
lab 8, events
oct 7,2025
*/
console.log("Lab 8 - events");
console.log("Soe Kaythi");

let btnpressme = document.querySelector(".btnpressme");
btnpressme.addEventListener("click", function(e) {
    if(e.target.textContent === "PRESS ME!") {
        e.target.textContent = "Key was pressed!";
    }
    else {
        e.target.textContent = "PRESS ME!";
    }
    // toggle between the classes in css
    e.target.classList.toggle("btnactive");
});

// event delegation
let list = document.getElementById("list");
list.addEventListener("click", function(event) {
    // check if the clicked element is a list item or its child
    if(event.target.tagName.toLowerCase() === "li"){
        event.target.remove();
    }
})

// prevent default behavior
const qcclink = document.querySelector(".qcclink");
qcclink.addEventListener("click", function(e) {
    e.preventDefault();
    alert("QCC website link is under maintenance!");
});

// window events
let btnscrollby = document.querySelector(".btnscrollby");
let content = document.querySelector("#content");
btnscrollby.addEventListener("click", function() {
    window.scrollBy(200,0); // (x axis,y axis)
});

// photo gallery scrolling
const btnright = document.querySelector(".btnright");
const btnleft = document.querySelector(".btnleft");


// define a function to scroll the gallery by size
function scrollGalleryBySize(pixels) {
    document.querySelector("div.gallery-container").scrollBy(
        {
            left: pixels,
            behavior: 'smooth'
        }
    );
}
// add event listeners to buttons
btnright.addEventListener("click", function() {
    scrollGalleryBySize(500);
})
btnleft.addEventListener("click", function() {
    scrollGalleryBySize(-500);
});