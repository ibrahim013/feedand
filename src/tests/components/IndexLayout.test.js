import React from 'react';
import { shallow } from 'enzyme';
import IndexLayout from '../../component/IndexLayout.jsx'

test('should render IndexLayout correctly', () => {
  const wrapper = shallow(<IndexLayout />);
  expect(wrapper).toMatchSnapshot();
});