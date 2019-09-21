import React from "react";
import { shallow } from 'enzyme';

import NavbarBrand from './NavbarBrand'

test('test name', () => {
  // test case
  const component = shallow(<NavbarBrand />)
  expect(component).toMatchSnapshot()
})
