var form = document.getElementById('registrationForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var successMessage = document.getElementById('successMessage');

function validateName(name) {
    return name.trim().length > 0;
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    var hasMinLength = password.length >= 5;
    var hasSpecialChar = /[#$%]/.test(password);
    return hasMinLength && hasSpecialChar;
}

function showError(input, errorElement, message) {
    input.classList.add('invalid');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function clearError(input, errorElement) {
    input.classList.remove('invalid');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var isValid = true;
    
    if (!validateName(nameInput.value)) {
        showError(nameInput, document.getElementById('nameError'), 'Name must not be empty');
        isValid = false;
    } else {
        clearError(nameInput, document.getElementById('nameError'));
    }
    
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, document.getElementById('emailError'), 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError(emailInput, document.getElementById('emailError'));
    }
    
    if (!validatePassword(passwordInput.value)) {
        var errorMsg = 'Password must be at least 5 characters and contain one of: #, $, %';
        showError(passwordInput, document.getElementById('passwordError'), errorMsg);
        isValid = false;
    } else {
        clearError(passwordInput, document.getElementById('passwordError'));
    }
    
    if (isValid) {
        successMessage.classList.add('show');
        form.reset();
        setTimeout(function() {
            successMessage.classList.remove('show');
        }, 3000);
    }
});

var gallery = document.getElementById('gallery');
var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');

var currentPosition = 0;
var totalCards = 6;
var cardsPerView = 1;

function updateGallery() {
    var translateX = -currentPosition * 100;
    gallery.style.transform = 'translateX(' + translateX + '%)';
}

rightBtn.addEventListener('click', function() {
    currentPosition += 1;
    
    if (currentPosition >= totalCards) {
        currentPosition = 0;
    }
    
    updateGallery();
});

leftBtn.addEventListener('click', function() {
    currentPosition -= 1;
    
    if (currentPosition < 0) {
        currentPosition = totalCards - 1;
    }
    
    updateGallery();
});

updateGallery();