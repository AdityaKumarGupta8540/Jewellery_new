document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Sticky Header Logic
    const header = document.getElementById('main-header');
    
    function updateHeaderColors(scrolled) {
        if (!header) return;
        
        const logoTexts = header.querySelectorAll('.logo-text');
        const navLinks = header.querySelectorAll('.nav-link');
        const searchInputs = header.querySelectorAll('.search-input');
        const searchIcons = header.querySelectorAll('.search-icon');

        if (scrolled) {
            header.classList.add('scrolled', 'bg-ivory/95', 'backdrop-blur-md', 'shadow-md', 'text-charcoal');
            header.classList.remove('text-ivory');

            logoTexts.forEach(el => {
                el.classList.remove('text-ivory');
                el.classList.add('text-charcoal');
            });

            navLinks.forEach(link => {
                link.classList.remove('text-ivory');
                link.classList.add('text-charcoal');
            });

            searchInputs.forEach(input => {
                input.classList.remove('bg-white/10', 'border-white/20', 'text-ivory', 'placeholder-ivory/60');
                input.classList.add('bg-charcoal/5', 'border-charcoal/20', 'text-charcoal', 'placeholder-charcoal/50');
            });

            searchIcons.forEach(icon => {
                icon.classList.remove('text-ivory/70');
                icon.classList.add('text-charcoal/60');
            });
        } else {
            header.classList.remove('scrolled', 'bg-ivory/95', 'backdrop-blur-md', 'shadow-md', 'text-charcoal');
            if (header.dataset.transparent === 'true') {
                header.classList.add('text-ivory');

                logoTexts.forEach(el => {
                    el.classList.add('text-ivory');
                    el.classList.remove('text-charcoal');
                });

                navLinks.forEach(link => {
                    link.classList.add('text-ivory');
                    link.classList.remove('text-charcoal');
                });

                searchInputs.forEach(input => {
                    input.classList.add('bg-white/10', 'border-white/20', 'text-ivory', 'placeholder-ivory/60');
                    input.classList.remove('bg-charcoal/5', 'border-charcoal/20', 'text-charcoal', 'placeholder-charcoal/50');
                });

                searchIcons.forEach(icon => {
                    icon.classList.add('text-ivory/70');
                    icon.classList.remove('text-charcoal/60');
                });
            }
        }
    }

    if (header) {
        window.addEventListener('scroll', () => {
            updateHeaderColors(window.scrollY > 30);
        });
        // Initial check on load
        updateHeaderColors(window.scrollY > 30);
    }

    // Search form handler
    const searchForms = document.querySelectorAll('.header-search-form');
    searchForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const input = form.querySelector('.search-input');
            if (!input || !input.value.trim()) {
                e.preventDefault();
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('-translate-x-full', 'translate-x-full');
            document.body.style.overflow = 'hidden';
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
            document.body.style.overflow = '';
        });
    }
});
