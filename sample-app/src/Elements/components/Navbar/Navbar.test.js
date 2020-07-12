import React from 'react';
import { shallow } from 'enzyme';

import Navbar from './Navbar';

test('renders proper', () => {
  const component = shallow(<Navbar />)
  expect(component).toMatchSnapshot()
})
