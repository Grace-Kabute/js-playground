document.querySelector("#form").addEventListener('input', convert)
document.querySelector('.output').style.visibility = "hidden";

function convert(e) {
    document.querySelector('.output').style.visibility = "visible";
    let pounds = e.target.value;
    document.querySelector('.primary').innerHTML = pounds / 0.0022046;
    document.querySelector('.success').innerHTML = pounds / 2.2046;
    document.querySelector('.danger').innerHTML = pounds * 16;

}
//assignment. add code where you can get pounds from other measures
//have select list
//or
//add other text inputr