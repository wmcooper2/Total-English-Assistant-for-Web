import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import GradeBtns from "./gradeBtns";

const Search = props => {
  const { gradeClick, handleInput, buttons } = props.props;

  return (
    <React.Fragment>
      <div className="form-row" action="">
        <div className="input-group col-md-8">
          <div className="input-group-prepend">
            <button className="btn btn-primary" disabled>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="English・日本語"
            onChange={event => {
              handleInput(event.target.value);
            }}
          />
        </div>
        <GradeBtns buttons={buttons} handleClick={gradeClick} />{" "}
      </div>
    </React.Fragment>
  );
};

export default Search;
