import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class ArticleStore extends EventEmitter {
  constructor() {
    super();
    this.article = {};
  }

  getParsedArticle() {
    return this.article;
  }

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
