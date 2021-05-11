
const myProgress = document.getElementById('progress');
const myPrevBtn = document.getElementById('pre');
const myNextBtn = document.getElementById('next');
const myCircles = document.querySelectorAll('.circle');

let currentActive = 1;

myNextBtn.addEventListener('click', () => {
    currentActive++

    if (currentActive > myCircles.length) {
        currentActive = myCircles.length;
    }

    update();
});

myPrevBtn.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    myCircles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    myProgress.style.width = (actives.length - 1) / (myCircles.length - 1) * 100 + '%';

    if (currentActive === 1) {
        myPrevBtn.disabled = true;
    } else if (currentActive === myCircles.length) {
        myNextBtn.disabled = true;
    }
else {
        myPrevBtn.disabled = false;
        myNextBtn.disabled = false;
    }
}