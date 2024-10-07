import { usersController } from './User.ctrl';

describe('UsersController', () => {
  afterEach(() => {
    usersController.resetUserName();
  });

  it('should initialize with an empty userName', () => {
    expect(usersController.userName).toBe('');
  });

  it('should allow setting a userName', () => {
    const testUserName = 'testUser';
    usersController.setUserName(testUserName);
    expect(usersController.userName).toBe(testUserName);
  });

  it('should reset userName to empty string', () => {
    usersController.setUserName('temporaryUser');
    usersController.resetUserName();
    expect(usersController.userName).toBe('');
  });
});