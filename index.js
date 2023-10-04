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

        const titlePart = document.createElement("p") 
        booksDiv.append(titlePart) 
        titlePart.innerText = myLibrary[myLibrary.length - 1].title
        
        const authorPart = document.createElement("p") 
        booksDiv.append(authorPart) 
        authorPart.innerText = myLibrary[myLibrary.length - 1].author

        const numPagesPart = document.createElement("p") 
        booksDiv.append(numPagesPart) 
        numPagesPart.innerText = myLibrary[myLibrary.length - 1].numPages

        const readPart = document.createElement("p") 
        booksDiv.append(readPart) 
        readPart.innerText = myLibrary[myLibrary.length - 1].read
}

const submitButton = document.getElementById("submit-btn")
const bookSubmitForm = document.getElementById("bookSubmitForm")

submitButton.addEventListener("click", function(e){
    e.preventDefault()
    const bookTitle = document.getElementById("book-title")
    const author = document.getElementById("author")
    const numPages =  document.getElementById("numPages")
    let read = document.getElementById("read")

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
        if(read.checked == false){
            read.value = "not read"
        }
        const book = new Book(bookTitle.value, author.value, numPages.value, read.value)
        myLibrary.push(book)
        addBookToLibrary()
        bookSubmitForm.reset()
    }


    
})