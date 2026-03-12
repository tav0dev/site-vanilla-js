// === Typing Effect ===
const words = ["brechas 100% legais.", "inteligência jurídica.", "o mindset tranquilão."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById("typewriter");

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before new word
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect
setTimeout(typeEffect, 1000);

// === Fake Countdown Timer ===
let timeInSeconds = 5 * 3600 + 42 * 60 + 10; // 5h 42m 10s

function updateTimer() {
    if (timeInSeconds <= 0) return;
    
    timeInSeconds--;
    
    const h = Math.floor(timeInSeconds / 3600);
    const m = Math.floor((timeInSeconds % 3600) / 60);
    const s = timeInSeconds % 60;

    document.getElementById('hours').textContent = String(h).padStart(2, '0');
    document.getElementById('minutes').textContent = String(m).padStart(2, '0');
    document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}

setInterval(updateTimer, 1000);

// === Botão de Compra ===
document.getElementById('buy-btn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Iniciando processamento na deep web... Brincadeira, o carrinho está fechado!');
});