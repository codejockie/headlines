import React, { Component } from 'react';
import { Container, Header, Segment, Divider, Dimmer, Loader } from 'semantic-ui-react';
import { generateShareIcon } from 'react-share';

import ArticleStore from '../stores/ArticleStore';
import getArticle from '../actions/ArticleActions';
import formatDate from '../helpers/DateFormatter';

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.getArticle = this.getArticle.bind(this);

    this.state = {
      article: null,
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
      <Container text textAlign="justified">
        {
          article ? (
            <Segment raised>
              <Header as="h2">{article.title}</Header>
              <small>{formatDate(article.date_published)}</small>
              <FacebookIcon size={32} round />
              <a
                href="https://twitter.com/share"
                data-size="large"
                data-text={article.title}
                data-url="https://dev.twitter.com/web/tweet-button"
                data-hashtags="example,demo"
                data-via="twitterdev"
                data-related="newslines,news,newsheadlines"
              >
                <TwitterIcon size={32} round />
              </a>
              <WhatsappIcon size={32} round />
              <GooglePlusIcon size={32} round />
              <LinkedinIcon size={32} round />
              <Divider hidden />
              <span dangerouslySetInnerHTML={{ __html: article.content }} />
            </Segment>
          ) : (
            <Dimmer active inverted>
              <Loader size="large" inline="centered">Loading</Loader>
            </Dimmer>
          )
        }
      </Container>
    );
  }
}
