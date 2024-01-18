import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

let pound = '£';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
    <Link to={`/edit/${id }`}>
      <h3>{description} { id.substr(id.length - 4) }</h3>
    </Link>
      <p>
        {pound} { numeral(amount / 100).format('£0,0.00')} 
        - 
        {moment(createdAt).format('Do MMMM, YYYY')}
      </p>
    </div>
  );

export default ExpenseListItem;