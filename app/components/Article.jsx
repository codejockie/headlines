import React, { Component } from 'react';
import { Container, Header, Segment, Divider } from 'semantic-ui-react';

import { getArticle } from '../actions/ArticleActions';
import ArticleStore from '../stores/ArticleStore';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.getArticle = this.getArticle.bind(this);

    this.state = {
      article: {},
    };
  }

  componentWillMount() {
    const href = localStorage.getItem('url');
    getArticle(href);

    ArticleStore.on('article_change', this.getArticle);

    localStorage.removeItem('url');
  }

  componentWillUnmount() {
    ArticleStore.removeListener('article_change', this.getArticle);
  }

  getArticle() {
    this.setState({
      article: ArticleStore.getParsedArticle(),
    });
  }

  render() {
    const { article } = this.state;

    return (
      <Segment raised>
        <Container text textAlign="justified">
          <Header as="h2">{article.title}</Header>
          <Divider hidden />
          <p>{article.body}</p>
        </Container>
      </Segment>
    );
  }
}
