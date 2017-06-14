import axios from 'axios';
import sinon from 'sinon';

import { loadHeadlines } from '../../actions/HeadlineActions';
import dispatcher from '../../dispatcher';
import sampleHeadlines from '../../mock/sampleHeadlines.json';

describe('Headline Actions', () => {
  let mockAxios;
  let dispatchSpy;

  beforeEach(() => {
    mockAxios = sinon.stub(axios, 'get').callsFake(() => (
      Promise.resolve({
        data: {
          headlines: sampleHeadlines,
        },
      })
    ));
    dispatchSpy = sinon.spy(dispatcher, 'dispatch');
  });

  afterEach(() => {
    axios.get.restore();
    dispatcher.dispatch.restore();
  });

  describe('Test for loadHeadlines method', () => {
    it('should dispatch an action', () => {
      loadHeadlines().then(() => {
        expect(mockAxios.calledOnce).toBe(true);
        expect(dispatchSpy.calledOnce).toEqual(true);
        dispatcher.dispatch({
          type: 'RECEIVE_HEADLINES',
          headlines: sampleHeadlines,
        });
        expect(dispatchSpy.getCall(0).args[0].type).toBe('RECEIVE_HEADLINES');
      });
    });
  });
});
