//remember before you go into a break down....we are concentrating on javascript right now. responsiveness and the styling is no big deal. you know how to make it responsive just don't stress over it right now. we are here to perfect javascript.
//create a class book
class Book {
    constructor(Title, Author, ISBN) {
        this.Title = Title;
        this.Author = Author;
        this.Isbn = ISBN;
    }
}
//class ui. in the ui clas we add tasks like display,add,remove. ie, its a class with several constructors each for a specific task
class UI {
    static displayBooks() {

            //loop through the books
            const books = store.getBooks();
            books.forEach((book) => {
                return UI.addBookToList(book)
            })

        }
        //create the add book list method
    static addBookToList(book) {
        //create the row to put in the tbody
        const list = document.querySelector('#table-body')
            //create a tr
        const row = document.createElement("tr")
        row.innerHTML = `
        <td>${book.Title}</td>
        <td>${book.Author}</td>
        <td>${book.Isbn}</td>
        <td> <a href='#' class="delete"> </a> </td>
        `
        list.append(row);
    }
    static deleteBook(el) {
            if (el.classList.contains('delete')) {
                el.parentElement.parentElement.remove();
            }
        }
        //the above static method we want to give the delete button the event to remove a book. so we target the actual list and give it a condition that if it contains the class delete then it should be delete the parent of the parent element.
    static showAlert(message, className) {
        const div = document.createElement('div')
            //add class
        div.className = `${className}`
            //add text
        div.append(document.createTextNode(message));
        //insert it
        const container = document.querySelector('.container')
        const form = document.querySelector('.wrapper')
        container.insertBefore(div, form)
            //make vanish in 3 seconds
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000)
        setTimeout(() => {
            document.querySelector('.alert-1').remove()
        }, 3000)

        setTimeout(() => {
                document.querySelector('.alert-2').remove()
            }, 3000)
            // <div class="alert alert-success">fill all the fields</div>. this is the typical div element we are tring to create with javascript.
    }
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
//create the store class. this deals with the local strorage. local storage stores key value pairs
class store {
    //get books from the inputs
    static getBooks(book) {
            //create a string version of the array of books.NB you can't store objects in the local storage. it has to be a string.
            let books;
            if (localStorage.getItem('books') === null) {
                books = [];
            } else {
                books = JSON.parse(localStorage.getItem('books'));
            }
            return books;
        }
        //add the book to storage
    static addBook(book) {
            //get book from local storage
            const books = store.getBooks(book);
            books.push(book);
            localStorage.setItem('books', JSON.stringify(books))
        }
        //remove book from storage
    static removeBook(isbn) {
        //remove book by it's isbn coz it will be unique.
        const books = store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                book.splice(index, 1); //slice it out of the array
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}
//event display books
document.addEventListener('DOMContentLoaded', UI.displayBooks)
    //event to add a book
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    //get form values
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const ISBN = document.querySelector('#isbn').value
        //validate
    if (title === '' || author === '' || ISBN === '') {
        UI.showAlert('please fill all the fields', 'alert')
    } else {
        //instantiate a book from the Book class
        const book = new Book(title, author, ISBN)

        // add book to UI
        UI.addBookToList(book);
        //Add a method of clearFields() so that once you submit the book, the input fields clears. you create a function inside the ui first then call it after the addbook method.

        //show success mesage
        UI.showAlert('added successfully', 'alert-1')
            //add book to store
        store.addBook(book)

        UI.clearFields();
        //event remove book. since we have more than one delete button, we use event propagation to target the multiple delete buttons. where we select the whole book. then give it an event of delete but with a condition that only when the delete button is clicked.
    }

    //create 
    document.querySelector('#form').addEventListener('click', (e) => {
            UI.deleteBook(e.target);
            //UI.showAlert('book removed', 'alert-2')
        })
        //delete book from store
    store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //now store the book in local storage so that when refreshed, the book does not disappear


})