import React, { Component } from 'react';
import AlertContainer from 'react-alert';
import { hashHistory } from 'react-router';
import { Button, Container, Dimmer, Divider, Header, Loader, Segment } from 'semantic-ui-react';

import ArticleStore from '../stores/ArticleStore.jsx';
import getArticle from '../actions/ArticleActions.jsx';
import { firebaseRef } from '../firebase/index.jsx';
import formatDate from '../helpers/DateFormatter.jsx';
import AuthStore from '../stores/AuthStore.jsx';
import ShareIcon from './ShareIcon.jsx';

const alertOptions = {
  offset: 14,
  position: 'bottom left',
  theme: 'dark',
  time: 4000,
  transition: 'scale'
};

/**
 * Article Component
 * @class
 */
export default class Article extends Component {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.getArticle = this.getArticle.bind(this);
    this.onClick = this.onClick.bind(this);
    this.storeArticle = this.storeArticle.bind(this);

    this.state = {
      article: null,
      userId: '',
      disabled: false,
    };
  }

  /**
   * componentDidMount
   * @method
   * @returns {void}
   */
  componentDidMount() {
    const url = ArticleStore.getUrl();
    const user = Object.keys(AuthStore.user).length !== 0 ?
      AuthStore.user : JSON.parse(localStorage.getItem('user'));
    getArticle(url);

    this.setUser(user);
    ArticleStore.on('article_change', this.getArticle);
  }

  /**
   * componentWillUnmount
   * @method
   * @returns {void}
   */
  componentWillUnmount() {
    localStorage.removeItem('url');
    ArticleStore.removeListener('article_change', this.getArticle);
  }

  /**
   * getArticle sets the state with the scraped article.
   * @method
   * @returns {void}
   */
  getArticle() {
    this.setState({
      article: ArticleStore.getParsedArticle(),
    });
  }

  /**
   * setUser sets the state for userId.
   * @method
   * @param {Object} user
   * @returns {void}
   */
  setUser(user) {
    this.setState({
      userId: user.uid,
    });
  }

  /**
   * handleClick method for returning to the headlines.
   * @method
   * @returns {void}
   */
  onClick() {
    hashHistory.push('/headlines');
  }

  /**
   * showAlert method for returning to the headlines.
   * @method
   * @returns {void}
   */
  showAlert() {
    this.msg.show('Article saved.');
  }

  /**
   * storeArticle saves scraped article to the DB.
   * @method
   * @returns {void}
   */
  storeArticle() {
    const { article, userId } = this.state;
    const articleToSave = {
      title: article.title,
      content: article.content,
      date_published: formatDate(article.date_published),
      lead_image_url: article.lead_image_url,
      dek: article.dek,
      url: article.url,
      domain: article.domain,
      excerpt: article.excerpt,
      word_count: article.word_count,
      direction: article.direction,
      total_pages: article.total_pages,
      rendered_pages: article.rendered_pages,
    };

    firebaseRef.child(`users/${userId}/articles`).push(articleToSave);
    this.setState({
      disabled: true,
    });
    this.showAlert();
  }

  /**
   * render
   * @method
   * @returns {span} span
   */
  render() {
    const { article, disabled } = this.state;

    return (
      article ? (
        <span>
          <AlertContainer ref={a => this.msg = a} {...alertOptions} />
          <Container text textAlign='justified'>
            <Segment raised>
              <Button circular icon='arrow left' onClick={this.onClick} />
              <Button circular
                      disabled={disabled}
                      positive
                      icon='save'
                      onClick={this.storeArticle}
              />
              <Header as='h2'>{article.title}</Header>
              <small>{formatDate(article.date_published)}</small>
              <ShareIcon url={article.url} title={article.title} />
              <Divider hidden />
              <span dangerouslySetInnerHTML={{ __html: article.content }} />
            </Segment>
          </Container>
        </span>
      ) : (
        <Dimmer active inverted>
          <Loader size='large' inline='centered'>Loading</Loader>
        </Dimmer>
      )
    );
  }
}
