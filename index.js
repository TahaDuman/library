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
    let i = 0;
    while (i < myLibrary.length){
        const booksDiv = document.createElement("div")
        booksSection.append(booksDiv)

        const titlePart = document.createElement("p") 
        booksDiv.append(titlePart) 
        titlePart.innerText = myLibrary[i].title
        
        const authorPart = document.createElement("p") 
        booksDiv.append(authorPart) 
        authorPart.innerText = myLibrary[i].author

        const numPagesPart = document.createElement("p") 
        booksDiv.append(numPagesPart) 
        numPagesPart.innerText = myLibrary[i].numPages

        const readPart = document.createElement("p") 
        booksDiv.append(readPart) 
        readPart.innerText = myLibrary[i].read
        i++
    } 
}

const submitButton = document.getElementById("submit-btn")
submitButton.addEventListener("click", function(e){
    e.preventDefault()
    const bookTitle = document.getElementById("book-title")
    const author = document.getElementById("author")
    const numPages =  document.getElementById("numPages")
    const read = document.getElementById("read")
    const book = new Book(bookTitle.value, author.value, numPages.value, read.value)
    myLibrary.push(book)
    addBookToLibrary()
})

addBookToLibrary()