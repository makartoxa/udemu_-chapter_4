'use strict';

<<<<<<< HEAD
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

console.log(style.display);

console.log(document.documentElement.scrollTop);

// document.documentElement.scrollTop = 0; поднятие на начало страницы
=======
function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}
User.prototype.exit = function (name) {
    console.log(`Пользователь ${this.name} ушел`)
}

const ivan = new User ('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();
alex.exit();

console.log(ivan);
console.log(alex);
>>>>>>> 54fabc0 (add function constructor)
