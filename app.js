const btn = document.getElementById('btn');

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

document.body.style.backgroundColor = getRandomColor();

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});
