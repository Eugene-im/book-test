import { makeAutoObservable } from "mobx";
import { errorsController } from "../Errors/Errors.ctrl";
import { AddBookRequest, Book } from "./Books.type";
import booksRepository from "./Books.repository";

export class BookModel {

    constructor() {
        makeAutoObservable(this);
    }
    async getBooks(userName: string) {
        try {
            return await booksRepository.getBooks({ userName });

        } catch (error: any) {
            errorsController.setError(error?.message || JSON.stringify(error));
        }
    }

    async getUserBooks(userName: string) {
        try {
            return await booksRepository.getUserBooks({ userName });
        } catch (error: any) {
            errorsController.setError(error?.message || JSON.stringify(error));
        }
    }

    async addBook(data: AddBookRequest) {
        try {
            await booksRepository.addBook(data);
        } catch (error: any) {
            errorsController.setError(error?.message || JSON.stringify(error));
        }
    }

    async resetBooksList(userName: string) {
        try {
            await booksRepository.resetBooks({ userName });
        } catch (error: any) {
            errorsController.setError(error?.message || JSON.stringify(error));
        }
    }
}

export const bookModel = new BookModel();