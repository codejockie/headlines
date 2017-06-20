import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { hashHistory } from 'react-router';

import formatDate from '../helpers/DateFormatter.jsx';
import { setArticleUrl } from '../actions/ArticleActions.jsx';

/**
 * HeadlineItem is a stateless component function.
 * @function
 * @param {string} title
 * @param {string} description
 * @param {string} url
 * @param {string} urlToImage
 * @param {Date} publishedAt
 * @returns {Card} Card
 */
export default function HeadlineItem({ title, description, url, urlToImage, publishedAt }) {
  const onClick = (e) => {
    e.preventDefault();

    // sets the url that's later passed to the getArticle method used for scraping
    setArticleUrl(url);
    hashHistory.push('/article');
  };

  return (
    <Card>
      <Image src={urlToImage} />
      <Card.Content>
        <Card.Header>
          {title}
        </Card.Header>
        <Card.Meta>
          <span className="date">
            {formatDate(publishedAt)}
          </span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green" onClick={onClick}>Read here</Button>
          <a href={url} target="_blank" rel="noopener noreferrer" className="ui button">
            Read from source
          </a>
        </div>
      </Card.Content>
    </Card>
  );
}
