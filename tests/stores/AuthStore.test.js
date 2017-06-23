import AuthStore from '../../app/stores/AuthStore';
import dispatcher from '../../app/dispatcher';

describe('Login Store', () => {
  describe('successful login', () => {
    beforeEach(() => {
      dispatcher.dispatch({
        type: 'LOGIN_SUCCESS',
        user: {
          uid: '1520',
          displayName: 'Kennedy',
        },
      });
    });

    it('should set user and userId on successful login', () => {
      expect(AuthStore.userId).to.equal('1520');
      expect(typeof AuthStore.user).to.equal('object');
    });
  });

  describe('successful logout', () => {
    beforeEach(() => {
      dispatcher.dispatch({
        type: 'LOGOUT_SUCCESS',
      });
    });

    it('should clear userId and localStorage on logout', () => {
      expect(AuthStore.userId).to.equal('');
      expect(localStorage.getItem('user')).to.equal(null);
    });
  });
});
