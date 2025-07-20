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

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const dynamicTextElement = document.getElementById('dynamic-text');
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
});
