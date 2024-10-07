import { makeAutoObservable } from "mobx";

export class ErrorsController {
  error: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setError(error: string) {
    this.error = error;
  }
}

export const errorsController = new ErrorsController();
