var Book = function(booktitle, genre, author, read, readdate) {
    this.booktitle = booktitle || "Harry Potter and the Programmer's Stone";
    this.genre = genre || "SCIENCE";
    this.author = author || "Liz 'The Developer' Rowling";
    this.read = read || false;
    if (this.read === false){
        this.readdate = null;
    } else {
        this.readdate = readdate || Date();
    }
};

var fiftyShadesOfJava = new Book("FiftyShadesOfJava", "Computer Erotica", "Christian Fernandez", "read");

var HarryPotter = new Book();

var PurpleHair = new Book("The Loneliest AV Club", "Autobiography", "Purple Hair Nick", "reading");

var PastFourThirty = new Book("Stretch time! With Puppies!", "Self Help", "Cynthia", false);

var Underpants = new Book("Just in Time Sourcing: Underpants", "Self Help", "Underpants Nick", "read", 2013);

var AngieBook = new Book("Mentors, Field Trips and Events, Oh My!", "Autobiography", "Angie", false);

var LizBookTwo = new Book("We're All Awesome");

var arrayOfBooks = [fiftyShadesOfJava, PurpleHair, HarryPotter, PastFourThirty, Underpants, AngieBook, LizBookTwo];


var BookList = function(aListofBooks) {
    this.bookShelf = aListofBooks;
    this.numberOfBooksRead = 0;
    for(var i = 0 ; i < aListofBooks.length; i++){
        if (aListofBooks[i].read === true){
            this.numberOfBooksRead++;
        }
    }

    this.numberOfBooksNotRead = (aListofBooks.length - this.numberOfBooksRead);
    this.nextBook = function() {
        for (var i = 0; i < aListofBooks.length; i++){
            if (aListofBooks[i].read === false){
                return console.log("This is your next book to read: " + aListofBooks[i].booktitle);
            } else if (i == aListofBooks.length) {
                console.log("You've read all the books :(");
            }
        }
    };
    this.currentBook = function(){
        for (var i = 0; i < aListofBooks.length; i++){
            if (aListofBooks[i].read === "reading"){
                return console.log("This is the book you are reading: " + aListofBooks[i].booktitle);
            } else if (i == aListofBooks.length) {
                console.log("You've read all the books :(");
            }
        }
    };
 };

var myBookList = new BookList(arrayOfBooks);
myBookList.nextBook();
myBookList.currentBook();

// console.log(myBookList.numberOfBooksRead);
// console.log(myBookList.numberOfBooksNotRead);
// console.log(BookList().numberOfBooksRead);