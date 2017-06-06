import React from 'react';
import { Proptypes } from 'prop-types';
import { Button, Card, Image } from 'semantic-ui-react';
import { hashHistory } from 'react-router';

import formatDate from '../helpers/DateFormatter';

// const propTypes = {
//   title: Proptypes.string.isRequired,
//   description: Proptypes.string.isRequired,
//   url: Proptypes.string.isRequired,
//   urlToImage: Proptypes.string.isRequired,
//   publishedAt: Proptypes.string.isRequired,
// };

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

// HeadlineItem.propTypes = propTypes;
export default HeadlineItem;
