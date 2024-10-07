import { BooksFormSubmit } from "./BooksForm.ctrl";
import { bookModel } from "./Books.model";
import { booksController } from "./Books.ctrl";

jest.mock("./Books.model", () => ({
  bookModel: {
    addBook: jest.fn(),
  },
}));

jest.mock("./Books.ctrl", () => ({
  booksController: {
    addBookTolist: jest.fn(),
  },
}));

describe("BooksFormSubmit", () => {
  const userName = "testUser";
  const formValues = {
    name: "Test Book 1",
    author: "Test Author 1",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call bookModel.addBook with correct parameters", async () => {
    await BooksFormSubmit(userName, formValues);

    expect(bookModel.addBook).toHaveBeenCalledWith({
      userName,
      book: expect.objectContaining({
        ...formValues,
      }),
    });
  });

  it("should call booksController.addBookTolist with the new book", async () => {
    await BooksFormSubmit(userName, formValues);

    expect(booksController.addBookTolist).toHaveBeenCalledWith(
      expect.objectContaining({
        ...formValues,
      })
    );
  });

  it("should generate a unique id and ownerId for the new book", async () => {
    await BooksFormSubmit(userName, formValues);

    expect(booksController.addBookTolist).toHaveBeenCalledWith(
      expect.objectContaining({
        id: expect.any(Number),
        ownerId: expect.any(String),
      })
    );
  });
});
