import React from "react";
import { shallow } from 'enzyme';
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let addExpense, wrapper, navigate;
beforeEach(() => {
  addExpense = jest.fn();
  navigate = jest.fn();
  wrapper = shallow(<AddExpensePage navigate={navigate} addExpense={addExpense} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should return the WithNavigate function correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});