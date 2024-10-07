import { ErrorsController } from "./Errors.ctrl";

describe('ErrorsController', () => {
  let errorsController: ErrorsController;

  beforeEach(() => {
    errorsController = new ErrorsController();
  });

  it('should initialize with an empty error string', () => {
    expect(errorsController.error).toBe('');
  });

  it('should set an error message', () => {
    const testError = 'Test Error Message';
    errorsController.setError(testError);
    expect(errorsController.error).toBe(testError);
  });

  it('should overwrite the existing error message with a new one', () => {
    errorsController.setError('Initial Error Message');
    const newError = 'New Error Message';
    errorsController.setError(newError);
    expect(errorsController.error).toBe(newError);
  });
});