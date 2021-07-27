import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink exact={true} to="/" activeClassName="is-active">
        Home
      </NavLink>
      <NavLink exact={true} to="/create" activeClassName="is-active">
        Create
      </NavLink>
      <NavLink exact={true} to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </header>
  );
};

export default Header;
