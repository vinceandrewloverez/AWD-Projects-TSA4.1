// JavaScript to toggle visibility of the navigation buttons container
document.getElementById('toggleNav').addEventListener('click', function() {
  var navButtons = document.getElementById('navButtons');
  if (navButtons.style.display === 'none' || navButtons.style.display === '') {
    navButtons.style.display = 'flex'; // Display the navigation buttons
  } else {
    navButtons.style.display = 'none'; // Hide the navigation buttons
  }
});
