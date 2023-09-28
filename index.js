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