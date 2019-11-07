import React from "react";

const Result = props => {
  return (
    <ul className="results list-group">
      <li className="resultItem list-group-item d-flex justify-content-between align-items-center">
        {props.props.searchWord}
        <span className="badge badge-primary badge-pill">
          {props.props.results.page}
        </span>
      </li>
    </ul>
  );
};

export default Result;
