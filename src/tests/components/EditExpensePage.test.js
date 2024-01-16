import React from "react";
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, wrapper, navigate;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  navigate = jest.fn();
  wrapper = shallow(
    <EditExpensePage 
      navigate={navigate} 
      editExpense={editExpense} 
      removeExpense={removeExpense} 
      expense={expenses[2]}
    />)
})

test('should render editExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should return the WithNavigate function correctly', () => {
  expect(navigate).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
});