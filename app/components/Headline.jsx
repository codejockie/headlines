import React from 'react';

import * as api from '../api/NewsAPI';
import HeadlineItem from 'HeadlineItem';

class Headline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headlines: []
    };

    if (props.match.params) {
      this.sourceKey = props.match.params.sourceKey;
      this.getHeadlines(this.sourceKey);
    }
  }

  componentDidMount() {
    this.getHeadlines();
  }

  componentWillReceiveProps({match}) {
    const sourceKey = match.params.sourceKey;
    this.getHeadlines(sourceKey);
  }

  getHeadlines(sourceKey = '') {
    if (sourceKey) {
      api.getHeadlines(sourceKey).then(articles => {
        this.setState({ headlines: articles });
      }, error => {
        console.log(error);
        this.setState({ headlines: [] });
      });
    }
  }

  render() {
    const { headlines } = this.state;

    return (
      <div className="ui link cards">
        {
          headlines
            ? headlines.map((article, i) => <HeadlineItem key={i} {...article}/>)
            : <div>Loading...</div>
        }
      </div>
    );
  }
}

export default Headline;
