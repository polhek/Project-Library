
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    console.log("dsafsa")
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


let myLibrary = [
    {
        title: "Harry Potter - and the Philosopher's Stone",
        author: 'J. K. Rowling',
        pages: 223,
        readStatus: true
    },
    {
        title: 'Harry Potter',
        author: 'J.R.R. Tolkien',
        pages: 304,
        readStatus: true
    }

];

function Book(title, author, pages, readStatus) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus
}


function addBookToLibrary() {

}

function render() {
    const books = myLibrary;
    books.forEach((book) => console.log(book));
    console.log(books);
}
render();



