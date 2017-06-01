import React from 'react';

import HeadlineItem from 'HeadlineItem';
import * as HeadlineActions from '../actions/HeadlineActions';
import HeadlineStore from '../stores/HeadlineStore';
import { Card } from "semantic-ui-react";

class Headline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headlines: [],
      error: undefined,
    };
  }

  componentWillMount() {
    HeadlineActions.loadHeadlines();

    HeadlineStore.on('headline_change', () => {
      this.setState({
        headlines: HeadlineStore.getAll(),
      })
    });

    HeadlineStore.on('error', () => {
      this.setState({
        error: HeadlineStore.getErrors(),
      })
    })
  }

  render() {
    const { error, headlines } = this.state;

    return (
      <Card.Group className="ui link cards">
        {
          headlines && !error
            ? headlines.map((article, i) => <HeadlineItem key={i} {...article} />)
            : <div><i className="icon active loading centered"></i>Loading...</div>
        }
      </Card.Group>
    );
  }
}

export default Headline;
