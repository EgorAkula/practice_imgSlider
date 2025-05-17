let images = [
    'https://i.pinimg.com/736x/14/e1/b0/14e1b04d2f6a3bd6d409f85a1ad08164.jpg',
    'https://i.pinimg.com/736x/56/19/1f/56191f49cd77cb2350be2cdab001d551.jpg',
    'https://i.pinimg.com/736x/75/8d/8f/758d8f6b465b7f95bc7891c1b658b4b0.jpg'
];

let btnLeft = document.querySelector('#left');
let btnRight = document.querySelector('#right');
let img = document.querySelector('#slider');
let ul = document.querySelector('#indicatorList');

for(let i=0; i<3; i++) {
    li = document.createElement('li');
    li.classList = 'indicator';
    ul.appendChild(li);
}

let indicators = document.querySelectorAll('.indicator');


let i = 0;
img.src = `${images[0]}`;
indicators[0].style.borderColor = 'snow';

btnLeft.addEventListener('click', (event)=>{
    event.preventDefault();
    prev();
})

btnRight.addEventListener('click', (event)=>{
    event.preventDefault();
    next();
})

function prev() {
    i = i - 1;
    if(i < 0) {
        i = images.length - 1;
    }
    slider.src = `${images[i]}`;
    for(let i = 0; i < images.length; i++){
        indicators[i].style.borderColor = 'transparent';
    }
    indicators[i].style.borderColor = 'snow';
}

function next() {
    i = i + 1;
    if(i > images.length - 1) {
        i = 0;
    }
    slider.src = `${images[i]}`;
    for (let i = 0; i < images.length; i++){
        indicators[i].style.borderColor = 'transparent';
    }
    indicators[i].style.borderColor = 'snow';
}