const mybutton = document.querySelector('button');
const image = document.querySelector('img');
const images = ['img1.webp','img2.webp','img3.webp'];

mybutton.addEventListener('click', changeImage);
 
function changeImage(){

    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = 'images/' + images[randomIndex]; 
    console.log(randomIndex)
}
