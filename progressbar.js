// Get elements
const progressBar = document.getElementById('progress-bar');
const increaseButton = document.getElementById('increase-progress');
const resetButton = document.getElementById('reset-progress');

let progress = 0; // Initialize progress value

// Increase progress function
increaseButton.addEventListener('click', () => {
  if (progress < 100) {
    progress += 10; // Increase progress by 10%
    progressBar.style.width = progress + '%';
  }
});

// Reset progress function
resetButton.addEventListener('click', () => {
  progress = 0; // Reset progress to 0
  progressBar.style.width = progress + '%';
});