import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({id, description, amount, createdAt}) => {
  return (
    <div>
    <Link to={`/edit/${id}`}><h3>{description} { id.substr(id.length - 4) }</h3></Link>
      <p>Amount: {amount}</p>
      <p>Date of creation: {createdAt}</p>
    </div>
  )
};

export default ExpenseListItem;