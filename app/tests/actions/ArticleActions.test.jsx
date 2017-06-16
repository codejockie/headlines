import axios from 'axios';
import expect from 'expect';
import sinon from 'sinon';

import getArticle from '../../actions/ArticleActions.jsx';
import dispatcher from '../../dispatcher.jsx';
import sampleArticle from '../../mock/sampleArticle.json';

describe('Article Actions', () => {
  let mockAxios;
  let dispatchSpy;

  beforeEach(() => {
    mockAxios = sinon.stub(axios, 'get').callsFake(() => (
      Promise.resolve({
        data: {
          article: sampleArticle,
        },
      })
    ));
    dispatchSpy = sinon.spy(dispatcher, 'dispatch');
  });

  afterEach(() => {
    axios.get.restore();
    dispatcher.dispatch.restore();
  });

  describe('getArticle', () => {
    it('should dispatch an action', () => {
      getArticle('http://www.bbc.co.uk/sport/football/40147044').then(() => {
        expect(mockAxios.calledOnce).toBe(true);
        expect(dispatchSpy.calledOnce).toEqual(true);
        dispatcher.dispatch({
          type: 'RECEIVE_ARTICLE',
          article: sampleArticle,
        });
        expect(dispatchSpy.getCall(0).args[0].type).toBe('RECEIVE_ARTICLE');
        expect(dispatchSpy.getCall(0).args[0].article).toBe(sampleArticle);
      });
    });
  });
});
