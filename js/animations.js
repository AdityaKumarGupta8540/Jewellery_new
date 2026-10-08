document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animating once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.fade-up, .fade-in');
    animateElements.forEach(el => observer.observe(el));
    
    // Hero Text Staggered Reveal (run immediately on load)
    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 + (index * 200)); // Stagger effect
    });
});
