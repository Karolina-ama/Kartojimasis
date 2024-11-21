
// Exercise: Library System
// You’ll create a class called Library to manage books and track the total number of books across all libraries.

// 1. Class Setup:

// *Create a class called Library.
// *Each library tracks the number of books it holds in a property books.
// *Add a static property totalBooks to track the total number of books across all libraries.
//2.  Methods:

// *addBooks(count): Adds books to the library and updates the total number of books.
// *removeBooks(count): Removes books from the library and updates the total. Ensure the library’s books or the total cannot go below 0.
// *logLibraryBooks(): Logs the number of books in the library to the console.
// *logTotalBooks() (static): Logs the total number of books across all libraries to the console.


 class Library {
    constructor() {
        this.books = 0;
    }

    static totalbooks = 0;

    addBooks(count) {
        this.books += count;
        Library.totalbooks += count;
    }

    removeBooks(count) {
        this.books -= count;
        if (this.books < 0) {
            this.books = 0;
        }
        Library.totalbooks -= count;
        if (Library.totalbooks <0) {
            Library.totalbooks = 0;
        }
    }
 }

 const library1 = new Library();
 const library2 = new Library();

 library1.addBooks(50);
 library2.addBooks(100);
 library1.removeBooks(10);

 console.log(library1.books);
 console.log(library2.books);

 console.log(Library.totalbooks);