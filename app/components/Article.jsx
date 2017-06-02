import React, { Component } from 'react';
import { Container, Header, Segment, Divider } from 'semantic-ui-react'

import * as ArticleActions from '../actions/ArticleActions';
import ArticleStore from '../stores/ArticleStore';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: {},
    };
  }

  componentWillMount() {
    const href = localStorage.getItem('url');
    ArticleActions.getArticle(href);

    ArticleStore.on('article_change', () => {
      this.setState({
        article: ArticleStore.getParsedArticle(),
      });
    });
  }

  render() {
    const { article } = this.state;

    return (
      <Segment>
        <Container text textAlign='justified'>
          <Header as='h2'>{article.title}</Header>
          <Divider hidden />
          <p>{article.body}</p>
        </Container>
      </Segment>
    );
  }
}
