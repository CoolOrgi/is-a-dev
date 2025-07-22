document.addEventListener('DOMContentLoaded', () => {
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateOnScrollElements.forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('nav a, #mobile-menu-overlay a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
                const mobileMenu = document.getElementById('mobile-menu-overlay');
                if (mobileMenu && mobileMenu.classList.contains('is-open')) { // Check if mobileMenu exists
                    mobileMenu.classList.remove('is-open');
                }
            } else if (this.getAttribute('href').endsWith('contact.html')) {
                // For direct links to contact.html, ensure mobile menu closes
                const mobileMenu = document.getElementById('mobile-menu-overlay');
                if (mobileMenu && mobileMenu.classList.contains('is-open')) {
                    mobileMenu.classList.remove('is-open');
                }
            }
        });
    });

    const dynamicTextElement = document.getElementById('dynamic-text');
    // Check if dynamicTextElement exists before proceeding with carousel logic
    if (dynamicTextElement) {
        const phrases = [
            "building engaging web experiences",
            "crafting robust backend systems",
            "designing intuitive user interfaces",
            "developing cross-platform applications",
            "innovating with cutting-edge tech"
        ];
        let currentPhraseIndex = 0;

        function animateTextChange() {
            dynamicTextElement.classList.remove('fade-in-text');
            dynamicTextElement.classList.add('fade-out-text');

            setTimeout(() => {
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                dynamicTextElement.textContent = phrases[currentPhraseIndex];

                dynamicTextElement.classList.remove('fade-out-text');
                dynamicTextElement.classList.add('fade-in-text');
            }, 50);
        }

        dynamicTextElement.textContent = phrases[currentPhraseIndex];
        dynamicTextElement.classList.add('fade-in-text');

        setInterval(animateTextChange, 4000);
    }


    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    // Only add event listeners if the elements exist on the page
    if (mobileMenuButton && mobileMenuOverlay && closeMobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('is-open');
        });

        closeMobileMenuButton.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('is-open');
        });
    }
});
