// Simple interactivity: Smooth scrolling for navigation (if you add nav links later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Placeholder for future interactivity, e.g., image lightbox or form handling
console.log('Portfolio site loaded successfully!');