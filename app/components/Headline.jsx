import React from 'react';

import {getHeadlines} from '../api/NewsAPI';
import {HeadlineItem} from 'HeadlineItem';

class Headline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headlines: []
    };

    if (props.match.params) {
      this.sourceKey = props.match.params.sourceKey;
    }

    getHeadlines(this.sourceKey).then((headlines) => {
      this.setState({headlines});
    }, (errorMessage) => {
      alert(errorMessage);
    });
  }

  // componentDidMount() {
  //     getHeadlines(this.sourceKey).then((headlines) => {
  //         this.setState({headlines});
  //     }, (errorMessage) => {
  //         alert(errorMessage);
  //     });
  // }

  render() {
    const {headlines} = this.state;

    return (
      <div className="ui divided items">
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
