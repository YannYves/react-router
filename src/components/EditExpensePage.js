import React from "react";

export const EditExpensePage = (props) => (
  <div>
    <p> Editing the expense with the id of {props.match.params.id}</p>
  </div>
);

export default EditExpensePage;
