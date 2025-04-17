// Get all actor elements and the bio box
const actors = document.querySelectorAll('.actor');
const bioBox = document.getElementById('bio-box');

// Add hover event listeners to each actor
actors.forEach(actor => {
  actor.addEventListener('mouseenter', event => {
    const bio = event.target.getAttribute('data-bio');
    const rect = event.target.getBoundingClientRect();

    // Set bio content and position the bio box
    bioBox.textContent = bio;
    bioBox.style.left = `${rect.x + window.scrollX + rect.width / 2 - bioBox.offsetWidth / 2}px`;
    bioBox.style.top = `${rect.y + window.scrollY + rect.height + 10}px`;
    bioBox.style.display = 'block';
  });

  actor.addEventListener('mouseleave', () => {
    bioBox.style.display = 'none';
  });
});