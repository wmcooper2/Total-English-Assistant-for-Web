import React from "react";

const Result = props => {
  const { searchWord } = props.props;
  const { page } = props.props.results;

  return (
    <ul className="results list-group">
      <li className="resultItem list-group-item d-flex justify-content-between align-items-center">
        {searchWord}
        <span className="badge badge-primary badge-pill">{page}</span>
      </li>
    </ul>
  );
};

export default Result;
