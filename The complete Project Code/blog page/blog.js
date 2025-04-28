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

    // Blog Post Filter by Category
    const filterButtons = document.querySelectorAll('.filter-button');
    const blogPosts = document.querySelectorAll('.blog-post');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter blog posts
            blogPosts.forEach(post => {
                if (filter === 'all' || post.dataset.category === filter) {
                    post.style.display = 'block';
                    post.classList.add('animate-on-scroll');
                } else {
                    post.style.display = 'none';
                    post.classList.remove('animated');
                }
            });

            // Re-trigger scroll animations for visible posts
            animateOnScroll();
        });
    });

    // Blog Search Functionality
    const searchInput = document.querySelector('#blog-search');
    const searchButton = document.querySelector('#search-button');

    if (searchInput && searchButton) {
        const performSearch = () => {
            const query = searchInput.value.toLowerCase().trim();
            blogPosts.forEach(post => {
                const title = post.querySelector('.blog-title').textContent.toLowerCase();
                const content = post.querySelector('.blog-excerpt').textContent.toLowerCase();
                if (title.includes(query) || content.includes(query)) {
                    post.style.display = 'block';
                    post.classList.add('animate-on-scroll');
                } else {
                    post.style.display = 'none';
                    post.classList.remove('animated');
                }
            });
            animateOnScroll();
        };

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Blog Post Hover Effect
    blogPosts.forEach(post => {
        post.addEventListener('mouseenter', () => {
            post.style.transition = 'transform 0.3s, box-shadow 0.3s';
        });
        post.addEventListener('mouseleave', () => {
            post.style.transition = 'transform 0.3s, box-shadow 0.3s';
        });
    });

    // Form Submission Handling (for newsletter or contact form)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const formMessage = document.querySelector('.form-message');

            // Simulate form submission (replace with actual API call in production)
            setTimeout(() => {
                formMessage.textContent = 'Thank you for subscribing! Stay tuned for more updates.';
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