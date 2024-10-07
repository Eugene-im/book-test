import { Book } from "./Books.type";
import { makeAutoObservable } from "mobx";

class BooksController {
  booksList: Book[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setBooks(books: Book[]) {
    this.booksList = books;
  }

  addBookTolist(book: Book) {
    this.booksList = [...this.booksList, book];
  }

  resetLocalBooksList() {
    this.booksList = [];
  }

}

export const booksController = new BooksController();
