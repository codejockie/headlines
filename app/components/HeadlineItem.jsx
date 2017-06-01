import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import moment from 'moment';

const extra = (
  <Icon name='heart' />
);

function HeadlineItem({title, description, url, urlToImage, publishedAt}) {
  return (
    <Card
      color='blue'
      href={url}
      image={urlToImage}
      header={title}
      meta={formatDate(publishedAt)}
      description={description}
      extra={extra}
    />
  )
}

export default HeadlineItem;

export const formatDate = (date) => {
  if (date) {
    return moment(date).format('ddd, MMM Do YYYY, h:mm:ss a');
  } else {
    return '';
  }
};
