import { GlobalController } from './Global.ctrl';
import { bookModel } from '../modules/Books/Books.model';
import { booksController } from '../modules/Books/Books.ctrl';
import { popupController } from './ui/Popup/Popup.ctrl';

jest.mock('../modules/Books/Books.model', () => ({
  bookModel: {
    getBooks: jest.fn(),
    getUserBooks: jest.fn(),
    resetBooksList: jest.fn(),
  },
}));

jest.mock('../modules/Books/Books.ctrl', () => ({
  booksController: {
    setBooks: jest.fn(),
    resetLocalBooksList: jest.fn(),
  },
}));

jest.mock('./ui/Popup/Popup.ctrl', () => ({
  popupController: {
    openPopup: jest.fn(),
  },
}));

describe('GlobalController', () => {
  it('should set isGlobal to true on construction', () => {
    const globalController = new GlobalController();
    expect(globalController.isGlobal).toBe(true);
  });

  it('should allow isGlobal to be set', () => {
    const globalController = new GlobalController();
    globalController.setGlobal(false);
    expect(globalController.isGlobal).toBe(false);
  });

  it('handleGetAllBooks should set isGlobal to true and call setBooks with books', async () => {
    const mockBooks = [{ id: 1, title: 'Test Book' }];
    bookModel.getBooks = jest.fn().mockResolvedValue(mockBooks);
    const globalController = new GlobalController();
    await globalController.handleGetAllBooks('testUser');
    expect(globalController.isGlobal).toBe(true);
    expect(bookModel.getBooks).toHaveBeenCalledWith('testUser');
    expect(booksController.setBooks).toHaveBeenCalledWith(mockBooks);
  });

  it('handleGetUserBooks should set isGlobal to false and call setBooks with user books', async () => {
    const mockUserBooks = [{ id: 2, title: 'User Book' }];
    bookModel.getUserBooks = jest.fn().mockResolvedValue(mockUserBooks);
    const globalController = new GlobalController();
    await globalController.handleGetUserBooks('testUser');
    expect(globalController.isGlobal).toBe(false);
    expect(bookModel.getUserBooks).toHaveBeenCalledWith('testUser');
    expect(booksController.setBooks).toHaveBeenCalledWith(mockUserBooks);
  });

  it('handleResetBooksList should set isGlobal to true and call resetLocalBooksList', async () => {
    const globalController = new GlobalController();
    await globalController.handleResetBooksList('testUser');
    expect(globalController.isGlobal).toBe(true);
    expect(bookModel.resetBooksList).toHaveBeenCalledWith('testUser');
    expect(booksController.resetLocalBooksList).toHaveBeenCalled();
  });

  it('handleAddBook should call openPopup', () => {
    const globalController = new GlobalController();
    globalController.handleAddBook();
    expect(popupController.openPopup).toHaveBeenCalled();
  });

});