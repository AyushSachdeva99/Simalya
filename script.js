// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Show contact form with selected product
function showContactForm(productName) {
    const productSelect = document.getElementById('product');
    const contactSection = document.getElementById('contact');
    
    // Set the selected product in the form
    if (productSelect) {
        productSelect.value = productName;
    }
    
    // Scroll to contact section
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Add a highlight effect to the form
    const form = document.getElementById('contactForm');
    form.style.transform = 'scale(1.02)';
    form.style.transition = 'transform 0.3s';
    
    setTimeout(() => {
        form.style.transform = 'scale(1)';
    }, 300);
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        product: document.getElementById('product').value,
        message: document.getElementById('message').value
    };
    
    // Display success message
    alert(`Thank you for your interest, ${formData.name}! We'll contact you soon about ${formData.product || 'our products'}.`);
    
    // Reset form
    this.reset();
    
    // In a real implementation, you would send this data to a server
    // Example:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // });
    
    console.log('Form submitted with data:', formData);
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all section elements
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Mobile menu toggle (if you want to add a hamburger menu)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Add navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Product card hover effect enhancement
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--secondary-color)';
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('featured')) {
            this.style.borderColor = 'transparent';
        }
    });
});

// Validate phone number
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) {
        value = value.slice(0, 10);
    }
    e.target.value = value;
});

// Add loading animation for images (placeholder for when you add real images)
function loadImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
        img.onload = function() {
            img.style.opacity = '1';
        };
    });
}

// Call on page load
window.addEventListener('load', loadImages);

// Testimonial slider (simple auto-rotate) - optional enhancement
let testimonialIndex = 0;
function rotateTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (testimonials.length > 0) {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.transform = index === testimonialIndex ? 'scale(1.05)' : 'scale(1)';
            testimonial.style.transition = 'transform 0.3s ease';
        });
        
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    }
}

// Rotate testimonials every 5 seconds (optional)
// setInterval(rotateTestimonials, 5000);

console.log('KeshQueen website loaded successfully! 🌿');
