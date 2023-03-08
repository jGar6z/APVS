//Responsive Header
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//Main Slider
let count = 1;

setInterval(function(){
    nextImage();
}, 6000)

function nextImage(){
    count++;
    if (count > 3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

//Change benefits
function showButton1() {
    document.getElementById('img-1').style.display = "block";
    document.getElementById('img-2').style.display = "none";
    document.getElementById('img-3').style.display = "none";
    document.getElementById('img-4').style.display = "none";

    document.querySelector('#btn-1').classList.add("active");
    document.querySelector('#btn-2').classList.remove("active");
    document.querySelector('#btn-3').classList.remove("active");
    document.querySelector('#btn-4').classList.remove("active");
}

function showButton2() {
    document.getElementById('img-1').style.display = "none";
    document.getElementById('img-2').style.display = "block";
    document.getElementById('img-3').style.display = "none";
    document.getElementById('img-4').style.display = "none";

    document.querySelector('#btn-1').classList.remove("active");
    document.querySelector('#btn-2').classList.add("active");
    document.querySelector('#btn-3').classList.remove("active");
    document.querySelector('#btn-4').classList.remove("active");
}

function showButton3() {
    document.getElementById('img-1').style.display = "none";
    document.getElementById('img-2').style.display = "none";
    document.getElementById('img-3').style.display = "block";
    document.getElementById('img-4').style.display = "none";

    document.querySelector('#btn-1').classList.remove("active");
    document.querySelector('#btn-2').classList.remove("active");
    document.querySelector('#btn-3').classList.add("active");
    document.querySelector('#btn-4').classList.remove("active");
}

function showButton4() {
    document.getElementById('img-1').style.display = "none";
    document.getElementById('img-2').style.display = "none";
    document.getElementById('img-3').style.display = "none";
    document.getElementById('img-4').style.display = "block";

    document.querySelector('#btn-1').classList.remove("active");
    document.querySelector('#btn-2').classList.remove("active");
    document.querySelector('#btn-3').classList.remove("active");
    document.querySelector('#btn-4').classList.add("active");
}