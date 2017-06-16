import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Button, Container, Header, Segment, Divider, Dimmer, Loader } from 'semantic-ui-react';

import ArticleStore from '../stores/ArticleStore';
import getArticle from '../actions/ArticleActions';
import formatDate from '../helpers/DateFormatter';
import ShareIcon from './ShareIcon';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.getArticle = this.getArticle.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      article: null,
    };
  }

  componentDidMount() {
    const url = localStorage.getItem('url');
    getArticle(url);

    ArticleStore.on('article_change', this.getArticle);
  }

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
   * handleClick method for returning to the headlines.
   * @method
   * @returns {void}
   */
  onClick() {
    hashHistory.push('/headlines');
  }

  render() {
    const { article } = this.state;

    return (
      article ? (
        <span>
          <Container text textAlign="justified">
            <Segment raised>
              <Button circular icon="arrow left" onClick={this.onClick} />
              <Header as="h2">{article.title}</Header>
              <small>{formatDate(article.date_published)}</small>
              <ShareIcon url={article.url} title={article.title} />
              <Divider hidden />
              <span dangerouslySetInnerHTML={{ __html: article.content }} />
            </Segment>
          </Container>
        </span>
      ) : (
        <Dimmer active inverted>
          <Loader size="large" inline="centered">Loading</Loader>
        </Dimmer>
      )
    );
  }
}
