import { booksController } from "./Books.ctrl";
import { bookModel } from "./Books.model";
import { FormValuesType } from "./BooksForm.type";

export const BooksFormSubmit = async (userName: string, values: FormValuesType) => {
    const book = {
        id: Date.now(),
        ownerId: Math.random().toString(36).substring(7),
        ...values
    }
    await bookModel.addBook({
        userName,
        book
    });
    booksController.addBookTolist(book)

};