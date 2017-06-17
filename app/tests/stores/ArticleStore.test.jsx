import ArticleStore from '../../stores/ArticleStore.jsx';
import sampleArticle from '../../mock/sampleArticle.json';
import dispatcher from '../../dispatcher.jsx';

describe('Article Store', () => {
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
