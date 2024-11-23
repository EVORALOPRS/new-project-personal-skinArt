 
const burgerIcon = document.querySelector('.icon-burguer');
const navLink = document.querySelector('.nav-links');


burgerIcon.addEventListener('click',() =>{
    navLink.classList.toggle('active');
});

//Cerramos el menú al hacer click sobre un enlace
document.querySelectorAll('.nav-links a').forEach(link =>{
    link.addEventListener('click',()=> {
        if (window,innerWidth <= 768){
            navLink.classList.remove('active');
       }
    });
});