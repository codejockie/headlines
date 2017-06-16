import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

/**
 * Article Store Class.
 *
 * @class
 */
class ArticleStore extends EventEmitter {
  /**
   * Represents an article.
   * @constructor
   */
  constructor() {
    super();
    this.article = {};
  }

  /**
   * getParsedArticle returns article
   * @returns {article} article
   */
  getParsedArticle() {
    return this.article;
  }

  /**
   * handleActions switches between actions and handle them accordingly
   * @param {Object} action
   * @returns {void}
   */
  handleActions(action) {
    switch (action.type) {
      case 'RECEIVE_ARTICLE':
        this.article = action.article;
        this.emit('article_change');
        break;

      default: break;
    }
  }
}

const articleStore = new ArticleStore();
dispatcher.register(articleStore.handleActions.bind(articleStore));
export default articleStore;
