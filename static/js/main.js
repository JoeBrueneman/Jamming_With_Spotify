document.addEventListener('DOMContentLoaded', function() {
    // Toggle the nav menu on small screens
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var navMenu = document.querySelector('.nav-menu');

    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close the nav menu when a link is clicked (useful for single-page websites)
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Ensure that the nav menu closes when the user clicks outside of it
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !hamburgerMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Optional: Smooth scroll for anchor links (requires additional library or custom code)
    // This part is optional and can be implemented depending on your needs
    // You might use a small library like 'smooth-scroll' or write your custom smooth scrolling logic
});
