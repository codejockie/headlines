import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

/**
 * Article Store Class.
 *
 * @class
 * @extends EventEmitter
 */
class ArticleStore extends EventEmitter {
  /**
   * Represents an article.
   * @constructor
   */
  constructor() {
    super();

    /** @type {Object} */
    this.article = {};

    /** @type {string} */
    this.url = '';
  }

  /**
   * getParsedArticle: returns article
   * @returns {Object} article
   */
  getParsedArticle() {
    return this.article;
  }

  /**
   * getUrl: returns the url for scraping
   * @returns {string} url
   */
  getUrl() {
    return this.url;
  }

  /**
   * setArticleUrl: returns article
   * @param {string} url The url to the article to scraped
   * @returns {string} url
   */
  setArticleUrl(url) {
    this.url = url;
  }

  /**
   * handleActions: switches between actions and handle them accordingly
   * @param {Object} action The type of action dispatched
   * @returns {void}
   */
  handleActions(action) {
    switch (action.type) {
      case 'RECEIVE_ARTICLE':
        this.article = action.article;
        this.emit('article_change');
        break;
      case 'ARTICLE_URL':
        this.setArticleUrl(action.url);
        break;

      default: break;
    }
  }
}

const articleStore = new ArticleStore();
dispatcher.register(articleStore.handleActions.bind(articleStore));
export default articleStore;
