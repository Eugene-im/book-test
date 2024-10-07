import { observer } from "mobx-react";
import { usersController } from "./User.ctrl";

export const UserComponent = observer(() => {
  const { userName } = usersController;
  return <h1>Hi {userName}!</h1>;
});
