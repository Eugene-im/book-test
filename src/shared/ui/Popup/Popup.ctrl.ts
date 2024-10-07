import { makeAutoObservable } from "mobx";

class PopupController {
    isOpen = false;

    constructor() {
        makeAutoObservable(this);
    }

    openPopup() {
        this.isOpen = true;
    }

    closePopup() {
        this.isOpen = false;
    }
}
export const popupController = new PopupController();