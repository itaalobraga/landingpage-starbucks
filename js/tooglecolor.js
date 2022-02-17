const thumbGreen = document.getElementById('thumb-green');
const thumbPink = document.getElementById('thumb-pink');
const thumbPurple = document.getElementById('thumb-purple');

const cup = document.getElementById('cup')

const circle = document.querySelector('div.circle')

const colorGreen = () => {
    cup.src = 'img/img1.png';
    circle.style.backgroundColor = '#017143';
    cup.style.opacity = '.4';
    cup.style.transform = 'scale(.9)';
    setTimeout(setDefault, 400);
};

const colorPink = () => {
    cup.src = 'img/img2.png'
    circle.style.backgroundColor = '#f07697';
    cup.style.opacity = '.4'
    cup.style.transform = 'scale(.9)'
    setTimeout(setDefault, 400)
};

const colorPurple = () => {
    cup.src = 'img/img3.png';
    circle.style.backgroundColor = '#ca3ca0';
    cup.style.opacity = '.4';
    cup.style.transform = 'scale(.9)';
    setTimeout(setDefault, 400);
};


const setDefault = () => {
    cup.style.opacity = '1';
    cup.style.transform = 'scale(1)';
    cup.style.transform = 'rotate(-5deg)';

}