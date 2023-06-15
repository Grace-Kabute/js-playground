  //selctor elements
  //there are two types of selctors, single selectors and 
  //getElemnt selector


  const body = document.getElementsByClassName('form'); //this is can be used as a multiple selctor.
  console.log(body)

  console.log(document.getElementsByClassName('form'))
      //Queryselector works as jquerry
      //it has the same syntax as the get selector. 
  console.log(document.querySelector('.container'))

  const query = document.querySelector('.form')
  console.log(query)
      //multiple selectors.
      //querySelectorAll
  console.log(document.querySelectorAll('.container'))

  //how to loop through the dom.
  //forEach reminder.
  const item = document.querySelectorAll('.item');
  item.forEach((items) => console.log(items)); //arrow function
  //changing or manipilating the dom. 
  const ul = document.querySelector('.nav');

  ul.firstElementChild.textContent = 'hello';
  ul.children[1].innerText = 'node'
  ul.lastElementChild.textContent = 'world';
  ul.lastElementChild.innerHTML = '<h2>Hello</h2>'

  const btn = document.querySelector('button');
  btn.style.background = 'red';
  //EVENTS
  //to add an event, we use(addEventListner) method. the method takes up two parts, one to declare the event and another a funtion. the function takes in an event parameter. it shows the action to take place once the event happens.
  const bttn = document.querySelector('.form');
  bttn.addEventListener('click', (e) => {
      e.preventDefault();
      bttn.style.background = 'maroon'
  })