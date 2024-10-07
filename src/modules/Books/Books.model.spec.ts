import { BookModel } from "./Books.model";
import { errorsController } from "../Errors/Errors.ctrl";
import booksRepository from "./Books.repository";

jest.mock("../Errors/errors.ctrl", () => ({
  errorsController: {
    setError: jest.fn(),
  },
}));

describe("BookModel", () => {
  let bookModel: BookModel;
  const mockBooks = [
    { id: 1, name: "Test Book 1", author: "Test Author 1", ownerId: "1" },
  ];
  const mockBook = {
    id: 1,
    name: "Test Book 1",
    author: "Test Author 1",
    ownerId: "1",
  };
  const userName = "testUser";

  beforeEach(() => {
    bookModel = new BookModel();
    jest.clearAllMocks();
  });

  describe("getBooks", () => {
    it("should call booksRepository.getBooks and return books list", async () => {
      booksRepository.getBooks = jest
        .fn()
        .mockResolvedValue({ data: mockBooks });
      await bookModel.getBooks(userName);
      expect(booksRepository.getBooks).toHaveBeenCalledWith({ userName });
    });

    it("should handle error on API failure", async () => {
      const error = new Error("API Error");
      booksRepository.getBooks = jest.fn().mockRejectedValue(error);
      await bookModel.getBooks(userName);
      expect(errorsController.setError).toHaveBeenCalledWith(error.message);
    });
  });

  describe("getUserBooks", () => {
    it("should call booksRepository.getUserBooks and return user books list", async () => {
      booksRepository.getUserBooks = jest
        .fn()
        .mockResolvedValue({ data: mockBooks });
      await bookModel.getUserBooks(userName);
      expect(booksRepository.getUserBooks).toHaveBeenCalledWith({ userName });
    });

    it("should handle error on API failure", async () => {
      const error = new Error("API Error");
      booksRepository.getUserBooks = jest.fn().mockRejectedValue(error);
      await bookModel.getUserBooks(userName);
      expect(errorsController.setError).toHaveBeenCalledWith(error.message);
    });
  });

  describe("addBook", () => {
    it("should call booksRepository.addBook", async () => {
      booksRepository.addBook = jest.fn().mockResolvedValue({ data: mockBook });
      await bookModel.addBook({ userName, book: mockBook });
      expect(booksRepository.addBook).toHaveBeenCalledWith({
        userName,
        book: mockBook,
      });
    });

    it("should handle error on API failure", async () => {
      const error = new Error("API Error");
      booksRepository.addBook = jest.fn().mockRejectedValue(error);
      await bookModel.addBook({ userName, book: mockBook });
      expect(errorsController.setError).toHaveBeenCalledWith(error.message);
    });
  });

  describe("resetBooksList", () => {
    it("should call booksRepository.resetBooks", async () => {
      booksRepository.resetBooks = jest.fn().mockResolvedValue("ok");
      await bookModel.resetBooksList(userName);
      expect(booksRepository.resetBooks).toHaveBeenCalledWith({ userName });
    });

    it("should handle error on API failure", async () => {
      const error = new Error("API Error");
      booksRepository.resetBooks = jest.fn().mockRejectedValue(error);
      await bookModel.resetBooksList(userName);
      expect(errorsController.setError).toHaveBeenCalledWith(error.message);
    });
  });
});
