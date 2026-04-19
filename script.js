function revealGifts() {
    const box = document.getElementById('box-wrapper');
    const container = document.getElementById('gift-container');
    const cards = document.querySelectorAll('.gift-card');

    // 1. Shrink and hide the box
    box.style.transition = 'all 0.5s ease';
    box.style.transform = 'scale(0)';
    box.style.opacity = '0';

    setTimeout(() => {
        box.classList.add('hidden');
        container.classList.remove('hidden');
        
        // 2. Reveal each card one by one with a delay
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 800); // 0.8 seconds between each gift
        });
    }, 500);
}

// Add the click listener to the box
document.getElementById('mystery-box').addEventListener('click', revealGifts);
