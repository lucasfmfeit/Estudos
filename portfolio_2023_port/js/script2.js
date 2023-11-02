/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/





let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

//aqui vem o js do pop up


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const firstImage = slider.querySelector('#slider-1');
    firstImage.classList.add('main');
});

// O restante do seu código JavaScript existente continua aqui.


const previous = document.querySelector('.previous');
const next2 = document.querySelector('.next');
const images = document.querySelector('.slider').children;
const totalImages = images.length;
let currentIndex = 0;


// Event Listeners to previous and next buttons
previous.addEventListener('click', () => {
    previousImage()
})

next2.addEventListener('click', () => {
    nextImage();
})
    
    
// Function to go to next Image
function nextImage(){

    images[currentIndex].classList.remove('main');
    if(currentIndex == totalImages-1){
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }

    images[currentIndex].classList.add('main');
    
}

// Function to go to previous Image
function previousImage(){

    images[currentIndex].classList.remove('main');
    if(currentIndex == 0){
        currentIndex = totalImages-1;
    }
    else{
        currentIndex--;
    }

    images[currentIndex].classList.add('main');

}

    //aqui vem o segundo

const trabalhoLinks = document.querySelectorAll('.lista_trampos a');

trabalhoLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const trabalhoId = link.parentElement.id;
        updateSlider(trabalhoId);
    });
});

function updateSlider(trabalhoId) {
    const trabalhoIndices = {
        uliving: 1,
        nut: 6,
        cea: 13,
        guac: 16,
        social: 19,
        camp: 22,
        neo: 27,
        lap: 32,
        // Adicione outros trabalhos e seus índices aqui
    };

    const newIndex = trabalhoIndices[trabalhoId];

    if (newIndex !== undefined) {
        images[currentIndex].classList.remove('main');
        currentIndex = newIndex - 1; // Subtrai 1 para corresponder ao índice do array (começando em 0)
        images[currentIndex].classList.add('main');
        scrollToSlider();
    }
}

//teste scroll até slider
function scrollToSlider() {
    const sliderSection = document.querySelector('.container-trabalhos');
    sliderSection.scrollIntoView({ behavior: 'smooth' });
}

//parei