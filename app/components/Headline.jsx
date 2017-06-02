import React from 'react';
import { Card, Dimmer, Loader } from "semantic-ui-react";

import * as HeadlineActions from '../actions/HeadlineActions';
import HeadlineItem from 'HeadlineItem';
import HeadlineStore from '../stores/HeadlineStore';

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
      <Card.Group>
        {
          headlines && !error
            ? headlines.map((article, i) => <HeadlineItem key={i} {...article} />)
            : (
            <Dimmer active inverted>
              <Loader size='large' inline="centered">Loading</Loader>
            </Dimmer>
          )
        }
      </Card.Group>
    );
  }
}

export default Headline;
