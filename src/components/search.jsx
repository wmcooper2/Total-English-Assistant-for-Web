import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

const GradeBtns = props => {
  return (
    <div className="gradeBtnGroup btn-group" role="selectGrade">
      <button className={props.classes}>1</button>
      <button className={props.classes}>2</button>
      <button className={props.classes}>3</button>
    </div>
  );
};

const SearchInput = props => {
  return (
    <div className="form-row col-md-12">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="English・日本語"
          required
        />
      </div>
      <div className="col-md-3">
        <button className="searchBtn btn btn-primary form-control">
          search
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="col-md-5">
        <GradeBtns classes="gradeBtn col-md-4 btn btn-primary form-control" />
      </div>
    </div>
  );
};

class Search extends Component {
  render() {
    return (
      <div className="searchBar">
        <form className="form-row col-md-6" action="">
          <SearchInput />
        </form>
      </div>
    );
  }
}

export default Search;
