import { observer } from "mobx-react";
import { booksController } from "./Books.ctrl";
import { BookElement } from "./BookElement";

export const BooksComponent = observer(() => {
  const { booksList } = booksController;
  return (
    <nav>
      {booksList.map((book) => (
        <li key={book.id}>
          <BookElement book={book} />
        </li>
      ))}
      {!booksList.length && (
        <span>no books? try to press button "all books"</span>
      )}
    </nav>
  );
});
