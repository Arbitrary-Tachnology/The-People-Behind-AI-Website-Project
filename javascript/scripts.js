// Select all dropdown elements on the page
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector('.menu-trigger');

  // 1. Toggle menu on click
  trigger.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the document click listener from instantly closing it
    
    // Close other open dropdowns if you have multiple
    dropdowns.forEach(d => {
      if (d !== dropdown) d.classList.remove('is-active');
    });

    dropdown.classList.toggle('is-active');
  });

  // 2. Accessibility: Close menu when pressing the Escape key
  dropdown.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      dropdown.classList.remove('is-active');
      trigger.focus(); // Return focus to the button
    }
  });
});

// 3. Close menu when clicking anywhere outside of it
document.addEventListener('click', () => {
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('is-active');
  });
});
