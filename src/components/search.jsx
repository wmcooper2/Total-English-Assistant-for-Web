import React, { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import GradeBtns from "./buttonGroup";

class Search extends Component {
  render() {
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
            />
          </div>
          <GradeBtns
            onClick={this.props.onClick}
            classes="gradeBtn btn btn-primary form-control"
          />{" "}
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
