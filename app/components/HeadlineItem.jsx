import React from 'react';

export const HeadlineItem = ({ title, description, url, urlToImage, publishedAt }) => {
  return (
    <div className="item">
      <div className="image">
        <img src={ urlToImage }/>
      </div>
      <div className="content">
        <div className="header">
          { title }
        </div>
        {/*<div className="meta">*/}
        {/*<span className="ui blue small label">*/}
        {/*<i className="heart icon"></i>*/}
        {/*<div className="detail">*/}
        {/*{ votes }*/}
        {/*</div>*/}
        {/*</span>*/}
        {/*<span className="ui right floated">*/}
        {/*<a className="ui small label">*/}
        {/*<i className="arrow up icon"></i>*/}
        {/*Upvote*/}
        {/*</a>*/}
        {/*<a className="ui small label">*/}
        {/*<i className="arrow down icon"></i>*/}
        {/*Downvote*/}
        {/*</a>*/}
        {/*</span>*/}
        {/*</div>*/}
        <div className="meta date">
          { publishedAt }
        </div>
        <div className="meta description">
          <p>{ description }</p>
        </div>
        <div className="extra">
          <a href={url} target='_blank' className='ui right floated button primary'>
            Read more
            <i className='right chevron icon'></i>
          </a>
        </div>
      </div>

    </div>
  )
};
