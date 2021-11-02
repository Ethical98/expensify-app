import { shallow } from 'enzyme';
import React from 'react';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setEndDate = jest.fn();
  setStartDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setTextFilter={setTextFilter}
    />
  );
});
test('should render expense list filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with alt data', () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'react';
  wrapper.find('input').simulate('change', {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sortby date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters,
  });

  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByDate).toHaveBeenLastCalledWith(value);
});

test('should sortby amount', () => {
  const value = 'amount';

  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenLastCalledWith(value);
});

test('should handleDateChange', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');

  wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';

  wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
