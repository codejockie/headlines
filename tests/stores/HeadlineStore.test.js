import HeadlineStore from '../../app/stores/HeadlineStore';
import sampleHeadlines from '../../mock/sampleHeadlines.json';
import dispatcher from '../../app/dispatcher';
import { HEADLINES } from '../../app/constants';

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
      type: HEADLINES,
      headlines: sampleHeadlines
    });

    // Based on sequence of Actions above, we assert the following.
    expect(HeadlineStore.headlines).to.equal(sampleHeadlines);
  });
});
