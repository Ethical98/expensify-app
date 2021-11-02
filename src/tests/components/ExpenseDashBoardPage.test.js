import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import { shallow } from 'enzyme';
import React from 'react';

test('should render dashboardpage correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
