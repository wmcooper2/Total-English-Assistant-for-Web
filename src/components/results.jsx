import React from "react";

const Result = props => {
  const { topResults, searchWord } = props.props;
  console.log("props = ", props);

  let results = [];
  if (topResults.length > 1 && searchWord.length > 0) {
    for (let entry of topResults) {
      results.push(
        <li
          key={topResults.indexOf(entry)}
          className="resultItem list-group-item d-flex justify-content-between align-items-center"
        >
          <span>{entry.word}</span>
          <span>{entry.entry.japanese}</span>
          <span className="badge badge-primary badge-pill">
            {entry.entry.page}
          </span>
        </li>
      );
    }
  } else {
    results = "";
  }

  return <ul className="results list-group">{results}</ul>;
};

export default Result;
