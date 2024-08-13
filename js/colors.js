const mybutton = document.querySelector('button');
const mybox = document.querySelector('.box');
const colors = ["red", "blue", "yellow", "green", "black", "gray", "pink", "purple"]

mybutton.addEventListener('click', changecolor);

function changecolor() {
    let randomIndex = Math.floor(Math.random() * colors.length)
    console.log(randomIndex)
    mybox.style.backgroundColor =  colors[randomIndex];
}