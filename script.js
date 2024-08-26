function toggleMenu() {
  const menu = document.getElementById('menu');
  const hamburger = document.querySelector('.hamburger');
  const cross = document.querySelector('img[src="/assets/cross.png"]');

  menu.classList.toggle('active');
  
  if (menu.classList.contains('active')) {
    hamburger.style.display = 'none';
    cross.style.display = 'block';
  } else {
    hamburger.style.display = 'flex';
    cross.style.display = 'none';
  }
}

// Initially hide the cross image
document.addEventListener('DOMContentLoaded', function() {
  const cross = document.querySelector('img[src="/assets/cross.png"]');
  cross.style.display = 'none';

  // Add event listener to the cross image to close the menu
  cross.addEventListener('click', function() {
      toggleMenu();
  });
});
