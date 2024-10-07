export type Book = {
  id: number;
  name: string;
  ownerId: string;
  author: string;
};

export type GetBooksRequest = {
  userName: string;
};

export type AddBookRequest = {
  userName: string;
  book: Book;
};

export type ResetBooksRequest = {
  userName: string;
};

export type BookComponentPropsType = {
  book: Book;
};
