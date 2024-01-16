import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove any element from expenses array if id does not match any id of expenses array', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
    const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[0].id,
      updates: {
        note: 'New value injected'
      }
    };
    const modExpense = { ...expenses[0], note: action.updates.note };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([modExpense, expenses[1], expenses[2]]);
});

test('should edit an expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '4',
    updates: {
      note: 'New value injected'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
  const newExpense = {
    id: '4',
    description: 'House',
    note: '',
    amount: 1000000,
    createdAt: moment(0).add(16, 'days').valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: {...newExpense}
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});