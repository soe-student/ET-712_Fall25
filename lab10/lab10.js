console.log("Soe Kaythi, Lab 10");

let myForm = document.querySelector("#form1");
let greeting = document.querySelector(".greeting");
let displayusername = document.querySelector(".display_username");

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let usernameInput = document.querySelector("#username");
    let usernameValue = usernameInput.value;

    if(usernameValue.trim() === "") {
        alert("Please enter a valid username.");
        return;
    }

    greeting.style.display = "block";
    displayusername.textContent = usernameValue;

    usernameInput.value = "";

    myForm.submit();
});

let btnsubmit = document.querySelector(".btnsubmit");

window.addEventListener("load", function() {
    btnsubmit.disabled = true;
});

let username_error_msg = document.querySelector(".username_error_msg");
let usernameInput = document.querySelector("#username");

usernameInput.addEventListener("input", function() {
    usernameValue = usernameInput.value;
    usernameValueLength = usernameValue.length;
    
    if(usernameValueLength >= 5 && usernameValueLength <= 20) {  
        username_error_msg.textContent = "";
        btnsubmit.disabled = false;
        usernameInput.classList.add("active_input_valid");
    }
    else {
        username_error_msg.textContent = "Username must be at between 5 and 20 characters!";
        btnsubmit.disabled = true;
        usernameInput.classList.remove("active_input_valid");
        usernameInput.classList.add("active_input_invalid");
    }
});

/* Oct 21 2025 */

const inputpassword = document.querySelector("#password");
inputpassword.addEventListener("focus", function() {
    inputpassword.classList.add("active_input_valid");
});

inputpassword.addEventListener("blur", function() {
    inputpassword.classList.remove("active_input_valid");
    inputpassword.classList.add("active_input_invalid");
});

const originalWord = "JavaScript";
function shuffleWord(word) {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
}
const scrambleword = document.querySelector("#scrambleword");
const guessInput = document.querySelector("#guessInput");
const wordfeedback = document.querySelector("#wordfeedback");

const shuffled = shuffleWord(originalWord);
scrambleword.textContent = shuffled;

guessInput.addEventListener("input", function() {
    const guess = guessInput.value;

    if(guess === originalWord) {    
        wordfeedback.textContent = "Correct!";
        guessInput.classList.add("active_input_valid");
    }
    else {
        wordfeedback.textContent = "Try Again!";
        guessInput.classList.remove("active_input_valid");
        guessInput.classList.add("active_input_invalid");
    }   
});
