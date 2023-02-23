document.querySelector('.output').style.visibility = 'hidden';
document.querySelector('.new').style.visibility = 'hidden';

document.querySelector('#option2').addEventListener('select', converter)

function converter(e) {
    console.log(23);
}
const pounds = document.querySelector('#input-pounds').addEventListener('input', convert)

function convert(e) {
    document.querySelector('.output').style.visibility = 'visible';
    document.querySelector('#input-pounds').style.visibility = 'visible';
    let pounds = e.target.value
        //the target event listner targets the element where the even occured.
    document.querySelector('.primary').innerHTML = pounds / 0.0022046;
    document.querySelector('.success').innerHTML = pounds / 2.2046;
    document.querySelector('.danger').innerHTML = pounds * 16;
    document.querySelector('.secondary').innerHTML = pounds * 16;

};