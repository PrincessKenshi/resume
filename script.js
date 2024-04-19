document.addEventListener("DOMContentLoaded", function () {
    const know = document.querySelector('#know');
    const info = document.querySelector('.info');

    know.addEventListener('click', function () {
        const margin = 25; // Adjust the margin value as needed
        const infoOffset = info.offsetTop - margin;
        window.scrollTo({ top: infoOffset, behavior: 'smooth' });
    });
});
