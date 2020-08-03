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
  const readStatus = document.querySelector('input[name="yes_no"]:checked')
    .value;
  // prevent empty fields ...

  if (title === "" || author === "" || pages === "0") {
    alert("Missing data");
  } else {
    const book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
    addNewBookUI(book);
    clearFormFields()
  }
});

function addNewBookUI(book) {
  if (book.readStatus === "yes") {
    i = "checked";
  } else {
    i = "";
  }
  const main = document.querySelector(".main");
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.innerHTML = `<div class="delete_button"><button class="delete btn"><i class="fa fa-trash">
        </i></button></div><div class="title">${book.title}</div><div class="author">${book.author}
        </div><div class="pages">${book.pages}</div><div class="read_status">Read: <input type="checkbox" id="yes" name="readstatus" value="yes" ${i}> 
        </div>`;
  main.appendChild(bookCard);
}

// clear form fields after submit 
function clearFormFields() {
  const myForm = document.getElementById("myForm");
  myForm.reset();
}

// Add event listener to all deleteButton 
const deleteButton = document.querySelectorAll(".delete");

// deletes book UI;
deleteButton.forEach((el) => {
    el.addEventListener("click", function() {
        el.parentElement.parentElement.remove()
        console.log("sas")
    })
}) 