import { combineReducers, createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0  
  } = {}
  ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE

const removeExpense = ({id} = '') => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
})

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
})

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
})

//Expenses reducer

const expesesReducerDefaultState = [];

const expensesReducer = (state = expesesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE' :
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE' :
      return state.filter( ( {id} ) =>  action.id !== id )
    case 'EDIT_EXPENSE' :
      return state.map( ( expense ) => {
        if (action.id === expense.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      })
    default:
      return state;
  }
};

// Filters reducer

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
  case 'SET_TEXT_FILTER' :
    return {
      ...state,
      text: action.text
    }
  case 'SORT_BY_AMOUNT' :
    return {
      ...state,
      sortBy: action.sortBy
    }
  case 'SORT_BY_DATE' :
    return {
      ...state,
      sortBy: action.sortBy
    }
  case 'SET_START_DATE' :
    return {
      ...state,
      startDate: action.startDate
    }
  case 'SET_END_DATE' :
    return {
      ...state,
      endDate: action.endDate
    }
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter( (expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; // che vor di?
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort( (a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  });
}


// Store creation
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filterReducer
}));

store.subscribe( () => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1100, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id:expenseOne.expense.id }));

// store.dispatch(editExpense( expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('nt'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount()); 
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1001)); // startDate: 125
// store.dispatch(setStartDate()); // startDate: undefined
// store.dispatch(setEndDate(1250)); // endDate: 1250


const demoState = {
  expensed: [{
    id: 'wrgfrwg',
    description: 'January rent',
    note: 'This will be the rent for the new address',
    amount: 300,
    createdAt: 0    
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // Date or amount
    startDate: undefined,
    endDate: undefined
  }
};

export {store as default};