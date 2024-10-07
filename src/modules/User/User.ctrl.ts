import { makeAutoObservable } from "mobx";

class UsersController {
  userName: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setUserName(userName: string) {
    this.userName = userName;
  }

  resetUserName() {
    this.userName = "";
  }
}

export const usersController = new UsersController();
