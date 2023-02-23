//get the input element
let input = document.querySelector('#search');
//add event listner.
// input.addEventListner('keyup', filter)
search.addEventListener('keyup', (e) => {
    //get the value of the input
    let inputValue = document.querySelector('#search').value.toUpperCase();
    //get the ul
    let ul = document.querySelector('#names');
    //get all the collection items
    let li = ul.querySelectorAll('.list-names');
    //the queryselectorall gives a node list which is an array now we loop through the array to target a specific list item.
    for (i = 0; i < li.length; i++) {
        //get names
        let a = li[i].querySelectorAll('a')[0]; //the index zero indicates that we are on the current link.
        //after that, add the condition of how to loop the list
        // let firstLetter = li[i].charAt(0).toUpperCase();
        // if (firstLetter === indexOf(inputValue) > -1) {
        //     li[i].style.display = '';
        // } else {
        //     li[i].style.display = 'none';
        // }
        if (a.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }

    }
})