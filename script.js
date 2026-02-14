// script.js

// Functionality for Iya/Tidak buttons
function setupButtons() {
    const iyaButton = document.getElementById('iya-button');
    const tidakButton = document.getElementById('tidak-button');

    iyaButton.addEventListener('click', function() {
        alert('You clicked Iya!');
        createFloatingHearts();
    });

    tidakButton.addEventListener('click', function() {
        alert('You clicked Tidak!');
    });
}

// Floating hearts animation
function createFloatingHearts() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    document.body.appendChild(heart);

    const size = Math.random() * 30 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.position = 'fixed';
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.bottom = '-50px';

    const animationDuration = Math.random() * 3 + 2;
    heart.style.transition = `transform ${animationDuration}s ease, opacity ${animationDuration}s ease`;
    setTimeout(() => {
        heart.style.transform = `translateY(-100vh)`;
        heart.style.opacity = 0;
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000);
}

// Timeline animation
function animateOnTimeline() {
    // Implement timeline animations here
}

// Initialize everything
window.onload = function() {
    setupButtons();
    setInterval(animateOnTimeline, 2000); // Example of timeline animations
};

// CSS for hearts animation
const style = document.createElement('style');
style.innerHTML = `.heart { background: red; border-radius: 50%; position: absolute; }`;
document.head.appendChild(style);
