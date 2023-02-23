//get the modal element
let modal = document.querySelector('#simple-modal');
let button = document.querySelector('#btn');

let span = document.querySelector('.closebtn')
button.addEventListener('click', openModal)
    //function open modal
function openModal() {
    modal.style.display = 'block'
}
span.addEventListener('click', close)
window.addEventListener('click', clickOutside)

function close() {
    modal.style.display = 'none'
}
//add event listener to window so that when you click on it the modal still closes
function clickOutside(e) {
    if (e.target === modal) {
        modal.style.display = 'none'
    }
}