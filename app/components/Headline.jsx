import React from 'react';
import { Card, Dimmer, Loader } from 'semantic-ui-react';

import loadHeadlines from '../actions/HeadlineActions';
import HeadlineItem from './HeadlineItem';
import HeadlineStore from '../stores/HeadlineStore';

class Headline extends React.Component {
  constructor(props) {
    super(props);

    this.getHeadlines = this.getHeadlines.bind(this);

    this.state = {
      headlines: null,
    };
  }

  componentDidMount() {
    loadHeadlines();

    HeadlineStore.on('headline_change', this.getHeadlines);
  }

  componentWillUnmount() {
    HeadlineStore.removeListener('headline_change', this.getHeadlines);
  }

  /**
   * getHeadlines sets the state with the fetched headlines.
   * @method
   * @returns {void}
   */
  getHeadlines() {
    this.setState({
      headlines: HeadlineStore.getAll(),
    });
  }

  render() {
    const { headlines } = this.state;

    return (
      <Card.Group>
        {
          headlines
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
