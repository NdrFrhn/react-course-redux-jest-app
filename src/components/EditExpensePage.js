import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.navigate('/');
  };
  onRemove = () => {
    this.props.removeExpense({id: this.props.expense.id});
    this.props.navigate('/');
  }

  render () {
    return (
      <div>
        <ExpenseForm 
          expense={this.props.expense}
          onSubmit= {this.onSubmit}
        />
        <button onClick={this.onRemove} >
          Remove
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: expense => dispatch(removeExpense(expense))
});

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find( (expense) => expense.id === props.id )
})

export function WithNavigate (props) {
  let navigate = useNavigate();
  return <EditExpensePage {...props} navigate={navigate} />
}

export default connect(mapStateToProps, mapDispatchToProps)(WithNavigate);