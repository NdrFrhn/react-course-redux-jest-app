import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
// import store from './playground/redux-101';
// import person from './playground/DesStore';
// import store from './playground/redux-expensify';
import '../src/styles/components/styles.scss';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AdminInfo from './playground/hoc';
import AuthInfo from './playground/hoc';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: '30000'} ));
store.dispatch(addExpense( {description: 'Gas bill', createdAt: 1000} )); 
store.dispatch(addExpense( {description: 'Rent', amount: 300000} )); 

// store.subscribe( () => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
// });

// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const root = document.getElementById('root');
// ReactDOMClient.createRoot(root).render(<AdminInfo isAdmin={false} info = 'This is to better understand HOC in React!'/>)
// ReactDOMClient.createRoot(root).render(<AuthInfo isAuthenticated={false} info = 'Thank you for using react-redux!'/>)
ReactDOMClient.createRoot(root).render(jsx)