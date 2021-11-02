import NotFoundPage from '../../components/NotFoundPage';
import React from 'react';
import { shallow } from 'enzyme';

test('should render not found page correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
