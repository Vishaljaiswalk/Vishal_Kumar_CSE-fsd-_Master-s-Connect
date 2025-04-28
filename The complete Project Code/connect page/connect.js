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

    // Contact Form Validation and Submission
    const contactForm = document.querySelector('#contact-form');
    const formMessage = document.querySelector('.form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const message = formData.get('message').trim();

            // Basic client-side validation
            if (!name || !email || !message) {
                formMessage.textContent = 'Please fill out all fields.';
                formMessage.style.color = '#d32f2f';
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = '#d32f2f';
                return;
            }

            // Simulate form submission (replace with actual API call in production)
            setTimeout(() => {
                formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                formMessage.style.color = '#28a745';
                contactForm.reset();
            }, 1000);
        });
    }

    // Contact Info Hover Effect
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'transform 0.3s';
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transition = 'transform 0.3s';
            item.style.transform = 'scale(1)';
        });
    });

    // Dynamic Year for Footer
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});