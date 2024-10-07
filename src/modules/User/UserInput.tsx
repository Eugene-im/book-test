import { observer } from "mobx-react";
import { usersController } from "./User.ctrl";

export const UserInput = observer(() => {

  return (
    <input
      type="text"
      placeholder="What is Your name?"
      onChange={(e) => usersController.setUserName(e.target.value)}
    />
  );
});
