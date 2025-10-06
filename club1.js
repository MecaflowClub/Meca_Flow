document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector(".navbar");
    var lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.top = "-100px"; // Hide the navbar
        } else {
            // Scrolling up
            navbar.style.top = "0"; // Show the navbar
        }

        lastScrollTop = scrollTop;
    });

    // Ensure the page starts at the top on reload
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Close the toggle menu on click
    
});
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) { // Adjusted to 992px for better responsiveness
                var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
});



// Initialize ScrollReveal
ScrollReveal().reveal('.navbar', {
    duration: 500,
    origin: 'top',
    distance: '50px'
});

ScrollReveal().reveal('.down h1 , .down p', {
    duration: 800,
    origin: 'bottom',
    distance: '50px',
    delay: 300
});
ScrollReveal().reveal('.down .btn-danger', {
    duration: 800,
    origin: 'left',
    distance: '50px',
    delay: 300
});
ScrollReveal().reveal('.btn-secondary', {
    duration: 800,
    origin: 'right',
    distance: '50px',
    delay: 300
});
ScrollReveal().reveal('.pro', {
    duration: 800,
    origin: 'bottom',
    distance: '50px',
    delay: 300
});
ScrollReveal().reveal('.carousel-section', {
    duration: 500,
    origin: 'bottom',
    distance: '50px',
    delay: 500
});

ScrollReveal().reveal('.join-section .first', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
    delay: 500
});

ScrollReveal().reveal('.join-section .second .col-md-4', {
    duration: 500,
    origin: 'bottom',
    distance: '50px',
    interval: 200
});

ScrollReveal().reveal('.contact-section .contact-wrapper', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
    delay: 500
});
