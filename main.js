 
const burgerIcon = document.querySelector('.icon-burguer');
const navLink = document.querySelector('.nav-links');


burgerIcon.addEventListener('click',() =>{
    navLink.classList.toggle('active');
});