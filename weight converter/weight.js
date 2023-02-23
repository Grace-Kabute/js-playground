//call the input
document.querySelector('#form').addEventListener('input', convert);
document.querySelector('.output').style.visibility = 'hidden';

function convert(e) {
    document.querySelector('.output').style.visibility = 'visible';
    //target the value input
    let count = e.target.value
        //target the other measures
    document.querySelector('.gramsoutput').innerHTML = count / 0.0022046;
    document.querySelector('.kgoutput').innerHTML = count / 2.2046;
    document.querySelector('.ounceoutput').innerHTML = count * 16;
}