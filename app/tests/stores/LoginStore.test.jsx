import LoginStore from '../../stores/LoginStore.jsx';
import dispatcher from '../../dispatcher.jsx';

describe('Login Store', () => {
  describe('successful login', () => {
    beforeEach(() => {
      dispatcher.dispatch({
        type: 'LOGIN_SUCCESS',
        uid: '1520',
      });
    });

    it('should set the userId on successful login', () => {
      expect(LoginStore.userId).to.equal('1520');
    });
  });

  describe('successful logout', () => {
    beforeEach(() => {
      dispatcher.dispatch({
        type: 'LOGOUT_SUCCESS',
      });
    });

    it('should clear the userId on logout', () => {
      expect(LoginStore.userId).to.equal('');
    });
  });
});
