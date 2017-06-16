import React from 'react';
import { Proptypes } from 'prop-types';
import { Button, Card, Image } from 'semantic-ui-react';
import { hashHistory } from 'react-router';

import formatDate from '../helpers/DateFormatter';

/**
 * HeadlineItem is a stateless component function.
 * @function
 * @returns {<Card>}
 */
function HeadlineItem({ title, description, url, urlToImage, publishedAt }) {
  const onClick = (e) => {
    e.preventDefault();

    localStorage.setItem('url', url);
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
          <a href={url} target="_blank" rel="noopener noreferrer" className="ui button">Read from source</a>
        </div>
      </Card.Content>
    </Card>
  );
}

export default HeadlineItem;
