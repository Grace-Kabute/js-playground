let element = document.createElement('div');
element.innerHTML = 'code'
document.body.appendChild(element);

element = document.createElement('button');
element.innerHTML = 'click me'
document.body.appendChild(element)

element = document.createElement('div');
element.innerHTML = 'read novel'
document.body.appendChild(element)

element = document.createElement('div');
element.innerHTML = 'Make dinner'
document.body.appendChild(element)
    // instead of rewriting the whole code to make the ist, we can use a function which is a line of code that is reusadle. see example below.

function list(tasks) {
    let element = document.createElement('div')
    element.innerHTML = tasks
    document.body.appendChild(element)
}
list('Get groceries');
list('Clean house');
list('read novel');

//we can also write a function fofferently. it's called an arrow method.
//quiz
function greeting(firstName) {
    console.log('hello ' + firstName)
}
greeting('simon')
    //creating an array

let todos = ['sleep', 'watch', 'dance']
todos.push('cook')

todos.forEach(function(todaysTodo) {
    let element = document.createElement('div')
    element.innerText = todaysTodo
    document.body.appendChild(element)
})

function toUpper(['hello ', 'world']) {
    console.log(toUpper.push())
}