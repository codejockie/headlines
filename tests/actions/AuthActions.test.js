import sinon from 'sinon';

import firebase, { googleProvider } from '../../app/firebase/index';
import dispatcher from '../../app/dispatcher';

describe('Login Actions', () => {
  let dispatcherSpy;
  let mockFirebase;

  beforeEach(() => {
    mockFirebase = sinon.stub(firebase, 'auth').callsFake(() => {});
  });
});
