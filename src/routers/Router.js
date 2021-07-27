import React from "react";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import HelpExpensePage from "../components/HelpExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import EditExpensePage from "../components/EditExpensePage";

export const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage} />
        <Route exact={true} path="/create" component={AddExpensePage} />
        <Route exact={true} path="/edit/:id" component={EditExpensePage} />
        <Route exact={true} path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
