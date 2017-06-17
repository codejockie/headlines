import HeadlineStore from '../../stores/HeadlineStore.jsx';
import sampleHeadlines from '../../mock/sampleHeadlines.json';
import dispatcher from '../../dispatcher.jsx';

describe('Headline Store', () => {
  let mockSetHeadlines;

  beforeEach(() => {
    mockSetHeadlines = sinon.stub(HeadlineStore, 'setHeadlines')
      .callsFake(() => { HeadlineStore.headlines = sampleHeadlines; });
  });

  afterEach(() => {
    mockSetHeadlines.restore();
  });

  it('projects correct state from actions', () => {
    // Dispatch actions.
    dispatcher.dispatch({
      type: 'RECEIVE_HEADLINES',
      headlines: sampleHeadlines
    });

    // Based on sequence of Actions above, we assert the following.
    expect(HeadlineStore.headlines).to.equal(sampleHeadlines);
  });
});
