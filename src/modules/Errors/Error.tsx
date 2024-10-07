import { observer } from "mobx-react";
import React from "react";
import { errorsController } from "./Errors.ctrl";

export const ErrorComponent = observer(() => {
  const { error } = errorsController;
  return <span>{error}</span>;
});
