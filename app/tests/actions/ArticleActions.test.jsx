import expect from 'expect';
import axios from 'axios';

import { getArticle } from '../../actions/ArticleActions';
import dispatcher from '../../dispatcher';
import sampleArticle from '../mock/sampleArticle.json';

describe('Article Actions', () => {
  let mockAxios;
  let dispatchSpy;

  beforeEach(() => {
    mockAxios = sinon.stub(axios, 'get').callsFake(() => (
      Promise.resolve({
        data: {
          article: sampleArticle
        }
      })
    ));
    dispatchSpy = sinon.spy(dispatcher, 'dispatch');
  });

  afterEach(() => {
    axios.get.restore();
    dispatcher.dispatch.restore();
  });

  describe('Test for getArticle method', () => {
    it('should dispatch an action', () => {
      getArticle('http://www.bbc.co.uk/sport/football/40147044').then(() => {
        expect(mockAxios.calledOnce).toBe(true);
        expect(dispatchSpy.calledOnce).toEqual(true);
        dispatcher.dispatch({
          type: 'RECEIVE_ARTICLE',
          article: sampleArticle,
        });
        expect(dispatchSpy.getCall(0).args[0].type).toBe('RECEIVE_ARTICLE');
      })
    });
  });
});
