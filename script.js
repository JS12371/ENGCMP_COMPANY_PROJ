// Waitlist form submission
document.addEventListener('DOMContentLoaded', function() {
    const waitlistForm = document.querySelector('#signup form');
    
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // In a real implementation, you would send this data to your server
            console.log('Waitlist submission:', { name, email });
            
            // Show success message
            alert(`Thanks, ${name}! You've been added to our waitlist. We'll be in touch soon.`);
            waitlistForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active nav link
    document.addEventListener('DOMContentLoaded', function() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (currentPath === linkPath || 
                (currentPath === '' && linkPath === 'index.html')) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    });
});
