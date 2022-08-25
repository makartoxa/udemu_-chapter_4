'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

// const widht = box.clientWidth;
// const height = box.clientHeight;
// const widht = box.offsetWight;
// const height = box.offsetHeight;
const wight = box.scrollWidth;
const height = box.scrollHeight;

console.log(wight, height);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display)