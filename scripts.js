document.addEventListener('DOMContentLoaded', function () {
    const rainbowColors = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet'
    ];

    const colorPlaceholders = document.getElementsByClassName('color-placeholder');

    for (const placeholder of colorPlaceholders) {
        const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
        placeholder.style.backgroundColor = randomColor;
    }
});

