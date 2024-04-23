document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.header');
    const info = document.querySelector('.info');

    header.addEventListener('click', function () {
        const margin = 25; // Adjust the margin value as needed
        const infoOffset = info.offsetTop - margin;
        window.scrollTo({ top: infoOffset, behavior: 'smooth' });
    });
});

