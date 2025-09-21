const btn = document.getElementById('btn');

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

document.body.style.backgroundColor = getRandomColor();

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

const randBtn = document.getElementById('randBtn');
const randResult = document.getElementById('randResult');

randBtn.addEventListener('click', () => {
    const num = Math.floor(Math.random() * 100) + 1;
    randResult.textContent = `Generated number: ${num}`;
});


const form = document.getElementById('feedbackForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
    
    formMessage.textContent = `Thank you, ${name}! Your feedback has been received.`;
    form.reset();
});
