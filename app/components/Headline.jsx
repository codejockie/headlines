import React from 'react';

import HeadlineItem from 'HeadlineItem';
import * as HeadlineActions from '../actions/HeadlineActions';
import HeadlineStore from '../stores/HeadlineStore';

class Headline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headlines: []
    };
  }

  componentWillMount() {
    HeadlineActions.loadHeadlines();
    HeadlineStore.on('headlinechange', () => {
      this.setState({
        headlines: HeadlineStore.getAll()
      })
    })
  }

  render() {
    const { headlines } = this.state;

    return (
      <div className="ui link cards">
        {
          headlines
            ? headlines.map((article, i) => <HeadlineItem key={i} {...article} />)
            : <div><i className="icon active loader centered"></i>Loading...</div>
        }
      </div>
    );
  }
}

export default Headline;
