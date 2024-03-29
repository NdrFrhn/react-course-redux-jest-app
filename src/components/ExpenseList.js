import React from "react";
import {connect} from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => ( // exported for testing the unconnected version 
    <div>
      {
        props.expenses.length === 0 ? (
          <p>No expenses</p>
        ) : (
          props.expenses.map( (item) => {
            return <ExpenseListItem key={item.id} {...item} />
        })
        )
      }
    </div>
    );

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);