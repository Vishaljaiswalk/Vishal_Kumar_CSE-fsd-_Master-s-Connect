<script>
// Mock search functionality
document.querySelectorAll('.search-bar button').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        const query = input.value;
        if (query) {
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    });
});

// Mock contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
</script>