const myLibrary = []

function Book(title, author, numPages, read){
    this.title = title
    this.author = author
    this.numPages = numPages
    this.read = read
    this.info = function(){
        console.log(title + " "+ author + " " + numPages + " " + read)
    }
}

function addBookToLibrary(){
    const booksSection = document.getElementById("books-section")
        const booksDiv = document.createElement("div")
        booksSection.append(booksDiv)

        const titlePart = document.createElement("h3") 
        booksDiv.append(titlePart) 
        titlePart.innerText = myLibrary[myLibrary.length - 1].title
        
        //
        const authorDiv = document.createElement("div")

        const authorPart = document.createElement("p")
        const authorTag = document.createElement("p")
        authorDiv.classList.add("author-div")
        authorTag.classList.add("tags")
        authorPart.classList.add("inline")
        authorTag.innerText = "Author: "
        authorDiv.append(authorTag)
        authorDiv.append(authorPart) 
        booksDiv.append(authorDiv)
        authorPart.innerText = myLibrary[myLibrary.length - 1].author
        //
        const numPagesDiv = document.createElement("div")

        const numPagesPart = document.createElement("p") 
        const numPagesTag = document.createElement("p")
        numPagesDiv.classList.add("num-pages-div")
        numPagesTag.classList.add("tags")
        numPagesPart.classList.add("inline")
        numPagesTag.innerText = "Number of pages: "
        numPagesDiv.append(numPagesTag)
        numPagesDiv.append(numPagesPart) 
        booksDiv.append(numPagesDiv)
        numPagesPart.innerText = myLibrary[myLibrary.length - 1].numPages

        const readPart = document.createElement("p") 
        readPart.classList.add("read-part")
        booksDiv.append(readPart)
        if(myLibrary[myLibrary.length - 1].read == "already read"){
            readPart.style.backgroundColor = "var(--read-color)"
        }

        booksDiv.dataset.indexNumber = myLibrary.length - 1

        readPart.innerText = myLibrary[myLibrary.length - 1].read
}

const submitButton = document.getElementById("submit-btn")
const bookSubmitForm = document.getElementById("bookSubmitForm")

const dialog = document.querySelector("dialog");
const addBookBtn = document.getElementById("show-btn")
addBookBtn.addEventListener("click", () =>{
    dialog.showModal()
})

const closeDialogBtn = document.querySelector(".dialog-close-btn")
closeDialogBtn.addEventListener("click", () =>{
    dialog.close()
})

submitButton.addEventListener("click", function(e){
    e.preventDefault()
    const bookTitle = document.getElementById("book-title")
    const author = document.getElementById("author")
    const numPages = document.getElementById("numPages")
    const readCheckbox = document.getElementById("read")
  
    if(bookTitle.value == ""){
      bookTitle.setCustomValidity("Book Title must be filled")
      bookTitle.reportValidity()
    } else if(author.value == ""){
      author.setCustomValidity("Author section must be filled")
      author.reportValidity()
    } else if(numPages.value == ""){
      numPages.setCustomValidity("Number of pages section must be filled with number")
      numPages.reportValidity()
    } else {
      let read = "not read"
      if (readCheckbox.checked) {
        read = "already read"
      }
  
      const book = new Book(bookTitle.value, author.value, numPages.value, read)
      myLibrary.push(book)
      addBookToLibrary()
      bookSubmitForm.reset()
      dialog.close()
    }
  })

/*     const readPart = document.querySelector(".read-part")
    readPart.addEventListener("click", (e)=>{
    console.log("you clicked read part")
    console.log(e.target)
    }) */
