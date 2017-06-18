import sinon from 'sinon';

import firebase, { googleProvider } from '../../firebase/index.jsx';
import dispatcher from '../../dispatcher.jsx';

describe('Login Actions', () => {
  let dispatcherSpy;
  let mockFirebase;

  beforeEach(() => {
    mockFirebase = sinon.stub(firebase, 'auth').callsFake(() => {});
  });
});
