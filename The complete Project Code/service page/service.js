document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Animate Elements on Scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Service Card Hover Effect (Optional: Enhance interactivity)
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s, box-shadow 0.3s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.3s, box-shadow 0.3s';
        });
    });

    // Service Filter (If you have a filterable services section)
    const filterButtons = document.querySelectorAll('.filter-button');
    const serviceItems = document.querySelectorAll('.service-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter services
            serviceItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    item.classList.add('animate-on-scroll');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('animated');
                }
            });

            // Re-trigger scroll animations for visible items
            animateOnScroll();
        });
    });

    // Form Submission Handling
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const formMessage = document.querySelector('.form-message');
            
            // Simulate form submission (replace with actual API call in production)
            setTimeout(() => {
                formMessage.textContent = 'Thank you for your inquiry! Our team will contact you soon.';
                formMessage.style.color = '#28a745';
                contactForm.reset();
            }, 1000);
        });
    }

    // Dynamic Year for Footer
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});