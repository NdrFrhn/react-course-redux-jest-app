import React from "react";
import { shallow } from "enzyme";
import {ExpenseListFilters} from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

// We are going to simulate all the dispatched actions in this function below:
beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt date correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

// should handle text change

test('should handle text change', () => {
  const value = altFilters.text;
  wrapper.find('input').simulate('change', {
    target: {value}
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

// should sort by date

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  const value = filters.sortBy;
  wrapper.find('select').simulate('change', {
    target: {value}
  });
  expect(sortByDate).toHaveBeenLastCalledWith();
});

// should sort by amount

test('should sort by amount', () => {
  const value = altFilters.sortBy;
  wrapper.find('select').simulate('change', {
    target: {value}
  });
  expect(sortByAmount).toHaveBeenLastCalledWith();
});

// should handle date changes

test('should handle date changes', () => {
  const startDate = altFilters.startDate;
  const endDate = altFilters.endDate;
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

//should handle date focus changes

test('should handle date focus changes', () => {
  const focusedInput = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(focusedInput);
  expect(wrapper.state('calendarFocused')).toEqual(focusedInput);
});