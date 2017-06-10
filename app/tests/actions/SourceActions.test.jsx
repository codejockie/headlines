import axios from 'axios';
import expect from 'expect';

import { loadSources } from '../../actions/SourceActions';
import dispatcher from '../../dispatcher';
import sampleSources from '../mock/sampleSources.json';

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

  describe('Test for loadSources method', () => {
    it('should dispatch an action', () => {
      loadSources().then(() => {
        expect(mockAxios.calledOnce).toBe(true);
        expect(dispatchSpy.calledOnce).toEqual(true);
        dispatcher.dispatch({
          type: 'RECEIVE_SOURCES',
          sources: sampleSources,
        });
        expect(dispatchSpy.getCall(0).args[0].type).toBe('RECEIVE_SOURCES');
      });
    });
  });
});
