let modal = document.querySelector('.content')
let modal1 = document.querySelector('.modal')
let button = document.querySelector('.button')
let closes = document.querySelector('#close')
    //add the events
button.addEventListener('click', show);
closes.addEventListener('click', disappear)
window.addEventListener('click', invisible)

function show() {
    modal.style.display = 'block';
}

function disappear() {
    modal.style.display = 'none';
}

function invisible(e) {
    if (e.target === modal1) {
        modal.style.display = 'none';
    }
}