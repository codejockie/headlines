import SourceStore from '../../stores/SourceStore.jsx';
import sampleSources from '../../mock/sampleSources.json';
import dispatcher from '../../dispatcher.jsx';


describe('Source Store', () => {
  let mockSetSources;

  beforeEach(() => {
    mockSetSources = sinon.stub(SourceStore, 'setSources')
      .callsFake(() => { SourceStore.sources = sampleSources; });
  });

  afterEach(() => {
    mockSetSources.restore();
  });

  it('projects correct state from actions', () => {
    // Dispatch actions.
    dispatcher.dispatch({
      type: 'RECEIVE_SOURCES',
      sources: sampleSources
    });

    // Based on sequence of Actions above, we assert the following.
    expect(SourceStore.sources).to.equal(sampleSources);
  });
});
