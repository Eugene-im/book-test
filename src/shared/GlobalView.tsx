import { observer } from "mobx-react";
import { booksController } from "../modules/Books/Books.ctrl";
import { BooksComponent } from "../modules/Books/Books";
import { BooksForm } from "../modules/Books/BooksForm";
import { ErrorComponent } from "../modules/Errors/Error";
import { UserComponent } from "../modules/User/User";
import { UserInput } from "../modules/User/UserInput";
import { usersController } from "../modules/User/User.ctrl";
import { Popup } from "./ui/Popup/Popup";
import { globalController } from "./Global.ctrl";

export const GlobalView = observer(() => {
  const { userName } = usersController;
  const { booksList } = booksController;
  const { isGlobal } = globalController;

  return (
    <div>
      <UserInput />
      {userName && <UserComponent />}
      <div className="header">
        <button type="button" disabled={!userName} onClick={() => globalController.handleGetAllBooks(userName)}>
          all books
        </button>
        <button type="button" disabled={!userName} onClick={() => globalController.handleGetUserBooks(userName)}>
          my books
        </button>
      </div>
      <button type="button" disabled={!userName} onClick={() => globalController.handleResetBooksList(userName)}>
        reset books booksList
      </button>
      <div>
        <ErrorComponent />
      </div>
      <button type="button" disabled={!userName} onClick={globalController.handleAddBook}>
        add book
      </button>
      <Popup>
        <BooksForm />
      </Popup>
      {userName && (
        <div className="booksView">
          {isGlobal && <div>Global view</div>}
          {!isGlobal && <div>Local view</div>}
          {!isGlobal && <div>Yours book count: {booksList.length}</div>}
          <div>Books list:</div>
          <BooksComponent />
        </div>
      )}
    </div>
  );
});
