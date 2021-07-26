import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { BrowserRouter, Route } from "react-router-dom";

const ExpenseDashboardPage = () => (
  <div>This is is from a dashboard component</div>
);
const AddExpensePage = () => <div>This is from a AddExpenseComponent</div>;
const EditExpensePage = () => <div>This is from a EditExpensePage</div>;
const HelpExpensePage = () => <div>This is from a HelpExpensePage</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route exact={true} path="/" component={ExpenseDashboardPage} />
      <Route exact={true} path="/create" component={AddExpensePage} />
      <Route exact={true} path="/edit" component={EditExpensePage} />
      <Route exact={true} path="/help" component={HelpExpensePage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
