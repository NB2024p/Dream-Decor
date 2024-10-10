function scrollLeft() {
    const container = document.querySelector('.founders');
    container.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.querySelector('.founders');
    container.scrollBy({ left: 200, behavior: 'smooth' });
}