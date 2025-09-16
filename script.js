// Part 2: Functions with parameters, return, and scope

// Global variable
let animationRunning = false;

// Function to toggle animation class
function toggleAnimation(element) {
  if (animationRunning) {
    element.classList.remove('animate');
    animationRunning = false;
    return 'stopped';
  } else {
    element.classList.add('animate');
    animationRunning = true;
    return 'started';
  }
}

// Function to update button text
function updateButtonText(button, state) {
  if(state === 'started') {
    button.textContent = 'Stop Animation';
  } else {
    button.textContent = 'Animate Box';
  }
}

// Part 3: Trigger animation with button click

const btn = document.getElementById('animateBtn');
const box = document.getElementById('box');

btn.addEventListener('click', () => {
  const state = toggleAnimation(box);
  updateButtonText(btn, state);
});
