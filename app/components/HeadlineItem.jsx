import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import moment from 'moment';
import { hashHistory } from 'react-router';

export const formatDate = (date) => {
  if (date) {
    return moment(date).format('ddd, MMM Do YYYY, h:mm:ss a');
  }
  return '';
};

function HeadlineItem({ title, description, url, urlToImage, publishedAt }) {
  const onClick = (e, data) => {
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
          <span className='date'>
            {formatDate(publishedAt)}
          </span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={onClick}>Read here</Button>
          <a href={url} target="_blank" className="ui button">Read from source</a>
        </div>
      </Card.Content>
    </Card>
  );
}

export default HeadlineItem;
