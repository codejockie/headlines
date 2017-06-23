import React from 'react';
import { Card, Dimmer, Loader } from 'semantic-ui-react';

import loadHeadlines from '../actions/HeadlineActions';
import HeadlineItem from './HeadlineItem.jsx';
import HeadlineStore from '../stores/HeadlineStore';

/**
 * Headline
 * @class
 * @extends React.Component
 */
export default class Headline extends React.Component {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.getHeadlines = this.getHeadlines.bind(this);

    /** @type {string} */
    this.sourceKey = HeadlineStore.getSourceKey() || localStorage.getItem('sourceKey');

    this.state = {
      headlines: null,
    };
  }

  /**
   * componentDidMount
   * @method
   * @returns {void}
   */
  componentDidMount() {
    loadHeadlines(this.sourceKey);
    HeadlineStore.on('headline_change', this.getHeadlines);
  }

  /**
   * componentWillUnmount
   * @method
   * @returns {void}
   */
  componentWillUnmount() {
    HeadlineStore.removeListener('headline_change', this.getHeadlines);
  }

  /**
   * getHeadlines: sets the state with the fetched headlines.
   * @method
   * @returns {void}
   */
  getHeadlines() {
    this.setState({
      headlines: HeadlineStore.getAll(),
    });
  }

  /**
   * render
   * @method
   * @returns {Card} Card
   */
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
