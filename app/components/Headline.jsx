import React from 'react';
import { Card, Dimmer, Loader } from 'semantic-ui-react';

import loadHeadlines from '../actions/HeadlineActions';
import HeadlineItem from './HeadlineItem.jsx';
import HeadlineStore from '../stores/HeadlineStore';

/**
 * @class Headline
 * @extends React.Component
 */
export default class Headline extends React.Component {
  /**
   * @description Creates an instance of Headline
   * @memberOf Headline
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
   * @description componentDidMount
   * @method
   * @memberOf Headline
   * @returns {void}
   */
  componentDidMount() {
    loadHeadlines(this.sourceKey);
    HeadlineStore.on('headline_change', this.getHeadlines);
  }

  /**
   * @description componentWillUnmount
   * @method
   * @memberOf Headline
   * @returns {void}
   */
  componentWillUnmount() {
    HeadlineStore.removeListener('headline_change', this.getHeadlines);
  }

  /**
   * @description sets the state with the fetched headlines.
   * @method
   * @memberOf Headline
   * @returns {void}
   */
  getHeadlines() {
    this.setState({
      headlines: HeadlineStore.getAll(),
    });
  }

  /**
   * @description renders the Headlines
   * @method
   * @memberOf Headline
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
