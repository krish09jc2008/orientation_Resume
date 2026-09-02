// Typing Effect for Hero Section
const words = ["Real-world problems.", "Scale.", "Innovation.", "Future."];
let i = 0;
let counter = 0;
let currentText = "";
let letter = "";

(function type() {
    if (counter === words.length) {
        counter = 0;
    }
    currentText = words[counter];
    letter = currentText.slice(0, ++i);

    document.getElementById("feature-text").textContent = letter;
    if (letter.length === currentText.length) {
        counter++;
        i = 0;
        setTimeout(type, 2000); // Wait before starting next word
    } else {
        setTimeout(type, 150);
    }
}());

// Smooth scroll logic (optional, most browsers do this via CSS now)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});