import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';

import Sidebar from '../../components/Sidebar';

describe('Sidebar', () => {
  it('should exist', () => {
    expect(Sidebar).toExist();
  });
});
