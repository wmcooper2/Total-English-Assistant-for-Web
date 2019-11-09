import React from "react";

const Result = props => {
  const { searchWord } = props.props;
  const { page } = props.props.results;
  const { topResults } = props.props;

  let results = [];
  for (let entry of topResults) {
    results.push(
      <li className="resultItem list-group-item d-flex justify-content-between align-items-center">
        {entry.word}
        <span className="badge badge-primary badge-pill">
          {entry.entry.page}
        </span>
      </li>
    );
  }

  return <ul className="results list-group">{results}</ul>;
};

export default Result;
