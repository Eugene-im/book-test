import { observer } from "mobx-react";
import { popupController } from "./Popup.ctrl";
import { PopupTypes } from "./Popup.type";


export const Popup = observer((props: PopupTypes) => {
    const { isOpen } = popupController;
    const handleClosePopup = () => {
        popupController.closePopup();
    };
    return (
        <div>
            {isOpen && (
                <div>
                    <button onClick={handleClosePopup}>Close</button>
                    {props.children}
                </div>
            )}
        </div>
    );
});