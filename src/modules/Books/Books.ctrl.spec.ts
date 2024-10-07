import { booksController } from "./Books.ctrl";
import { Book } from "./Books.type";

describe("BooksController", () => {
  afterEach(() => {
    booksController.resetLocalBooksList();
  });

  describe("setBooks", () => {
    it("should set the books list", () => {
      const books: Book[] = [
        { id: 1, name: "Test Book 1", author: "Test Author 1", ownerId: "1" },
      ];
      booksController.setBooks(books);
      expect(booksController.booksList).toEqual(books);
    });
  });

  describe("addBookTolist", () => {
    it("should add a book to the list", () => {
      const book: Book = {
        id: 1,
        name: "Test Book 1",
        author: "Test Author 1",
        ownerId: "1",
      };
      booksController.addBookTolist(book);
      expect(booksController.booksList).toContainEqual(book);
    });
  });

  describe("resetLocalBooksList", () => {
    it("should reset the books list to empty", () => {
      const books: Book[] = [
        { id: 1, name: "Test Book 1", author: "Test Author 1", ownerId: "1" },
      ];
      booksController.setBooks(books);
      booksController.resetLocalBooksList();
      expect(booksController.booksList).toEqual([]);
    });
  });
});
