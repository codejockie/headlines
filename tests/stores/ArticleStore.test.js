import ArticleStore from '../../app/stores/ArticleStore';
import sampleArticle from '../../mock/sampleArticle.json';
import dispatcher from '../../app/dispatcher';

const url = 'https://techcrunch.com/2017/05/22/judah-vs-the-machines/';
describe('Article Store', () => {
  describe('case RECEIVE_HEADLINES', () => {
    beforeEach(() => {
      dispatcher.dispatch({
        type: 'RECEIVE_ARTICLE',
        article: sampleArticle
      });
    });

    it('doesn\'t update the internal store when a random action is dispatched', () => {
      ArticleStore.handleActions({
        action: {
          type: 'AN_ACTION_THIS_STORE_DOES_NOT_CARE_ABOUT',
          article: [{ author: 'Kennedy' }]
        }
      });
      expect(ArticleStore.getParsedArticle()).to.not.equal([{ author: 'Kennedy' }]);
    });

    it('adds an article', () => {
      ArticleStore.handleActions({
        action: {
          type: 'RECEIVE_ARTICLE',
          article: sampleArticle
        }
      });
      expect(ArticleStore.getParsedArticle()).to.equal(sampleArticle);
    });
  });

  describe('case ARTICLE_URL', () => {
    beforeEach(() => {
      dispatcher.dispatch({
        type: 'ARTICLE_URL',
        url,
      });
    });
    it('sets the url', () => {
      ArticleStore.handleActions({
        action: {
          type: 'ARTICLE_URL',
          url
        }
      });
      expect(ArticleStore.getUrl()).to.equal(url);
    });
  });
});
