import React from 'react';
import { shallow, mount, render } from 'enzyme';

import SourceSidebar from '../../components/Sidebar';

describe('Sidebar', () => {
  it('should exist', () => {
    expect(shallow(<SourceSidebar />)).toExist();
  });
});
