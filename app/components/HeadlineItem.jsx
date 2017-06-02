import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import moment from 'moment';
import { hashHistory } from 'react-router';

const extra = (
  <Icon name="heart" />
);

export const formatDate = (date) => {
  if (date) {
    return moment(date).format('ddd, MMM Do YYYY, h:mm:ss a');
  }
  return '';
};

function HeadlineItem({ title, description, url, urlToImage, publishedAt }) {
  const onClick = (e, data) => {
    e.preventDefault();

    localStorage.setItem('url', data.href);
    hashHistory.push('/article');
  };

  return (
    <Card
      color="blue"
      href={url}
      image={urlToImage}
      header={title}
      meta={formatDate(publishedAt)}
      description={description}
      extra={extra}
      onClick={onClick}
    />
  );
}

export default HeadlineItem;
