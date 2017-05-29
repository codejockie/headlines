import React from 'react';

const HeadlineItem = ({title, description, url, urlToImage, publishedAt}) => {
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
          {publishedAt}
        </span>
        <span>
          <i className="favorite icon"></i>
      </span>
      </div>
    </div>
  )
};

export default HeadlineItem;
