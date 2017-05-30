import React from 'react';
import moment from 'moment';

function HeadlineItem({title, description, url, urlToImage, publishedAt}) {
  return (
    <div className="card">
      <a className="image" href={url} target="_blank">
        <img src={urlToImage}/>
      </a>
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">
          {description}
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          {formatDate(publishedAt)}
        </span>
        <span>
          <i className="favorite icon"></i>
      </span>
      </div>
    </div>
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
