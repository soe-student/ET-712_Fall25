let displaypexels = document.querySelector('.displaypexels');
// read the pixels from the y axis
window.addEventListener("scroll", function() {
    let y_pixels = window.scrollY;
    displaypexels.innerHTML = `${y_pixels} pixels away from the top!`;
});
// to the top
const toTop = document.querySelector('.toTop');
window.addEventListener("scroll", function() {
    let y_pixels = window.scrollY;
    if (y_pixels > 600) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
})
// resize the event: change the background color if the window is resized
window.addEventListener("resize", function() {
    displaypexels.style.backgroundColor = "crimson";
})

// load event: alert when the page is fully loaded
window.addEventListener("load", function() {
    alert("The page is fully loaded");
})

// modal window
const openModal = document.querySelector('.openmodal');
const modalOverlay = document.querySelector('#modal_overlay');
const closeButton = document.querySelector('.close_button');

openModal.addEventListener("click", function() {
    modalOverlay.style.display = "block";
});

closeButton.addEventListener("click", function() {
    modalOverlay.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = "none";
    }
});
