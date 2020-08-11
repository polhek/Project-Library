//DOM
const bookForm = document.querySelector(".book-form");

// Calling a form when clicking on add book button
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  console.log("dsafsa");
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// where the books will be saved...
let myLibrary = [
  {
    title: "Harry Potter - and the Philosopher's Stone",
    author: "J. K. Rowling",
    pages: 223,
    readStatus: "no",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 304,
    readStatus: "yes",
  },
];

// book object
function Book(title, author, pages, readStatus) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.readStatus = readStatus);
}

let i = "";
// render the book on page load...
function render() {
  const books = myLibrary;
  books.forEach((book) => {
    addNewBookUI(book);
  });
}
render();




document.querySelector(".book-form").addEventListener("submit", (e) => {
  // prevent actual submit
  e.preventDefault();

  // get values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const readStatus = document.querySelector('input[name="yes_no"]:checked').value;
  // prevent empty fields ...

  let bookToInsert = "";
  if (title === "" || author === "" || pages === "0") {
    alert("Missing data");
    bookToInsert = {
      title: title,
      author: author,
      pages: pages,
      readStatus: readStatus,
    };
  } else {
    bookToInsert = {
      title: title,
      author: author,
      pages: pages,
      readStatus: readStatus,
    };
    console.log(bookToInsert);

    let bookExists = myLibrary.some((book) => book.title == bookToInsert.title);
    console.log(bookExists);

    if (bookExists == false) {
      const book = new Book(title, author, pages, readStatus);
      myLibrary.push(book);
      addNewBookUI(book);
      clearFormFields();
    } else {
      alert("It already exists");
    }
  }
});

function addNewBookUI(book) {
  if (book.readStatus === "yes") {
    i = "Read";
  } else {
    i = "Not read";
  }
  const main = document.querySelector(".main");
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.innerHTML = `<div class="delete_button"><button class="delete btn"><i class="fa fa-trash">
        </i></button></div><div class="title">${book.title}</div><div class="author">${book.author}
        </div><div class="pages">${book.pages}</div><div class="button_status"><button class="book_status">${i}</button></div>`;
  main.appendChild(bookCard);
}

// clear form fields after submit
function clearFormFields() {
  const myForm = document.getElementById("myForm");
  myForm.reset();
}

// Add event listener to all current and future deleteButtons
document.querySelector(".main").onclick = (ev) => {
  let el = ev.target.classList.contains("fa-trash")
    ? ev.target.parentElement
    : ev.target.classList.contains("delete")
    ? ev.target
    : false;
  if (el) {
    let card = el.parentElement.parentElement;
    // remove array-element from myLibrary...
    myLibrary.splice([...card.parentElement.children].indexOf(card), 1);
    //remove DOM of book...
    card.remove();
  }
};

// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

document.querySelector(".main").addEventListener("click", function (e) {
  if (e.target.classList.contains("book_status")) {
    let bookCard = e.target.parentElement.parentElement;
    // console.log(e.target.textContent)
    if (e.target.textContent == "Not read") {
      e.target.textContent = "Read";
      myLibrary[
        [...bookCard.parentElement.children].indexOf(bookCard)
      ].readStatus = "yes";
    } else if (e.target.textContent == "Read") {
      e.target.textContent = "Not read";
      myLibrary[
        [...bookCard.parentElement.children].indexOf(bookCard)
      ].readStatus = "no";
    }
  }
});
