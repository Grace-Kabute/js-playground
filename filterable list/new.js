//get the input
//add an event listner
//get the value in input
//get the ul
//get the li
//loop though the li
//give the condition
let input = document.querySelector('#search')
input.addEventListener('keyup', (e) => {
    let inputValue = document.querySelector('#search').value.toUpperCase()
    let ul = document.querySelector("#names");
    let li = ul.querySelectorAll("li.list-names")

    for (let i = 0; i < li.length; i++) {
        let a = li[i].querySelectorAll('a')[0]
        if (a.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
            li[i].style.display = ''

        } else {
            li[i].style.display = 'none'
        }
    }

})