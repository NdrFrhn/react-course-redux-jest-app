import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <li><NavLink to='/' activeClassName="is-active">Home Page</NavLink></li>
      <li><NavLink to='/create' activeClassName="is-active">Create Expense Page</NavLink></li>
      <li><NavLink to='/edit' activeClassName="is-active">Edit Page</NavLink></li>

    </ul>
  </header>
);

export {Header as default};