import React from "react";
import { shallow } from 'enzyme';

import Tag from './Tag'

describe('Tag Component', () => {
  test('Tag renders correctly', () => {
    // Snapshot test case
    const component = shallow(<Tag />)
    expect(component).toMatchSnapshot()
  })

  test('Test the click function', () => {
    // Testing Methods from components directly
    const component = shallow(<Tag />)
    const componentInstance = component.instance()
    componentInstance.addLike()
    

    expect(component.state('likes')).toBe(1)
  })
})
