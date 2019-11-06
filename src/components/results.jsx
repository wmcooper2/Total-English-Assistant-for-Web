import React from "react";

const Results = () => {
  return (
    <ul className="results list-group">
      <li className="resultItem list-group-item d-flex justify-content-between align-items-center">
        one<span className="badge badge-primary badge-pill">33</span>
      </li>
      <li className="resultItem list-group-item d-flex justify-content-between align-items-center">
        two<span className="badge badge-primary badge-pill">66</span>
      </li>
      <li className="resultItem list-group-item d-flex justify-content-between align-items-center">
        three<span className="badge badge-primary badge-pill">99</span>
      </li>
    </ul>
  );
};

export default Results;
