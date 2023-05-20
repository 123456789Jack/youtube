let Con_dotted = document.querySelector('.con'),
bars = document.querySelector('#bars'),
Container3 = document.querySelector('.container');


let icon = document.querySelector('#dotted_icon')

icon.addEventListener('click', () => {
    Con_dotted.classList.toggle('active')
});


let btn = document.querySelector('.btn1'),
Container = document.querySelector('.container2');
 
let video = document.querySelector('.video');

let Icon = document.querySelector('#icon'),
Container2 = document.querySelector('.container2');

btn.addEventListener('click', () => {
    event.preventDefault();
    Container.style.display = 'block'
    Container.style.display = 'flex'
    
});

Icon.addEventListener('click', () => {
    event.preventDefault();
    Container.style.display = 'none'
});