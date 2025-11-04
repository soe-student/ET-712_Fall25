// Original Functions
function showSection(id) {
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    document.getElementById(id).classList.add('active');
}

function display(word) {
    alert('You clicked ' + word + '! Great job! 🎉');
}

function speak(word) {
    alert('You clicked ' + word + '! 🎉');
}

// ===== COLORS: SIMPLE ROUND TOGGLE =====
function toggleRound(element, colorName) {
    // Toggle round shape
    element.classList.toggle('round');
    
    // Show alert
    alert('You clicked ' + colorName + '! 🎉');
}

// ===== NUMBERS: INTERACTIVE MATH =====
function promptMath(number) {
    var operation = prompt('You clicked ' + number + '! 🎉\n\nWould you like to ADD or SUBTRACT?\nType "add" or "subtract"');
    
    if (operation === null) {
        return; // User canceled
    }
    
    operation = operation.toLowerCase().trim();
    
    if (operation === 'add' || operation === 'subtract') {
        var secondNumber = prompt('Great! Now enter another number (0-10):');
        
        if (secondNumber === null) {
            return; // User canceled
        }
        
        secondNumber = parseInt(secondNumber);
        
        if (isNaN(secondNumber) || secondNumber < 0 || secondNumber > 10) {
            alert('Please enter a number between 0 and 10! 😊');
            return;
        }
        
        var result;
        var symbol;
        
        if (operation === 'add') {
            result = number + secondNumber;
            symbol = '➕';
        } else {
            result = number - secondNumber;
            symbol = '➖';
        }
        
        if (result < 0) {
            alert('Oops! ' + number + ' ' + symbol + ' ' + secondNumber + ' = ' + result + '\n\nThe answer is negative! Try a bigger first number! 😊');
        } else {
            alert('Awesome! 🎉\n\n' + number + ' ' + symbol + ' ' + secondNumber + ' = ' + result + '\n\nGreat job!');
        }
    } else {
        alert('Please type "add" or "subtract" next time! 😊');
    }
}

// ===== ANIMALS: MODAL WITH IMAGES CREATED IN JAVASCRIPT =====
const animalData = {
    cat: {
        emoji: '🐱',
        name: 'Cat',
        image: 'images/cat.jpg'
    },
    dog: {
        emoji: '🐶',
        name: 'Dog',
        image: 'images/dog.jpg'
    },
    elephant: {
        emoji: '🐘',
        name: 'Elephant',
        image: 'images/elephant.jpg'
    },
    lion: {
        emoji: '🦁',
        name: 'Lion',
        image: 'images/lion.jpg'
    },
    monkey: {
        emoji: '🐵',
        name: 'Monkey',
        image: 'images/monkey.jpg'
    },
    rabbit: {
        emoji: '🐰',
        name: 'Rabbit',
        image: 'images/rabbit.jpg'
    },
    bear: {
        emoji: '🐻',
        name: 'Bear',
        image: 'images/bear.jpg'
    },
    kangaroo: {
        emoji: '🦘',
        name: 'Kangaroo',
        image: 'images/kangaroo.jpg'
    },
    wolf: {
        emoji: '🐺',
        name: 'Wolf',
        image: 'images/wolf.jpg'
    }
};

function openModal(animalName) {
    var animal = animalData[animalName];
    
    // Create modal elements dynamically
    var modal = document.createElement('div');
    modal.style.cssText = 'display: block; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6);';
    
    var modalContent = document.createElement('div');
    modalContent.style.cssText = 'background: linear-gradient(135deg, #fff5f5, #f0f9ff); margin: 10% auto; padding: 30px; border: 5px solid #ffcad4; border-radius: 30px; width: 80%; max-width: 500px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); position: relative;';
    
    var closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = 'color: #ff6b6b; float: right; font-size: 35px; font-weight: bold; cursor: pointer; line-height: 20px;';
    closeBtn.onclick = function() {
        document.body.removeChild(modal);
    };
    
    var emoji = document.createElement('div');
    emoji.textContent = animal.emoji;
    emoji.style.cssText = 'font-size: 5em; margin: 20px 0;';
    
    var title = document.createElement('h2');
    title.textContent = animal.name;
    title.style.cssText = 'color: #ff6b6b; font-size: 2.5em; margin: 15px 0;';
    
    var image = document.createElement('img');
    image.src = animal.image;
    image.alt = animal.name;
    image.style.cssText = 'width: 100%; max-width: 400px; height: auto; border-radius: 20px; margin: 20px 0; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);';
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(emoji);
    modalContent.appendChild(title);
    modalContent.appendChild(image);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close when clicking outside
    modal.onclick = function(event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    };
}

function closeModal() {
    var modals = document.querySelectorAll('[style*="position: fixed"]');
    modals.forEach(function(modal) {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    });
}

// ===== FRUITS: EVENT LISTENERS IN JAVASCRIPT =====
function initFruitListeners() {
    var fruitCards = document.querySelectorAll('.fruit-card');
    fruitCards.forEach(function(card) {
        card.addEventListener('click', function() {
            var fruitName = this.getAttribute('data-fruit');
            alert('You clicked ' + fruitName + '! 🎉');
        });
    });
}

// ===== SLIDESHOW AT HOME =====
var slideIndex = 0;
var slides = [];
var slideTimer;

function initSlideshow() {
    slides = document.getElementsByClassName('slide');
    if (slides.length > 0) {
        showSlides();
    }
}

function showSlides() {
    // Remove active class from all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active-slide');
    }
    
    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Show current slide
    slides[slideIndex - 1].classList.add('active-slide');
    
    // Change slide every 3 seconds
    slideTimer = setTimeout(showSlides, 3000);
}

// ===== SCROLL PROGRESS BAR =====
function updateScrollProgress() {
    var scrollProgress = document.getElementById('scrollProgress');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / scrollHeight) * 100;
    
    scrollProgress.style.width = scrollPercent + '%';
}

// ===== MATH FORM - ADDITION AND SUBTRACTION =====
function calculateAdd() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var result = num1 + num2;
    
    document.getElementById('mathResult').innerHTML = 
        num1 + ' ➕ ' + num2 + ' = ' + result + ' 🎉';
}

function calculateSubtract() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var result = num1 - num2;
    
    if (result < 0) {
        document.getElementById('mathResult').innerHTML = 
            'Oops! The answer is negative! Try bigger first number! 😊';
    } else {
        document.getElementById('mathResult').innerHTML = 
            num1 + ' ➖ ' + num2 + ' = ' + result + ' 🎉';
    }
}

// ===== INITIALIZE EVERYTHING =====
window.addEventListener('load', function() {
    initSlideshow();
    initFruitListeners();
});

window.addEventListener('scroll', updateScrollProgress);

document.addEventListener('DOMContentLoaded', function() {
    var mathForm = document.getElementById('mathForm');
    if (mathForm) {
        mathForm.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    }
    
    // Initialize fruit listeners
    initFruitListeners();
});