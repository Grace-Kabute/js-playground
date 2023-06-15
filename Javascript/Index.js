//for loop
for (i = 1; i <= 5; i++) {
    console.log('Number is ' + i)
}
//while loop
i = 5
while (i >= 1) {
    console.log('initial numner ' + i)
    i--
}
// how to loop though an array
const todos = [{
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'code with mosh',
        isCompleted: true
    },
    {
        id: 3,
        text: 'read novel',
        isCompleted: false
    }
];
// there are ways to loop over an array other than the for of loop. this are called the high order array methods. they include, foreach loop, map, filter.
//foreach.
//todos.forEach(function(todo) {
// console.log(todo.text);
//});

//map
//syntax
//const todo1 = todos.map(function(todo) {
// return todo.id;
//});
//console.log(todo1);
//in the above, this method will loop through the array then return the values specified in the return method.


//filetr. this is how to use filter.

const todoCompleted = todos.filter(function(todos) {
    return todos.isCompleted
}).map(function(todos) {
    return todos.text
})
console.log(todoCompleted)
    //in the above code, we have looped through the array and returned all the text values that are completed. this is called functional programming and its a powerful tool to manipulate instructions in javascript.

i = 0
if (i >= 1) {
    console.log('number is positive')
} //if the condition is not met then the code does not run.
else if (i < 0) {
    console.log('number is negative')
} else {
    console.log('Number is zero')
}
const birthDates = [{
        name: 'Grace',
        day: 31,
        month: 'May',
        star: 'Gemini'
    },
    {
        name: 'Wanjiru',
        day: 7,
        month: 'June',
        star: 'Gemini'
    },
    {
        name: 'Mercy',
        day: 6,
        month: 'December',
        star: 'scorpio'
    }
]

//map
const person = birthDates.map(function(birthDates) {
    return (birthDates.month)
})
console.log(person)


const time = birthDates.filter(function(birthDates) {
    return (birthDates.star)
})
console.log(time)


//the above is the syntx of ternry operator. they are a shorthand for else if conditions. the '?' represents then while ':' reperesents else.

const y = 0
const number = y > 1 ? 'number is positive' :
    y < 0 ? 'number is negative' : 'number is zero'
console.log(number);
//switches.

const x = 0
const color = x > 0 ? 'red' : x < 0 ? 'blue' : 'yellow'

switch (color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
    case 'yellow':
        console.log('color is yellow')
    default:
        console.log('invalid color')

}

const b = 1
switch (b) {
    case b > 0:
        console.log('number is positive')
        break;
    case b < 0:
        console.log('number is negative')
        break;

    default:
        console.log('number is zero')
        break;
}
//functions. They are a set of statement that perform a task or mathematical calculations.a function can have more than one parameter and they are separated with a coma(, )

function addnum(a = 5, b = 4) {
    console.log(a + b)
}
addnum()

function subtract(a, b) {
    return a - b;
}
//console.log(subtract(5, 4))


//arrow functions. an arrow function is defined by the fat arrow(=>) while using rrow functions, you don't even need to use the return key word.
const Subtract = (a, b) => {
    return a - b
}
const less = Subtract(8, 4)
console.log(less)

const addition = (x, y) => (x + y);

console.log(addition(3, 3))

const timeTable = [{
        monday: 'property law',
        tuesday: 'basic maths',
        wednesday: 'calculus'
    },
    {
        monday: 'algebra',
        tuesday: 'macroeconomics',
        wednesday: 'managerial accounting'
    },
    {
        monday: 'sociology',
        tuesday: 'psychology',
        wednesday: 'political ecomony'
    }
]

timeTable.forEach((units) => console.log(units.monday))
    //map
    //const economics = timeTable.map((economics) => console.log(economics.tuesday))
    //const semester = timeTable.filter((timeTable)).map((timeTable) => console.log(semester.tuesday))

const economics = timeTable.map(function(economics) {
    console.log(economics.monday)
})

// project oriented programming.(OOP). prototypes an classes.