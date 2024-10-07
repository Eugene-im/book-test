import { makeAutoObservable } from "mobx";
import { bookModel } from "../modules/Books/Books.model";
import { booksController } from "../modules/Books/Books.ctrl";
import { popupController } from "./ui/Popup/Popup.ctrl";

export class GlobalController {
    isGlobal = true;
    constructor() {
        makeAutoObservable(this);
    }
    setGlobal(value: boolean) {
        this.isGlobal = value;
    }
    handleGetAllBooks = async (userName: string) => {
        this.setGlobal(true);
        const books = await bookModel.getBooks(userName);
        booksController.setBooks(books || []);
    }
    handleGetUserBooks = async (userName: string) => {
        this.setGlobal(false);
        const books = await bookModel.getUserBooks(userName);
        booksController.setBooks(books || []);
    }
    handleResetBooksList = async (userName: string) => {
        this.setGlobal(true);
        await bookModel.resetBooksList(userName);
        booksController.resetLocalBooksList();
    }
    handleAddBook = () => {
        popupController.openPopup();
    }
}

export const globalController = new GlobalController();