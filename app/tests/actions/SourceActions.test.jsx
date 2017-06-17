import axios from 'axios';
import expect from 'expect';
import sinon from 'sinon';

import loadSources from '../../actions/SourceActions.jsx';
import dispatcher from '../../dispatcher.jsx';
import sampleSources from '../../mock/sampleSources.json';

describe('Source Actions', () => {
  let mockAxios;
  let dispatchSpy;

  beforeEach(() => {
    mockAxios = sinon.stub(axios, 'get').callsFake(() => (
      Promise.resolve({
        data: {
          sources: sampleSources,
        },
      })
    ));
    dispatchSpy = sinon.spy(dispatcher, 'dispatch');
  });

  afterEach(() => {
    axios.get.restore();
    dispatcher.dispatch.restore();
  });

  describe('loadSources', () => {
    it('calls axios and dispatcher at least once', () => {
      loadSources().then(() => {
        expect(mockAxios.calledOnce).toBe(true);
        expect(dispatchSpy.calledOnce).toEqual(true);
      });
    });

    it('dispatches an action with a type of \'RECEIVE_SOURCES\'', () => {
      loadSources().then(() => {
        dispatcher.dispatch({
          type: 'RECEIVE_SOURCES',
          sources: sampleSources,
        });
        expect(dispatchSpy.getCall(0).args[0].type).toBe('RECEIVE_SOURCES');
      });
    });

    it('dispatches an action with sampleSources as sources data', () => {
      loadSources().then(() => {
        dispatcher.dispatch({
          type: 'RECEIVE_SOURCES',
          sources: sampleSources,
        });
        expect(dispatchSpy.getCall(0).args[0].sources).toBe(sampleSources);
      });
    });
  });
});
