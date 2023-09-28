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

const TheMazeRunner = new Book("The Maze Runner" , "James Dashner", "410", "read")
const TheHobbit = new Book("The Hobbit" , "John Ronald Reuel Tolkien", "310", "not read")

myLibrary.push(TheMazeRunner)
myLibrary.push(TheHobbit)

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
addBookToLibrary()