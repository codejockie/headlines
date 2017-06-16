import axios from 'axios';
import expect from 'expect';
import sinon from 'sinon';

import { loadHeadlines } from '../../actions/HeadlineActions.jsx';
import dispatcher from '../../dispatcher.jsx';
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

  describe('loadHeadlines', () => {
    it('dispatches an action with an action type of \'RECEIVE_HEADLINES\'', () => {
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

    it('dispatches an action with sampleHeadlines as headlines data', () => {
      loadHeadlines().then(() => {
        dispatcher.dispatch({
          type: 'RECEIVE_HEADLINES',
          headlines: sampleHeadlines,
        });
        expect(dispatchSpy.getCall(0).args[0].headlines).toBe(sampleHeadlines);
      });
    });
  });
});
