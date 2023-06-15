// get the input element
let searchInput = document.querySelector("#search");
// add event listener
searchInput.addEventListener('keyup', (filter))

function filter() {
    // get value of input
    let searchValue = document.querySelector("#search").value.toUpperCase();
    //get the ul
    let ul = document.querySelector("#names")
        // get the li. use a multiple selector
    let li = ul.querySelectorAll("li.list-names")
        //loop through the list of names. remember the names are inside the a tags.
    for (let i = 0; i < li.length; i++) {
        // get the names
        let a = li[i].querySelectorAll('a')[0];
        // check if name matches
        if (a.innerHTML.toUpperCase().indexOf(searchValue) > -1) {
            li[i].style.display = ''
        } else {
            li[i].style.display = 'none';
        }
    }
}