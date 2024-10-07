import ApiGateway from "../../shared/ApiGateway";
import { AddBookRequest, Book, GetBooksRequest, ResetBooksRequest } from "./Books.type.js";

class BooksRepository {
    httpGateway;

    constructor() {
        this.httpGateway = new ApiGateway();
    }

    getBooks = async (data: GetBooksRequest): Promise<Book[]> => {
        const booksDto = await this.httpGateway.get(`/v1/books/${data.userName}`);
        return booksDto;
    };

    getUserBooks = async (data: GetBooksRequest): Promise<Book[]> => {
        const userBooksDto = await this.httpGateway.get(`/v1/books/${data.userName}/private`);
        return userBooksDto;
    };

    addBook = async (data: AddBookRequest): Promise<boolean> => {
        const bookAddDto = await this.httpGateway.post(`/v1/books/${data.userName}`, data.book);
        return bookAddDto && bookAddDto.status === "ok" ? true : false;
    };

    resetBooks = async (data: ResetBooksRequest): Promise<boolean> => {
        const resetBooksDto = await this.httpGateway.put(`/v1/books/${data.userName}/reset`);
        return resetBooksDto && resetBooksDto.status === "ok" ? true : false;
    };
}

const booksRepository = new BooksRepository();
export default booksRepository;
