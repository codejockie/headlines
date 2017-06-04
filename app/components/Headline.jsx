import React from 'react';
import { Card, Dimmer, Loader } from 'semantic-ui-react';

import { loadHeadlines } from '../actions/HeadlineActions';
import HeadlineItem from 'HeadlineItem';
import HeadlineStore from '../stores/HeadlineStore';

class Headline extends React.Component {
  constructor(props) {
    super(props);

    this.getHeadlines = this.getHeadlines.bind(this);
    this.getErrors = this.getErrors.bind(this);

    this.state = {
      headlines: [],
      error: undefined,
    };
  }

  componentWillMount() {
    loadHeadlines();

    HeadlineStore.on('headline_change', this.getHeadlines);
    HeadlineStore.on('error', this.getErrors);
  }

  componentWillUnmount() {
    HeadlineStore.removeListener('headline_change', this.getHeadlines);
    HeadlineStore.removeListener('error', this.getErrors);
  }

  getHeadlines() {
    this.setState({
      headlines: HeadlineStore.getAll(),
    });
  }

  getErrors() {
    this.setState({
      error: HeadlineStore.getErrors(),
    });
  }

  render() {
    const { error, headlines } = this.state;

    return (
      <Card.Group>
        {
          headlines && !error
            ? headlines.map(article => <HeadlineItem key={article.url} {...article} />)
            : (
              <Dimmer active inverted>
                <Loader size="large" inline="centered">Loading</Loader>
              </Dimmer>
          )
        }
      </Card.Group>
    );
  }
}

export default Headline;
