import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Container, Header, Segment, Divider, Dimmer, Loader } from 'semantic-ui-react';

import ArticleStore from '../stores/ArticleStore';
import getArticle from '../actions/ArticleActions';
import formatDate from '../helpers/DateFormatter';
import Navbar from './Navbar';
import ShareIcon from './ShareIcon';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.getArticle = this.getArticle.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      article: null,
    };
  }

  componentWillMount() {
    const url = localStorage.getItem('url');
    getArticle(url);

    ArticleStore.on('article_change', this.getArticle);
  }

  componentWillUnmount() {
    localStorage.removeItem('url');
    ArticleStore.removeListener('article_change', this.getArticle);
  }

  getArticle() {
    this.setState({
      article: ArticleStore.getParsedArticle(),
    });
  }

  handleClick() {
    hashHistory.push('/headlines');
  }

  render() {
    const { article } = this.state;

    return (
      article ? (
        <span>
          <Navbar onClick={this.handleClick} />
          <Container text textAlign="justified">
            <Segment raised>
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
