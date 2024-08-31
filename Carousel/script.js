// script.js

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    let currentIndex = 0;

    // Create indicators dynamically
    images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.carousel-indicator');

    // Navigation controls
    document.querySelector('.prev-btn').addEventListener('click', prevSlide);
    document.querySelector('.next-btn').addEventListener('click', nextSlide);

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[currentIndex].classList.add('active');
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }
});
