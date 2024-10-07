import { popupController } from './Popup.ctrl';

describe('PopupController', () => {
  afterEach(() => {
    popupController.closePopup(); // Ensure popup is closed after each test
  });

  it('should initialize with isOpen set to false', () => {
    expect(popupController.isOpen).toBe(false);
  });

  it('should set isOpen to true when openPopup is called', () => {
    popupController.openPopup();
    expect(popupController.isOpen).toBe(true);
  });

  it('should set isOpen to false when closePopup is called', () => {
    popupController.openPopup(); // Open the popup first
    popupController.closePopup();
    expect(popupController.isOpen).toBe(false);
  });
});